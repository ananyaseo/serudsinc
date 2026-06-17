import { createFileRoute, Link } from "@tanstack/react-router";
import { DonorboxPopupButton } from "@/components/DonorboxPopupButton";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DonorboxEmbed } from "@/components/DonorboxEmbed";
import HERO_IMG from "@/assets/seruds/women-girl-education.jpg";
import ABOUT_IMG from "@/assets/seruds/women-tailoring.jpg";
import STORY_IMG from "@/assets/seruds/women-skill.jpg";

export const Route = createFileRoute("/women-empowerment")({
  head: () => ({
    meta: [
      { title: "Support SERUDS Women Empowerment Programs in India" },
      {
        name: "description",
        content:
          "Empower women in Kurnool, Andhra Pradesh through vocational training in computer skills, tailoring, embroidery and fashion designing.",
      },
      { property: "og:title", content: "Support SERUDS Women Empowerment Programs" },
      {
        property: "og:description",
        content:
          "Sponsor sewing machines, computer training and skill-development courses for economically disadvantaged women in India.",
      },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: WomenEmpowermentPage,
});

function WomenEmpowermentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-deep">
              Women Empowerment
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Support SERUDS Women Empowerment Programs
            </h1>
            <p className="mt-4 text-xl font-medium text-gold">
              Empower Women Through Skills
            </p>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
              Help economically disadvantaged women in Andhra Pradesh gain skills, sustainable
              livelihoods and the confidence to break free from the cycle of poverty.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <DonorboxPopupButton />
              <a
                href="https://donorbox.org/donation-seruds-inc"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Sponsor a Woman
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-primary-foreground/10">
              <img
                src={HERO_IMG}
                alt="Young women in SERUDS women empowerment program"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Women Development Programs */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border">
              <img
                src={ABOUT_IMG}
                alt="Vocational tailoring and sewing training for poor women"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest-deep/70">
              Why Women Development Programs?
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forest-deep">
              Transforming Lives Through Skills
            </h2>
            <p className="mt-5 text-foreground/85 leading-relaxed">
              SERUDS Inc. is a 501(c)(3) charity dedicated to transforming the lives of women in
              Andhra Pradesh, India. Our mission is to empower economically disadvantaged women
              by giving them the <strong>skills and resources</strong> they need to thrive as
              entrepreneurs or secure better-paying jobs.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              In villages and urban slums of Kurnool District, many women lack education and
              employable skills, often resorting to low-skilled jobs or domestic work. SERUDS
              has conducted thorough baseline surveys to identify the skills needed in the job
              market — developing targeted training programs to address these gaps.
            </p>

            <h3 className="mt-8 font-display text-2xl font-semibold text-forest-deep">
              Why Choose SERUDS Inc.?
            </h3>
            <ul className="mt-4 space-y-2 text-foreground/85">
              <li>
                <strong>✓ Direct Impact:</strong> Your donation funds training, machines and
                materials — not overhead.
              </li>
              <li>
                <strong>✓ Targeted Skills:</strong> Programs designed around real local
                job-market demand.
              </li>
              <li>
                <strong>✓ Sustainable Change:</strong> Self-sufficiency that breaks the cycle of
                poverty for generations.
              </li>
            </ul>

            <DonorboxPopupButton />
          </div>
        </div>
      </section>

      {/* Two-column: Vocational Training + Your Impact */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
            <h2 className="font-display text-3xl font-semibold text-forest-deep">
              Vocational Training Programs: Unlocking Opportunities
            </h2>
            <p className="mt-4 text-foreground/85">
              Your donations equip women with essential, market-ready skills through programs
              such as:
            </p>
            <h3 className="mt-6 font-display text-xl font-semibold text-forest-deep">
              Computer Software Skills Training
            </h3>
            <ul className="mt-2 space-y-1 text-foreground/85">
              <li><strong>Duration:</strong> 6 months</li>
              <li><strong>Syllabus:</strong> Computer Fundamentals, MS Office, DTP, Internet Concepts &amp; Soft Skills</li>
              <li><strong>Aim:</strong> Sustainable livelihoods by meeting demand for computer-trained professionals across Andhra Pradesh.</li>
            </ul>
            <h3 className="mt-6 font-display text-xl font-semibold text-forest-deep">
              Tailoring &amp; Embroidery Training
            </h3>
            <ul className="mt-2 space-y-1 text-foreground/85">
              <li><strong>Duration:</strong> 3 months</li>
              <li><strong>Outcome:</strong> A free branded sewing machine and tool kit on graduation.</li>
              <li><strong>Support:</strong> Help in establishing units, sourcing raw materials and selling finished products.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-forest-deep p-8 text-primary-foreground shadow-sm">
            <h2 className="font-display text-3xl font-semibold">
              Your Impact: Sponsorship Opportunities
            </h2>
            <ul className="mt-5 space-y-4 text-primary-foreground/90">
              <li>
                <strong className="text-gold">Computer Training:</strong> Support 50 deserving
                youth each financial year and provide all study material free of cost.
              </li>
              <li>
                <strong className="text-gold">Tailoring &amp; Embroidery:</strong> Sponsor sewing
                machines and tool kits for trained women and girls.
              </li>
              <li>
                <strong className="text-gold">Fashion Designing:</strong> Help us expand the
                program to cover more women across the district.
              </li>
            </ul>
            <DonorboxPopupButton />
          </div>
        </div>
      </section>

      {/* Join our Mission — dark section, two-column */}
      <section className="bg-forest-deep py-16 text-primary-foreground md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Join our Mission
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[1] tracking-tight md:text-6xl">
              Transform<br />a Woman&apos;s<br />Life Today
            </h2>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/90">
              Every contribution, big or small, makes a difference. Please consider donating to
              SERUDS Inc. and help us put skills, machines and self-confidence in the hands of
              India&apos;s women.
            </p>
            <div className="mt-8">
              <DonorboxEmbed campaign="donation-seruds-inc" />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-fit overflow-hidden rounded-2xl ring-1 ring-primary-foreground/20">
              <img
                src={STORY_IMG}
                alt="Skill development training for women's empowerment"
                className="h-80 w-auto object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-gold">
              Skills That Change a Family&apos;s Future
            </h3>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/90">
              A sewing machine. Six months of computer training. A first paycheck. Each becomes
              the moment a household begins to rise out of poverty — for good.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
