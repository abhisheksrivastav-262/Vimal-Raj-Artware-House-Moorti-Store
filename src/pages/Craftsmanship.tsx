import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "../config/business";
import { waLink } from "../utils/whatsapp";
import Reveal, { SectionHeading } from "../components/Reveal";

export default function Craftsmanship() {
  return (
    <div>
      <section className="bg-obsidian text-ivory texture-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Craftsmanship</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 leading-tight">Brass, Finished <span className="text-gold-light">with Care</span></h1>
          <p className="text-ivory/70 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">Close-ups from our actual stock — carved faces, jewellery detailing, polished finishes and festive packing. We describe only what the photographs show.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <SectionHeading eyebrow="Detail Work" title="Faces, Jewellery & Finishes" sub="Every piece below is a real photograph from the Moorti Store collection." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {[
            { img: "/assets/radha-krishna-meenakari-31kg-30inch.jpg", t: "Meenakari-style colour work", d: "Red, green and blue detailing on crowns and garments." },
            { img: "/assets/hanuman-brass-4kg-9inch.jpg", t: "Hand-finished faces", d: "Traditional painted eyes and tilak on brass moortis." },
            { img: "/assets/brass-balaji-standing-24inch.jpg", t: "Deep carving", d: "Layered chains, vastra pleats and crown work." },
            { img: "/assets/durga-lion-brass-145gm-3inch.jpg", t: "Miniature precision", d: "3-inch Durga on lion — front and back finishing." },
            { img: "/assets/brass-ram-darbar-mandir.jpg", t: "Mandir lattice & bells", d: "Pierced arches and hanging bells on mini mandirs." },
            { img: "/assets/pen-holder-brahma-four-face.jpg", t: "Desk artware carving", d: "Four-face vessel with flared, ribbed rim." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={(i % 3) * 70}>
              <figure className="img-zoom rounded-2xl overflow-hidden bg-white border border-neutral-200">
                <div className="overflow-hidden aspect-[3/4]"><img src={c.img} alt={c.t} loading="lazy" className="w-full h-full object-cover object-top" /></div>
                <figcaption className="p-5"><h3 className="font-display font-semibold text-obsidian">{c.t}</h3><p className="text-sm text-neutral-500 mt-1">{c.d}</p></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <SectionHeading eyebrow="Gifting & Packing" title="Festive Boxes, Ready for Bulk" sub="Peacock-art keepsake boxes and brown gift trunks with brass centrepieces — as packed for customers." />
            <ul className="mt-5 space-y-2.5 text-sm text-neutral-600">
              <li>• Peacock gift box with brass spoon and printed jar</li>
              <li>• Brass shankh trunk with two tasselled jars</li>
              <li>• Satin lining and clasps as photographed</li>
            </ul>
            <a href={waLink(`Hello ${BUSINESS.name}, I want bulk prices for your festive gift boxes.`)} target="_blank" rel="noreferrer" className="inline-flex mt-6 bg-brand-orange text-white font-semibold px-7 py-3.5 rounded-full text-sm">Bulk Gift Enquiry <ArrowRight size={15} /></a>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            <img src="/assets/gift-box-peacock-brass-spoon.jpg" alt="Peacock gift box" loading="lazy" className="rounded-2xl object-cover object-center aspect-square sm:aspect-[3/4] w-full" />
            <img src="/assets/gift-box-brass-shankh-jars.jpg" alt="Brass gift trunk" loading="lazy" className="rounded-2xl object-cover object-center aspect-square sm:aspect-[3/4] w-full mt-6" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <SectionHeading eyebrow="On Video" title="See the Finish in Motion" />
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <Reveal><video src="/assets/crafting-video-02.mp4" controls preload="metadata" playsInline className="w-full h-auto max-h-[70vh] rounded-2xl bg-black object-contain" /></Reveal>
          <Reveal delay={100}><video src="/assets/finishing-video-03.mp4" controls preload="metadata" playsInline className="w-full h-auto max-h-[70vh] rounded-2xl bg-black object-contain" /></Reveal>
        </div>
        <Reveal className="text-center mt-10">
          <Link to="/wholesale-export" className="inline-flex items-center gap-2 bg-obsidian text-gold font-semibold px-8 py-3.5 rounded-full text-sm">CTA — Bulk & Export Enquiries <ArrowRight size={15} /></Link>
        </Reveal>
      </section>
    </div>
  );
}
