import { createFileRoute } from "@tanstack/react-router";
import { ProgramPageLayout } from "@/components/ProgramPageLayout";
import img from "@/assets/seruds/old-age.jpg";

export const Route = createFileRoute("/groceries")({
  head: () => ({
    meta: [
      { title: "Sponsor Free Groceries for Poor Elders — SERUDS India" },
      { name: "description", content: "Sponsor a destitute elderly woman in Kurnool with monthly groceries for just USD 36/month. Rice, dal, oil, vegetables and essentials delivered to her door." },
      { property: "og:title", content: "Sponsor Free Groceries for Elders" },
      { property: "og:description", content: "USD 36/month sponsors monthly groceries for a poor elder in Kurnool, India." },
    ],
  }),
  component: GroceriesPage,
});

function GroceriesPage() {
  return (
    <ProgramPageLayout
      eyebrow="Monthly Groceries Support"
      title="Sponsor Free Groceries for Elders"
      lead="Sponsor a destitute elderly woman in Kurnool with monthly groceries for just USD 36/month."
      heroImg={img}
      heroAlt="An elderly woman receiving monthly groceries from SERUDS"
    >
      <h2>A Month of Dignity for Just USD 36</h2>
      <p>
        Many elderly women in Kurnool live alone, abandoned by family and unable to work.
        Without a steady source of food, they go to bed hungry. SERUDS delivers a full
        month's groceries directly to their homes — a simple act that restores dignity and
        good health.
      </p>

      <h3>What Your Sponsorship Includes</h3>
      <ul>
        <li>Rice, dal, cooking oil and salt</li>
        <li>Fresh vegetables and seasonal fruit</li>
        <li>Milk powder, tea and basic spices</li>
        <li>Soap and hygiene essentials</li>
        <li>Doorstep delivery by SERUDS volunteers</li>
      </ul>

      <h3>Sponsor an Elder</h3>
      <p>
        At <strong>USD 36 per month</strong>, you sponsor one elder for a full month. You
        can sponsor monthly, annually, or as a one-time gift in honour of a loved one.
      </p>

      <h2>Why It Matters</h2>
      <p>
        Good nutrition transforms an elder's life — better health, fewer hospital visits,
        and the comfort of knowing someone cares. 100% of your gift goes to groceries for
        the elder you sponsor.
      </p>
    </ProgramPageLayout>
  );
}
