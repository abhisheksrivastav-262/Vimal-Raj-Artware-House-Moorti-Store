import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, PackageSearch } from "lucide-react";
import { CATEGORIES } from "../config/business";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("category") ?? "All";
  const [cat, setCat] = useState(initialCat);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("featured");

  const list = useMemo(() => {
    let l = PRODUCTS.filter((p) => (cat === "All" ? true : p.category === cat));
    if (q.trim()) {
      const s = q.toLowerCase();
      l = l.filter((p) => (p.name + " " + p.category + " " + p.description).toLowerCase().includes(s));
    }
    if (sort === "name") l = [...l].sort((a, b) => a.name.localeCompare(b.name));
    return l;
  }, [cat, q, sort]);

  const pick = (c: string) => { setCat(c); setParams(c === "All" ? {} : { category: c }); };

  return (
    <div className="bg-ivory">
      <section className="bg-obsidian text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Catalogue</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-2">Products</h1>
          <p className="text-ivory/65 text-sm sm:text-base mt-3 max-w-2xl">Real store photographs. Sample catalogue entries — all prices on request. Locks & furniture designs shared on enquiry.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row gap-3 lg:items-center">
          <label className="flex items-center gap-2 border border-neutral-300 rounded-full px-4 py-2.5 flex-1 bg-ivory">
            <Search size={16} className="text-neutral-500 shrink-0" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search statues, gift boxes, pen holders…" className="bg-transparent outline-none text-sm w-full" aria-label="Search products" />
          </label>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-neutral-300 rounded-full px-4 py-2.5 text-sm bg-white" aria-label="Sort products">
            <option value="featured">Sort: Featured</option>
            <option value="name">Sort: Name A–Z</option>
          </select>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar mt-4 pb-1" role="tablist" aria-label="Category filters">
          {["All", ...CATEGORIES].map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => pick(c)}
              className={`whitespace-nowrap text-[13px] font-semibold px-4 py-2.5 rounded-full border transition-colors ${cat === c ? "bg-obsidian text-gold border-obsidian" : "bg-white text-obsidian border-neutral-300 hover:border-obsidian"}`}>
              {c}
            </button>
          ))}
        </div>

        <p className="text-xs text-neutral-500 mt-4">{list.length} item{list.length !== 1 ? "s" : ""}{cat !== "All" ? ` in ${cat}` : ""}{q ? ` matching “${q}”` : ""}</p>

        {list.length ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-4">
            {list.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        ) : (
          <Reveal className="text-center bg-white border border-dashed border-neutral-300 rounded-3xl py-16 px-6 mt-4">
            <PackageSearch size={36} className="mx-auto text-bronze" />
            <h2 className="font-display text-2xl text-obsidian font-semibold mt-4">No ready photos in “{cat}” yet</h2>
            <p className="text-sm text-neutral-500 mt-2 max-w-md mx-auto">We do stock {cat.toLowerCase()} — designs are shared directly on WhatsApp. Send your requirement and we will reply with photos and prices.</p>
            <a href={`/wholesale-export?category=${encodeURIComponent(cat)}`} className="inline-flex mt-6 bg-brand-orange text-white font-semibold px-7 py-3 rounded-full text-sm">Enquire for {cat}</a>
          </Reveal>
        )}
      </div>
    </div>
  );
}
