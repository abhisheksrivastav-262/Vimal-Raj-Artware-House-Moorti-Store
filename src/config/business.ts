export const BUSINESS = {
  name: "Vimal Raj Artware House",
  brand: "Moorti Store",
  tagline: "Crafting Happiness Everyday",
  type: "Manufacturer • Supplier • Exporter",
  announcement: "Manufacturer • Supplier • Export Quality Artware",
  contacts: ["Raj Kumar", "Yash Raj"],
  phones: ["9837609331", "9219631431", "8433218747"],
  // Change this one value to switch the default WhatsApp destination.
  defaultWhatsApp: "9837609331",
  email: "vimalrajart@gmail.com",
  website: "www.moortistore.com",
  websiteUrl: "https://www.moortistore.com/",
  address: "17/77, Sarai Bhooki, Jaiganj, Aligarh – 202001, Uttar Pradesh, India",
  mapsQuery: "17/77, Sarai Bhooki, Jaiganj, Aligarh 202001 Uttar Pradesh India",
  logo: "/assets/moorti-store-logo.jpg",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Craftsmanship", to: "/craftsmanship" },
  { label: "Gallery", to: "/gallery" },
  { label: "Wholesale & Export", to: "/wholesale-export" },
  { label: "Contact", to: "/contact" },
];

export const CATEGORIES = [
  "Brass Statues",
  "Animal Fine Handicrafts",
  "Home Decor Items",
  "Decorative Artware",
  "Locks",
  "Furniture",
  "Sculptures and Ornamental Handicrafts",
] as const;
