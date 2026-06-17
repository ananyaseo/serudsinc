import { createFileRoute, Link } from "@tanstack/react-router";
import { DonorboxPopupButton } from "@/components/DonorboxPopupButton";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import HERO_IMG from "@/assets/seruds/donate-elders-food.jpg";


export const Route = createFileRoute("/donate-elders-india")({
  head: () => ({
    meta: [
      {
        title:
          "Donate to India from USA for Elderly — SERUDS Inc.",
      },
      {
        name: "description",
        content:
          "Donate to India from the USA for old age homes and homeless elders. SERUDS Inc. helps with food, shelter, groceries, medicines, and compassionate care.",
      },
      {
        property: "og:title",
        content: "Donate to India from USA for Elderly — SERUDS Inc.",
      },
      {
        property: "og:description",
        content:
          "Support old age homes in India from the USA. Tax-deductible donations for food, shelter, and medical care.",
      },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: DonateEldersIndiaPage,
});

function DonateEldersIndiaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-deep">
              Donate From USA
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
              Donate to India from USA for Elderly People
            </h1>
            <p className="mt-4 text-xl font-medium text-gold">
              Change an elder&apos;s life. Honor a generation.
            </p>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
              SERUDS Inc. based in the USA collects contributions to help elders back in India.
              Your donation supports food, shelter, groceries, medicines, and care for destitute
              elderly in old age homes and on the streets.
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

      {/* Introduction */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-foreground/85 leading-relaxed text-lg">
            The situation of elderly people in India has been visibly deteriorating with growing
            urbanization, and that has increased the need for Old Age Homes. SERUDS Inc. has
            partnered with more than five times as many NGOs as before, just to facilitate the
            requirements of elderly people to find a home.
          </p>
          <p className="mt-6 text-foreground/85 leading-relaxed text-lg">
            Donations received for old age homes fall into different categories. Money is not the
            only type of donation we receive — thanks to big-hearted donors in the USA and around
            the world, generous people keep sending us everything that elders are direly in need of.
          </p>
        </div>
      </section>

      {/* Types of Donations */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl font-semibold text-forest-deep text-center">
            Types of Donations For Old Age Homes
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-forest-deep">
                Donation of Clothes For Elderly
              </h3>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                We all have closets filled with clothes we don&apos;t use, and eventually they
                reach a sorry state where they can&apos;t be donated. This is where we urge people
                to donate clothes to the poor. Our campaigns go really well and we receive clothes
                donations for elders from the USA regularly.
              </p>
            </div>

            <div className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-forest-deep">
                Donations for Medical Bills Of Elderly
              </h3>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                For people staying in old age homes, health is always a concern — but more than
                that, the concerning factor is the medical bills. Imagine someone refusing to go
                to the doctor even if they need it because they don&apos;t want to cause an expense
                for the old age home. We face such situations every other day. Thanks to donations
                that come like a savior, we try to meet the medical bills of all the people in our
                home.
              </p>
            </div>

            <div className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-forest-deep">
                Food Donation for Elders From USA
              </h3>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                While food cannot be shipped from the USA to India, we have received a lot of
                donations for food drives we conduct. Hunger unites everyone — even people across
                boundaries. Every meal they eat is resetting the clock; without it they could starve.
                Our campaigns on GlobalGiving have garnered a great response from USA donors.
              </p>
              <a
                href="https://www.globalgiving.org/projects/donate-food-for-30-destitute-elderly-people-in-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-forest-deep underline hover:text-gold"
              >
                Check our food donation campaign on GlobalGiving →
              </a>
            </div>

            <div className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-forest-deep">
                General Donation For Old Age Home
              </h3>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                The most popular category of donation covers daily needs — toiletries, shelter
                repair, blankets or sweaters during seasons. We also distribute groceries among
                abandoned elders who are not in our home but have been left in small huts by
                their family members. A monthly grocery kit is equivalent to the price of one
                popcorn in the USA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-deep py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl font-semibold">
            Make a Tax-Deductible Donation Today
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/90">
            All US donations are confined to tax benefits of 501(c)(3). Every contribution, big or
            small, makes a difference. SERUDS Inc. is a registered US non-profit and your gift is
            fully tax-deductible.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <DonorboxPopupButton />
            <Link
              to="/old-age-home"
              className="rounded-full border border-primary-foreground/40 px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn About Our Old Age Home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
