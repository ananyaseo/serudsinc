import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import orphanImg from "@/assets/seruds/orphan-group.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SERUDS Inc" },
      { name: "description", content: "Get in touch with SERUDS Inc, a 501(c)(3) charity based in Land O' Lakes, Florida." },
      { property: "og:title", content: "Contact Us — SERUDS Inc" },
      { property: "og:description", content: "We would love to hear from you. Reach SERUDS Inc by phone, email, or message." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Message from ${data.get("firstName")} ${data.get("lastName")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("firstName")} ${data.get("lastName")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}`
    );
    window.location.href = `mailto:seruds.inc@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="bg-background">
      <section className="bg-forest-deep text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">SERUDS Inc</div>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            We would love to hear from you
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Questions about our programs, partnerships, or how to support our work in Kurnool, Andhra Pradesh? Reach out — we read every message.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div className="space-y-8">
          <img
            src={orphanImg}
            alt="Children supported by SERUDS"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md"
            width={1024}
            height={684}
            loading="lazy"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-forest-deep">Find us here</h2>
              <address className="mt-2 not-italic text-sm leading-relaxed text-muted-foreground">
                5126 Ballantrae Blvd.<br />
                Land O' Lakes, Florida 34638<br />
                United States
              </address>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-forest-deep">Get in touch</h2>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a href="tel:+13477174569" className="text-forest hover:text-gold-deep">
                    +1 (347) 717-4569
                  </a>
                </li>
                <li>
                  <a href="mailto:seruds.inc@gmail.com" className="text-forest hover:text-gold-deep">
                    seruds.inc@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-border sm:p-8"
        >
          <h2 className="font-display text-2xl font-semibold text-forest-deep">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill in the form and we will get back to you shortly.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="First name" name="firstName" required />
            <Field label="Last name" name="lastName" required />
            <Field label="Phone number" name="phone" type="tel" />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div className="mt-4">
            <label className="block text-xs font-semibold uppercase tracking-widest text-forest-deep">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest-deep transition hover:bg-gold-deep hover:text-primary-foreground"
          >
            Send message
          </button>
          {sent && (
            <p className="mt-3 text-center text-xs text-forest">
              Opening your email app… if nothing happens, write to seruds.inc@gmail.com.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-forest-deep">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
      />
    </div>
  );
}
