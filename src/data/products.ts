export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  specs: { label: string; value: string }[];
  featured?: boolean;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "radha-krishna-gold-brass-30inch",
    name: "Radha Krishna Brass Pair — Gold Finish, 30 Inch",
    category: "Brass Statues",
    image: "/assets/radha-krishna-gold-30inch.jpg",
    images: ["/assets/radha-krishna-gold-30inch.jpg"],
    description:
      "Large Radha Krishna brass pair in a rich gold finish with detailed jewellery, garments and lotus bases. A statement temple and living-room moorti set from our Aligarh collection.",
    specs: [
      { label: "Height", value: "30 inch (as shown)" },
      { label: "Weight", value: "31.250 kg (as shown)" },
      { label: "Finish", value: "Gold finish brass" },
    ],
    featured: true,
    badge: "Bestseller",
  },
  {
    slug: "radha-krishna-meenakari-30inch-31kg",
    name: "Radha Krishna Brass Pair with Meenakari Work, 30 Inch",
    category: "Brass Statues",
    image: "/assets/radha-krishna-meenakari-31kg-30inch.jpg",
    images: ["/assets/radha-krishna-meenakari-31kg-30inch.jpg", "/assets/radha-krishna-meenakari-pair-31kg-26kg.jpg"],
    description:
      "Ornate Radha Krishna brass pair with colourful meenakari-style detailing on garments and crowns. Photographed on black backdrop — actual colours as shown in the business photos.",
    specs: [
      { label: "Height", value: "30 inch (as shown)" },
      { label: "Weight", value: "31 kg (as shown)" },
    ],
    featured: true,
  },
  {
    slug: "radha-krishna-meenakari-24inch-26kg",
    name: "Radha Krishna Brass Pair with Meenakari Work, 24 Inch",
    category: "Brass Statues",
    image: "/assets/radha-krishna-meenakari-26kg-24inch.jpg",
    images: ["/assets/radha-krishna-meenakari-26kg-24inch.jpg", "/assets/radha-krishna-meenakari-group.jpg"],
    description:
      "Compact 24-inch Radha Krishna brass pair with meenakari-style colour work — suitable for home mandirs, gifting and retail assortments.",
    specs: [
      { label: "Height", value: "24 inch (as shown)" },
      { label: "Weight", value: "26 kg (as shown)" },
    ],
    featured: true,
  },
  {
    slug: "krishna-venugopal-prabhavali-31inch",
    name: "Lord Krishna Venugopal with Prabhavali, 31 Inch",
    category: "Sculptures and Ornamental Handicrafts",
    image: "/assets/krishna-venugopal-prabhavali-31inch.jpg",
    images: ["/assets/krishna-venugopal-prabhavali-31inch.jpg"],
    description:
      "Standing Venugopal Krishna with flute, ornate prabhavali arch and painted detailing. A grand export-quality showpiece photographed on grass display.",
    specs: [
      { label: "Height", value: "31 inch (as shown)" },
      { label: "Weight", value: "30 kg (as shown)" },
    ],
    featured: true,
  },
  {
    slug: "tirupati-balaji-brass-24inch",
    name: "Tirupati Balaji Brass Moorti, 24 Inch",
    category: "Brass Statues",
    image: "/assets/brass-balaji-standing-24inch.jpg",
    images: ["/assets/brass-balaji-standing-24inch.jpg", "/assets/brass-balaji-wall-frame.jpg"],
    description:
      "Standing Tirupati Balaji brass moorti with fine carving on crown, jewellery and vastra. Wall-frame Balaji variant also available — enquire for designs.",
    specs: [
      { label: "Height", value: "24 inch (as shown)" },
      { label: "Weight", value: "16.750 kg (as shown)" },
    ],
    featured: true,
  },
  {
    slug: "hanuman-brass-9inch",
    name: "Lord Hanuman Blessing Brass Moorti, 9 Inch",
    category: "Brass Statues",
    image: "/assets/hanuman-brass-4kg-9inch.jpg",
    images: ["/assets/hanuman-brass-4kg-9inch.jpg"],
    description:
      "Seated Hanuman in abhaya mudra with gada, hand-finished face with traditional colours. Popular for home worship and gifting.",
    specs: [
      { label: "Height", value: "9 inch (as shown)" },
      { label: "Weight", value: "4.100 kg (as shown)" },
    ],
    featured: true,
  },
  {
    slug: "durga-lion-brass-3inch",
    name: "Goddess Durga on Lion — Mini Brass Moorti, 3 Inch",
    category: "Brass Statues",
    image: "/assets/durga-lion-brass-145gm-3inch.jpg",
    images: ["/assets/durga-lion-brass-145gm-3inch.jpg"],
    description:
      "Miniature Durga seated on lion, front and back views shown. Lightweight brass moorti ideal for gifting, travel mandir and retail sets.",
    specs: [
      { label: "Height", value: "3 inch (as shown)" },
      { label: "Weight", value: "145 gm (as shown)" },
    ],
  },
  {
    slug: "ram-darbar-brass-mandir",
    name: "Ram Darbar Brass Mini Mandir",
    category: "Decorative Artware",
    image: "/assets/brass-ram-darbar-mandir.jpg",
    images: ["/assets/brass-ram-darbar-mandir.jpg"],
    description:
      "Brass mini mandir with Ram Darbar inside, hanging bells and carved pillars. A devotional decor piece for counters, shelves and gifting.",
    specs: [{ label: "Note", value: "Size and weight on request — enquire with photo reference" }],
  },
  {
    slug: "brass-cow-calf-framed-wall-art",
    name: "Brass Cow with Calf — Framed Wall Art",
    category: "Home Decor Items",
    image: "/assets/brass-cow-calf-frame.jpg",
    images: ["/assets/brass-cow-calf-frame.jpg"],
    description:
      "Auspicious Kamdhenu cow with calf in brass on brocade fabric, set in a wooden frame with brass corners. A classic Vastu-favoured wall decor.",
    specs: [{ label: "Note", value: "Framed wall art — size on request" }],
    featured: true,
  },
  {
    slug: "gauri-bust-blue-bracket",
    name: "Brass Gauri Bust on Blue Wooden Bracket",
    category: "Home Decor Items",
    image: "/assets/brass-gauri-bust-blue-bracket.jpg",
    images: ["/assets/brass-gauri-bust-blue-bracket.jpg", "/assets/brass-gauri-bust-lavender-bracket.jpg"],
    description:
      "Brass Gauri / Devi bust mounted on a distressed-finish wooden wall bracket. Available in blue and lavender bracket finishes as photographed.",
    specs: [{ label: "Variants", value: "Blue / Lavender bracket (as photographed)" }],
  },
  {
    slug: "balaji-wall-frame-green",
    name: "Balaji Brass on Wooden Arch Wall Frame",
    category: "Home Decor Items",
    image: "/assets/brass-balaji-wall-frame.jpg",
    images: ["/assets/brass-balaji-wall-frame.jpg"],
    description:
      "Small Balaji brass moorti set in a green-and-ochre distressed wooden arch frame. Heritage-style wall decor for entrances and pooja corners.",
    specs: [{ label: "Note", value: "Wall-hanging frame — size on request" }],
  },
  {
    slug: "owl-brass-pen-holder",
    name: "Brass Owl Pen Holder",
    category: "Decorative Artware",
    image: "/assets/pen-holder-owl-brass.jpg",
    images: ["/assets/pen-holder-owl-brass.jpg"],
    description:
      "Handcrafted brass owl pen / desk holder with feather detailing. A charming desk and gifting article from our fine handicraft range.",
    specs: [{ label: "Use", value: "Desk / pen holder" }],
  },
  {
    slug: "four-face-brahma-pen-holder",
    name: "Four-Face Brass Pen Holder",
    category: "Decorative Artware",
    image: "/assets/pen-holder-brahma-four-face.jpg",
    images: ["/assets/pen-holder-brahma-four-face.jpg"],
    description:
      "Four-face brass vessel pen holder with deity-face carving and flared rim. Conversation-starting desk decor.",
    specs: [{ label: "Use", value: "Desk / pen holder" }],
  },
  {
    slug: "laughing-buddha-pen-holder",
    name: "Laughing Buddha Face Brass Pen Holder",
    category: "Decorative Artware",
    image: "/assets/pen-holder-laughing-buddha-face.jpg",
    images: ["/assets/pen-holder-laughing-buddha-face.jpg"],
    description:
      "Smiling-face brass pen holder in polished finish. Compact, cheerful desk accessory and bulk-gifting option.",
    specs: [{ label: "Use", value: "Desk / pen holder" }],
  },
  {
    slug: "peacock-gift-box-brass-spoon",
    name: "Peacock Gift Box with Brass Serving Spoon & Jar",
    category: "Decorative Artware",
    image: "/assets/gift-box-peacock-brass-spoon.jpg",
    images: ["/assets/gift-box-peacock-brass-spoon.jpg"],
    description:
      "Festive keepsake box with peacock-palace artwork, containing a brass serving spoon with deity handle and a printed storage jar — ready for Diwali and wedding gifting.",
    specs: [{ label: "Set", value: "Box + brass spoon + jar (as photographed)" }],
    featured: true,
  },
  {
    slug: "brass-shankh-gift-box-jars",
    name: "Brass Shankh Gift Box with Dry-Fruit Jars",
    category: "Decorative Artware",
    image: "/assets/gift-box-brass-shankh-jars.jpg",
    images: ["/assets/gift-box-brass-shankh-jars.jpg"],
    description:
      "Premium brown gift trunk with brass Shankh (conch) centrepiece and two brass-lid jars with tassels — a ready festive hamper base for bulk orders.",
    specs: [{ label: "Set", value: "Box + brass shankh + 2 jars (as photographed)" }],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

export const GALLERY = [
  { src: "/assets/radha-krishna-gold-30inch.jpg", alt: "Radha Krishna gold brass pair 30 inch", category: "Brass Statues" },
  { src: "/assets/radha-krishna-meenakari-31kg-30inch.jpg", alt: "Radha Krishna meenakari brass pair 30 inch", category: "Brass Statues" },
  { src: "/assets/krishna-venugopal-prabhavali-31inch.jpg", alt: "Krishna Venugopal with prabhavali", category: "Sculptures and Ornamental Handicrafts" },
  { src: "/assets/brass-balaji-standing-24inch.jpg", alt: "Tirupati Balaji brass moorti", category: "Brass Statues" },
  { src: "/assets/hanuman-brass-4kg-9inch.jpg", alt: "Hanuman blessing brass moorti", category: "Brass Statues" },
  { src: "/assets/durga-lion-brass-145gm-3inch.jpg", alt: "Durga on lion miniature brass", category: "Brass Statues" },
  { src: "/assets/brass-cow-calf-frame.jpg", alt: "Brass cow and calf framed wall art", category: "Home Decor Items" },
  { src: "/assets/brass-gauri-bust-blue-bracket.jpg", alt: "Gauri bust on blue bracket", category: "Home Decor Items" },
  { src: "/assets/brass-gauri-bust-lavender-bracket.jpg", alt: "Gauri bust on lavender bracket", category: "Home Decor Items" },
  { src: "/assets/brass-balaji-wall-frame.jpg", alt: "Balaji wall frame", category: "Home Decor Items" },
  { src: "/assets/brass-ram-darbar-mandir.jpg", alt: "Ram Darbar brass mandir", category: "Decorative Artware" },
  { src: "/assets/pen-holder-owl-brass.jpg", alt: "Brass owl pen holder", category: "Decorative Artware" },
  { src: "/assets/pen-holder-brahma-four-face.jpg", alt: "Four face brass pen holder", category: "Decorative Artware" },
  { src: "/assets/gift-box-peacock-brass-spoon.jpg", alt: "Peacock gift box with brass spoon", category: "Decorative Artware" },
  { src: "/assets/gift-box-brass-shankh-jars.jpg", alt: "Brass shankh gift box", category: "Decorative Artware" },
];

export const VIDEOS = [
  { src: "/assets/workshop-video-01.mp4", title: "Workshop glimpses — brass artware collection" },
  { src: "/assets/crafting-video-02.mp4", title: "Crafting and finishing — product close-ups" },
  { src: "/assets/finishing-video-03.mp4", title: "Finishing and display — export quality pieces" },
];
