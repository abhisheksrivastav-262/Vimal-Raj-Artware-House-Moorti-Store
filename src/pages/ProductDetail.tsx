import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MessageCircle, Phone, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { BUSINESS } from "../config/business";
import { PRODUCTS, getProduct } from "../data/products";
import { waLink, productEnquiryMessage, telLink } from "../utils/whatsapp";
import ProductCard from "../components/ProductCard";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { slug } = useParams();
  const p = slug ? getProduct(slug) : undefined;
  const [img, setImg] = useState(0);
  const [qty, setQty] = useState("");
  const [req, setReq] = useState("");
  if (!p) return <NotFound />;

  const related = PRODUCTS.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);
  const fallback = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 4);
  const show = related.length ? related : fallback;

  return (
    <div className="bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-500 hover:text-brand-orange"><ArrowLeft size={15} /> Back to catalogue</Link>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-4">
          <div>
            <div className="rounded-3xl overflow-hidden bg-white border border-neutral-200 aspect-[4/5]">
              <img src={p.images[img]} alt={p.name} className="w-full h-full object-contain" />
            </div>
            {p.images.length > 1 && (
              <div className="flex gap-2.5 mt-3">
                {p.images.map((s, i) => (
                  <button key={s + i} onClick={() => setImg(i)} aria-label={`View image ${i + 1}`}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${img === i ? "border-brand-orange" : "border-transparent"}`}>
                    <img src={s} alt="" loading="lazy" className="w-full h-full object-contain bg-ivory" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-bronze">{p.category}</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-obsidian mt-2 leading-tight">{p.name}</h1>
            <p className="mt-3 inline-block bg-obsidian text-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Price on Request</p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mt-4">{p.description}</p>
            <div className="bg-white border border-neutral-200 rounded-2xl mt-5 overflow-hidden">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 px-5 pt-4">Available Specifications</h2>
              <ul className="p-5 pt-3 space-y-2.5">
                {p.specs.map((s) => (
                  <li key={s.label} className="flex gap-2 text-sm"><Check size={15} className="text-green-700 shrink-0 mt-0.5" /><span><strong className="text-obsidian">{s.label}:</strong> <span className="text-neutral-600">{s.value}</span></span></li>
                ))}
                <li className="text-xs text-neutral-400 pt-1">Only specifications visible in the store photographs are listed. For more sizes, weights and finishes, please enquire.</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 rounded-2xl p-5 mt-4">
              <h2 className="font-display text-lg font-semibold text-obsidian">Wholesale / Bulk Enquiry</h2>
              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                <label className="text-xs font-semibold">Quantity
                  <input value={qty} onChange={(e) => setQty(e.target.value)} placeholder="e.g. 50 pcs" className="mt-1 w-full border border-neutral-300 rounded-xl px-4 py-2.5 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-gold" />
                </label>
                <label className="text-xs font-semibold">Requirement (optional)
                  <input value={req} onChange={(e) => setReq(e.target.value)} placeholder="City, delivery…" className="mt-1 w-full border border-neutral-300 rounded-xl px-4 py-2.5 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-gold" />
                </label>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5 mt-4">
                <a href={waLink(productEnquiryMessage(p.name, qty, req))} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 bg-[#25D366] text-obsidian font-bold px-6 py-3.5 rounded-full text-sm hover:brightness-95">
                  <MessageCircle size={16} /> WhatsApp Enquiry
                </a>
                <a href={telLink(BUSINESS.phones[0])} className="flex-1 inline-flex justify-center items-center gap-2 border border-obsidian font-semibold px-6 py-3.5 rounded-full text-sm">
                  <Phone size={15} /> +91 {BUSINESS.phones[0]}
                </a>
              </div>
              <p className="text-xs text-neutral-500 mt-3">Your product name{qty ? ", quantity" : ""} is prefilled in the WhatsApp message.</p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian">Related Products</h2>
            <Link to="/products" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">All <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-6">
            {show.map((r) => <ProductCard key={r.slug} p={r} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
