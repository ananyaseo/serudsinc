import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { SERUDS_KNOWLEDGE } from "@/lib/seruds-knowledge";

const GATEWAY = "https://ai.gateway.lovable.dev/v1";
const EMBEDDING_MODEL = "openai/text-embedding-3-small";

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

// POST /api/public/seed-knowledge
// Idempotent: clears + reinserts the curated SERUDS knowledge base.
export const Route = createFileRoute("/api/public/seed-knowledge")({
  server: {
    handlers: {
      POST: async () => {
        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        await supabaseAdmin.from("knowledge_chunks").delete().neq("id", "00000000-0000-0000-0000-000000000000");

        const rows: Array<{
          org: string;
          source_title: string;
          source_url: string | null;
          image_url: string | null;
          content: string;
          embedding: string;
        }> = [];

        for (const entry of SERUDS_KNOWLEDGE) {
          const vec = await embed(entry.content, apiKey);
          rows.push({
            org: entry.org,
            source_title: entry.source_title,
            source_url: entry.source_url ?? null,
            image_url: entry.image_url ?? null,
            content: entry.content,
            embedding: `[${vec.join(",")}]`,
          });
        }

        const { error } = await supabaseAdmin.from("knowledge_chunks").insert(rows);
        if (error) {
          console.error("Seed insert failed", error);
          return Response.json({ ok: false, error: error.message }, { status: 500 });
        }

        return Response.json({ ok: true, inserted: rows.length });
      },
    },
  },
});
