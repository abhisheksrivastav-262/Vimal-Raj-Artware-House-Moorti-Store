import { Phone, Mail, MapPin, MessageCircle, Globe } from "lucide-react";
import { BUSINESS } from "../config/business";
import { waLink, telLink } from "../utils/whatsapp";
import Reveal, { SectionHeading } from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&output=embed`;
  return (
    <div className="bg-ivory">
      <section className="bg-obsidian text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Contact Us</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-2">Visit, Call or WhatsApp</h1>
          <p className="text-ivory/65 text-sm sm:text-base mt-3">Contact persons: {BUSINESS.contacts.join(" / ")} • {BUSINESS.name}, Aligarh</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Reveal>
            <div className="bg-white border border-neutral-200 rounded-3xl p-5 sm:p-7">
              <SectionHeading eyebrow="Phone" title="Click to Call" />
              <div className="grid gap-2.5 mt-5">
                {BUSINESS.phones.map((p) => (
                  <a key={p} href={telLink(p)} className="flex items-center justify-between bg-ivory border border-neutral-200 rounded-2xl px-5 py-4 hover:shadow-md transition-shadow">
                    <span className="flex items-center gap-3 font-bold text-obsidian"><span className="w-10 h-10 rounded-full bg-obsidian text-gold flex items-center justify-center"><Phone size={16} /></span> +91 {p}</span>
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Call</span>
                  </a>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5 mt-2.5">
                <a href={waLink(`Hello ${BUSINESS.name}, I have a question about your products.`)} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 bg-[#25D366] font-bold text-sm px-5 py-3.5 rounded-full"><MessageCircle size={16} /> WhatsApp</a>
                <a href={`mailto:${BUSINESS.email}`} className="inline-flex justify-center items-center gap-2 border border-obsidian font-bold text-sm px-5 py-3.5 rounded-full"><Mail size={15} /> Email Us</a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-obsidian text-ivory rounded-3xl p-5 sm:p-7">
              <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2"><MapPin size={14} /> Address</p>
              <p className="font-display text-lg sm:text-xl mt-2 leading-relaxed">{BUSINESS.address}</p>
              <p className="text-ivory/60 text-sm mt-3 flex items-center gap-2"><Globe size={14} /> {BUSINESS.website} • {BUSINESS.email}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden">
              <iframe title="Map — Vimal Raj Artware House, Aligarh" src={mapSrc} className="w-full h-64 sm:h-72" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <p className="text-[11px] text-neutral-500 px-5 py-3">Map is centred on the business address text. If the pin is imprecise, please call for directions.</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <div className="bg-white border border-neutral-200 rounded-3xl p-5 sm:p-8 lg:sticky lg:top-28">
            <SectionHeading eyebrow="Write to Us" title="Contact Form" sub="Validated form — opens WhatsApp with your message. We reply within business hours." />
            <div className="mt-6"><EnquiryForm compact /></div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
