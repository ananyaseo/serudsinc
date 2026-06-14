import { createFileRoute, Link } from "@tanstack/react-router";
import { DonorboxPopupButton } from "@/components/DonorboxPopupButton";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DonorboxEmbed } from "@/components/DonorboxEmbed";

const HERO_IMG =
  "https://serudsinc.org/wp-content/uploads/2023/12/donate-food-old-age-people.jpg";
const ABOUT_IMG =
  "https://serudsinc.org/wp-content/uploads/2023/12/Donate-to-Charity-for-Old-Age-People-in-Kurnool.jpg";
const ELDER_IMG =
  "https://serudsinc.org/wp-content/uploads/2024/01/old-age-woman-600-min.jpg";

export const Route = createFileRoute("/old-age-home")({
  head: () => ({
    meta: [
      { title: "Happy Old Age Home — Care & Dignity for Elders in Kurnool" },
      {
        name: "description",
        content:
          "SERUDS Old Age Home provides shelter, three meals a day, healthcare and compassionate care for destitute elders in Kurnool, India.",
      },
      { property: "og:title", content: "Happy Old Age Home — SERUDS Inc" },
      {
        property: "og:description",
        content:
          "Change an elder's life, honor a generation. Donate to the SERUDS free Old Age Home in Kurnool, Andhra Pradesh.",
      },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: OldAgeHomePage,
});

function OldAgeHomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO — text left, rounded image right */}
      <section className="relative overflow-hidden bg-forest-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-deep">
              Happy Old Age Home
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Support SERUDS Inc.&apos;s Haven for Elders in India
            </h1>
            <p className="mt-4 text-xl font-medium text-gold">
              Change an elder&apos;s life. Honor a generation.
            </p>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
              Help fund a free old age home in Kurnool, Andhra Pradesh, where destitute elders
              receive shelter, three nutritious meals a day, healthcare and compassionate care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <DonorboxPopupButton />
              <a
                href="https://donorbox.org/donation-seruds-inc"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Sponsor an Elder
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-primary-foreground/10">
              <img
                src={HERO_IMG}
                alt="Elderly residents receiving food at SERUDS Old Age Home in Kurnool"
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
                src={ABOUT_IMG}
                alt="Elders cared for at SERUDS Old Age Home, Kurnool"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest-deep/70">
              A Beacon of Hope
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forest-deep">
              A Beacon of Hope for India&apos;s Forgotten Elders
            </h2>
            <p className="mt-5 text-foreground/85 leading-relaxed">
              SERUDS Inc. is your bridge to making a difference in the lives of forgotten souls
              in India. As a 501(c)(3) non-profit in Florida, USA, we partner with SERUDS India
              to raise funds for their <strong>priceless sanctuary</strong> — a free old age
              home in Kurnool, Andhra Pradesh, where destitute elders find dignity, respect and
              the care they deserve.
            </p>

            <h3 className="mt-8 font-display text-2xl font-semibold text-forest-deep">
              Why Choose SERUDS Inc.?
            </h3>
            <ul className="mt-4 space-y-2 text-foreground/85">
              <li>
                <strong>✓ Transparency and Trust:</strong> A registered US non-profit partnered
                with SERUDS India&apos;s proven track record of caring for elders.
              </li>
              <li>
                <strong>✓ Direct Impact:</strong> Every dollar you donate goes directly to
                supporting the old age home, with no administrative overhead in India.
              </li>
              <li>
                <strong>✓ Sustainable Change:</strong> A nurturing environment where elders can
                thrive and feel valued — not just basic needs.
              </li>
            </ul>

            <DonorboxPopupButton />
          </div>
        </div>
      </section>

      {/* Two-column: Give Back, Give Hope + Your donation can make a world of difference */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
            <h2 className="font-display text-3xl font-semibold text-forest-deep">
              Give Back, Give Hope
            </h2>
            <p className="mt-4 text-foreground/85">
              In India, many free old age homes offer harsh realities: poor living conditions,
              inadequate care and a lack of dignity. SERUDS India stands apart, offering a
              sanctuary of hope:
            </p>
            <ul className="mt-5 space-y-3 text-foreground/85">
              <li>
                <strong>Safe and Loving Haven:</strong> Two spacious bedrooms, a big hall, a
                hygienic kitchen and open space provide a comfortable, dignified environment.
              </li>
              <li>
                <strong>Nutritious Meals &amp; Healthcare:</strong> Three nutritious meals daily,
                with regular medical checkups for residents&apos; well-being.
              </li>
              <li>
                <strong>Compassionate Care:</strong> Dedicated caregivers provide personalized
                care, fostering a sense of belonging and community.
              </li>
            </ul>
            <h3 className="mt-8 font-display text-2xl font-semibold text-forest-deep">
              Help Us Expand and Sustain the Old Age Home
            </h3>
            <ul className="mt-4 space-y-2 text-foreground/85">
              <li>
                <strong>Expand the home</strong> to welcome more elders in need.
              </li>
              <li>
                <strong>Cover running costs</strong> — food, medication and daily expenses.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-forest-deep p-8 text-primary-foreground shadow-sm">
            <h2 className="font-display text-3xl font-semibold">
              Your donation can make a world of difference
            </h2>
            <ul className="mt-5 space-y-3 text-primary-foreground/90">
              <li>
                <strong>Restore Dignity:</strong> A safe and loving environment where elders
                live with respect and care.
              </li>
              <li>
                <strong>Combat Loneliness:</strong> Companionship and community for those who
                have been forgotten.
              </li>
              <li>
                <strong>Bring Light to Twilight Years:</strong> The care and support elders
                deserve in their golden years.
              </li>
            </ul>
            <h3 className="mt-8 font-display text-2xl font-semibold text-gold">
              Celebrate a Special Occasion by Giving Back
            </h3>
            <p className="mt-3 text-primary-foreground/90">
              Turn birthdays, anniversaries and memorials into opportunities to make a
              difference — sponsor meals or healthcare for an elder.
            </p>
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
              Make a<br />Donation<br />Today:
            </h2>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/90">
              Every contribution, big or small, makes a difference. Please consider donating to
              SERUDS Inc. and help us build a brighter future for India&apos;s forgotten elders.
            </p>
            <div className="mt-8">
              <DonorboxEmbed campaign="donation-seruds-inc" />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-fit overflow-hidden rounded-2xl ring-1 ring-primary-foreground/20">
              <img
                src={ELDER_IMG}
                alt="Elder woman cared for at SERUDS Old Age Home"
                className="h-80 w-auto object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-gold">
              A Sanctuary of Dignity, Care and Community
            </h3>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/90">
              Your generosity gives forgotten elders a safe home, nourishing meals, healthcare
              and the companionship they deserve in their golden years.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
