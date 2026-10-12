import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { BUSINESS, CATEGORIES } from "../config/business";
import { waLink, bulkEnquiryMessage, telLink } from "../utils/whatsapp";
import { validateEnquiry } from "../components/EnquiryForm";
import Reveal, { SectionHeading } from "../components/Reveal";

export default function Wholesale() {
  const [params] = useSearchParams();
  const [d, setD] = useState({
    name: "", company: "", phone: "", email: "", country: "India",
    category: params.get("category") ?? CATEGORIES[0], quantity: "", details: "",
  });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const set = (k: keyof typeof d) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setD({ ...d, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er = validateEnquiry(d, ["name", "phone", "category", "quantity", "details"]);
    if (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) er.email = "Enter a valid email address.";
    setErrs(er);
    if (Object.keys(er).length) return;
    window.open(waLink(bulkEnquiryMessage({ name: d.name, company: d.company, category: d.category, quantity: d.quantity, country: d.country, details: d.details })), "_blank", "noopener");
  };

  const inp = "w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold";

  return (
    <div>
      <section className="relative bg-obsidian text-ivory overflow-hidden">
        <img src="/assets/radha-krishna-meenakari-group.jpg" alt="Bulk brass statues" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Trade • Bulk • Export</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3">Wholesale & Export Enquiries</h1>
          <p className="text-ivory/70 mt-4 max-w-2xl text-sm sm:text-base">For retailers, distributors, bulk purchasers and international buyers. Share your category and quantity — we reply with price and availability. We do not promise shipping timelines or minimum quantities on this page; please confirm directly.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <Reveal>
          <SectionHeading eyebrow="How It Works" title="Send Your Requirement" sub="Fill the form — it opens WhatsApp with everything prefilled. Prefer talking? Call any number below." />
          <div className="mt-6 space-y-3">
            {BUSINESS.phones.map((p) => (
              <a key={p} href={telLink(p)} className="flex items-center gap-3 bg-white border border-neutral-200 rounded-2xl p-4 text-sm font-bold text-obsidian"><Phone size={16} className="text-brand-orange" /> +91 {p}</a>
            ))}
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 bg-white border border-neutral-200 rounded-2xl p-4 text-sm font-bold text-obsidian break-all"><Mail size={16} className="text-brand-blue shrink-0" /> {BUSINESS.email}</a>
            <a href={waLink(`Hello ${BUSINESS.name}, I want to place a bulk enquiry.`)} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#25D366] rounded-2xl p-4 text-sm font-bold text-obsidian"><MessageCircle size={16} /> WhatsApp the store</a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <form onSubmit={submit} noValidate className="bg-white border border-neutral-200 rounded-3xl p-5 sm:p-8 grid sm:grid-cols-2 gap-4">
            {([
              ["name", "Full Name *", "text", "Your name"],
              ["company", "Company Name", "text", "Shop / firm (optional)"],
              ["phone", "Phone / WhatsApp *", "tel", "+91 XXXXX XXXXX"],
              ["email", "Email", "email", "you@example.com"],
              ["country", "Country", "text", "India"],
              ["quantity", "Approximate Quantity *", "text", "e.g. 100 pcs"],
            ] as const).map(([k, label, type, ph]) => (
              <div key={k}>
                <label className="text-xs font-semibold uppercase tracking-wider">{label}
                  <input type={type} value={d[k]} onChange={set(k)} placeholder={ph} className={`${inp} mt-1.5 font-normal`} />
                </label>
                {errs[k] && <p className="text-red-600 text-xs mt-1">{errs[k]}</p>}
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wider">Product Category *
                <select value={d.category} onChange={set("category")} className={`${inp} mt-1.5 font-normal`}>
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              {errs.category && <p className="text-red-600 text-xs mt-1">{errs.category}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wider">Requirement Details *
                <textarea value={d.details} onChange={set("details")} placeholder="Sizes, finish, city, delivery needs…" className={`${inp} mt-1.5 min-h-[110px] font-normal`} />
              </label>
              {errs.details && <p className="text-red-600 text-xs mt-1">{errs.details}</p>}
            </div>
            <div className="sm:col-span-2">
              <button className="w-full bg-brand-orange hover:bg-obsidian text-white font-semibold py-3.5 rounded-full text-sm transition-colors">Send Bulk Enquiry via WhatsApp</button>
              <p className="text-xs text-neutral-500 mt-3">This opens WhatsApp with your category, quantity, company and requirements prefilled. Nothing is stored on this website.</p>
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
