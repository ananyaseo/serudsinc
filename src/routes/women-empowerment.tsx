import { createFileRoute } from "@tanstack/react-router";
import { ProgramPageLayout } from "@/components/ProgramPageLayout";
import img from "@/assets/seruds/roopa.jpg";

export const Route = createFileRoute("/women-empowerment")({
  head: () => ({
    meta: [
      { title: "Sponsor Vocational Training for Poor Women — SERUDS India" },
      { name: "description", content: "Donate USD 100 to sponsor a sewing machine and vocational training in tailoring & embroidery for a rural woman in Kurnool, Andhra Pradesh." },
      { property: "og:title", content: "Sponsor Vocational Training Programs for Poor Women" },
      { property: "og:description", content: "USD 100 sponsors a sewing machine + tailoring & embroidery training for a rural woman." },
    ],
  }),
  component: WomenEmpowermentPage,
});

function WomenEmpowermentPage() {
  return (
    <ProgramPageLayout
      eyebrow="Women Empowerment"
      title="Sponsor Vocational Training Programs for Poor Women"
      lead="Donate USD 100 to sponsor a sewing machine and vocational training in Tailoring & Embroidery for a rural woman."
      heroImg={img}
      heroAlt="Rural women in Kurnool learning tailoring at a SERUDS vocational training centre"
    >
      <h2>Skills That Change a Family's Future</h2>
      <p>
        For a rural woman in Kurnool, a sewing machine and a few months of training can mean
        the difference between dependence and dignity. SERUDS runs vocational training
        programs in <strong>tailoring, embroidery and handicrafts</strong> — equipping women
        with skills to earn a stable income from home.
      </p>

      <h3>What USD 100 Provides</h3>
      <ul>
        <li>One sewing machine — owned by the trainee for life</li>
        <li>A complete tailoring &amp; embroidery course taught by experienced trainers</li>
        <li>Fabric, thread and starter materials</li>
        <li>Mentorship on pricing, customers and small-business basics</li>
        <li>A graduation certificate she can use to find work</li>
      </ul>

      <h3>Beyond Tailoring</h3>
      <p>
        SERUDS women's programs also include self-help groups (SHGs), micro-credit access,
        legal-rights awareness, and health camps — building a full ecosystem of support
        around every woman we train.
      </p>

      <h2>Empower a Woman Today</h2>
      <p>
        Every machine donated, every course completed, is a household lifted out of poverty.
        Your USD 100 gift directly funds one woman's training and equipment.
      </p>
    </ProgramPageLayout>
  );
}
