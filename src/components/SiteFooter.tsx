import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";

export function SiteFooter({ showAnanyaCredit = false }: { showAnanyaCredit?: boolean } = {}) {
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
    <footer className="bg-teal-deep text-primary-foreground">
      <div className="border-b border-white/10 bg-gold/95 text-forest-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-3 text-center text-sm font-semibold sm:flex-row sm:text-left">
          <span>100% of your donation goes directly to India — zero deducted for US operations.</span>
          <span className="text-xs font-medium opacity-80">501(c)(3) Tax ID • EIN 84-3593881</span>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="font-display text-xl font-semibold">SERUDS Inc</div>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
            A 501(c)(3) charitable organization based in Land O' Lakes, Florida, raising funds for orphan children, destitute elderly, and women in Kurnool, Andhra Pradesh.
          </p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-primary-foreground/80">
            SERUDS Inc.<br />
            5126 Ballantrae Blvd.<br />
            Land O' Lakes, FL 34638<br />
            <a href="mailto:seruds.inc@gmail.com" className="hover:text-gold">seruds.inc@gmail.com</a><br />
            <a href="tel:+13477174569" className="hover:text-gold">+1-347-717-4569</a>
          </address>
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
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">Follow us on</div>
          <div className="mt-4 flex flex-wrap gap-3 text-primary-foreground/80">
            <a href="https://www.facebook.com/www.serudsindia.org/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold"><Facebook size={20} /></a>
            <a href="https://twitter.com/seruds" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gold"><Twitter size={20} /></a>
            <a href="https://www.youtube.com/channel/UCGjgSth-CNUhd0q6byjaILg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gold"><Youtube size={20} /></a>
            <a href="https://www.linkedin.com/company/seruds" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gold"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/serudsindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold"><Instagram size={20} /></a>
          </div>
          <div className="mt-6">
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
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/60">
        <div>© {new Date().getFullYear()} SERUDS Inc. All rights reserved.</div>
        {showAnanyaCredit && (
          <div className="mt-1">
            Website Development and Digital marketing by{" "}
            <a href="https://www.ananyaseo.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:underline">Ananya SEO</a>
          </div>
        )}
      </div>
    </footer>
  );
}
