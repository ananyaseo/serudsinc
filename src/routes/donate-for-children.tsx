import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DonorboxEmbed } from "@/components/DonorboxEmbed";

const HERO_IMG =
  "https://serudsinc.org/wp-content/uploads/2023/12/Donate-for-Poor-Children-Education-in-India.jpg";
const ABOUT_IMG =
  "https://serudsinc.org/wp-content/uploads/2023/12/children-in-seruds-orphanage-kurnool.jpg";
const STORY_IMG =
  "https://serudsinc.org/wp-content/uploads/2023/12/daycare-center-poor-children-800.jpg";

export const Route = createFileRoute("/donate-for-children")({
  head: () => ({
    meta: [
      { title: "Donate for Children in India — Sponsor a Child with SERUDS Inc" },
      {
        name: "description",
        content:
          "Sponsor a child in India and help fight malnutrition, child labor, abuse and dropping out of school. Support SERUDS NGO's life-saving programs.",
      },
      { property: "og:title", content: "Donate for Children in India" },
      {
        property: "og:description",
        content:
          "Rewrite a child's story — orphan care, education, day-care and protection through SERUDS Inc.",
      },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: DonateForChildrenPage,
});

function DonateForChildrenPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-deep">
              Donate for Children
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Sponsor a Child in India
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
              In the heart of India, countless children face daunting challenges — and together
              we can rewrite their stories. Join us in transforming lives and creating brighter
              futures for the underprivileged children of India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/donate"
                className="rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-forest-deep shadow-xl hover:bg-gold-deep hover:text-primary-foreground"
              >
                Donate Now →
              </Link>
              <a
                href="https://donorbox.org/donation-seruds-inc"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Sponsor a Child
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-primary-foreground/10">
              <img
                src={HERO_IMG}
                alt="Underprivileged children supported by SERUDS in India"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Issues We Tackle */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border">
              <img
                src={ABOUT_IMG}
                alt="Children at SERUDS orphanage in Kurnool"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest-deep/70">
              The Issues We Tackle
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forest-deep">
              You Can Change a Child&apos;s Life Today
            </h2>
            <p className="mt-5 text-foreground/85 leading-relaxed">
              India is home to <strong>29.6 million orphaned and abandoned children</strong>,
              with less than 1% finding shelter in Child Care Institutions. Every day, 300,000
              children across the country face abuse and exploitation. Street children are
              especially vulnerable.
            </p>
            <ul className="mt-6 space-y-2 text-foreground/85">
              <li><strong>✓ Malnutrition</strong> — hindering growth and development.</li>
              <li><strong>✓ Dropping Out of School</strong> — financial constraints cut education short.</li>
              <li><strong>✓ Running Away to the Streets</strong> — exposure to street dangers.</li>
              <li><strong>✓ Forced Child Labor</strong> — exploitation robs them of childhood.</li>
              <li><strong>✓ Early Marriage</strong> — especially for girls, with serious health costs.</li>
              <li><strong>✓ Child Abuse</strong> — physical, emotional and sexual harm.</li>
              <li><strong>✓ Substance Abuse</strong> — endemic on the street.</li>
              <li><strong>✓ Illness &amp; High Mortality</strong> — driven by lack of healthcare.</li>
            </ul>

            <Link
              to="/donate"
              className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-forest-deep shadow-md hover:bg-gold-deep hover:text-primary-foreground"
            >
              Donate Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Two-column: Mission + Programs */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
            <h2 className="font-display text-3xl font-semibold text-forest-deep">
              Our Mission at SERUDS NGO
            </h2>
            <p className="mt-4 text-foreground/85">
              We work passionately to ensure that every child receives what they truly
              deserve — a solid start in life, quality education and protection from harm.
            </p>
            <p className="mt-4 text-foreground/85">
              Since <strong>2003</strong>, SERUDS India has been rescuing street children and
              orphans, providing them a chance at a brighter tomorrow. Your contribution can
              make a significant impact on the lives of these children.
            </p>
          </div>

          <div className="rounded-3xl bg-forest-deep p-8 text-primary-foreground shadow-sm">
            <h2 className="font-display text-3xl font-semibold">
              Donate for SERUDS&apos; Charity Causes for Children
            </h2>
            <ul className="mt-5 space-y-4 text-primary-foreground/90">
              <li>
                <strong className="text-gold">SERUDS Children&apos;s Home (Orphanage):</strong> A
                loving, secure environment for orphaned and abandoned children.
              </li>
              <li>
                <strong className="text-gold">Sponsor a Child&apos;s Education:</strong> Breaking
                the cycle of poverty through schooling, supplies and mentorship.
              </li>
              <li>
                <strong className="text-gold">Day Care Centers for Children:</strong> A safe
                space for vulnerable children to learn, eat and play while parents work.
              </li>
            </ul>
            <Link
              to="/donate"
              className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-forest-deep shadow-md hover:bg-gold-deep hover:text-primary-foreground"
            >
              Donate Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Join our Mission */}
      <section className="bg-forest-deep py-16 text-primary-foreground md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Join our Mission
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[1] tracking-tight md:text-6xl">
              Make a<br />Difference<br />Today
            </h2>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/90">
              Your donation today paves the way for a better tomorrow. Together let&apos;s
              empower, educate and protect the dreams of these precious children. Because every
              child deserves a chance to shine.
            </p>
            <div className="mt-8">
              <DonorboxEmbed campaign="donation-seruds-inc" />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-fit overflow-hidden rounded-2xl ring-1 ring-primary-foreground/20">
              <img
                src={STORY_IMG}
                alt="Children at a SERUDS day-care center in Kurnool"
                className="h-80 w-auto object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-gold">
              Every Child Deserves a Chance to Shine
            </h3>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/90">
              From a safe orphanage bed to a school uniform to a hot midday meal at day-care —
              your gift directly funds the safety net these children rely on.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
