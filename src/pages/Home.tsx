import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MessageCircle, Factory, Award, Package } from "lucide-react";
import { BUSINESS, CATEGORIES } from "../config/business";
import { PRODUCTS } from "../data/products";
import { telLink, waLink } from "../utils/whatsapp";
import ProductCard from "../components/ProductCard";
import Reveal, { SectionHeading } from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";

const CATEGORY_CARDS = [
  { name: "Brass Statues", img: "/assets/radha-krishna-gold-30inch.jpg", desc: "Radha Krishna, Balaji, Hanuman, Durga" },
  { name: "Animal Fine Handicrafts", img: "/assets/pen-holder-owl-brass.jpg", desc: "Owl, elephants & fine animal artware" },
  { name: "Home Decor Items", img: "/assets/brass-cow-calf-frame.jpg", desc: "Framed art, brackets & wall frames" },
  { name: "Decorative Artware", img: "/assets/gift-box-peacock-brass-spoon.jpg", desc: "Gift boxes, pen holders & mandirs" },
  { name: "Locks", img: "/assets/brass-ram-darbar-mandir.jpg", desc: "Traditional artware locks — enquire" },
  { name: "Furniture", img: "/assets/brass-gauri-bust-blue-bracket.jpg", desc: "Accent & carved pieces — enquire" },
  { name: "Sculptures and Ornamental Handicrafts", img: "/assets/krishna-venugopal-prabhavali-31inch.jpg", desc: "Prabhavali & ornamental sculpture" },
];

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-obsidian text-ivory overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/radha-krishna-gold-30inch.jpg" alt="Brass Radha Krishna statues — Vimal Raj Artware House" className="hero-img w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/30" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-obsidian to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
          <p className="hero-anim hero-anim-1 text-gold text-[11px] sm:text-xs font-bold tracking-[0.3em] uppercase">Aligarh • India — Manufacturer • Supplier • Exporter</p>
          <h1 className="hero-anim hero-anim-2 font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mt-4 max-w-3xl">
            Timeless Craftsmanship.<br /><span className="text-gold-light">Exceptional Artware.</span>
          </h1>
          <p className="hero-anim hero-anim-3 mt-5 max-w-xl text-ivory/75 text-sm sm:text-lg leading-relaxed">
            Discover finely crafted brass statues, decorative handicrafts, and distinctive artware from Vimal Raj Artware House, Aligarh, India.
          </p>
          <div className="hero-anim hero-anim-4 mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/products" className="inline-flex items-center justify-center gap-2 bg-gold text-obsidian font-semibold px-7 py-3.5 rounded-full hover:bg-ivory transition-colors text-sm">Explore Our Collection <ArrowRight size={16} /></Link>
            <Link to="/wholesale-export" className="inline-flex items-center justify-center gap-2 border border-ivory/40 text-ivory font-semibold px-7 py-3.5 rounded-full hover:bg-ivory hover:text-obsidian transition-colors text-sm">Enquire for Wholesale</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm text-ivory/60">
            <span className="flex items-center gap-2"><Factory size={15} className="text-gold" /> Export Quality</span>
            <span className="flex items-center gap-2"><Award size={15} className="text-gold" /> Brass • Decor • Gifting</span>
            <span className="flex items-center gap-2"><Package size={15} className="text-gold" /> Bulk & Retail Enquiries</span>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="bg-gold text-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] font-semibold">
          <p>Retailers • Wholesalers • International Buyers — send your requirement on WhatsApp.</p>
          <a href={waLink(`Hello ${BUSINESS.name}, I want wholesale prices for your artware collection.`)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 underline underline-offset-4"><MessageCircle size={14} /> Chat now</a>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <SectionHeading eyebrow="Our Range" title="Shop by Category" sub="Real photographs from our Aligarh collection. Locks and furniture designs are shared on enquiry." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-8">
          {CATEGORY_CARDS.slice(0, 4).map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <Link to={`/products?category=${encodeURIComponent(c.name)}`} className="img-zoom group block rounded-2xl overflow-hidden relative aspect-square sm:aspect-[3/4] bg-obsidian">
                <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover object-top opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />
                <div className="absolute bottom-0 p-4 sm:p-5">
                  <p className="text-gold text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">Export Quality</p>
                  <h3 className="font-display text-white text-base sm:text-xl font-semibold leading-snug">{c.name}</h3>
                  <p className="text-white/60 text-[11px] sm:text-xs mt-1">{c.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-3 sm:mt-5">
          {CATEGORY_CARDS.slice(4).map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <Link to={c.name === "Sculptures and Ornamental Handicrafts" ? `/products?category=${encodeURIComponent(c.name)}` : "/wholesale-export"} className="group flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl p-3 pr-5 hover:shadow-lg transition-shadow">
                <img src={c.img} alt={c.name} loading="lazy" className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0" />
                <span>
                  <span className="font-display font-semibold text-obsidian text-sm sm:text-base">{c.name}</span>
                  <span className="block text-xs text-neutral-500 mt-1">{c.desc}</span>
                  <span className="inline-flex items-center gap-1 text-brand-orange text-xs font-semibold mt-1.5">Enquire <ArrowRight size={12} /></span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-white border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading eyebrow="Featured Collection" title="Signature Brass Pieces" sub="Selected bestsellers photographed at our store. All prices on request." />
            <Link to="/products" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange shrink-0">View all <ArrowRight size={15} /></Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-8">
            {featured.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">View all products <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* MANUFACTURER INTRO */}
      <section className="bg-obsidian text-ivory texture-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-gold">{BUSINESS.name}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mt-3">Manufacturer & Supplier of <span className="text-gold-light">Export Quality</span> Artware</h2>
            <p className="text-ivory/70 text-sm sm:text-base leading-relaxed mt-5">
              From brass statues and animal fine handicrafts to home decorated items, locks and furniture —
              our Moorti Store collection in Aligarh serves retailers, wholesalers and international buyers
              looking for authentic Indian craftsmanship.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ivory/80">
              {CATEGORIES.map((c) => <li key={c} className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> {c}</li>)}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/about" className="inline-flex justify-center bg-gold text-obsidian font-semibold px-7 py-3 rounded-full text-sm hover:bg-ivory transition-colors">About Our House</Link>
              <Link to="/craftsmanship" className="inline-flex justify-center border border-ivory/30 px-7 py-3 rounded-full text-sm font-semibold hover:bg-ivory hover:text-obsidian transition-colors">See Craftsmanship</Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img src="/assets/hanuman-brass-4kg-9inch.jpg" alt="Brass Hanuman moorti" loading="lazy" className="rounded-2xl object-cover object-top aspect-square sm:aspect-[3/4] w-full" />
              <img src="/assets/gift-box-brass-shankh-jars.jpg" alt="Brass gift box hamper" loading="lazy" className="rounded-2xl object-cover object-center aspect-square sm:aspect-[3/4] w-full mt-6" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VIDEO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <SectionHeading eyebrow="In Motion" title="Watch Our Collection Up Close" sub="Actual shop videos — brass finishing, sizes and gift packing as customers see them." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8">
          {[
            { src: "/assets/workshop-video-01.mp4", t: "Workshop glimpses — brass artware" },
            { src: "/assets/crafting-video-02.mp4", t: "Crafting & finishing close-ups" },
            { src: "/assets/finishing-video-03.mp4", t: "Display — export quality pieces" },
          ].map((v) => (
            <Reveal key={v.src}>
              <figure className="rounded-2xl overflow-hidden bg-obsidian border border-neutral-200">
                <video src={v.src} controls preload="metadata" playsInline className="w-full h-auto max-h-[70vh] object-contain bg-black" />
                <figcaption className="text-xs text-ivory/70 px-4 py-3">{v.t}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-ivory border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading eyebrow="Gallery" title="A Glimpse of the Shelves" />
            <Link to="/gallery" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange shrink-0">Open gallery <ArrowRight size={15} /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mt-8">
            {PRODUCTS.slice(0, 6).map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="img-zoom rounded-xl overflow-hidden aspect-square block">
                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="relative overflow-hidden">
        <img src="/assets/radha-krishna-meenakari-group.jpg" alt="Bulk brass statues" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-obsidian/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <Reveal>
            <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Retailers • Wholesalers • International Buyers</p>
            <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl mt-3">Bulk & Export Enquiries Welcome</h2>
            <p className="text-white/70 text-sm sm:text-base mt-4 max-w-2xl mx-auto">Share your category, quantity and city — we respond on phone or WhatsApp with price and availability.</p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/wholesale-export" className="bg-brand-orange text-white font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-white hover:text-obsidian transition-colors">Start Bulk Enquiry</Link>
              <a href={telLink(BUSINESS.phones[0])} className="inline-flex justify-center items-center gap-2 border border-white/40 text-white font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-white hover:text-obsidian transition-colors"><Phone size={15} /> +91 {BUSINESS.phones[0]}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <SectionHeading eyebrow="Visit / Call" title="Talk to Raj Kumar & Yash Raj" sub={`${BUSINESS.address}. Tap to call or send your requirement below.`} />
          <div className="grid sm:grid-cols-2 gap-3 mt-7">
            {BUSINESS.phones.map((p) => (
              <a key={p} href={telLink(p)} className="flex items-center gap-3 bg-white border border-neutral-200 rounded-2xl p-4 hover:shadow-lg transition-shadow">
                <span className="w-10 h-10 rounded-full bg-obsidian text-gold flex items-center justify-center shrink-0"><Phone size={16} /></span>
                <span><span className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">Click to call</span><span className="font-bold text-obsidian">+91 {p}</span></span>
              </a>
            ))}
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 bg-white border border-neutral-200 rounded-2xl p-4 hover:shadow-lg transition-shadow sm:col-span-2">
              <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0"><Mail size={16} /></span>
              <span className="min-w-0"><span className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">Email</span><span className="font-bold text-obsidian break-all text-sm">{BUSINESS.email}</span></span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="bg-white border border-neutral-200 rounded-3xl p-5 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-obsidian">Quick Enquiry</h3>
            <p className="text-sm text-neutral-500 mt-1 mb-5">We reply on WhatsApp — usually within business hours.</p>
            <EnquiryForm compact />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
