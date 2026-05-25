import { Link } from "@tanstack/react-router";
import logo from "@/assets/seruds/logo.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="SERUDS India logo" className="h-10 w-auto" width={140} height={40} />
          <div className="hidden leading-tight sm:block">
            <div className="font-display text-base font-semibold text-forest-deep">SERUDS Inc</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">501(c)(3) Charity</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-forest-deep md:flex">
          <Link to="/" className="hover:text-gold-deep">Home</Link>
          <Link to="/orphanage" className="hover:text-gold-deep">Orphanage</Link>
          <Link to="/sponsor-education" className="hover:text-gold-deep">Education</Link>
          <Link to="/old-age-home" className="hover:text-gold-deep">Old Age Home</Link>
          <a href="/#story" className="hover:text-gold-deep">Stories</a>
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
