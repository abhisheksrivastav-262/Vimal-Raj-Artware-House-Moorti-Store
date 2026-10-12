import { useState } from "react";
import { BUSINESS } from "../config/business";
import { waLink } from "../utils/whatsapp";

function isEmail(v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
function isPhone(v: string) { return /^[+\d][\d\s-]{6,16}$/.test(v.trim()); }

export function validateEnquiry(d: Record<string, string>, required: string[]): Record<string, string> {
  const errs: Record<string, string> = {};
  required.forEach((k) => { if (!d[k]?.trim()) errs[k] = "This field is required."; });
  if (d.email && !isEmail(d.email)) errs.email = "Enter a valid email address.";
  if ((d.phone || required.includes("phone")) && d.phone && !isPhone(d.phone)) errs.phone = "Enter a valid phone number.";
  return errs;
}

export default function EnquiryForm({ compact = false, presetMessage }: { compact?: boolean; presetMessage?: (d: Record<string, string>) => string }) {
  const [d, setD] = useState({ name: "", phone: "", email: "", message: "" });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setD({ ...d, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const required = ["name", "phone", "message"];
    const er = validateEnquiry(d, required);
    setErrs(er);
    if (Object.keys(er).length) return;
    const msg = presetMessage
      ? presetMessage(d)
      : `Hello ${BUSINESS.name}, my name is ${d.name} (${d.phone}${d.email ? ", " + d.email : ""}). ${d.message}`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  const cls = "w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-white";
  return (
    <form onSubmit={submit} noValidate className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider" htmlFor="ef-name">Full Name *</label>
        <input id="ef-name" className={cls} value={d.name} onChange={set("name")} placeholder="Your name" autoComplete="name" />
        {errs.name && <p className="text-red-600 text-xs mt-1">{errs.name}</p>}
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider" htmlFor="ef-phone">Phone / WhatsApp *</label>
        <input id="ef-phone" className={cls} value={d.phone} onChange={set("phone")} placeholder="+91 XXXXX XXXXX" autoComplete="tel" inputMode="tel" />
        {errs.phone && <p className="text-red-600 text-xs mt-1">{errs.phone}</p>}
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <label className="text-xs font-semibold uppercase tracking-wider" htmlFor="ef-email">Email (optional)</label>
        <input id="ef-email" className={cls} value={d.email} onChange={set("email")} placeholder="you@example.com" autoComplete="email" inputMode="email" />
        {errs.email && <p className="text-red-600 text-xs mt-1">{errs.email}</p>}
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <label className="text-xs font-semibold uppercase tracking-wider" htmlFor="ef-msg">Requirement Details *</label>
        <textarea id="ef-msg" className={`${cls} min-h-[110px]`} value={d.message} onChange={set("message")} placeholder="Which products, quantity, city…" />
        {errs.message && <p className="text-red-600 text-xs mt-1">{errs.message}</p>}
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <button type="submit" className="w-full sm:w-auto bg-brand-orange hover:bg-obsidian text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm">
          Send Enquiry via WhatsApp
        </button>
        <p className="text-xs text-neutral-500 mt-3">Submitting opens WhatsApp with your message prefilled. We do not store your details on this website — your message is only sent if you press send in WhatsApp.</p>
      </div>
    </form>
  );
}
