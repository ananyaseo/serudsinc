export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="border-b border-white/10 bg-gold/95 text-forest-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-3 text-center text-sm font-semibold sm:flex-row sm:text-left">
          <span>100% of your donation goes directly to India — zero deducted for US operations.</span>
          <span className="text-xs font-medium opacity-80">501(c)(3) Tax ID • EIN 84-3593881</span>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-semibold">SERUDS Inc</div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            A 501(c)(3) charitable organization based in Land O' Lakes, Florida, raising funds for orphan children, destitute elderly, and women in Kurnool, Andhra Pradesh.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">Transparency</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gold">Financials</a></li>
            <li><a href="#" className="hover:text-gold">Annual Report</a></li>
            <li><a href="#" className="hover:text-gold">501(c)(3) Letter</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Land O' Lakes, FL</li>
            <li>info@serudsinc.org</li>
            <li className="flex gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="hover:text-gold">Facebook</a>
              <a href="#" aria-label="Instagram" className="hover:text-gold">Instagram</a>
              <a href="#" aria-label="YouTube" className="hover:text-gold">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} SERUDS Inc. All rights reserved.
      </div>
    </footer>
  );
}
