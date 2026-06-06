import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DonorboxEmbed } from "@/components/DonorboxEmbed";

const HERO_IMG = "https://serudsinc.org/wp-content/uploads/2023/12/Orphan-Group-600-min.jpg";
const ABOUT_IMG = "https://serudsinc.org/wp-content/uploads/2023/12/children-in-seruds-orphanage-kurnool-1024x576.jpg";
const CHANDRAKALA_IMG = "https://serudsinc.org/wp-content/uploads/2023/12/Chandrakala-rotated.jpg";

export const Route = createFileRoute("/orphanage")({
  head: () => ({
    meta: [
      { title: "Support SERUDS Children's Home in India — Orphanage in Kurnool" },
      {
        name: "description",
        content:
          "Donate to support 80 orphaned and vulnerable children at SERUDS Children's Home in Kurnool, India — shelter, meals, education, healthcare and hope.",
      },
      { property: "og:title", content: "Support SERUDS Children's Home in India" },
      {
        property: "og:description",
        content:
          "Give hope to orphaned, vulnerable and disadvantaged children. Provide safety, education, nutritious meals and healthcare.",
      },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: OrphanagePage,
});

function OrphanagePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-deep">
              SERUDS Children&apos;s Home
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Support SERUDS Children&apos;s Home in India
            </h1>
            <p className="mt-4 text-xl font-medium text-gold">
              Give Hope to Orphaned, Vulnerable, and Disadvantaged Children
            </p>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
              Your donation can provide a child with safety, education, nutritious meals,
              healthcare, and the opportunity to build a brighter future.
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
                alt="Children at the SERUDS Children's Home in Kurnool"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A Safe Home — two column */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border">
              <img
                src={ABOUT_IMG}
                alt="Children at SERUDS orphanage in Kurnool"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest-deep/70">
              A Haven of Hope
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forest-deep">
              A Safe Home for Children Who Need It Most
            </h2>
            <p className="mt-5 text-foreground/85 leading-relaxed">
              SERUDS Children&apos;s Home began its journey in January 2012 by welcoming just five
              vulnerable children. Today, it provides a safe, caring, and nurturing environment for{" "}
              <strong>80 children — 50 boys and 30 girls</strong>.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              Many of the children in our care have experienced the loss of a parent, extreme
              poverty, neglect, or life on the streets. Others come from families facing severe
              economic hardship, where parents struggle to provide adequate food, education, and
              supervision.
            </p>

            <h3 className="mt-8 font-display text-2xl font-semibold text-forest-deep">
              At SERUDS, every child receives:
            </h3>
            <ul className="mt-4 grid gap-2 text-foreground/85 sm:grid-cols-2">
              <li>✓ Safe shelter and protection</li>
              <li>✓ Nutritious meals</li>
              <li>✓ Quality education</li>
              <li>✓ School supplies and uniforms</li>
              <li>✓ Healthcare and emotional support</li>
              <li>✓ Evening tutoring and life-skills</li>
              <li>✓ Sports, recreation and personal growth</li>
            </ul>
            <p className="mt-6 text-foreground/85">
              Our goal is simple:{" "}
              <strong>
                to help every child grow into a confident, educated, and self-reliant adult.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Two-column: Registered CCI + How Your Donation Changes Lives */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
            <h2 className="font-display text-3xl font-semibold text-forest-deep">
              Registered Child Care Institution
            </h2>
            <p className="mt-4 text-foreground/85">
              SERUDS Children&apos;s Home is a registered Child Care Institution (CCI) under
              Sections 41(1) and 50(1) of the Juvenile Justice (Care and Protection of Children)
              Act, 2015.
            </p>
            <p className="mt-4 text-foreground/85">
              This registration ensures that the children under our care receive protection,
              support, and services in accordance with national child welfare standards.
            </p>
            <h3 className="mt-8 font-display text-2xl font-semibold text-forest-deep">
              Sponsor a Child
            </h3>
            <p className="mt-4 text-foreground/85">
              For approximately <strong>₹24,000 per year</strong>, you can help support a
              child&apos;s education and living expenses — consistent care, schooling, nutritious
              meals, and a safe place to grow.
            </p>
          </div>

          <div className="rounded-3xl bg-forest-deep p-8 text-primary-foreground shadow-sm">
            <h2 className="font-display text-3xl font-semibold">
              How Your Donation Changes Lives
            </h2>
            <p className="mt-4 text-primary-foreground/90">
              Your generosity directly supports vulnerable children living at SERUDS
              Children&apos;s Home in Andhra Pradesh, India. Whether you contribute toward food,
              education, clothing, healthcare or shelter, your gift helps create stability and
              opportunity for children who need it most.
            </p>
            <ul className="mt-5 space-y-2 text-primary-foreground/90">
              <li>• Daily meals</li>
              <li>• Educational support</li>
              <li>• Safe accommodation</li>
              <li>• Medical care</li>
              <li>• Personal development activities</li>
            </ul>
            <h3 className="mt-8 font-display text-2xl font-semibold text-gold">
              Celebrate a Special Occasion by Giving Back
            </h3>
            <p className="mt-3 text-primary-foreground/90">
              Turn birthdays, anniversaries and memorials into opportunities to make a
              difference. Sponsor meals or educational activities — your celebration can become a
              source of hope for children in need.
            </p>
            <Link
              to="/donate"
              className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-forest-deep shadow-md hover:bg-gold-deep hover:text-primary-foreground"
            >
              Donate Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Chandrakala featured story */}
      <section className="bg-forest-deep py-16 text-primary-foreground md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Join our Mission
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[1] tracking-tight md:text-6xl">
              Be the<br />Reason a Child<br />Smiles Today
            </h2>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/90">
              Thousands of vulnerable children still need the support, protection, and
              opportunities that every child deserves. Together, we can give every child the
              chance to learn, grow, and succeed.
            </p>
            <div className="mt-8">
              <DonorboxEmbed campaign="donation-seruds-inc" />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-fit overflow-hidden rounded-2xl ring-1 ring-primary-foreground/20">
              <img
                src={CHANDRAKALA_IMG}
                alt="Chandrakala — a child supported by SERUDS Children's Home"
                className="h-80 w-auto object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-gold">
              Featured Child: Chandrakala&apos;s Journey of Hope
            </h3>
            <div className="mx-auto mt-4 max-w-md space-y-4 text-primary-foreground/90">
              <p>
                When Chandrakala was very young, her father tragically lost his life in a train
                accident. Her mother, Sarojamma, became the sole provider for the family and
                worked as a daily wage laborer to support her children.
              </p>
              <p>
                Despite her hard work, it became increasingly difficult to provide proper care
                and education. Seeking a better future for her children, Sarojamma enrolled them
                at SERUDS Children&apos;s Home in 2021.
              </p>
              <p>
                Today, Chandrakala is studying in Grade 1 at Indira Gandhi Memorial Municipal
                Corporation High School. She receives nutritious meals, educational support,
                evening tuition, healthcare, and a safe environment where she can thrive — known
                for her cheerful personality and ability to bring smiles to everyone around her.
              </p>
              <p className="font-semibold text-gold">
                Your support helps children like Chandrakala move from uncertainty and hardship
                to safety, education, and hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
