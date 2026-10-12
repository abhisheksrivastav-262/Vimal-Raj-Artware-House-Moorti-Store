import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { BUSINESS } from "../config/business";
import Reveal from "../components/Reveal";

const FAQS = [
  { q: "What product categories do you offer?", a: "Brass statues, animal fine handicrafts, home decorated items, locks, furniture, decorative artware, and sculptures / ornamental handicrafts. Designs for locks and furniture are shared on enquiry." },
  { q: "How do I enquire for wholesale or bulk orders?", a: "Use the Wholesale & Export page form or WhatsApp us directly. Share your category, approximate quantity, company name and requirement details — we reply with price and availability." },
  { q: "Is there a minimum order quantity?", a: "Minimum quantities are not published on this website. Please contact us with your requirement and we will confirm what is possible." },
  { q: "Are product specifications (weight / height) confirmed?", a: "Where a photo shows a weight or height label, we list it on that product page. For any other size, weight or finish, please enquire with a photo reference." },
  { q: "How is pricing shared?", a: "All catalogue items show “Price on Request”. Tap Enquire on any product — your WhatsApp message arrives prefilled with the product name — and we share the price, specifications and availability." },
  { q: "Do you ship internationally?", a: "We are listed as Manufacturer, Supplier & Exporter. Shipping, delivery timelines and charges depend on the order — please contact us to confirm before assuming." },
  { q: "Where are you located and how do I contact you?", a: `We are at ${BUSINESS.address}. Contact persons: ${BUSINESS.contacts.join(" / ")}. Call ${BUSINESS.phones.map((p) => "+91 " + p).join(", ")} or email ${BUSINESS.email}.` },
  { q: "Can I visit the store?", a: "Yes — please call ahead on any of our numbers so someone can receive you and keep your requested designs ready." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="bg-ivory">
      <section className="bg-obsidian text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">FAQ</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-2">Frequently Asked Questions</h1>
          <p className="text-ivory/65 text-sm sm:text-base mt-3">Factual answers only — for anything unconfirmed, we ask you to contact the business.</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q}>
              <div className="bg-white border border-neutral-200 rounded-2xl mb-3 overflow-hidden">
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5">
                  <span className="font-display font-semibold text-obsidian text-sm sm:text-lg">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 transition-transform ${isOpen ? "rotate-180 text-brand-orange" : "text-neutral-400"}`} />
                </button>
                <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden"><p className="px-5 sm:px-6 pb-5 text-sm text-neutral-600 leading-relaxed">{f.a}</p></div>
                </div>
              </div>
            </Reveal>
          );
        })}
        <p className="text-center text-sm text-neutral-500 mt-8">Still unsure? <Link to="/contact" className="text-brand-orange font-semibold">Contact us</Link> or <Link to="/wholesale-export" className="text-brand-orange font-semibold">send a wholesale enquiry</Link>.</p>
      </div>
    </div>
  );
}
