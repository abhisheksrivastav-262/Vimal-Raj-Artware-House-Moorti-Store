import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

const TITLES: Record<string, { title: string; desc: string }> = {
  "/": { title: "Vimal Raj Artware House | Moorti Store — Brass Statues & Export Quality Artware", desc: "Discover finely crafted brass statues, decorative handicrafts and distinctive artware from Aligarh, India." },
  "/about": { title: "About Us — Vimal Raj Artware House | Moorti Store", desc: "Manufacturer and supplier of export quality brass statues and handicrafts in Aligarh, Uttar Pradesh." },
  "/products": { title: "Products — Brass Statues, Home Decor & Artware | Moorti Store", desc: "Browse brass statues, home decor items, decorative artware and sculptures. Price on request." },
  "/craftsmanship": { title: "Craftsmanship — Export Quality Brass Artware | Moorti Store", desc: "Close-ups of brass statues, finishing and decorative craftsmanship." },
  "/gallery": { title: "Gallery — Brass Statues & Artware Photos | Moorti Store", desc: "Photo and video gallery of brass moortis, gift boxes, wall decor and desk artware." },
  "/wholesale-export": { title: "Wholesale & Export Enquiries | Moorti Store Aligarh", desc: "Bulk order enquiries for retailers, distributors and international buyers." },
  "/contact": { title: "Contact Us — Vimal Raj Artware House, Aligarh | Moorti Store", desc: "Call, WhatsApp or email Vimal Raj Artware House, Sarai Bhooki, Jaiganj, Aligarh." },
  "/faq": { title: "FAQ — Products, Wholesale & Pricing | Moorti Store", desc: "Answers about product categories, wholesale enquiries, specifications and contact." },
  "/privacy-policy": { title: "Privacy Policy | Moorti Store", desc: "How this website handles enquiry data and WhatsApp handoff." },
};

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname]);
  useEffect(() => {
    const id = "org-jsonld";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.type = "application/ld+json";
      s.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Vimal Raj Artware House",
        alternateName: "Moorti Store",
        slogan: "Crafting Happiness Everyday",
        email: "vimalrajart@gmail.com",
        telephone: "+91-9837609331",
        address: { "@type": "PostalAddress", streetAddress: "17/77, Sarai Bhooki, Jaiganj", addressLocality: "Aligarh", postalCode: "202001", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
        url: "https://www.moortistore.com/",
      });
      document.head.appendChild(s);
    }
  }, []);
  useEffect(() => {
    const meta = TITLES[pathname] ?? (pathname.startsWith("/products/")
      ? { title: "Product Details | Moorti Store — Vimal Raj Artware House", desc: "Brass statue and artware product details. Price on request — enquire on WhatsApp." }
      : TITLES["/"]);
    document.title = meta.title;
    const d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", meta.desc);
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
