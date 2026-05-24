import { useState } from "react";
import beneficiaryImg from "@/assets/beneficiary-priya.jpg";

export function BeneficiaryCard() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="grid overflow-hidden rounded-3xl bg-card shadow-xl ring-1 ring-border md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto">
          <img src={beneficiaryImg} alt="Priya, a SERUDS scholarship student" className="h-full w-full object-cover" loading="lazy" width={1200} height={1200} />
          <div className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-forest-deep">Featured Beneficiary</div>
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold-deep">Priya's Story</div>
          <h3 className="mt-2 font-display text-3xl font-semibold leading-tight text-forest-deep md:text-4xl">
            "Because of SERUDS, I am the first girl in my village to finish 10th grade."
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Priya was 7 when her mother passed away. Today, she dreams of becoming a nurse — and donors like you make that possible.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setOpen(true)}
              className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest-deep"
            >
              Read Her Story →
            </button>
            <a href="/donate" className="rounded-full border border-forest px-6 py-3 text-sm font-semibold text-forest hover:bg-forest hover:text-primary-foreground">
              Sponsor a Child
            </a>
          </div>
        </div>
      </article>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/70 p-4" onClick={() => setOpen(false)}>
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-card p-8 shadow-2xl md:p-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gold-deep">Beneficiary Story</div>
                <h2 className="mt-1 font-display text-3xl font-semibold text-forest-deep">Meet Priya</h2>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-full p-2 text-muted-foreground hover:bg-muted" aria-label="Close">✕</button>
            </div>
            <img src={beneficiaryImg} alt="Priya" className="mt-6 aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>Priya was just seven years old when her mother passed away from untreated tuberculosis. Her father, a daily-wage farm laborer in a small village outside Kurnool, could no longer afford to send her to school.</p>
              <p>That's when SERUDS' Joy Home opened its doors. For five years, Priya has had three nutritious meals a day, school uniforms, books, and most importantly — a sense of safety and family.</p>
              <blockquote className="border-l-4 border-gold bg-gold/10 p-4 font-display text-xl italic text-forest-deep">
                "I want to become a nurse so I can help mothers like mine. SERUDS gave me a future I could never have imagined."
              </blockquote>
              <p>Today, Priya is the top-ranked student in her grade and the first girl from her village to reach 10th standard. Her dream of nursing school is within reach — thanks to monthly sponsors who believed in her.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/donate" className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest-deep hover:bg-gold-deep hover:text-primary-foreground">Sponsor a Child Like Priya</a>
              <button onClick={() => setOpen(false)} className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-forest-deep">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
