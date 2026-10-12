import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { BUSINESS, NAV_LINKS, CATEGORIES } from "../config/business";
import { telLink, waLink } from "../utils/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-obsidian text-ivory mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={BUSINESS.logo} alt="Moorti Store logo" className="h-16 w-auto object-contain bg-white rounded-xl px-3 py-1.5" loading="lazy" />
          <p className="font-display font-bold text-lg mt-4">{BUSINESS.name}</p>
          <p className="text-gold text-sm tracking-[0.2em] uppercase font-semibold mt-1">{BUSINESS.brand} • {BUSINESS.tagline}</p>
          <p className="text-ivory/60 text-sm mt-3 leading-relaxed">{BUSINESS.type}<br />Export Quality brass statues, handicrafts & artware.</p>
        </div>
        <div>
          <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-ivory/75 hover:text-gold transition-colors">{n.label}</Link></li>
            ))}
            <li><Link to="/faq" className="text-ivory/75 hover:text-gold transition-colors">FAQ</Link></li>
            <li><Link to="/privacy-policy" className="text-ivory/75 hover:text-gold transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gold">Categories</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c}><Link to={`/products?category=${encodeURIComponent(c)}`} className="text-ivory/75 hover:text-gold transition-colors">{c}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {BUSINESS.phones.map((p) => (
              <li key={p}>
                <a href={telLink(p)} className="flex items-center gap-2 text-ivory/80 hover:text-gold"><Phone size={14} className="text-gold" /> +91 {p}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 text-ivory/80 hover:text-gold break-all"><Mail size={14} className="text-gold shrink-0" /> {BUSINESS.email}</a>
            </li>
            <li className="flex gap-2 text-ivory/70 leading-relaxed"><MapPin size={15} className="text-gold shrink-0 mt-0.5" /> {BUSINESS.address}</li>
            <li>
              <a href={waLink(`Hello ${BUSINESS.name}, I want to enquire about your artware collection.`)} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-obsidian font-semibold text-sm px-4 py-2.5 rounded-full mt-1">
                <MessageCircle size={15} /> WhatsApp Enquiry
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ivory/50">
          <p>© {year} {BUSINESS.name} • {BUSINESS.brand}. All rights reserved.</p>
          <p>{BUSINESS.website} • Aligarh, Uttar Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
}
