import { useState } from "react";
import { Link } from "@tanstack/react-router";

type Freq = "monthly" | "once";

const tiers: Record<Freq, { amount: number; impact: string }[]> = {
  monthly: [
    { amount: 10, impact: "Provides 5 hot meals to elderly" },
    { amount: 30, impact: "Sponsors monthly groceries for one widow" },
    { amount: 50, impact: "Supports a student for a full month" },
    { amount: 100, impact: "Funds a sewing machine for a woman" },
  ],
  once: [
    { amount: 50, impact: "Feeds 30 elderly a nutritious hot meal" },
    { amount: 100, impact: "One month of care for an orphan child" },
    { amount: 360, impact: "Sponsor an elderly woman for 1 year" },
    { amount: 360, impact: "Sponsor a child's education for 1 year" },
  ],
};

export function DonationWidget({ compact = false }: { compact?: boolean }) {
  const [freq, setFreq] = useState<Freq>("monthly");
  const [selected, setSelected] = useState<number>(1);
  const list = tiers[freq];

  return (
    <div className={`rounded-2xl bg-card p-6 shadow-2xl ring-1 ring-border ${compact ? "" : "md:p-8"}`}>
      <div className="text-xs font-semibold uppercase tracking-widest text-gold-deep">Give with impact</div>
      <h3 className="mt-1 font-display text-2xl font-semibold text-forest-deep">Support a Life Today</h3>

      <div className="mt-5 grid grid-cols-2 gap-1 rounded-full bg-muted p-1">
        <button
          onClick={() => { setFreq("monthly"); setSelected(1); }}
          className={`rounded-full py-2 text-sm font-semibold transition ${freq === "monthly" ? "bg-forest text-primary-foreground shadow" : "text-muted-foreground"}`}
        >
          ♥ Monthly
        </button>
        <button
          onClick={() => { setFreq("once"); setSelected(1); }}
          className={`rounded-full py-2 text-sm font-semibold transition ${freq === "once" ? "bg-forest text-primary-foreground shadow" : "text-muted-foreground"}`}
        >
          Give Once
        </button>
      </div>

      <div className="mt-5 grid gap-2">
        {list.map((t, i) => {
          const active = selected === i;
          return (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                active
                  ? "border-gold bg-gold/10 ring-2 ring-gold"
                  : "border-border bg-background hover:border-gold/60"
              }`}
            >
              <div>
                <div className="font-display text-xl font-semibold text-forest-deep">
                  ${t.amount}<span className="text-xs font-medium text-muted-foreground">{freq === "monthly" ? "/mo" : ""}</span>
                </div>
                <div className="text-xs text-muted-foreground">{t.impact}</div>
              </div>
              <div className={`h-4 w-4 rounded-full border-2 ${active ? "border-gold bg-gold" : "border-muted-foreground/40"}`} />
            </button>
          );
        })}
      </div>

      <Link
        to="/donate"
        className="mt-5 flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-base font-bold text-forest-deep shadow-lg transition hover:bg-gold-deep hover:text-primary-foreground"
      >
        Donate ${list[selected].amount}{freq === "monthly" ? "/month" : ""} →
      </Link>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Secure • Tax-deductible • 100% goes to India
      </p>
    </div>
  );
}
