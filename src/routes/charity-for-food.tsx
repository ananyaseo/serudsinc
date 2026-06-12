import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DonorboxEmbed } from "@/components/DonorboxEmbed";
import heroBannerAsset from "@/assets/seruds/midday-meals-elders-banner.jpg.asset.json";

const HERO_IMG = heroBannerAsset.url;
const ABOUT_IMG = heroBannerAsset.url;
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
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-deep">
              Charity for Food
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Feed Hungry Elders in India
            </h1>
            <p className="mt-4 text-xl font-medium text-gold">
              Our Mission &amp; Vision
            </p>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
              Your donation helps provide nutritious meals and essential support to
              impoverished elderly individuals in India who struggle with hunger and abandonment
              every day.
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
                Sponsor an Elder
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-primary-foreground/10">
              <img
                src={HERO_IMG}
                alt="Grocery distribution for destitute elders by SERUDS"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
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

            <Link
              to="/donate"
              className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-forest-deep shadow-md hover:bg-gold-deep hover:text-primary-foreground"
            >
              Donate Now →
            </Link>
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
            <Link
              to="/donate"
              className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-forest-deep shadow-md hover:bg-gold-deep hover:text-primary-foreground"
            >
              Donate Now →
            </Link>
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
            <ul className="mx-auto mt-4 max-w-md space-y-3 text-left text-primary-foreground/90">
              <li>
                <strong className="text-gold">Improve Health &amp; Well-being</strong> — nutrition
                strengthens immunity and energy.
              </li>
              <li>
                <strong className="text-gold">Restore Human Dignity</strong> — a respectful,
                caring environment for the forgotten.
              </li>
              <li>
                <strong className="text-gold">Provide Food Security</strong> — guaranteed
                groceries every month, without fail.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
