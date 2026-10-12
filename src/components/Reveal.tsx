import { useEffect } from "react";

export default function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.visible)");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, sub, dark = false }: { eyebrow: string; title: string; sub?: string; dark?: boolean }) {
  return (
    <Reveal className="max-w-3xl">
      <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-bronze">{eyebrow}</p>
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mt-3 ${dark ? "text-ivory" : "text-obsidian"}`}>{title}</h2>
      <div className="w-16 h-[3px] bg-gold mt-4" />
      {sub && <p className={`mt-4 text-sm sm:text-base leading-relaxed ${dark ? "text-ivory/70" : "text-neutral-600"}`}>{sub}</p>}
    </Reveal>
  );
}
