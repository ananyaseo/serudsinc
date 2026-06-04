import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="border-b border-white/10 bg-gold/95 text-forest-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-3 text-center text-sm font-semibold sm:flex-row sm:text-left">
          <span>100% of your donation goes directly to India — zero deducted for US operations.</span>
          <span className="text-xs font-medium opacity-80">501(c)(3) Tax ID • EIN 84-3593881</span>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2">
        <div>
          <div className="font-display text-xl font-semibold">SERUDS Inc</div>
          <address className="mt-3 not-italic text-sm leading-relaxed text-primary-foreground/80">
            5126 Ballantrae Blvd.<br />
            Land O' Lakes, FL 34638<br />
            <a href="mailto:seruds.inc@gmail.com" className="hover:text-gold">seruds.inc@gmail.com</a><br />
            <a href="tel:+13477174569" className="hover:text-gold">+1-347-717-4569</a>
          </address>
          <div className="mt-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">Follow us on</div>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <a href="#" aria-label="Facebook" className="hover:text-gold">Facebook</a>
              <a href="#" aria-label="Twitter" className="hover:text-gold">Twitter</a>
              <a href="#" aria-label="YouTube" className="hover:text-gold">Youtube</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gold">Linkedin</a>
              <a href="#" aria-label="Instagram" className="hover:text-gold">Instagram</a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">Pages</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/donate" className="hover:text-gold">Donate to 501(c)3 Nonprofit for India</Link></li>
            <li><a href="https://www.paypal.com/paypalme/seruds" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Donate Via PayPal</a></li>
            <li><a href="#" className="hover:text-gold">Testimonials</a></li>
            <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-gold">Refund and Cancellation Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} SERUDS Inc. All rights reserved.
      </div>
    </footer>
  );
}
