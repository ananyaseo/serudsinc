import { createFileRoute } from "@tanstack/react-router";
import { ProgramPageLayout } from "@/components/ProgramPageLayout";
import orphanImg from "@/assets/seruds/orphan-600.jpg";

export const Route = createFileRoute("/orphanage")({
  head: () => ({
    meta: [
      { title: "Support SERUDS Orphanage in India — Joy Home, Kurnool" },
      { name: "description", content: "SERUDS Joy Home shelters 80+ orphan and abandoned children in Kurnool, Andhra Pradesh. Registered Child Care Institution under the JJ Act." },
      { property: "og:title", content: "Support SERUDS Orphanage in India" },
      { property: "og:description", content: "Donate to SERUDS Joy Home — safe shelter, meals, education and medical care for orphans in Kurnool." },
      { property: "og:image", content: "https://serudsinc.org/wp-content/uploads/2023/12/Orphan-Group-600-min.jpg" },
    ],
  }),
  component: OrphanagePage,
});

function OrphanagePage() {
  return (
    <ProgramPageLayout
      eyebrow="Orphanage & Joy Home"
      title="Support SERUDS Orphanage in India"
      lead="Donate for disadvantaged children, elderly and homeless in Kurnool, Andhra Pradesh."
      heroImg={orphanImg}
      heroAlt="Children at the SERUDS Joy Home Orphanage in Kurnool"
    >
      <h2>Seruds Orphanage: A Haven of Hope</h2>
      <p>
        In January 2012, SERUDS Orphanage for Girls and Orphanage for Boys opened their doors
        to five children. Today, we are proud to house <strong>30 girls and 50 boys</strong>,
        offering them a safe haven and the promise of a brighter future.
      </p>
      <p>
        Our children come from various backgrounds — orphans, rescued street children
        discovered by dedicated volunteers, or those from economically challenged families.
        Some have single parents unable to provide proper education and sustenance.
      </p>

      <h3>Registered Child Care Institution</h3>
      <p>
        SERUDS Children's Home is a registered Child Care Institution (CCI) under sec. 41 (1)
        and 50 (1) of the Juvenile Justice Act (CPC) 2015. This ensures that our commitment to
        the well-being and development of each child is legally recognized and protected.
      </p>

      <h2>How You Can Make a Difference</h2>
      <p>
        SERUDS Inc. invites you to be a part of our international community committed to
        making a difference. Your donations — whether for education or orphanage support —
        reach across borders to create a positive impact on the lives of vulnerable children.
      </p>

      <h3>Sponsorship Opportunities</h3>
      <p>
        With just <strong>INR 24,000</strong> (about <strong>$290 USD</strong>), you can
        sponsor a child for one full year, covering their education, food, clothing, medical
        care and living expenses. Your contribution is not just a donation — it's a lifeline
        for a child who needs it the most.
      </p>

      <h3>Donate for Food · Celebrate Birthdays</h3>
      <p>
        Consider celebrating your special moments with us. Donate on birthdays, anniversaries
        or other milestones — spreading joy and making a lasting impact on a child's life.
      </p>

      <h2>Transform a Child's Life Today</h2>
      <p>
        Your support reaches across borders to create a positive impact on the lives of
        vulnerable children in Andhra Pradesh, India.
      </p>
    </ProgramPageLayout>
  );
}
