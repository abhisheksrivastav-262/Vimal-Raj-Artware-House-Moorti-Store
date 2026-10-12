import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { BUSINESS, CATEGORIES } from "../config/business";
import { telLink } from "../utils/whatsapp";
import Reveal, { SectionHeading } from "../components/Reveal";

export default function About() {
  return (
    <div>
      <section className="bg-obsidian text-ivory texture-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">About Us</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 max-w-3xl leading-tight">Vimal Raj Artware House — <span className="text-gold-light">Moorti Store</span></h1>
          <p className="text-ivory/70 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">Manufacturer & Supplier of export quality brass statues, animal fine handicrafts, home decorated items, locks & furniture — based in Aligarh, Uttar Pradesh, India.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <img src="/assets/krishna-venugopal-prabhavali-31inch.jpg" alt="Krishna brass statue at Vimal Raj Artware House" loading="lazy" className="rounded-3xl object-cover aspect-[4/5] w-full" />
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading eyebrow="Our Business" title="A House of Brass & Blessings" />
          <div className="mt-5 space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            <p><strong className="text-obsidian">Vimal Raj Artware House</strong> is a manufacturer, supplier and exporter of Indian artware, trading online as <strong className="text-obsidian">Moorti Store</strong> with the tagline <em>“{BUSINESS.tagline}”</em>.</p>
            <p>Our shelves carry brass statues of Radha Krishna, Tirupati Balaji, Hanuman and Durga, alongside gift boxes with brass accents, framed wall art, Gauri busts on wooden brackets, and desk artware such as owl and four-face pen holders.</p>
            <p>We serve walk-in customers as well as retailers, wholesalers and international buyers seeking export-quality finishing. For sizes, weights and bulk prices, please enquire with a photo reference — specifications shown on this website are taken directly from the photographed product labels.</p>
          </div>
          <div className="mt-6 flex items-start gap-2.5 text-sm text-neutral-600 bg-white border border-neutral-200 rounded-2xl p-4">
            <MapPin size={17} className="text-brand-orange shrink-0 mt-0.5" />
            <span>{BUSINESS.address}<br /><span className="text-neutral-500">Contact persons: {BUSINESS.contacts.join(" / ")}</span></span>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to="/wholesale-export" className="inline-flex justify-center items-center gap-2 bg-brand-orange text-white font-semibold px-7 py-3.5 rounded-full text-sm">Trade Enquiry <ArrowRight size={15} /></Link>
            <a href={telLink(BUSINESS.phones[0])} className="inline-flex justify-center items-center gap-2 border border-obsidian font-semibold px-7 py-3.5 rounded-full text-sm"><Phone size={15} /> +91 {BUSINESS.phones[0]}</a>
          </div>
        </Reveal>
      </section>

      <section className="bg-white border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <SectionHeading eyebrow="What We Offer" title="Product Range" sub="Catalogue entries are editable samples based on photographed pieces. Locks and furniture designs are shared on enquiry." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
            {CATEGORIES.map((c) => (
              <Link key={c} to={`/products?category=${encodeURIComponent(c)}`} className="bg-ivory border border-neutral-200 rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-shadow">
                <span className="w-1.5 h-1.5 rounded-full bg-gold block mb-3" />
                <span className="font-display font-semibold text-obsidian text-sm sm:text-base leading-snug block">{c}</span>
                <span className="text-brand-orange text-xs font-semibold mt-2 inline-flex items-center gap-1">View range <ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid sm:grid-cols-3 gap-4">
        {[
          { img: "/assets/brass-cow-calf-frame.jpg", t: "Home wall art", d: "Framed brass accents for pooja corners and living rooms." },
          { img: "/assets/gift-box-peacock-brass-spoon.jpg", t: "Festive gifting", d: "Ready gift boxes with brass serveware for bulk orders." },
          { img: "/assets/pen-holder-owl-brass.jpg", t: "Desk artware", d: "Small brass handicrafts ideal for retail and gifting." },
        ].map((c) => (
          <Reveal key={c.t}>
            <div className="rounded-2xl overflow-hidden bg-obsidian text-white">
              <img src={c.img} alt={c.t} loading="lazy" className="w-full aspect-square object-cover object-top" />
              <div className="p-5"><h3 className="font-display text-lg font-semibold">{c.t}</h3><p className="text-white/60 text-sm mt-1">{c.d}</p></div>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
