import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "../config/business";
import { telLink } from "../utils/whatsapp";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open ]);

  return (
    <>
      <div className="bg-obsidian text-ivory text-center text-[11px] sm:text-xs tracking-[0.18em] uppercase py-2 px-3">
        <span className="text-gold font-semibold">{BUSINESS.announcement}</span>
        <span className="hidden sm:inline text-ivory/60"> &nbsp;•&nbsp; {BUSINESS.name}, Aligarh</span>
      </div>
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur border-b transition-shadow ${scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.10)]" : "shadow-none"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20 gap-3">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0" aria-label="Moorti Store home">
            <img src={BUSINESS.logo} alt="Moorti Store logo — Crafting Happiness Everyday" className="h-11 sm:h-14 w-auto object-contain shrink-0" width={120} height={56} />
            <span className="leading-tight min-w-0">
              <span className="block font-display font-bold text-obsidian text-sm sm:text-lg truncate">Vimal Raj Artware House</span>
              <span className="block text-[10px] sm:text-xs tracking-[0.22em] uppercase text-bronze font-semibold">Moorti Store</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium" aria-label="Primary">
            {NAV_LINKS.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `hover:text-brand-orange transition-colors ${isActive ? "text-brand-orange" : "text-obsidian"}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={telLink(BUSINESS.phones[0])} className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-obsidian hover:text-brand-orange">
              <Phone size={15} /> +91 {BUSINESS.phones[0]}
            </a>
            <Link to="/wholesale-export" className="hidden sm:inline-flex bg-brand-orange hover:bg-obsidian text-white text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-colors">
              Enquire Now
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2.5 rounded-full border border-neutral-200 text-obsidian" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mobile-menu-open absolute top-full left-0 right-0 bg-white border-b shadow-2xl max-h-[62vh] overflow-y-auto">
            <nav className="px-5 py-4 flex flex-col" aria-label="Mobile">
              {NAV_LINKS.map((n, i) => (
                <NavLink key={n.to} to={n.to} style={{ animationDelay: `${i * 40}ms` }}
                  className={({ isActive }) => `mobile-menu-open py-3 border-b border-neutral-100 font-display text-lg ${isActive ? "text-brand-orange" : "text-obsidian"}`}>
                  {n.label}
                </NavLink>
              ))}
              <div className="flex gap-2 py-4">
                <Link to="/wholesale-export" className="flex-1 text-center bg-brand-orange text-white font-semibold px-4 py-3 rounded-full text-sm">Enquire Now</Link>
                <a href={telLink(BUSINESS.phones[0])} className="flex-1 text-center border border-obsidian text-obsidian font-semibold px-4 py-3 rounded-full text-sm">Call Now</a>
              </div>
              <button onClick={() => setOpen(false)} className="mx-auto mb-3 text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-1">
                <X size={14} /> Close
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
