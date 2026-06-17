import { createFileRoute, Link } from "@tanstack/react-router";
import { DonorboxPopupButton } from "@/components/DonorboxPopupButton";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DonorboxEmbed } from "@/components/DonorboxEmbed";
import sponsorGirlsImg from "@/assets/seruds/sponsor-girls-education.jpg";
import aboutImg from "@/assets/seruds/sponsor-child.jpg";
import BHARGAV_IMG from "@/assets/seruds/bhargav.jpg";


export const Route = createFileRoute("/sponsor-education")({
  head: () => ({
    meta: [
      { title: "Sponsor a Child's Education in India — SERUDS Inc" },
      {
        name: "description",
        content:
          "Sponsor a child's education in Kurnool, India. Books, uniforms, school fees and mentoring — give a child the gift of a future.",
      },
      { property: "og:title", content: "Sponsor a Child's Education in India" },
      {
        property: "og:description",
        content:
          "For $200/month you can sponsor a child's full education — schooling, supplies, vocational training and support.",
      },
      { property: "og:image", content: sponsorGirlsImg },
    ],
  }),
  component: SponsorEducationPage,
});

function SponsorEducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO — text left, rounded image right */}
      <section className="relative overflow-hidden bg-forest-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-deep">
              Sponsor Child Education
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Donate to Charity in India — Support Children&apos;s Education
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
              Sponsor a disadvantaged child in Kurnool with books, uniforms, school fees and
              mentoring. Empower a young life to break the cycle of poverty through education.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <DonorboxPopupButton />
              <DonorboxPopupButton label="Sponsor a Child" />
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-primary-foreground/10">
              <img
                src={sponsorGirlsImg}
                alt="Girl children sponsored by SERUDS receiving school bags and supplies"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About-style two column section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border">
              <img
                src={aboutImg}
                alt="SERUDS children in classroom"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest-deep/70">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forest-deep">
              Give a Child in India the Gift of Education
            </h2>
            <p className="mt-5 text-foreground/85 leading-relaxed">
              SERUDS Inc. is your bridge to making a world of difference for underprivileged
              children in India. As a 501(c)(3) non-profit in Florida, USA, we partner with the
              established and trusted NGO SERUDS India to raise funds for critical child-welfare
              projects — with <strong>education</strong> at our core. Every dollar you donate
              goes directly towards empowering children with the key to breaking the cycle of
              poverty.
            </p>

            <h3 className="mt-8 font-display text-2xl font-semibold text-forest-deep">
              Why Choose SERUDS Inc.?
            </h3>
            <ul className="mt-4 space-y-2 text-foreground/85">
              <li>
                <strong>✓ Transparency and Trust:</strong> A registered US non-profit partnered
                with SERUDS India&apos;s proven track record.
              </li>
              <li>
                <strong>✓ Direct Impact:</strong> Your donation goes directly to education
                programs, with no administrative overhead in India.
              </li>
              <li>
                <strong>✓ Sustainable Change:</strong> We empower children with knowledge and
                skills to build a brighter future for themselves and their communities.
              </li>
            </ul>

            <DonorboxPopupButton />
          </div>
        </div>
      </section>

      {/* Two-column: Gift of Education + World of Difference */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
            <h2 className="font-display text-3xl font-semibold text-forest-deep">
              Give a Child the Gift of Education
            </h2>
            <p className="mt-4 text-foreground/85">
              For just <strong>$200 a month</strong>, you can sponsor a child&apos;s education.
              This includes:
            </p>
            <ul className="mt-5 space-y-3 text-foreground/85">
              <li>
                <strong>Quality Schooling:</strong> Access to safe and nurturing learning
                environments.
              </li>
              <li>
                <strong>Essential Supplies:</strong> Textbooks, uniforms, and school materials.
              </li>
              <li>
                <strong>Vocational Training:</strong> Valuable skills development for future
                livelihoods.
              </li>
              <li>
                <strong>Nurturing Potential:</strong> Empowerment to reach their full potential
                and dream big.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-forest-deep p-8 text-primary-foreground shadow-sm">
            <h2 className="font-display text-3xl font-semibold">
              Your support can make a world of difference
            </h2>
            <ul className="mt-5 space-y-3 text-primary-foreground/90">
              <li>
                <strong>Break the Cycle of Poverty:</strong> Education is the key to escaping
                poverty for generations to come.
              </li>
              <li>
                <strong>Empower Young Minds:</strong> Children gain the knowledge and skills to
                become independent, contributing members of society.
              </li>
              <li>
                <strong>Build a Better Future:</strong> Investing in education is investing in a
                brighter future for India and the world.
              </li>
            </ul>
            <DonorboxPopupButton />
          </div>
        </div>
      </section>

      {/* Bhargav story — dark section, two-column */}
      <section className="bg-forest-deep py-16 text-primary-foreground md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Join our Mission
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[1] tracking-tight md:text-6xl">
              Make a<br />Donation<br />Today:
            </h2>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/90">
              Every contribution, big or small, makes a difference. Please consider donating to
              SERUDS Inc. and help us change the lives of children in India through education.
            </p>
            <div className="mt-8">
              <DonorboxEmbed campaign="donation-seruds-inc" />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-fit overflow-hidden rounded-2xl ring-1 ring-primary-foreground/20">
              <img
                src={BHARGAV_IMG}
                alt="M.G. Bhargav — student supported by SERUDS"
                className="h-72 w-auto object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-gold">
              M.G. Bhargav: A Beacon of Hope
            </h3>
            <div className="mx-auto mt-4 max-w-md space-y-4 text-primary-foreground/90">
              <p>
                Meet M.G. Bhargav, a 9th-grade student at Good Shepherd School, Kurnool.
                Bhargav&apos;s story is one of resilience and determination. His father, a
                carpenter, is the sole breadwinner for the family. However, life has thrown
                challenges their way — Bhargav&apos;s mother is visually impaired, and the family
                struggles to make ends meet in a small hut.
              </p>
              <p>
                Bhargav&apos;s father, burdened by the weight of responsibilities, turns to
                alcohol, making life even harder. Yet Bhargav dreams of a better future through
                education — and with your support, that future is within reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
