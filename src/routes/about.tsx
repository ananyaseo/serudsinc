import { createFileRoute, Link } from "@tanstack/react-router";
import { DonorboxPopupButton } from "@/components/DonorboxPopupButton";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/seruds/orphan-group.jpg";
import aboutImg from "@/assets/seruds/sponsor-child.jpg";
import elderlyImg from "@/assets/seruds/old-age.jpg";

const CANDID_URL = "https://app.candid.org/profile/14056477/seruds-inc-88-1610707";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SERUDS Inc — 501(c)(3) Charity for Children & Elderly in India" },
      {
        name: "description",
        content:
          "SERUDS Inc. is a registered US 501(c)(3) public charity (EIN 88-1610707) supporting underprivileged children, destitute women, and elderly persons in Andhra Pradesh, India.",
      },
      { property: "og:title", content: "About SERUDS Inc — Lighting the Way for Vulnerable Lives in India" },
      {
        property: "og:description",
        content:
          "Registered 501(c)(3) charity supporting 350+ orphan children and 80+ destitute elderly in Kurnool, Andhra Pradesh.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-deep text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/70 to-forest-deep/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-deep">
              About SERUDS Inc.
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
              Lighting the Way<br />
              <span className="text-gold">for Vulnerable Lives</span><br />in India.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/90">
              SERUDS Inc. is a beacon of hope, a bridge of compassion, and an agent of change. As a registered 501(c)(3) public charity in the USA, we raise funds with a singular mission: empowering the lives of underprivileged children, destitute women, and elderly persons in India.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="rounded-xl border border-gold/40 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <span className="text-gold">IRS Registered</span> 501(c)(3)
              </div>
              <div className="rounded-xl border border-gold/40 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                EIN <span className="text-gold">88-1610707</span>
              </div>
              <a
                href={CANDID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2 text-sm font-bold text-forest-deep shadow-md transition hover:bg-gold-deep hover:text-primary-foreground"
              >
                View Profile on Candid.org →
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/donate"
                className="rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-forest-deep shadow-xl hover:bg-gold-deep hover:text-primary-foreground"
              >
                Donate Now →
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-primary-foreground/10">
              <img
                src={aboutImg}
                alt="SERUDS children supported in Kurnool, India"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest-deep/70">Our Mission</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forest-deep">
              Transforming Lives in Andhra Pradesh
            </h2>
            <p className="mt-5 text-foreground/85 leading-relaxed">
              At SERUDS Inc., our mission is clear: to change the lives of underprivileged children, destitute women, and elderly persons in Andhra Pradesh. We strive to provide long-term care — addressing basic needs, education, and healthcare.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              Through our initiatives, we aim to transform these individuals into responsible citizens, nurturing a community where compassion knows no bounds.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest-deep/70">Our Reach</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forest-deep">
              Real impact. Real lives.
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border">
                <div className="font-display text-4xl font-semibold text-forest-deep">350+</div>
                <div className="mt-1 text-sm text-muted-foreground">Orphan children supported</div>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border">
                <div className="font-display text-4xl font-semibold text-forest-deep">80+</div>
                <div className="mt-1 text-sm text-muted-foreground">Destitute elderly cared for</div>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border">
                <div className="font-display text-4xl font-semibold text-forest-deep">100%</div>
                <div className="mt-1 text-sm text-muted-foreground">Donations to India</div>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border">
                <div className="font-display text-4xl font-semibold text-forest-deep">501(c)(3)</div>
                <div className="mt-1 text-sm text-muted-foreground">US tax-deductible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Charity Projects */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">Featured Charity Projects</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forest-deep md:text-5xl">
              Standing alongside those forgotten by circumstance.
            </h2>
            <p className="mt-4 text-foreground/80">
              Orphaned children yearning for a safe haven, senior citizens facing the twilight of life alone, and women battling the shackles of poverty. Our work in Andhra Pradesh, India is a tapestry woven with love, care, and an unwavering commitment to long-term support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Children's Orphanage", d: "A nurturing home, nutritious meals, and quality education for over 350 orphaned children — weaving a safety net of love and opportunity." },
              { t: "Education Sponsorship", d: "Crucial educational support to economically disadvantaged students, ensuring they have the tools to build a brighter future." },
              { t: "Day Care Centers", d: "A stimulating environment for children aged 1–6, nurturing young minds and giving working parents peace of mind." },
              { t: "Old Age Home", d: "Charitable old age home for destitute elderly women who have nowhere else to go." },
              { t: "Food for Elderly", d: "Alleviating hunger for struggling elderly individuals — daily meals for 80+ destitute seniors and essential groceries delivered to their doorsteps." },
              { t: "Empowering Women", d: "Skills training in rural villages — fashion design and vocational training — enabling women to break the cycle of poverty and build sustainable livelihoods." },
            ].map((p) => (
              <article key={p.t} className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="font-display text-xl font-semibold text-forest-deep">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency / Trust */}
      <section className="bg-forest-deep py-16 text-primary-foreground md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Transparency & Trust</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              A US 501(c)(3) you can verify.
            </h2>
            <p className="mt-5 text-primary-foreground/90 leading-relaxed">
              SERUDS Inc. is a registered 501(c)(3) public charity in the United States. All donations are tax-deductible to the extent allowed by law. Verify our nonprofit status and financial disclosures on Candid (formerly GuideStar).
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">EIN 88-1610707</div>
              <a
                href={CANDID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest-deep shadow-md hover:bg-gold-deep hover:text-primary-foreground"
              >
                View Profile on Candid.org →
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-primary-foreground/10">
              <img src={elderlyImg} alt="SERUDS elderly care program" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">Contact Information</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-deep">Get in touch with us</h2>
          <address className="mt-6 not-italic text-base leading-relaxed text-foreground/85">
            SERUDS Inc.<br />
            5126 Ballantrae Blvd<br />
            Land O' Lakes, Florida 34638-3065<br />
            <a href="mailto:seruds.inc@gmail.com" className="font-semibold text-forest-deep hover:text-gold-deep">seruds.inc@gmail.com</a>
          </address>
          <div className="mt-8">
            <DonorboxPopupButton />
          </div>
        </div>
      </section>

      <SiteFooter showAnanyaCredit />
    </div>
  );
}
