import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-primary-foreground font-display font-bold">S</div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-forest-deep">SERUDS Inc</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">501(c)(3) Charity</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-forest-deep md:flex">
          <Link to="/" className="hover:text-gold-deep">Home</Link>
          <a href="/#programs" className="hover:text-gold-deep">Programs</a>
          <a href="/#impact" className="hover:text-gold-deep">Impact</a>
          <a href="/#story" className="hover:text-gold-deep">Stories</a>
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
