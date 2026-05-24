import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate to SERUDS Inc — Tax-Deductible Gift" },
      { name: "description", content: "Make a secure, tax-deductible donation. 100% goes to programs in Kurnool, India." },
    ],
  }),
  component: DonatePage,
});

type Freq = "monthly" | "once";

const tiers: Record<Freq, { amount: number; impact: string }[]> = {
  monthly: [
    { amount: 10, impact: "5 hot meals for elderly women" },
    { amount: 30, impact: "Monthly groceries for one widow" },
    { amount: 50, impact: "Supports a student for a month" },
    { amount: 100, impact: "Funds a sewing machine + training" },
  ],
  once: [
    { amount: 50, impact: "Feeds 30 elderly a nutritious hot meal" },
    { amount: 100, impact: "One month of care for an orphan child" },
    { amount: 360, impact: "Sponsor an elderly woman for 1 year" },
    { amount: 1000, impact: "Funds a classroom for a quarter" },
  ],
};

function DonatePage() {
  const [freq, setFreq] = useState<Freq>("monthly");
  const [selected, setSelected] = useState(2);
  const [custom, setCustom] = useState("");
  const list = tiers[freq];
  const amount = custom ? Number(custom) : list[selected].amount;

  return (
    <div className="min-h-screen bg-cream">
      {/* Minimal header — no nav */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-primary-foreground font-display text-sm font-bold">S</div>
            <span className="font-display text-base font-semibold text-forest-deep">SERUDS Inc</span>
          </Link>
          <Link to="/" className="text-xs text-muted-foreground hover:text-forest-deep">← Back to site</Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10 md:py-14">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-deep">
            Secure Donation
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold text-forest-deep md:text-5xl">
            Your gift transforms a life
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            100% of your donation funds programs in Kurnool, India. Tax-deductible under IRS section 501(c)(3).
          </p>
        </div>

        <form className="mt-10 space-y-6 rounded-3xl bg-card p-6 shadow-xl ring-1 ring-border md:p-10" onSubmit={(e) => e.preventDefault()}>
          {/* Frequency */}
          <div>
            <label className="text-sm font-semibold text-forest-deep">Donation frequency</label>
            <div className="mt-2 grid grid-cols-2 gap-1 rounded-full bg-muted p-1">
              <button type="button" onClick={() => setFreq("monthly")} className={`rounded-full py-2.5 text-sm font-semibold transition ${freq === "monthly" ? "bg-forest text-primary-foreground shadow" : "text-muted-foreground"}`}>
                ♥ Monthly Giving
              </button>
              <button type="button" onClick={() => setFreq("once")} className={`rounded-full py-2.5 text-sm font-semibold transition ${freq === "once" ? "bg-forest text-primary-foreground shadow" : "text-muted-foreground"}`}>
                Give Once
              </button>
            </div>
            {freq === "monthly" && (
              <p className="mt-2 text-xs text-gold-deep">★ Monthly gifts provide reliable support and have 3× the impact.</p>
            )}
          </div>

          {/* Impact amounts */}
          <div>
            <label className="text-sm font-semibold text-forest-deep">Choose your impact</label>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {list.map((t, i) => {
                const active = !custom && selected === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => { setSelected(i); setCustom(""); }}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition ${active ? "border-gold bg-gold/10 ring-2 ring-gold" : "border-border bg-background hover:border-gold/60"}`}
                  >
                    <div>
                      <div className="font-display text-2xl font-semibold text-forest-deep">
                        ${t.amount}<span className="text-xs font-medium text-muted-foreground">{freq === "monthly" ? "/mo" : ""}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{t.impact}</div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3">
              <span className="font-display text-xl text-muted-foreground">$</span>
              <input
                type="number"
                placeholder="Other amount"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="w-full bg-transparent text-lg outline-none placeholder:text-muted-foreground/60"
              />
              <span className="text-xs uppercase text-muted-foreground">USD</span>
            </div>
          </div>

          {/* Donor info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First name" />
            <Field label="Last name" />
            <Field label="Email" type="email" className="sm:col-span-2" />
          </div>

          {/* Payment placeholder */}
          <div>
            <label className="text-sm font-semibold text-forest-deep">Payment</label>
            <div className="mt-2 rounded-xl border border-dashed border-border bg-muted/50 px-4 py-6 text-center text-sm text-muted-foreground">
              Secure payment processing by Donorbox · Card · PayPal · Bank
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gold px-6 py-4 text-lg font-bold text-forest-deep shadow-lg transition hover:bg-gold-deep hover:text-primary-foreground"
          >
            Donate ${amount || 0}{freq === "monthly" ? "/month" : ""} →
          </button>

          {/* Trust badges */}
          <div className="border-t border-border pt-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Badge title="501(c)(3)" sub="Tax-Deductible" />
              <Badge title="100%" sub="To India" />
              <Badge title="🔒 SSL" sub="Secure Checkout" />
              <Badge title="EIN" sub="84-3593881" />
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              SERUDS Inc. is a registered 501(c)(3) charitable organization. Your donation is tax-deductible to the fullest extent allowed by law.
            </p>
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Need help? Email <a href="mailto:info@serudsinc.org" className="underline">info@serudsinc.org</a>
        </p>
      </main>
    </div>
  );
}

function Field({ label, type = "text", className = "" }: { label: string; type?: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input type={type} required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none focus:border-gold focus:ring-2 focus:ring-gold/30" />
    </label>
  );
}

function Badge({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-xl border border-border bg-background px-3 py-3 text-center">
      <div className="font-display text-sm font-bold text-forest-deep">{title}</div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{sub}</div>
    </div>
  );
}
