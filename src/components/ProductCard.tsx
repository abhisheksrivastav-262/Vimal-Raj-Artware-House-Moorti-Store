import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import type { Product } from "../data/products";
import { waLink, productEnquiryMessage } from "../utils/whatsapp";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/70 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
      <Link to={`/products/${p.slug}`} className="img-zoom block overflow-hidden aspect-[4/5] bg-ivory relative" aria-label={p.name}>
        <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
        {p.badge && <span className="absolute top-3 left-3 bg-gold text-obsidian text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{p.badge}</span>}
      </Link>
      <div className="p-3 sm:p-5 flex flex-col flex-1 min-w-0">
        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-bronze truncate">{p.category}</p>
        <Link to={`/products/${p.slug}`} className="font-display font-semibold text-obsidian text-[15px] sm:text-lg leading-snug mt-1 hover:text-brand-orange transition-colors line-clamp-2">
          {p.name}
        </Link>
        <p className="text-[11px] sm:text-xs text-neutral-500 mt-1.5">Price on Request</p>
        <div className="flex flex-col min-[420px]:flex-row gap-2 mt-3 sm:mt-4">
          <Link to={`/products/${p.slug}`} className="flex-1 inline-flex items-center justify-center gap-1 border border-obsidian text-obsidian text-[13px] font-semibold px-2 py-2.5 rounded-full hover:bg-obsidian hover:text-white transition-colors whitespace-nowrap min-h-[44px]">
            View <ArrowRight size={14} className="shrink-0" />
          </Link>
          <a href={waLink(productEnquiryMessage(p.name))} target="_blank" rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-brand-blue text-white text-[13px] font-semibold px-2 py-2.5 rounded-full hover:bg-obsidian transition-colors whitespace-nowrap min-h-[44px]">
            <MessageCircle size={14} className="shrink-0" /> Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
