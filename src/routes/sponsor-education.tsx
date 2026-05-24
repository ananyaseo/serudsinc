import { createFileRoute } from "@tanstack/react-router";
import { ProgramPageLayout } from "@/components/ProgramPageLayout";
import sponsorImg from "@/assets/seruds/sponsor-child.jpg";

export const Route = createFileRoute("/sponsor-education")({
  head: () => ({
    meta: [
      { title: "Sponsor a Child's Education in India — SERUDS Inc" },
      { name: "description", content: "Sponsor a child's education in Kurnool, India. Books, uniforms, school fees and mentoring — give a child the gift of a future." },
      { property: "og:title", content: "Sponsor a Child's Education in India" },
      { property: "og:description", content: "For $200/month you can sponsor a child's full education — schooling, supplies, vocational training and support." },
      { property: "og:image", content: "https://serudsinc.org/wp-content/uploads/2023/12/orphan-children-seeking-your-sponsorship-for-their-bright-future.jpg" },
    ],
  }),
  component: SponsorEducationPage,
});

function SponsorEducationPage() {
  return (
    <ProgramPageLayout
      eyebrow="Sponsor Child Education"
      title="Give a child in India the gift of education."
      lead="Books, uniforms, fees and mentoring — empower a disadvantaged child to break the cycle of poverty."
      heroImg={sponsorImg}
      heroAlt="Orphan children seeking sponsorship for their bright future"
    >
      <h2>Give a Child in India the Gift of Education</h2>
      <p>
        SERUDS Inc. is your bridge to making a world of difference for underprivileged
        children in India. As a 501(c)(3) non-profit in Florida, USA, we partner with the
        established and trusted NGO SERUDS India to raise funds for critical child-welfare
        projects — with education at our core. Every dollar you donate goes directly towards
        empowering children in India with the key to breaking the cycle of poverty through
        <strong> education</strong>.
      </p>

      <h3>Why Choose SERUDS Inc.?</h3>
      <ul>
        <li><strong>Transparency and Trust:</strong> A registered non-profit in the USA partnered with SERUDS India's proven track record.</li>
        <li><strong>Direct Impact:</strong> Your donation goes directly to education programs, with no administrative overhead in India.</li>
        <li><strong>Sustainable Change:</strong> We empower children with knowledge and skills to build a brighter future for themselves and their communities.</li>
      </ul>

      <h2>Give a Child the Gift of Education</h2>
      <p>
        For just <strong>$200 a month</strong>, you can sponsor a child's education. This includes:
      </p>
      <ul>
        <li><strong>Quality Schooling:</strong> Access to safe and nurturing learning environments.</li>
        <li><strong>Essential Supplies:</strong> Textbooks, uniforms, and school materials.</li>
        <li><strong>Vocational Training:</strong> Valuable skills development for future livelihoods.</li>
        <li><strong>Nurturing Potential:</strong> Empowerment to reach their full potential and dream big.</li>
      </ul>

      <h2>Your support can make a world of difference</h2>
      <ul>
        <li><strong>Break the Cycle of Poverty:</strong> Education is the key to escaping poverty for generations to come.</li>
        <li><strong>Empower Young Minds:</strong> Children gain the knowledge and skills to become independent, contributing members of society.</li>
        <li><strong>Build a Better Future:</strong> Investing in education is investing in a brighter future for India and the world.</li>
      </ul>

      <h3>M.G. Bhargav: A Beacon of Hope</h3>
      <p>
        Meet M.G. Bhargav, a 9th-grade student at Good Shepherd School, Kurnool. His father, a
        carpenter, is the sole breadwinner. Bhargav's mother is visually impaired, and the
        family struggles to make ends meet in a small hut. Burdened by responsibility, his
        father turns to alcohol, making life even harder. Yet Bhargav dreams of a better
        future through education — and with your support, that future is within reach.
      </p>
    </ProgramPageLayout>
  );
}
