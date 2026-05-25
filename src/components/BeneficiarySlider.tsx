import { Link } from "@tanstack/react-router";
import { beneficiaries } from "@/data/beneficiaries";

export function BeneficiarySlider() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {beneficiaries.map((s) => (
        <article
          key={s.id}
          className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-border transition hover:-translate-y-1 hover:shadow-xl"
        >
          <Link
            to="/beneficiaries/$id"
            params={{ id: s.id }}
            className="block aspect-square overflow-hidden"
          >
            <img
              src={s.image}
              alt={s.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={800}
            />
          </Link>
          <div className="flex flex-1 flex-col p-5">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-gold-deep">
              {s.category}
            </div>
            <h3 className="mt-1 font-display text-xl font-semibold text-forest-deep">
              <Link
                to="/beneficiaries/$id"
                params={{ id: s.id }}
                className="hover:text-forest"
              >
                {s.name}
              </Link>
            </h3>
            <div className="mt-1 text-xs text-muted-foreground">
              {s.age} · {s.studying}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {s.excerpt}
            </p>
            <Link
              to="/beneficiaries/$id"
              params={{ id: s.id }}
              className="mt-4 inline-flex items-center self-start text-sm font-semibold text-forest hover:text-gold-deep"
            >
              Read full story →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
