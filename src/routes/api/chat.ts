import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const GATEWAY = "https://ai.gateway.lovable.dev/v1";
const EMBEDDING_MODEL = "openai/text-embedding-3-small";
const CHAT_MODEL = "google/gemini-2.5-flash";

const SYSTEM_PROMPT = `You are the SERUDS AI Knowledge Assistant. SERUDS is a non-profit working with orphans, destitute elderly women, and underprivileged children in Kurnool, Andhra Pradesh, India. There are two related organisations:
- SERUDS India (serudsindia.org) — the field implementing NGO in India. Indian tax benefit under 80G.
- SERUDS Inc. USA (serudsinc.org) — a US 501(c)(3) public charity that funds SERUDS India. US tax-deductible.

Answer ONLY using the provided KNOWLEDGE CONTEXT. Never invent facts, names, amounts, or links.
If the context does not contain the answer, respond exactly: "I could not find a reliable answer in the SERUDS knowledge base. Please contact us for assistance."

Style:
- Warm, concise, non-profit tone.
- Plain text. No markdown headings.
- Encourage donating only when the question is about giving or sponsorship.

You MUST return a single JSON object (no prose, no code fences) with this exact shape:
{
  "answer": string,
  "source_indices": number[],     // indices (0-based) of the KNOWLEDGE CONTEXT items you actually used; [] if none
  "followups": string[]           // 2-3 short suggested follow-up questions
}`;

type ChunkRow = {
  id: string;
  content: string;
  source_title: string;
  source_url: string | null;
  image_url: string | null;
  org: string;
  similarity: number;
};

function detectOrg(q: string): string | null {
  const lower = q.toLowerCase();
  if (/(\busa\b|united states|tax[- ]?deduct|501\(?c\)?|irs|america)/.test(lower)) return "usa";
  if (/(\bindia\b|80g|csr|fcra|andhra|kurnool|rupee|inr|₹)/.test(lower)) return "india";
  return null;
}

async function embed(text: string, apiKey: string): Promise<number[]> {
  const res = await fetch(`${GATEWAY}/embeddings`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey },
    body: JSON.stringify({ model: EMBEDDING_MODEL, input: text, dimensions: 1536 }),
  });
  if (!res.ok) throw new Error(`Embedding failed: ${res.status} ${await res.text()}`);
  const json = await res.json();
  return json.data[0].embedding as number[];
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        let body: { question?: string; sessionId?: string | null };
        try {
          body = await request.json();
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }
        const question = (body.question ?? "").trim();
        if (!question || question.length > 1000)
          return new Response("Question must be 1-1000 chars", { status: 400 });

        // Session
        let sessionId: string;
        if (body.sessionId) {
          sessionId = body.sessionId;
        } else {
          const { data, error } = await supabaseAdmin
            .from("chat_sessions")
            .insert({})
            .select("id")
            .single();
          if (error || !data) return new Response("Session create failed", { status: 500 });
          sessionId = data.id;
        }

        // Persist user message
        await supabaseAdmin.from("chat_messages").insert({
          session_id: sessionId,
          role: "user",
          content: question,
        });

        // RAG retrieval
        let chunks: ChunkRow[] = [];
        try {
          const qEmbedding = await embed(question, apiKey);
          const filterOrg = detectOrg(question);
          const { data, error } = await supabaseAdmin.rpc("match_knowledge_chunks", {
            query_embedding: qEmbedding as unknown as string,
            match_count: 6,
            filter_org: filterOrg,
          });
          if (error) console.error("match_knowledge_chunks error", error);
          chunks = (data ?? []) as ChunkRow[];
        } catch (e) {
          console.error("Embedding/retrieval failed:", e);
        }

        const fallback =
          "I could not find a reliable answer in the SERUDS knowledge base. Please contact us for assistance.";

        if (chunks.length === 0) {
          await supabaseAdmin.from("chat_messages").insert({
            session_id: sessionId,
            role: "assistant",
            content: fallback,
            sources: [],
          });
          return Response.json({
            sessionId,
            answer: fallback,
            sources: [],
            images: [],
            followups: [],
          });
        }

        const contextBlock = chunks
          .map(
            (c, i) =>
              `[${i}] (${c.org.toUpperCase()}) ${c.source_title}\n${c.content}${c.source_url ? `\nURL: ${c.source_url}` : ""}`,
          )
          .join("\n\n---\n\n");

        const userPrompt = `KNOWLEDGE CONTEXT:\n\n${contextBlock}\n\n---\n\nUSER QUESTION: ${question}\n\nReturn the JSON object now.`;

        // Generate answer
        const aiRes = await fetch(`${GATEWAY}/chat/completions`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey },
          body: JSON.stringify({
            model: CHAT_MODEL,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              { role: "user", content: userPrompt },
            ],
            response_format: { type: "json_object" },
          }),
        });

        if (aiRes.status === 429)
          return Response.json(
            { error: "Rate limited. Please try again in a moment." },
            { status: 429 },
          );
        if (aiRes.status === 402)
          return Response.json(
            { error: "AI credits exhausted. Please contact the administrator." },
            { status: 402 },
          );
        if (!aiRes.ok) {
          console.error("AI gateway error", aiRes.status, await aiRes.text());
          return Response.json({ error: "AI service unavailable" }, { status: 502 });
        }

        const aiJson = await aiRes.json();
        const raw: string = aiJson.choices?.[0]?.message?.content ?? "";

        let parsed: { answer: string; source_indices: number[]; followups: string[] };
        try {
          parsed = JSON.parse(raw);
        } catch {
          parsed = { answer: raw || fallback, source_indices: [], followups: [] };
        }

        const usedIdx = Array.isArray(parsed.source_indices)
          ? parsed.source_indices.filter((i) => Number.isInteger(i) && i >= 0 && i < chunks.length)
          : [];
        const usedChunks = usedIdx.length > 0 ? usedIdx.map((i) => chunks[i]) : chunks.slice(0, 3);

        const sources = usedChunks.map((c) => ({
          title: c.source_title,
          url: c.source_url,
          org: c.org,
        }));
        const images = usedChunks
          .map((c) => c.image_url)
          .filter((u): u is string => !!u)
          .slice(0, 3);

        const answer = (parsed.answer ?? "").trim() || fallback;
        const followups = (parsed.followups ?? []).slice(0, 3);

        // Persist assistant message
        const { data: msgRow } = await supabaseAdmin
          .from("chat_messages")
          .insert({
            session_id: sessionId,
            role: "assistant",
            content: answer,
            sources: { items: sources, images },
          })
          .select("id")
          .single();

        return Response.json({
          sessionId,
          messageId: msgRow?.id ?? null,
          answer,
          sources,
          images,
          followups,
        });
      },
    },
  },
});
