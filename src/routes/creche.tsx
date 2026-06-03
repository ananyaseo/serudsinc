import { createFileRoute } from "@tanstack/react-router";
import { ProgramPageLayout } from "@/components/ProgramPageLayout";
import img from "@/assets/seruds/sponsor-child.jpg";

export const Route = createFileRoute("/creche")({
  head: () => ({
    meta: [
      { title: "SERUDS Creche Program — Daycare for Workers' Children in Kurnool" },
      { name: "description", content: "SERUDS daycare centers offer a safe haven for children of daily-wage workers in Kurnool, Andhra Pradesh — meals, learning and care from morning till evening." },
      { property: "og:title", content: "Donate to SERUDS Creche Program" },
      { property: "og:description", content: "Safe daycare for children of poor workers in Kurnool, India." },
    ],
  }),
  component: CrechePage,
});

function CrechePage() {
  return (
    <ProgramPageLayout
      eyebrow="Creche Program"
      title="Donate to SERUDS Creche Program"
      lead="SERUDS daycare centers offer a safe haven for children of daily-wage workers from morning till evening."
      heroImg={img}
      heroAlt="Children at a SERUDS daycare creche in Kurnool"
    >
      <h2>Safe Daycare for Children of Poor Workers</h2>
      <p>
        Many parents in Kurnool work as daily-wage labourers at construction sites, brick
        kilns and farms. With no safe place to leave their young children, the kids are often
        taken to dangerous worksites or left alone at home. The <strong>SERUDS Creche
        Program</strong> changes that.
      </p>

      <h3>What the Creche Provides</h3>
      <ul>
        <li>Safe shelter and supervision from morning until parents finish work</li>
        <li>Nutritious meals and snacks every day</li>
        <li>Early childhood learning, songs, games and pre-school activities</li>
        <li>Regular health check-ups, hygiene and immunisations</li>
        <li>Trained caregivers and a clean, child-friendly environment</li>
      </ul>

      <h3>Why It Matters</h3>
      <p>
        Quality early-childhood care lays the foundation for a child's lifelong health and
        learning — and it lets parents earn a stable income without worrying about their
        little ones. Your gift sponsors meals, learning materials and caregiver salaries for
        the creche centres.
      </p>

      <h2>Sponsor a Child at the Creche</h2>
      <p>
        A small monthly contribution covers a child's daycare, meals and learning materials
        for an entire month. Your support keeps these centres open and safe.
      </p>
    </ProgramPageLayout>
  );
}
