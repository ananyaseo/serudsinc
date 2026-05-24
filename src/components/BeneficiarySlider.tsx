import { useState } from "react";
import sreelakshmiImg from "@/assets/seruds/sreelakshmi.jpg";
import hemalathaImg from "@/assets/seruds/hemalatha.jpg";
import roopaImg from "@/assets/seruds/roopa.jpg";
import meghanaImg from "@/assets/seruds/meghana.jpg";

type Story = {
  id: string;
  name: string;
  category: string;
  age: string;
  studying: string;
  image: string;
  excerpt: string;
  story: string[];
  goal: string;
  sourceUrl: string;
};

const stories: Story[] = [
  {
    id: "sreelakshmi",
    name: "V. Sreelakshmi",
    category: "Joy Home Orphanage",
    age: "12 years",
    studying: "7th class, IGMM Govt. High School, Kurnool",
    image: sreelakshmiImg,
    excerpt:
      "Her mother attempted suicide after years of abuse. Today, Sreelakshmi dreams of becoming an engineer.",
    story: [
      "Sreelakshmi's mother attempted suicide because of disputes with her alcoholic husband and harassment by her in-laws. Her father, a lorry driver, comes home once a month and does not provide for their daily needs.",
      "Her mother — caring for four daughters — was severely injured from repeated beatings and could no longer earn enough to feed the family.",
      "She heard about the Joy Home in Kurnool and admitted Sreelakshmi. Today she is safe, well-fed, in school, and dreams of becoming an engineer.",
    ],
    goal: "₹24,000 / year sponsorship",
    sourceUrl:
      "https://serudsindia.org/donations/donate-orphanage-in-andhrapradesh-for-child-education/",
  },
  {
    id: "hemalatha",
    name: "C. Hemalatha",
    category: "Joy Home Orphanage",
    age: "12 years",
    studying: "IX Std, IGMM School, A.Camp, Kurnool",
    image: hemalathaImg,
    excerpt:
      "She lost her father to AIDS. Her mother, HIV+, could not care for her. The Joy Home gave her a future.",
    story: [
      "Hemalatha's father passed away from HIV/AIDS. Her mother is also HIV-positive and unable to work consistently or care for her children.",
      "Brought to SERUDS' Joy Home by her elder mother and neighbour in 2014, Hemalatha now lives in a safe, nurturing environment with regular meals, schooling, and medical care.",
      "She is excelling in her studies and hopes to build a stable career so she can support her mother and siblings one day.",
    ],
    goal: "Sponsor education & living expenses",
    sourceUrl:
      "https://serudsindia.org/donations/donate-a-child-in-need-for-sponsership-of-education-india/",
  },
  {
    id: "roopa",
    name: "K. Roopa",
    category: "Sponsor Education",
    age: "15 years",
    studying: "9th class, Good Shepherd School, Kurnool",
    image: roopaImg,
    excerpt:
      "Both parents are daily-wage coolies. Her mother is now bedridden. A sponsorship keeps Roopa in school.",
    story: [
      "K. Roopa lives with her family in a rented house in Chenchu Nagar, Patha Kalluru, Kurnool. Both her parents are coolies whose income is below the poverty line.",
      "During the COVID-19 pandemic her family's earnings collapsed. Heavy medical expenses left her mother bedridden, leaving only her father to earn for the household.",
      "Without a sponsor, Roopa would have to drop out. ₹1,700 per month — ₹20,400 a year — covers her full school and tuition fees and keeps her dream of finishing school alive.",
    ],
    goal: "₹20,400 / year (₹1,700 per month)",
    sourceUrl: "https://serudsindia.org/donations/sponsor-education-roopa-kurnool/",
  },
  {
    id: "meghana",
    name: "Golla Meghana",
    category: "Joy Home Orphanage",
    age: "8 years",
    studying: "3rd class, IGMMCH School, Kurnool",
    image: meghanaImg,
    excerpt:
      "Her father drinks away the family's earnings. At Joy Home, Meghana finally has meals, school, and play.",
    story: [
      "Meghana's parents work at a vegetable market and as daily wagers. Her father Manohar spends what he earns on alcohol and rarely comes home.",
      "Her mother Tulasi carried the entire burden but could not earn enough for food, clothing or basic needs. Through a SERUDS employee, she learned about Joy Home and admitted Meghana in 2021.",
      "Today Meghana is thriving — she has friends, attends school, gets timely meals, evening tuition, games and a safe place to be a child again.",
    ],
    goal: "Sponsor Meghana's education",
    sourceUrl:
      "https://serudsindia.org/donations/donate-education-girlchild-meghana/",
  },
];

export function BeneficiarySlider() {
  const [active, setActive] = useState<Story | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stories.map((s) => (
          <article
            key={s.id}
            className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-border transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={s.image}
                alt={s.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-gold-deep">
                {s.category}
              </div>
              <h3 className="mt-1 font-display text-xl font-semibold text-forest-deep">
                {s.name}
              </h3>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.age} · {s.studying}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.excerpt}
              </p>
              <button
                onClick={() => setActive(s)}
                className="mt-4 inline-flex items-center self-start text-sm font-semibold text-forest hover:text-gold-deep"
              >
                Read full story →
              </button>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/75 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-card p-8 shadow-2xl md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
                  {active.category}
                </div>
                <h2 className="mt-1 font-display text-3xl font-semibold text-forest-deep">
                  Meet {active.name}
                </h2>
                <div className="mt-1 text-sm text-muted-foreground">
                  {active.age} · {active.studying}
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <img
              src={active.image}
              alt={active.name}
              className="mt-6 aspect-[4/3] w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              {active.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-cream p-4 text-sm text-forest-deep">
              <span className="font-semibold">Sponsorship goal:</span> {active.goal}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/donate"
                className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest-deep hover:bg-gold-deep hover:text-primary-foreground"
              >
                Sponsor {active.name.split(" ").slice(-1)[0]} →
              </a>
              <a
                href={active.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-forest-deep hover:bg-muted"
              >
                View on SERUDS India
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
