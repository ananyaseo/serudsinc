import { Link } from "@tanstack/react-router";
import { ChevronDown, Phone, Mail } from "lucide-react";
import logo from "@/assets/seruds/logo.png";


const causes = [
  { to: "/old-age-home", label: "Old Age Home" },
  { to: "/donate-for-children", label: "Donate for Children" },
  { to: "/charity-for-food", label: "Charity for Food" },
] as const;

export function SiteHeader() {
  useEffect(() => {
    const id = "donorbox-widgets-js";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.type = "module";
    s.async = true;
    s.src = "https://donorbox.org/widgets.js";
    document.body.appendChild(s);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      {/* Top utility bar */}
      <div className="bg-forest-deep text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-2 text-sm sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a href="tel:+13477174569" className="inline-flex items-center gap-2 hover:text-gold">
              <Phone size={14} /> +1-347-717-4569
            </a>
            <a href="mailto:seruds.inc@gmail.com" className="inline-flex items-center gap-2 hover:text-gold">
              <Mail size={14} /> seruds.inc@gmail.com
            </a>
          </div>
          <div>
            {/* @ts-expect-error custom element */}
            <dbox-widget
              campaign="donation-seruds-inc"
              type="popup"
              button-label="Donate"
              button-type="regular"
              button-color="#128aed"
              button-size="medium"
              regular-position="left"
              show-icon=""
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="SERUDS Inc logo" className="h-12 w-12 object-contain" width={48} height={48} />
          <div className="hidden leading-tight sm:block">
            <div className="font-display text-base font-semibold text-forest-deep">SERUDS Inc</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">501(c)(3) Charity</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-forest-deep md:flex">
          {/* Home dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-gold-deep focus:outline-none"
              aria-haspopup="true"
            >
              Home
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-xl border border-border bg-background shadow-xl ring-1 ring-border/50">
                <ul className="py-2">
                  <li>
                    <Link to="/" className="block px-4 py-2.5 text-sm text-forest-deep hover:bg-cream hover:text-gold-deep">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="block px-4 py-2.5 text-sm text-forest-deep hover:bg-cream hover:text-gold-deep">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/orphanage" className="hover:text-gold-deep">Orphanage</Link>
          <Link to="/sponsor-education" className="hover:text-gold-deep">Sponsor Education</Link>
          <Link to="/women-empowerment" className="hover:text-gold-deep">Women Empowerment</Link>

          {/* Causes dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-gold-deep focus:outline-none"
              aria-haspopup="true"
            >
              Causes
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-xl border border-border bg-background shadow-xl ring-1 ring-border/50">
                <ul className="py-2">
                  {causes.map((c) => (
                    <li key={c.to}>
                      <Link
                        to={c.to}
                        className="block px-4 py-2.5 text-sm text-forest-deep hover:bg-cream hover:text-gold-deep"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href="/#story"
                      className="block px-4 py-2.5 text-sm text-forest-deep hover:bg-cream hover:text-gold-deep"
                    >
                      Stories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link to="/contact" className="hover:text-gold-deep">Contact</Link>
        </nav>
        <Link
          to="/donate"
          className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-forest-deep shadow-sm transition hover:bg-gold-deep hover:text-primary-foreground"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}
