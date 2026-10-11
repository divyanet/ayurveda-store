// ─── Site config: change brand name, contact, etc. in ONE place ───
export const SITE = {
  brand: "VedaHerbals", // TODO: HRK se final brand name lekar yahan badlein
  tagline: "Pure Ayurveda, Everyday Wellness",
  phone: "+91 98765 43210", // TODO: real number
  email: "care@vedahebals.example", // TODO: real email
  address: "Jaipur, Rajasthan, India", // TODO: real address
  freeShipAbove: 499,
  currency: "₹",
};

export type Category = { slug: string; name: string; tagline: string; image: string };

export const CATEGORIES: Category[] = [
  {
    slug: "juices",
    name: "Herbal Juices",
    tagline: "Cold-pressed daily wellness juices",
    image: "/images/products/diabic-care.jpg",
  },
  {
    slug: "combos",
    name: "Value Combos",
    tagline: "Smart bundles, better savings",
    image: "/images/products/combo-acidity-amla.jpg",
  },
  {
    slug: "classical",
    name: "Classical Ayurveda",
    tagline: "Time-tested traditional formulations",
    image: "/images/products/triphala-guggul.png",
  },
];

export type Variant = { label: string; priceDelta: number; mrpDelta: number };
export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  price: number;
  mrp: number;
  badge?: string;
  bestseller?: boolean;
  benefits: string[];
  ingredients: string[];
  howToUse: string[];
  description: string[];
  variants?: Variant[];
};

const JUICE_VARIANTS: Variant[] = [
  { label: "1000 ml — Pack of 1", priceDelta: 0, mrpDelta: 0 },
  { label: "1000 ml — Pack of 2", priceDelta: 0, mrpDelta: 0 }, // set per-product below via multiplier logic
  { label: "1000 ml — Pack of 3", priceDelta: 0, mrpDelta: 0 },
];

