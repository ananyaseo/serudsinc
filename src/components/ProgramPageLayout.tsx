import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  heroImg: string;
  heroAlt: string;
  children: ReactNode;
};

export function ProgramPageLayout({ eyebrow, title, lead, heroImg, heroAlt, children }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative overflow-hidden bg-forest-deep text-primary-foreground">
        <div className="absolute inset-0 opacity-40">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/80 to-forest-deep/20" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-deep">
            {eyebrow}
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/90">{lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/donate"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-forest-deep shadow-xl hover:bg-gold-deep hover:text-primary-foreground"
            >
              Donate to this program →
            </Link>
            <Link
              to="/"
              className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 overflow-hidden rounded-3xl ring-1 ring-border">
            <img src={heroImg} alt={heroAlt} className="aspect-[16/9] w-full object-cover" loading="lazy" />
          </div>
          <div className="prose prose-lg max-w-none text-foreground/85 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-forest-deep [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-forest [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:my-4 [&_p]:leading-relaxed [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-2 [&_strong]:text-forest-deep">
            {children}
          </div>
          <div className="mt-12 rounded-3xl bg-cream p-8 text-center">
            <h3 className="font-display text-2xl font-semibold text-forest-deep">
              Ready to make a difference?
            </h3>
            <p className="mt-2 text-muted-foreground">
              100% of your donation reaches our work in Kurnool, India.
            </p>
            <Link
              to="/donate"
              className="mt-6 inline-flex rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-forest-deep shadow-md hover:bg-gold-deep hover:text-primary-foreground"
            >
              Donate Now →
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
