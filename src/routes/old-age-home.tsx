import { createFileRoute } from "@tanstack/react-router";
import { ProgramPageLayout } from "@/components/ProgramPageLayout";
import oldAgeImg from "@/assets/seruds/old-age.jpg";

export const Route = createFileRoute("/old-age-home")({
  head: () => ({
    meta: [
      { title: "Happy Old Age Home — Care & Dignity for Elders in Kurnool" },
      { name: "description", content: "SERUDS Old Age Home provides shelter, three meals a day, healthcare and compassionate care for destitute elders in Kurnool, India." },
      { property: "og:title", content: "Happy Old Age Home — SERUDS Inc" },
      { property: "og:description", content: "Change an elder's life, honor a generation. Donate to the SERUDS free Old Age Home in Kurnool, Andhra Pradesh." },
      { property: "og:image", content: "https://serudsinc.org/wp-content/uploads/2023/12/donate-food-old-age-people.jpg" },
    ],
  }),
  component: OldAgeHomePage,
});

function OldAgeHomePage() {
  return (
    <ProgramPageLayout
      eyebrow="Happy Old Age Home"
      title="Change an elder's life. Honor a generation."
      lead="Support SERUDS Inc.'s haven for destitute elders in Kurnool, Andhra Pradesh — a place of dignity, care and community."
      heroImg={oldAgeImg}
      heroAlt="Elderly women receiving meals at SERUDS Old Age Home in Kurnool"
    >
      <h2>A Beacon of Hope for India's Forgotten Elders</h2>
      <p>
        SERUDS Inc. is your bridge to making a difference in the lives of forgotten souls in
        India. As a 501(c)(3) non-profit in Florida, USA, we partner with SERUDS India to
        raise funds for their priceless sanctuary: a free old age home in Kurnool, Andhra
        Pradesh, where destitute elders find dignity, respect, and the care they deserve.
      </p>

      <h3>Why Choose SERUDS Inc.?</h3>
      <ul>
        <li><strong>Transparency and Trust:</strong> We are a registered non-profit in the USA, and SERUDS India has a proven track record of caring for elders.</li>
        <li><strong>Direct Impact:</strong> Every dollar you donate goes directly to supporting the old age home, with no administrative overhead in India.</li>
        <li><strong>Sustainable Change:</strong> We don't just provide basic needs — we create a nurturing environment where elders can thrive and feel valued.</li>
      </ul>

      <h2>Give Back, Give Hope</h2>
      <p>
        In India, many free old age homes offer harsh realities: poor living conditions,
        inadequate care, and a lack of dignity. SERUDS India stands apart, offering a
        sanctuary of hope:
      </p>
      <ul>
        <li><strong>Safe and Loving Haven:</strong> Two spacious bedrooms, a big hall, a hygienic kitchen and open space provide a comfortable, dignified living environment.</li>
        <li><strong>Nutritious Meals and Healthcare:</strong> Three nutritious meals daily, along with regular medical checkups, ensure the well-being of residents.</li>
        <li><strong>Compassionate Care:</strong> Dedicated caregivers provide personalized care, fostering a sense of belonging and community.</li>
      </ul>

      <h3>Help Us Expand and Sustain the Old Age Home</h3>
      <ul>
        <li><strong>Expand the home</strong> to welcome more elders in need.</li>
        <li><strong>Cover running costs</strong> — food, medication, and daily expenses to keep the home running.</li>
      </ul>

      <h2>Your donation can make a world of difference</h2>
      <ul>
        <li><strong>Restore Dignity:</strong> A safe and loving environment where elders live with respect and care.</li>
        <li><strong>Combat Loneliness:</strong> Companionship and community for those who have been forgotten.</li>
        <li><strong>Bring Light to Twilight Years:</strong> The care and support elders deserve in their golden years.</li>
      </ul>
    </ProgramPageLayout>
  );
}