export const PRODUCTS: Product[] = [
  {
    slug: "diabic-care-juice",
    name: "Diabic Care Juice",
    tagline: "Daily herbal support for healthy sugar levels",
    category: "juices",
    image: "/images/products/diabic-care.jpg",
    price: 599,
    mrp: 749,
    badge: "Bestseller",
    bestseller: true,
    benefits: [
      "Made with karela, jamun, giloy and other traditional herbs known in Ayurveda for sugar management",
      "Supports healthy blood sugar levels when paired with diet and exercise",
      "Helps improve metabolism and daily energy",
      "No added sugar — sweetened only by the herbs themselves",
    ],
    ingredients: ["Karela", "Jamun", "Giloy", "Methi", "Amla", "Vijaysar"],
    howToUse: [
      "Shake the bottle well before every use",
      "Mix 30 ml juice with 30 ml lukewarm water",
      "Drink twice daily — morning empty stomach and evening before dinner",
      "Use regularly for at least 3 months for best results",
    ],
    description: [
      "Diabic Care Juice blends well-known Ayurvedic herbs like karela, jamun and giloy into one easy daily drink. It is crafted to support people who want to manage their sugar levels the natural way, alongside a balanced diet and an active lifestyle.",
      "Every batch is prepared from carefully sourced herbs and passes basic quality checks before bottling, so you get consistent taste and quality in every pack.",
    ],
  },
  {
    slug: "she-care-juice",
    name: "She Care Juice",
    tagline: "Everyday Ayurvedic care for women's wellness",
    category: "juices",
    image: "/images/products/she-care.jpg",
    price: 649,
    mrp: 799,
    badge: "Bestseller",
    bestseller: true,
    benefits: [
      "Formulated with shatavari, ashwagandha and lodhra — herbs traditionally used for women's health",
      "Supports hormonal balance and monthly comfort",
      "Helps improve skin glow and hair strength from within",
      "A gentle daily tonic for energy and overall vitality",
    ],
    ingredients: ["Shatavari", "Ashwagandha", "Lodhra", "Amla", "Aloe Vera", "Saffron"],
    howToUse: [
      "Shake well before use",
      "Mix 30 ml with 30 ml lukewarm water, twice a day",
      "Best taken after meals",
      "Continue for 2–3 months for visible routine benefits",
    ],
    description: [
      "She Care Juice is a thoughtful blend of herbs that Ayurveda has trusted for women's wellness for centuries. Shatavari and ashwagandha form the heart of this formula, supported by amla and aloe vera for skin and hair.",
      "It fits easily into a busy routine — just two small servings a day with water.",
    ],
  },
  {
    slug: "digestive-care-juice",
    name: "Digestive Care Juice",
    tagline: "For a light stomach and easy digestion",
    category: "juices",
    image: "/images/products/digestive-care.jpg",
    price: 549,
    mrp: 699,
    badge: "Bestseller",
    bestseller: true,
    benefits: [
      "Ajwain, jeera and hing-inspired herbal blend that supports smooth digestion",
      "Helps ease bloating, gas and heaviness after meals",
      "Supports gut comfort and regular bowel habits",
      "A natural after-meal companion for food lovers",
    ],
    ingredients: ["Ajwain", "Jeera", "Saunf", "Amla", "Bael", "Pudina"],
    howToUse: [
      "Shake well before use",
      "Mix 30 ml with lukewarm water after lunch and dinner",
      "Avoid very cold water with this juice",
      "Pair with light, home-style meals for best comfort",
    ],
    description: [
      "Digestive Care Juice brings together kitchen-garden herbs that Indian households have used after heavy meals for generations. It is a simple, tasty way to keep digestion comfortable every day.",
      "Brewed in small batches to keep the herbal flavour fresh and natural.",
    ],
  },
  {
    slug: "cholesterol-care-juice",
    name: "Cholesterol Care Juice",
    tagline: "Herbal support for a healthy heart",
    category: "juices",
    image: "/images/products/cholesterol-care.jpg",
    price: 599,
    mrp: 749,
    benefits: [
      "Arjuna bark and garlic-based Ayurvedic blend for heart wellness",
      "Supports healthy cholesterol levels already in the normal range",
      "Helps maintain healthy blood circulation",
      "Complements a heart-friendly diet and daily walks",
    ],
    ingredients: ["Arjuna", "Garlic", "Amla", "Guggul", "Pushkarmool"],
    howToUse: [
      "Shake well before use",
      "30 ml with lukewarm water, twice daily before meals",
      "Combine with low-oil meals and 30 minutes of walking",
      "Consult your doctor if you take heart medication",
    ],
    description: [
      "Cholesterol Care Juice centres on arjuna, the classic Ayurvedic herb for the heart, blended with garlic and amla. It is designed as a daily wellness drink for people watching their cholesterol through lifestyle changes.",
    ],
  },
  {
    slug: "ibs-care-juice",
    name: "IBS Care Juice",
    tagline: "Gentle daily care for a sensitive gut",
    category: "juices",
    image: "/images/products/ibs-care.jpg",
    price: 599,
    mrp: 749,
    benefits: [
      "Bael, kutaj and bilva-based soothing herbal formula",
      "Supports comfortable digestion and gut lining",
      "Helps reduce irregular bowel discomfort",
      "Mild taste, easy on sensitive stomachs",
    ],
    ingredients: ["Bael", "Kutaj", "Bilva", "Saunf", "Dhania"],
    howToUse: [
      "Shake well before use",
      "20–30 ml with room-temperature water, twice daily",
      "Take after meals, not on an empty stomach",
      "Avoid spicy and fried food during use",
    ],
    description: [
      "IBS Care Juice is a gentle, non-spicy herbal drink built around bael and kutaj — herbs Ayurveda recommends for sensitive digestive systems. It is meant for daily, long-term gut comfort.",
    ],
  },
  {
    slug: "thyro-balance-juice",
    name: "Thyro Balance Juice",
    tagline: "Ayurvedic support for thyroid wellness",
    category: "juices",
    image: "/images/products/thyro-balance.jpg",
    price: 599,
    mrp: 749,
    benefits: [
      "Kanchanar, ashwagandha and guggul blend for thyroid support",
      "Supports healthy metabolism and energy levels",
      "Helps manage weight fluctuations linked to sluggish thyroid",
      "A calm, daily ritual for hormonal wellness",
    ],
    ingredients: ["Kanchanar", "Ashwagandha", "Guggul", "Amla", "Punarnava"],
    howToUse: [
      "Shake well before use",
      "30 ml with lukewarm water every morning, empty stomach",
      "Continue your prescribed thyroid medication — this is a supportive drink",
      "Get thyroid levels tested every 3 months",
    ],
    description: [
      "Thyro Balance Juice combines kanchanar and ashwagandha, two herbs traditionally used in Ayurveda for thyroid-area wellness. It works best as a supportive daily drink alongside your doctor's treatment, not a replacement for it.",
    ],
  },
  {
    slug: "uric-balance-juice",
    name: "Uric Balance Juice",
    tagline: "For comfortable joints and easy movement",
    category: "juices",
    image: "/images/products/uric-balance.jpg",
    price: 549,
    mrp: 699,
    benefits: [
      "Giloy, punarnava and gokhru blend that supports healthy uric acid levels",
      "Helps keep joints comfortable and flexible",
      "Supports kidney wellness and natural detox",
      "Useful for people with rich, protein-heavy diets",
    ],
    ingredients: ["Giloy", "Punarnava", "Gokhru", "Amla", "Varun"],
    howToUse: [
      "Shake well before use",
      "30 ml with water twice daily after meals",
      "Drink 8–10 glasses of water through the day",
      "Limit alcohol and very high-protein meals during use",
    ],
    description: [
      "Uric Balance Juice brings together giloy and punarnava — Ayurvedic herbs known for supporting the body's natural uric-acid balance. A practical daily drink for anyone who wants to keep their joints happy.",
    ],
  },
  {
    slug: "fat-reducer-juice",
    name: "Fat Reducer Juice",
    tagline: "Herbal push for your weight-management plan",
    category: "juices",
    image: "/images/products/fat-reducer.jpg",
    price: 649,
    mrp: 799,
    benefits: [
      "Garcinia, guggul and triphala blend that supports fat metabolism",
      "Helps control untimely hunger cravings",
      "Supports digestion so food converts to energy, not storage",
      "Pairs well with walking and portion control",
    ],
    ingredients: ["Garcinia", "Guggul", "Triphala", "Amla", "Kalonji"],
    howToUse: [
      "Shake well before use",
      "30 ml with lukewarm water, morning empty stomach and evening",
      "Walk 30–45 minutes daily for best results",
      "Avoid sugary drinks and late-night snacking",
    ],
    description: [
      "Fat Reducer Juice is a metabolism-friendly herbal drink built on garcinia and guggul. It is not a magic fix — it is designed to support the diet and exercise routine you already follow.",
    ],
  },
  {
    slug: "liver-detox-juice",
    name: "Liver Detox Juice",
    tagline: "Daily herbal care for your liver",
    category: "juices",
    image: "/images/products/liver-detox.jpg",
    price: 599,
    mrp: 749,
    badge: "New",
    benefits: [
      "Bhumi amla, kalmegh and punarnava — classic liver-support herbs",
      "Supports the liver's natural cleansing function",
      "Helps improve appetite and digestion",
      "Good reset drink after festive overeating",
    ],
    ingredients: ["Bhumi Amla", "Kalmegh", "Punarnava", "Giloy", "Amla"],
    howToUse: [
      "Shake well before use",
      "30 ml with water twice daily before meals",
      "Use for 4–6 weeks as a periodic cleanse",
      "Eat light, home-cooked food during the cleanse",
    ],
    description: [
      "Liver Detox Juice centres on bhumi amla and kalmegh, the two herbs Ayurveda reaches for first when the liver needs support. A simple periodic cleanse for modern eating habits.",
    ],
  },
  {
    slug: "sea-buckthorn-juice",
    name: "Sea Buckthorn Juice — 500 ml",
    tagline: "Himalayan superfruit for skin and immunity",
    category: "juices",
    image: "/images/products/sea-buckthorn.jpg",
    price: 899,
    mrp: 1099,
    badge: "Premium",
    benefits: [
      "Made from Himalayan sea buckthorn berries, rich in Omega-7",
      "Supports glowing skin and healthy hair",
      "Packed with Vitamin C for everyday immunity",
      "A tart, refreshing superfruit drink",
    ],
    ingredients: ["Sea Buckthorn Berry Pulp", "Rock Salt", "Jeera"],
    howToUse: [
      "Shake well — natural pulp settles at the bottom",
      "Dilute 30 ml in a full glass of water",
      "Add honey if you like it sweeter",
      "Refrigerate after opening",
    ],
    description: [
      "Our Sea Buckthorn Juice comes from berries grown in the high Himalayas, one of nature's richest sources of Omega-7 and Vitamin C. Tangy, vibrant and genuinely refreshing — a superfruit drink with nothing artificial.",
    ],
  },
  {
    slug: "joint-pain-care-juice",
    name: "Joint Pain Care Juice",
    tagline: "Move easy with Ayurvedic joint support",
    category: "juices",
    image: "/images/products/joint-pain.png",
    price: 599,
    mrp: 749,
    benefits: [
      "Shallaki, ashwagandha and nirgundi blend for joint comfort",
      "Supports flexibility and ease of movement",
      "Helps soothe stiffness, especially in the morning",
      "A daily drink for active ageing",
    ],
    ingredients: ["Shallaki", "Ashwagandha", "Nirgundi", "Guggul", "Rasna"],
    howToUse: [
      "Shake well before use",
      "30 ml with lukewarm water twice daily after meals",
      "Gentle joint exercises improve results",
      "Avoid cold exposure on painful joints",
    ],
    description: [
      "Joint Pain Care Juice blends shallaki and ashwagandha — herbs Ayurveda has used for joint comfort for centuries. Made for people who want to stay mobile and independent as they age.",
    ],
  },
  {
    slug: "hair-and-scalp-care-juice",
    name: "Hair & Scalp Care Juice",
    tagline: "Strong roots, healthy scalp, happy hair",
    category: "juices",
    image: "/images/products/hair-scalp.jpg",
    price: 599,
    mrp: 749,
    benefits: [
      "Bhringraj, amla and curry-leaf blend that nourishes hair from within",
      "Supports reduced hair fall and stronger roots",
      "Helps keep the scalp clean and comfortable",
      "Works from inside while oils work from outside",
    ],
    ingredients: ["Bhringraj", "Amla", "Curry Leaf", "Aloe Vera", "Brahmi"],
    howToUse: [
      "Shake well before use",
      "30 ml with water every morning",
      "Combine with a weekly oil massage for best results",
      "Give it 8–12 weeks — hair grows slowly",
    ],
    description: [
      "Hair & Scalp Care Juice feeds your hair from the inside with bhringraj and amla, the two most trusted Ayurvedic herbs for hair. Because great hair starts with what you drink, not just what you apply.",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function productsByCategory(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.category === slug);
}

export function relatedProducts(slug: string, n = 4): Product[] {
  const p = getProduct(slug);
  if (!p) return PRODUCTS.slice(0, n);
  const same = PRODUCTS.filter((x) => x.slug !== slug && x.category === p.category);
  const rest = PRODUCTS.filter((x) => x.slug !== slug && x.category !== p.category);
  return [...same, ...rest].slice(0, n);
}

export const inr = (n: number) => `${SITE.currency}${n.toLocaleString("en-IN")}`;
export const savePct = (p: Product) => Math.round(((p.mrp - p.price) / p.mrp) * 100);

// Pack-size price scaling used on the product page
export function packPrice(base: number, pack: number): number {
  const mult = [1, 1.92, 2.8][pack] ?? 1;
  return Math.round(base * mult);
}

export { JUICE_VARIANTS };
export const COMBOS: Product[] = [
  {
    slug: "acidity-care-amla-combo",
    name: "Acidity Care + Amla Juice Combo",
    tagline: "Cool the burn, boost the immunity",
    category: "combos",
    image: "/images/products/combo-acidity-amla.jpg",
    price: 999,
    mrp: 1299,
    badge: "Combo",
    benefits: [
      "Acidity Care Juice soothes burning and bloating after meals",
      "Amla Juice adds Vitamin C and daily immunity",
      "Two 1000 ml bottles — a complete 2-month digestive routine",
      "Better value than buying each juice separately",
    ],
    ingredients: ["Acidity Care: Jeera, Saunf, Amla, Bael", "Amla Juice: Fresh Amla Pulp"],
    howToUse: [
      "Take Acidity Care after lunch and dinner",
      "Take Amla Juice every morning empty stomach",
      "30 ml juice + 30 ml water per serving",
      "Keep a 30-minute gap between the two juices",
    ],
    description: [
      "This combo pairs our soothing Acidity Care Juice with classic Amla Juice. One handles the burn and bloating, the other builds daily immunity — together they cover your digestive wellness from both ends.",
    ],
  },
  {
    slug: "acidity-care-bael-combo",
    name: "Acidity Care + Bael Juice Combo",
    tagline: "Double comfort for sensitive stomachs",
    category: "combos",
    image: "/images/products/combo-acidity-bael.jpg",
    price: 999,
    mrp: 1299,
    badge: "Combo",
    benefits: [
      "Bael is Ayurveda's favourite fruit for gut strength",
      "Acidity Care calms burning, gas and heaviness",
      "Ideal for people with frequent digestive discomfort",
      "Sugar-free bael juice, gentle for daily use",
    ],
    ingredients: ["Acidity Care: Jeera, Saunf, Amla, Bael", "Bael Juice: Ripe Bael Pulp"],
    howToUse: [
      "Acidity Care after main meals",
      "Bael Juice mid-morning",
      "30 ml + 30 ml water per serving",
      "Avoid very spicy food during the routine",
    ],
    description: [
      "Bael and our Acidity Care formula are a natural pair — both are traditionally used to keep the stomach calm and comfortable. This combo gives you a full two-bottle gut-care routine at a bundle price.",
    ],
  },
  {
    slug: "acidity-care-diabic-combo",
    name: "Acidity Care + Diabic Care Combo",
    tagline: "Sugar support plus stomach comfort",
    category: "combos",
    image: "/images/products/combo-acidity-diabic.jpg",
    price: 1099,
    mrp: 1399,
    badge: "Combo",
    benefits: [
      "Diabic Care supports healthy sugar levels",
      "Acidity Care keeps digestion light alongside it",
      "A thoughtful pairing for people managing sugar",
      "Two 1000 ml bottles for a full routine",
    ],
    ingredients: ["Diabic Care: Karela, Jamun, Giloy, Methi", "Acidity Care: Jeera, Saunf, Amla, Bael"],
    howToUse: [
      "Diabic Care: morning empty stomach + evening",
      "Acidity Care: after lunch and dinner",
      "Keep 30 minutes between the two juices",
      "Continue prescribed medication as advised by your doctor",
    ],
    description: [
      "People managing sugar levels often deal with sluggish digestion too. This combo addresses both — Diabic Care for sugar support and Acidity Care for everyday digestive comfort — in one value pack.",
    ],
  },
  {
    slug: "aloe-amla-gel-combo",
    name: "Aloe Vera + Amla Juice + Aloe Gel Combo",
    tagline: "Inside-out wellness for skin and gut",
    category: "combos",
    image: "/images/products/combo-aloe-amla-gel.jpg",
    price: 799,
    mrp: 999,
    badge: "Combo",
    benefits: [
      "Aloe Vera Juice supports digestion and skin hydration",
      "Amla Juice brings Vitamin C and antioxidants",
      "Aloe Vera Gel for direct skin and hair application",
      "Complete inside-out glow routine in one box",
    ],
    ingredients: ["Aloe Vera Juice: Fresh Aloe Pulp", "Amla Juice: Fresh Amla Pulp", "Aloe Gel: 99% Pure Aloe"],
    howToUse: [
      "Drink aloe and amla juices every morning",
      "Apply aloe gel on face/hair 2–3 times a week",
      "Patch-test the gel on skin before first use",
    ],
    description: [
      "The classic Ayurvedic glow trio: drink aloe and amla for inner wellness, apply pure aloe gel on the outside. Three products, one simple daily ritual for skin, hair and digestion.",
    ],
  },
  {
    slug: "she-care-beauty-combo",
    name: "She Care Beauty Ritual Combo",
    tagline: "Juice for within, care for without",
    category: "combos",
    image: "/images/products/combo-she-beauty.jpg",
    price: 1199,
    mrp: 1499,
    badge: "Bestseller",
    bestseller: true,
    benefits: [
      "She Care Juice supports women's wellness from within",
      "Neem Face Wash gently cleanses without drying",
      "Aloe Vera Gel soothes and hydrates skin",
      "Haldi-Chandan handmade soap for a traditional bath ritual",
    ],
    ingredients: ["She Care Juice: Shatavari, Ashwagandha, Amla", "Neem Face Wash", "Aloe Vera Gel", "Haldi-Chandan Soap"],
    howToUse: [
      "Drink She Care Juice twice daily",
      "Wash face with Neem Face Wash morning and night",
      "Apply Aloe Gel as a light moisturiser",
      "Use the handmade soap for bath",
    ],
    description: [
      "A complete self-care kit built around She Care Juice — inner wellness through the juice, outer care through neem, aloe and a traditional haldi-chandan soap. Made for gifting too.",
    ],
  },
  {
    slug: "she-care-neem-combo",
    name: "She Care Juice + Neem Face Wash Combo",
    tagline: "Clear skin starts from within",
    category: "combos",
    image: "/images/products/combo-she-neem.jpg",
    price: 899,
    mrp: 1149,
    badge: "Combo",
    benefits: [
      "She Care Juice nourishes skin from the inside",
      "Neem Face Wash fights daily grime and excess oil",
      "A simple two-step clear-skin routine",
      "Suitable for oily and combination skin",
    ],
    ingredients: ["She Care Juice: Shatavari, Ashwagandha, Amla", "Neem Face Wash with Tulsi"],
    howToUse: [
      "Drink She Care Juice twice daily after meals",
      "Wash face twice daily with Neem Face Wash",
      "Follow with a light moisturiser",
    ],
    description: [
      "Healthy skin needs both inner nutrition and outer cleansing. This duo gives you exactly that — She Care Juice for within, Neem Face Wash for without — at a combo price.",
    ],
  },
];

export const CLASSICAL: Product[] = [
  {
    slug: "yograj-guggul",
    name: "Yograj Guggul Tablets",
    tagline: "Classical formula for joints and vata balance",
    category: "classical",
    image: "/images/products/yograj-guggul.png",
    price: 249,
    mrp: 329,
    badge: "Classical",
    benefits: [
      "Traditional Ayurvedic formula with guggul, triphala and warming herbs",
      "Supports joint comfort and flexibility",
      "Helps balance vata dosha",
      "Prepared as per classical Ayurvedic texts",
    ],
    ingredients: ["Guggul", "Triphala", "Chitraka", "Pippali", "Musta"],
    howToUse: [
      "1–2 tablets twice daily with lukewarm water",
      "Take after meals",
      "Consult an Ayurvedic doctor for long-term use",
    ],
    description: [
      "Yograj Guggul is one of Ayurveda's most respected classical formulations for joint and vata-related wellness. Our tablets follow the traditional recipe with quality-checked raw herbs.",
    ],
  },
  {
    slug: "triphala-guggul",
    name: "Triphala Guggul Tablets",
    tagline: "The timeless triphala-guggul blend",
    category: "classical",
    image: "/images/products/triphala-guggul.png",
    price: 199,
    mrp: 269,
    badge: "Classical",
    benefits: [
      "Triphala plus purified guggul in one tablet",
      "Supports digestion and natural detox",
      "Helps maintain healthy weight with lifestyle changes",
      "A gentle daily classical supplement",
    ],
    ingredients: ["Amalaki", "Bibhitaki", "Haritaki", "Purified Guggul", "Pippali"],
    howToUse: [
      "1–2 tablets twice daily with lukewarm water",
      "Best after meals",
      "Drink enough water through the day",
    ],
    description: [
      "Triphala Guggul combines the world-famous triphala with purified guggul. A simple, time-tested tablet for digestion, detox and weight-management routines.",
    ],
  },
];

// Merge into PRODUCTS (combos + classical)
for (const p of [...COMBOS, ...CLASSICAL]) {
  if (!PRODUCTS.find((x) => x.slug === p.slug)) PRODUCTS.push(p);
}
