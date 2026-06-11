import { createFileRoute, Link } from "@tanstack/react-router";
import { DonorboxEmbed } from "@/components/DonorboxEmbed";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Utensils, BookOpen, HeartHandshake, Sparkles, ShieldCheck, BadgeCheck, Lock, HeartPulse } from "lucide-react";
import teleguManeesha from "@/assets/seruds/telegu-maneesha.jpg.asset.json";
import meghanaD from "@/assets/seruds/meghana-d.jpg.asset.json";
import ajayGoud from "@/assets/seruds/ajay-goud.jpg.asset.json";
import kummariLakshmamma from "@/assets/seruds/kummari-lakshmamma.jpg.asset.json";

const ORPHAN_GROUP_IMG = "https://serudsinc.org/wp-content/uploads/2023/12/Orphan-Group-600-min.jpg";
const HERO_BENEFICIARY_IMGS = [
  { src: teleguManeesha.url, alt: "Telegu Maneesha" },
  { src: meghanaD.url, alt: "Meghana" },
  { src: ajayGoud.url, alt: "Ajay Goud" },
  { src: kummariLakshmamma.url, alt: "Kummari Lakshmamma" },
];

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate to SERUDS Inc. | Support Children, Elderly & Families in India" },
      { name: "description", content: "Support SERUDS Inc., a U.S. 501(c)(3) nonprofit helping orphaned children, elderly people, women, and vulnerable families in India. Donations are tax-deductible. EIN 88-1610707." },
      { property: "og:title", content: "Donate to SERUDS Inc. | Support Children, Elderly & Families in India" },
      { property: "og:description", content: "Help orphaned children, struggling elderly, and vulnerable families in India. Tax-deductible. EIN 88-1610707." },
      { property: "og:url", content: "https://serudsinc.lovable.app/donate" },
    ],
    links: [{ rel: "canonical", href: "https://serudsinc.lovable.app/donate" }],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0F4C81] to-[#0b3a64] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid gap-10 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3">
            <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
              U.S. 501(c)(3) • EIN 88-1610707
            </p>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold leading-tight">
              Your Gift Can Change a Life Today
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/90">
              Help orphaned children, struggling elderly people, and vulnerable families escape poverty and build a brighter future.
            </p>
            <p className="mt-4 text-white/80">
              Every day, children go to bed hungry, elderly people are abandoned without care, and families struggle to survive. Your support helps provide food, shelter, education, healthcare, and hope to those who need it most.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#donate-form" className="rounded-full bg-[#F97316] px-7 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#ea6a0c] transition">
                Donate Now →
              </a>
              <span className="self-center text-xs text-white/80">Tax-Deductible • Secure Giving via Donorbox</span>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {HERO_BENEFICIARY_IMGS.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} className={`h-40 md:h-48 w-full object-cover rounded-2xl shadow-xl ${i % 2 ? "translate-y-6" : ""}`} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* MAIN TWO COLUMN */}
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 lg:grid-cols-5">
        {/* LEFT: storytelling */}
        <div className="lg:col-span-3 space-y-14">
          {/* Why support matters */}
          <section>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#0F4C81]">Why Your Support Matters</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100">
                <h3 className="font-display text-xl font-semibold text-[#0F4C81]">The Problem</h3>
                <p className="mt-2 text-sm text-slate-600">Thousands of vulnerable children, elderly individuals, widows, and poor families face:</p>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  <li>• Hunger and malnutrition</li>
                  <li>• Lack of education</li>
                  <li>• Poor healthcare access</li>
                  <li>• Social isolation</li>
                  <li>• Economic hardship</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-[#16A34A]/20">
                <h3 className="font-display text-xl font-semibold text-[#16A34A]">Our Solution</h3>
                <p className="mt-2 text-sm text-slate-600">SERUDS programs provide:</p>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  <li>• Nutritious meals</li>
                  <li>• Safe shelter</li>
                  <li>• Educational support</li>
                  <li>• Elderly care services</li>
                  <li>• Women's empowerment programs</li>
                  <li>• Community development initiatives</li>
                </ul>
              </div>
            </div>

            {/* Counters */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { n: "30+", l: "Children in SERUDS Orphanages" },
                { n: "100s", l: "Elderly Beneficiaries Supported" },
                { n: "1000s", l: "Meals Distributed" },
                { n: "∞", l: "Lives Transformed by Donors" },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl bg-[#0F4C81] text-white p-5 text-center shadow">
                  <div className="font-display text-3xl font-bold">{s.n}</div>
                  <div className="mt-1 text-xs opacity-90">{s.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Impact cards */}
          <section>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#0F4C81]">Where Your Gift Goes</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { Icon: Utensils, title: "Feed a Child", text: "Your donation helps provide nutritious meals to children who would otherwise go hungry." },
                { Icon: BookOpen, title: "Educate a Child", text: "Support school supplies, educational materials, tutoring, and opportunities for a brighter future." },
                { Icon: HeartHandshake, title: "Care for the Elderly", text: "Provide food, healthcare support, clothing, and dignity to neglected senior citizens." },
                { Icon: Sparkles, title: "Empower Women", text: "Help women gain skills, confidence, and opportunities for sustainable livelihoods." },
              ].map(({ Icon, title, text }, i) => (
                <div key={i} className="group rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-[#0F4C81]">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Real impact story */}
          <section className="rounded-3xl bg-white p-6 md:p-10 shadow-md ring-1 ring-slate-100">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#0F4C81]">From Despair to Hope</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1fr] items-start">
              <img
                src={ORPHAN_GROUP_IMG}
                alt="Children at SERUDS orphanage"
                className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-md"
                loading="lazy"
              />
              <div>
                <p className="text-slate-700">
                  Many children arrive at SERUDS after losing one or both parents or being abandoned due to extreme poverty. With donor support, they receive shelter, education, nutrition, healthcare, and the chance to dream again. Similar transformations occur every day among elderly individuals and women supported through SERUDS programs.
                </p>
                <blockquote className="mt-5 border-l-4 border-[#F97316] pl-4 italic text-[#0F4C81]">
                  "Because someone cared, I can now go to school and dream about my future."
                </blockquote>
              </div>
            </div>
          </section>

          {/* Trust */}
          <section>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#0F4C81]">Trusted by Compassionate Supporters</h2>
            <p className="mt-3 text-slate-600">SERUDS Inc. is committed to accountability, transparency, and responsible stewardship of every donation entrusted to us.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "IRS Registered 501(c)(3)",
                "EIN 88-1610707",
                "Secure Donations via Donorbox",
                "Transparent Use of Funds",
                "Direct Program Impact",
                "International Development & Humanitarian Programs",
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <BadgeCheck className="text-[#16A34A]" size={20} />
                  <span className="text-sm font-medium text-slate-800">{t}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Financial transparency */}
          <section className="rounded-3xl bg-gradient-to-br from-[#0F4C81] to-[#0b3a64] text-white p-8 md:p-10 shadow-lg">
            <div className="flex items-center gap-3">
              <ShieldCheck size={28} />
              <h2 className="font-display text-3xl font-semibold">Transparency You Can Trust</h2>
            </div>
            <p className="mt-4 text-white/90">
              We believe every donor deserves to know how their generosity creates impact. SERUDS Inc. maintains financial accountability and transparency to ensure donations reach the people and programs that need them most.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://app.candid.org/profile/14056477/seruds-inc-88-1610707" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0F4C81] hover:bg-white/90">View Profile on Candid.org</a>
              <Link to="/contact" className="rounded-full bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#ea6a0c]">Contact Us</Link>
            </div>
          </section>
        </div>

        {/* RIGHT: sticky donation */}
        <aside className="lg:col-span-2">
          <div id="donate-form" className="lg:sticky lg:top-24">
            <div className="rounded-[20px] bg-[#F8FAFC] p-5 shadow-[0_20px_50px_-15px_rgba(15,76,129,0.25)] ring-1 ring-slate-200">
              <h2 className="font-display text-2xl font-semibold text-[#0F4C81]">Ready to Change a Life?</h2>
              <p className="mt-2 text-sm text-slate-600">Your secure donation can provide food, education, care, and hope.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200"><Lock size={14} className="text-[#16A34A]" /> Secure</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200"><BadgeCheck size={14} className="text-[#0F4C81]" /> Tax Deductible</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200"><HeartPulse size={14} className="text-[#F97316]" /> Direct Impact</span>
              </div>
              <div className="mt-4">
                <DonorboxEmbed />
              </div>
              <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
                SERUDS Inc. is a registered 501(c)(3) nonprofit organization. Donations are tax-deductible to the fullest extent permitted by law. <br />
                <strong>EIN: 88-1610707</strong>
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* FINAL CTA */}
      <section className="bg-[#0F4C81] text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Be the Reason Someone Has Hope Tomorrow</h2>
          <p className="mt-4 text-white/90 md:text-lg">
            Your generosity can help transform lives through food, education, shelter, healthcare, and dignity. Join compassionate supporters who are making a lasting difference.
          </p>
          <a href="#donate-form" className="mt-7 inline-block rounded-full bg-[#F97316] px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-[#ea6a0c] transition">
            Donate Today →
          </a>
        </div>
      </section>

      {/* Mobile sticky donate */}
      <a href="#donate-form" className="lg:hidden fixed bottom-4 inset-x-4 z-40 rounded-full bg-[#F97316] px-6 py-3.5 text-center text-base font-bold text-white shadow-2xl">
        Donate Now →
      </a>

      <SiteFooter showAnanyaCredit />
    </div>
  );
}
