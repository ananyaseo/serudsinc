import { createFileRoute, Link } from "@tanstack/react-router";
import { DonorboxPopupButton } from "@/components/DonorboxPopupButton";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DonorboxEmbed } from "@/components/DonorboxEmbed";
import heroBannerImg from "@/assets/seruds/midday-meals-elders-banner.jpg";

const HERO_IMG = heroBannerImg;
const ABOUT_IMG = heroBannerImg;
const STORY_IMG =
  "https://serudsinc.org/wp-content/uploads/2024/01/old-age-woman-600-min.jpg";

export const Route = createFileRoute("/charity-for-food")({
  head: () => ({
    meta: [
      { title: "Charity for Food — Feed Hungry Elders in India | SERUDS Inc" },
      {
        name: "description",
        content:
          "Donate to feed destitute elders in Kurnool, India. Sponsor midday meals and monthly groceries for abandoned senior citizens.",
      },
      { property: "og:title", content: "Charity for Food — Feed Hungry Elders in India" },
      {
        property: "og:description",
        content:
          "$40 feeds 30 elders for a day. $35/month covers groceries for one destitute elder. Restore dignity through SERUDS Inc.",
      },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: CharityForFoodPage,
});

function CharityForFoodPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-deep text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Destitute elderly women receiving midday meals at SERUDS"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/65 to-forest-deep/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-deep">
            Charity for Food
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl max-w-3xl">
            Feed Hungry Elders in India
          </h1>
        </div>
      </section>

      {/* Intro below hero */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xl font-medium text-forest-deep">Our Mission &amp; Vision</p>
          <p className="mt-4 text-lg text-foreground/85">
            Your donation helps provide nutritious meals and essential support to
            impoverished elderly individuals in India who struggle with hunger and abandonment
            every day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <DonorboxPopupButton />
            <a
              href="https://donorbox.org/donation-seruds-inc"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-forest-deep/30 px-7 py-3.5 text-sm font-semibold text-forest-deep hover:bg-forest-deep/5"
            >
              Sponsor an Elder
            </a>
          </div>
        </div>
      </section>


      {/* The Harsh Reality */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border">
              <img
                src={ABOUT_IMG}
                alt="Elders receiving cooked meals at SERUDS"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest-deep/70">
              The Harsh Reality
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forest-deep">
              The Harsh Reality of Elderly in India
            </h2>
            <p className="mt-5 text-foreground/85 leading-relaxed">
              In many parts of India, abandoned and destitute senior citizens struggle daily
              for food, shelter and medical care. With no family support and no income, they
              live in extreme poverty — often surviving on leftovers or going to bed hungry.
              Many are widows or elderly people deserted by their own children.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              <strong>SERUDS India</strong>, our partner NGO in Kurnool, Andhra Pradesh, has been
              serving such neglected elders for over <strong>20 years</strong>. Through feeding
              initiatives and elder sponsorship programs, the organization provides daily cooked
              meals, groceries, medical aid and emotional care.
            </p>

            <h3 className="mt-8 font-display text-2xl font-semibold text-forest-deep">
              Why Choose SERUDS Inc.?
            </h3>
            <ul className="mt-4 space-y-2 text-foreground/85">
              <li><strong>✓ 100% Tax-Deductible</strong> donations under US law.</li>
              <li><strong>✓ Direct Impact</strong> — every dollar reaches the kitchen and the elder.</li>
              <li><strong>✓ 20+ Years of Trust</strong> caring for India&apos;s forgotten seniors.</li>
            </ul>

            <DonorboxPopupButton />
          </div>
        </div>
      </section>

      {/* Two-column: Midday Meals + Monthly Groceries */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest-deep/70">
              One Day · $40
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-forest-deep">
              Midday Meals for Destitute Elders
            </h2>
            <p className="mt-4 text-foreground/85">
              Provides nutritious hot meals to <strong>30 elderly people for one full day</strong>.
              In our Free Food Kitchen for Poor Women, we serve midday meals to 40 elderly women
              from the slums of Kurnool every single day — for many, this is the only
              substantial food they receive.
            </p>
            <ul className="mt-5 space-y-2 text-foreground/85">
              <li>✓ Wholesome, hot, nutritious meal — every day</li>
              <li>✓ Essential nutrients to sustain health</li>
              <li>✓ Served in a respectful, caring environment</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-forest-deep p-8 text-primary-foreground shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold/90">
              One Month · $35 ($45 with full grocery basket)
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              Sponsor Monthly Groceries for an Elder
            </h2>
            <p className="mt-4 text-primary-foreground/90">
              Cover the complete cost of monthly groceries for one destitute elder. A modest
              commitment of <strong>$45/month (~₹3,200)</strong> enables one elder to live with
              dignity and regular access to food.
            </p>
            <ul className="mt-5 space-y-2 text-primary-foreground/90">
              <li>✓ Widows with no financial support</li>
              <li>✓ Elders abandoned by spouses or adult children</li>
              <li>✓ Those who lack money for food and basic care</li>
              <li>✓ Forgotten heroes who now face starvation</li>
            </ul>
            <DonorboxPopupButton />
          </div>
        </div>
      </section>

      {/* Program Objectives + Donate */}
      <section className="bg-forest-deep py-16 text-primary-foreground md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Your Impact
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[1] tracking-tight md:text-6xl">
              Feed the<br />Hungry,<br />Restore Dignity
            </h2>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/90">
              When you donate to SERUDS Inc., you feed hungry elders who have no family
              support, provide monthly groceries to those living alone in poverty, support
              medical and emotional care for neglected seniors, and give them hope for a
              peaceful life.
            </p>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/80">
              🇺🇸 All donations to SERUDS Inc. are 100% tax-deductible to the fullest extent
              permitted by United States tax law.
            </p>
            <div className="mt-8">
              <DonorboxEmbed campaign="donation-seruds-inc" />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-fit overflow-hidden rounded-2xl ring-1 ring-primary-foreground/20">
              <img
                src={STORY_IMG}
                alt="Elder woman supported by SERUDS"
                className="h-80 w-auto object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-gold">
              Program Objectives &amp; Impact
            </h3>
            <p className="mt-4 text-left text-primary-foreground/90">
              The primary objective of this program is to alleviate hunger among the elderly
              homeless population in Kurnool. However, the impact of regular meal provision
              extends far beyond mere physical sustenance:
            </p>
            <ul className="mx-auto mt-5 max-w-md space-y-4 text-left text-primary-foreground/90">
              <li>
                <strong className="text-gold">Improves Health &amp; Well-being</strong> —
                Regular, nutritious meals strengthen the immune system, boost energy levels,
                and contribute to overall better health for these vulnerable seniors.
              </li>
              <li>
                <strong className="text-gold">Restores Human Dignity</strong> — Beyond the
                physical nourishment, our program offers these elders a sense of dignity and
                community. They are treated with respect and care, in a setting that values
                their presence.
              </li>
              <li>
                <strong className="text-gold">Provides Food Security</strong> — Your elder
                knows they will have groceries every month without fail. This security
                reduces anxiety and allows them to plan their meals and manage their limited
                resources.
              </li>
              <li>
                <strong className="text-gold">Builds Community</strong> — Mealtimes become
                moments of connection — elders share stories, friendships and a sense of
                belonging often lost after abandonment.
              </li>
            </ul>

          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
