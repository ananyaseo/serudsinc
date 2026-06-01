import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, ThumbsUp, ThumbsDown, ExternalLink, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Source = { title: string; url: string | null; org: string };
type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
  images?: string[];
  followups?: string[];
  messageId?: string | null;
  feedback?: 1 | -1 | null;
};

const SUGGESTIONS = [
  "How can I sponsor a girl child?",
  "Is my donation tax deductible in the USA?",
  "How does SERUDS help orphan children?",
  "Can I volunteer with SERUDS?",
  "What education programs does SERUDS run?",
  "How can I donate from India?",
  "How can I donate from the USA?",
  "What is SERUDS Inc.?",
];

export function AiAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  async function ask(question: string) {
    if (!question.trim() || loading) return;
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: question.trim(),
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim(), sessionId }),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({ error: "Request failed" }));
        throw new Error(errBody.error || `HTTP ${res.status}`);
      }

      const data = await res.json();
      if (data.sessionId && !sessionId) setSessionId(data.sessionId);

      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.answer,
          sources: data.sources ?? [],
          images: data.images ?? [],
          followups: data.followups ?? [],
          messageId: data.messageId ?? null,
          feedback: null,
        },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            err instanceof Error
              ? `Sorry — ${err.message}. Please try again.`
              : "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  async function rate(msg: Message, rating: 1 | -1) {
    if (msg.feedback) return;
    setMessages((curr) =>
      curr.map((m) => (m.id === msg.id ? { ...m, feedback: rating } : m)),
    );
    const userQ = (() => {
      const idx = messages.findIndex((m) => m.id === msg.id);
      for (let i = idx - 1; i >= 0; i--) if (messages[i].role === "user") return messages[i].content;
      return null;
    })();
    await supabase.from("user_feedback").insert({
      session_id: sessionId,
      message_id: msg.messageId ?? null,
      question: userQ,
      answer: msg.content,
      rating,
    });
  }

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open SERUDS AI Assistant"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-forest-deep px-5 py-4 text-primary-foreground shadow-2xl ring-4 ring-gold/40 hover:bg-forest hover:scale-105 transition-all"
        >
          <Sparkles className="h-5 w-5 text-gold" />
          <span className="font-semibold">Ask SERUDS AI</span>
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-0 right-0 z-50 flex h-[100dvh] w-full flex-col bg-card shadow-2xl sm:bottom-6 sm:right-6 sm:h-[640px] sm:max-h-[85dvh] sm:w-[420px] sm:rounded-2xl sm:border sm:border-border">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-forest-deep px-5 py-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/20">
                <Sparkles className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold">SERUDS Assistant</div>
                <div className="text-xs text-primary-foreground/70">India · USA · AI-powered</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 hover:bg-primary-foreground/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Intro */}
          {messages.length === 0 && (
            <div className="border-b border-border bg-cream px-5 py-4">
              <p className="text-sm text-foreground">
                Ask me about SERUDS programs, donations, sponsorships, orphan care, education
                projects, volunteering, and tax-deductible giving.
              </p>
            </div>
          )}

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((m) => (
              <MessageView key={m.id} msg={m} onRate={(r) => rate(m, r)} onAsk={ask} />
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-forest [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-forest [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-forest" />
                </span>
                Searching the SERUDS knowledge base…
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border bg-background px-4 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="flex items-end gap-2"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    ask(input);
                  }
                }}
                rows={1}
                placeholder="Ask a question…"
                className="flex-1 resize-none rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-forest/40 max-h-32"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="grid h-10 w-10 place-items-center rounded-full bg-forest-deep text-primary-foreground disabled:opacity-40 hover:bg-forest"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            {/* Suggested questions carousel */}
            <div className="mt-3 -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 scrollbar-thin">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => ask(s)}
                  disabled={loading}
                  className="shrink-0 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-foreground hover:bg-gold/20 hover:border-gold disabled:opacity-50"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MessageView({
  msg,
  onRate,
  onAsk,
}: {
  msg: Message;
  onRate: (r: 1 | -1) => void;
  onAsk: (q: string) => void;
}) {
  if (msg.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-forest-deep px-4 py-2.5 text-sm text-primary-foreground">
          {msg.content}
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-2">
      <div className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
        {msg.content}
      </div>

      {msg.images && msg.images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {msg.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-24 w-32 shrink-0 rounded-lg object-cover ring-1 ring-border"
              loading="lazy"
            />
          ))}
        </div>
      )}

      {msg.sources && msg.sources.length > 0 && (
        <div className="space-y-1 rounded-lg bg-secondary/50 p-2 text-xs">
          <div className="font-semibold text-muted-foreground uppercase tracking-wider">Sources</div>
          {msg.sources.map((s, i) => (
            <a
              key={i}
              href={s.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-forest hover:text-gold-deep hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              {s.title}
              <span className="text-muted-foreground">· {s.org.toUpperCase()}</span>
            </a>
          ))}
        </div>
      )}

      {msg.followups && msg.followups.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {msg.followups.map((q, i) => (
            <button
              key={i}
              onClick={() => onAsk(q)}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground hover:bg-gold/20 hover:border-gold"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {msg.messageId !== undefined && (
        <div className="flex items-center gap-2 pt-1">
          <span className="text-xs text-muted-foreground">Was this helpful?</span>
          <button
            onClick={() => onRate(1)}
            disabled={!!msg.feedback}
            aria-label="Helpful"
            className={`rounded-full p-1.5 hover:bg-secondary ${msg.feedback === 1 ? "bg-forest/15 text-forest" : "text-muted-foreground"}`}
          >
            <ThumbsUp className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => onRate(-1)}
            disabled={!!msg.feedback}
            aria-label="Not helpful"
            className={`rounded-full p-1.5 hover:bg-secondary ${msg.feedback === -1 ? "bg-destructive/15 text-destructive" : "text-muted-foreground"}`}
          >
            <ThumbsDown className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default AiAssistantWidget;
export { MessageCircle };
