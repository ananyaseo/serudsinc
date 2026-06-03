import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/seruds/orphan-group.jpg";
import elderlyImg from "@/assets/seruds/old-age.jpg";
import orphanImg from "@/assets/seruds/orphan-600.jpg";
import eduImg from "@/assets/seruds/sponsor-child.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DonorboxEmbed } from "@/components/DonorboxEmbed";
import { BeneficiarySlider } from "@/components/BeneficiarySlider";
import { AiAssistantWidget } from "@/components/AiAssistantWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SERUDS Inc — Transforming Lives, One Donation at a Time" },
      { name: "description", content: "501(c)(3) nonprofit supporting orphans, elderly, and women in Kurnool, India. Sponsor a child for $30/month. 100% goes to India." },
      { property: "og:title", content: "SERUDS Inc — Transforming Lives in Kurnool, India" },
      { property: "og:description", content: "Sponsor a child, feed an elder, empower a woman. 100% of donations go to India." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <ImpactStats />
      <Programs />
      <Beneficiary />
      <CTA />
      <SiteFooter />
      <AiAssistantWidget />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Children smiling in Kurnool, India" className="h-full w-full object-cover opacity-80" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/60 to-forest-deep/20" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-5 md:py-28 lg:py-36">
        <div className="md:col-span-3 text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-deep">
            <span className="h-2 w-2 rounded-full bg-forest-deep" /> Serunds Inc · 501(c)(3) Charity
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
            Transforming lives,<br />
            <span className="text-gold">one donation</span> at a time.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 md:text-xl">
            We work for the development of poor elderly persons and abandoned orphan children in Kurnool District, Andhra Pradesh, India.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/donate" className="rounded-full bg-gold px-7 py-4 text-base font-bold text-forest-deep shadow-xl hover:bg-gold-deep hover:text-primary-foreground">
              Donate Now →
            </Link>
            <a href="#programs" className="rounded-full border border-primary-foreground/40 px-7 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10">
              Our Programs
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <DonorboxEmbed />
        </div>
      </div>
    </section>
  );
}

function ImpactStats() {
  const stats = [
    { n: "1,200+", l: "Orphans housed & fed" },
    { n: "350+", l: "Elderly women cared for" },
    { n: "5,000+", l: "Meals served monthly" },
    { n: "100%", l: "Of donations to India" },
  ];
  return (
    <section id="impact" className="bg-secondary py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-5xl font-semibold text-forest-deep">{s.n}</div>
            <div className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    { title: "Orphanage & Joy Home", img: orphanImg, desc: "Safe shelter, nutrition, and education for abandoned children in our Joy Home.", price: "From $30/mo", to: "/orphanage" as const },
    { title: "Sponsor Child Education", img: eduImg, desc: "Books, uniforms, fees, and mentoring — for just $360/year, give a child a future.", price: "$360/year", to: "/sponsor-education" as const },
    { title: "Happy Old Age Home", img: elderlyImg, desc: "Care, meals, and dignity for destitute elderly women in their golden years.", price: "From $36/mo", to: "/old-age-home" as const },
    { title: "Creche Program", img: eduImg, desc: "Safe daycare for children of daily-wage workers — meals, learning and care from morning till evening.", price: "Sponsor a child", to: "/creche" as const },
    { title: "Monthly Groceries for Elders", img: elderlyImg, desc: "Sponsor a destitute elderly woman with a full month of groceries delivered to her door.", price: "$36/month", to: "/groceries" as const },
    { title: "Women Empowerment", img: orphanImg, desc: "Sponsor a sewing machine and tailoring & embroidery training for a rural woman.", price: "$100 one-time", to: "/women-empowerment" as const },
  ];
  return (
    <section id="programs" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold-deep">Our Programs</div>
          <h2 className="mt-2 font-display text-4xl font-semibold text-forest-deep md:text-5xl">
            Make a gift of hope today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every program runs on the ground in Kurnool, Andhra Pradesh — with full transparency and measurable impact.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-border transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" width={1200} height={900} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-gold-deep">{p.price}</div>
                <h3 className="mt-1 font-display text-2xl font-semibold text-forest-deep">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <Link to={p.to} className="mt-4 inline-flex items-center self-start text-sm font-semibold text-forest hover:text-gold-deep">
                  Support this program →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beneficiary() {
  return (
    <section id="story" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold-deep">Read our stories</div>
          <h2 className="mt-2 font-display text-4xl font-semibold text-forest-deep md:text-5xl">
            Every donation has a name.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four children. Four lives changed because of donors like you.
          </p>
        </div>
        <BeneficiarySlider />
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-forest py-20 text-primary-foreground">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
          Join us in creating ripples of change.
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          Your donation, big or small, fuels our mission to bring hope, dignity, and transformation to those who need it most.
        </p>
        <Link to="/donate" className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 text-base font-bold text-forest-deep shadow-xl hover:bg-gold-deep hover:text-primary-foreground">
          Donate Today
        </Link>
      </div>
    </section>
  );
}
