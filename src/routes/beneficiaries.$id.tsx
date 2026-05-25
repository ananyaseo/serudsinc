import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DonorboxEmbed } from "@/components/DonorboxEmbed";
import { beneficiaries, getBeneficiary } from "@/data/beneficiaries";

export const Route = createFileRoute("/beneficiaries/$id")({
  loader: ({ params }) => {
    const b = getBeneficiary(params.id);
    if (!b) throw notFound();
    return { beneficiary: b };
  },
  head: ({ loaderData }) => {
    const b = loaderData?.beneficiary;
    const title = b ? `${b.name} — SERUDS Beneficiary Story` : "Beneficiary";
    const desc = b?.excerpt ?? "Sponsor a child through SERUDS Inc.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: BeneficiaryPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl text-forest-deep">Story not found</h1>
        <Link to="/" className="mt-6 inline-block text-forest underline">
          ← Back to home
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function BeneficiaryPage() {
  const { beneficiary: b } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <Link to="/" className="text-sm text-forest hover:underline">
            ← Back to all stories
          </Link>
          <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="overflow-hidden rounded-3xl ring-1 ring-border">
              <img
                src={b.image}
                alt={b.name}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
                {b.category}
              </div>
              <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-forest-deep md:text-5xl">
                {b.name}
              </h1>
              <div className="mt-2 text-sm text-muted-foreground">
                {b.age} · {b.studying}
              </div>
              <p className="mt-4 text-lg text-foreground/85">{b.excerpt}</p>
              <div className="mt-5 rounded-2xl bg-card p-4 text-sm text-forest-deep ring-1 ring-border">
                <span className="font-semibold">Sponsorship goal:</span> {b.goal}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
          <article className="space-y-5 text-base leading-relaxed text-foreground/85">
            <h2 className="font-display text-3xl font-semibold text-forest-deep">
              {b.name.split(" ").slice(-1)[0]}'s Story
            </h2>
            {b.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <blockquote className="border-l-4 border-gold bg-gold/10 p-4 font-display text-xl italic text-forest-deep">
              "Your sponsorship gives {b.name.split(" ").slice(-1)[0]} the
              chance to stay in school and build a future."
            </blockquote>
            <p className="text-sm text-muted-foreground">
              Original story source:{" "}
              <a
                href={b.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-forest"
              >
                serudsindia.org
              </a>
            </p>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-card p-6 shadow-lg ring-1 ring-border">
              <h3 className="font-display text-2xl font-semibold text-forest-deep">
                Sponsor {b.name.split(" ").slice(-1)[0]}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                100% of your donation reaches Kurnool, India.
              </p>
              <div className="mt-5">
                <DonorboxEmbed campaign="donation-seruds-inc" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-cream py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="font-display text-2xl font-semibold text-forest-deep">
            More stories
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beneficiaries
              .filter((x) => x.id !== b.id)
              .map((x) => (
                <Link
                  key={x.id}
                  to="/beneficiaries/$id"
                  params={{ id: x.id }}
                  className="group flex gap-4 rounded-2xl bg-card p-4 ring-1 ring-border transition hover:shadow-md"
                >
                  <img
                    src={x.image}
                    alt={x.name}
                    className="h-20 w-20 flex-none rounded-xl object-cover"
                  />
                  <div>
                    <div className="font-display text-base font-semibold text-forest-deep group-hover:text-forest">
                      {x.name}
                    </div>
                    <div className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {x.excerpt}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
