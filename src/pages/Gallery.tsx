import { useMemo, useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY, VIDEOS } from "../data/products";

const FILTERS = ["All", "Brass Statues", "Home Decor Items", "Decorative Artware", "Sculptures and Ornamental Handicrafts"];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [light, setLight] = useState<number | null>(null);
  const list = useMemo(() => GALLERY.filter((g) => cat === "All" || g.category === cat), [cat]);

  const close = useCallback(() => setLight(null), []);
  useEffect(() => {
    if (light === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setLight((v) => (v === null ? v : (v + 1) % list.length));
      if (e.key === "ArrowLeft") setLight((v) => (v === null ? v : (v - 1 + list.length) % list.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [light, list.length, close]);

  return (
    <div className="bg-ivory">
      <section className="bg-obsidian text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Gallery</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-2">Photos & Videos</h1>
          <p className="text-ivory/65 text-sm sm:text-base mt-3 max-w-2xl">Only genuine store photographs and shop videos. Tap any photo for a full-size view.</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1" role="tablist" aria-label="Gallery filters">
          {FILTERS.map((f) => (
            <button key={f} role="tab" aria-selected={cat === f} onClick={() => setCat(f)}
              className={`whitespace-nowrap text-[13px] font-semibold px-4 py-2.5 rounded-full border ${cat === f ? "bg-obsidian text-gold border-obsidian" : "bg-white border-neutral-300"}`}>{f}</button>
          ))}
        </div>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 mt-6 [&>button]:mb-3">
          {list.map((g, i) => (
            <button key={g.src} onClick={() => setLight(i)} className="img-zoom block w-full rounded-2xl overflow-hidden border border-neutral-200 bg-white break-inside-avoid">
              <img src={g.src} alt={g.alt} loading="lazy" className="w-full object-cover" />
              <span className="block text-left text-[11px] text-neutral-500 px-3 py-2">{g.alt}</span>
            </button>
          ))}
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian mt-12">Shop Videos</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-5">
          {VIDEOS.map((v) => (
            <figure key={v.src} className="rounded-2xl overflow-hidden bg-obsidian">
              <video src={v.src} controls preload="metadata" playsInline className="w-full h-auto max-h-[70vh] object-contain bg-black" aria-label={v.title} />
              <figcaption className="text-xs text-ivory/70 px-4 py-3">{v.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {light !== null && list[light] && (
        <div className="fixed inset-0 z-[60] bg-obsidian/95 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={list[light].alt} onClick={close}>
          <button className="absolute top-4 right-4 text-white p-2" aria-label="Close" onClick={close}><X size={28} /></button>
          <button className="absolute left-2 sm:left-6 text-white p-2" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setLight((light - 1 + list.length) % list.length); }}><ChevronLeft size={32} /></button>
          <img src={list[light].src} alt={list[light].alt} className="max-h-[85vh] max-w-full rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-2 sm:right-6 text-white p-2" aria-label="Next" onClick={(e) => { e.stopPropagation(); setLight((light + 1) % list.length); }}><ChevronRight size={32} /></button>
          <p className="absolute bottom-4 text-white/70 text-sm">{light + 1} / {list.length} — {list[light].alt}</p>
        </div>
      )}
    </div>
  );
}
