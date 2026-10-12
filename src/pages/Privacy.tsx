import { BUSINESS } from "../config/business";

export default function Privacy() {
  return (
    <div className="bg-ivory">
      <section className="bg-obsidian text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Legal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-2">Privacy Policy</h1>
          <p className="text-ivory/60 text-sm mt-3">Last updated: October 2026 • [Editable — confirm with business owner]</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 bg-white my-8 rounded-3xl border border-neutral-200">
        <div className="space-y-6 text-sm sm:text-base text-neutral-600 leading-relaxed px-2 sm:px-4 py-2">
          <p>This website for <strong className="text-obsidian">{BUSINESS.name} ({BUSINESS.brand})</strong> describes what data the site itself collects. It does not use accounts, newsletters, analytics, advertising cookies or a backend database in its current implementation.</p>
          <h2 className="font-display text-xl text-obsidian font-semibold">1. Enquiry forms & WhatsApp handoff</h2>
          <p>Contact, product and wholesale forms are validated in your browser. On submit, the site opens WhatsApp (wa.me) with your message prefilled. Form details are <strong>not stored on this website</strong> — they are only transmitted to WhatsApp if you press send there, under WhatsApp's own privacy policy.</p>
          <h2 className="font-display text-xl text-obsidian font-semibold">2. What we receive</h2>
          <p>When you message us, we receive whatever you choose to share — typically name, phone, email, company, country, category, quantity and requirement details — so we can respond with price and availability.</p>
          <h2 className="font-display text-xl text-obsidian font-semibold">3. Cookies & local data</h2>
          <p>This site does not set advertising or tracking cookies. [Editable: add analytics/cookie details here if you enable them later.]</p>
          <h2 className="font-display text-xl text-obsidian font-semibold">4. Third parties</h2>
          <p>WhatsApp (Meta), Google Fonts and Google Maps embeds are the only third-party services touched by this site. Their own policies apply when you use them. [Editable: list CRM / email provider if integrated later.]</p>
          <h2 className="font-display text-xl text-obsidian font-semibold">5. Contact</h2>
          <p>For privacy questions or deletion requests, contact {BUSINESS.email} or +91 {BUSINESS.phones[0]}. [Editable: business registration / grievance details.]</p>
        </div>
      </div>
    </div>
  );
}
