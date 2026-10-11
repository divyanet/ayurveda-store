import Link from "next/link";
import { SITE, CATEGORIES, PRODUCTS, inr } from "@/lib/site";
import ProductCard from "@/components/ProductCard";

const TRUST = [
  { icon: "🌱", title: "100% Natural", text: "Herbs sourced from trusted farms, no artificial colours or flavours." },
  { icon: "🧪", title: "Quality Checked", text: "Every batch passes basic purity and quality checks before packing." },
  { icon: "🚚", title: "Fast Delivery", text: "Dispatched in 24–48 hrs, delivered across India in 3–7 days." },
  { icon: "💵", title: "COD Available", text: "Pay cash on delivery — no advance needed, no risk." },
];

const FAQS = [
  {
    q: "Are your products really Ayurvedic?",
    a: "Yes. Our juices and tablets are prepared from traditional Ayurvedic herbs and classical recipes. We keep the ingredient lists short, readable and honest — what you see on the label is what is inside.",
  },
  {
    q: "How long does delivery take?",
    a: "Orders are dispatched within 24–48 hours and usually reach you in 3–7 working days anywhere in India. Shipping is free on orders above ₹499.",
  },
  {
    q: "Is Cash on Delivery available?",
    a: "Yes, COD is available across India. You can also pay online via UPI, cards or net-banking at checkout.",
  },
  {
    q: "Do Ayurvedic juices have side effects?",
    a: "Our products are gentle herbal preparations for everyday wellness. Still, if you are pregnant, nursing, or taking regular medication, please consult your doctor before starting any new supplement.",
  },
  {
    q: "How should I store the juices?",
    a: "Store in a cool, dry place away from sunlight. Refrigerate after opening and consume within 30 days for best freshness.",
  },
];

export default function Home() {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller);
  const juices = PRODUCTS.filter((p) => p.category === "juices").slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section className="bg-leaf-900 text-cream-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-300 font-semibold tracking-widest uppercase text-sm mb-4">
              🌿 {SITE.tagline}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-5">
              Ancient Ayurveda,
              <br />
              for modern life.
            </h1>
            <p className="text-cream-100/80 text-lg mb-8 max-w-md">
              Herbal juices, value combos and classical formulations — made from
              honest ingredients and delivered to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="bg-amber-400 hover:bg-amber-300 text-leaf-950 font-bold px-8 py-3.5 rounded-full text-lg transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/category/juices"
                className="border-2 border-cream-100/40 hover:border-cream-100 text-cream-50 font-semibold px-8 py-3.5 rounded-full text-lg transition-colors"
              >
                Explore Juices
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/images/products/diabic-care.jpg", label: "Diabic Care" },
              { src: "/images/products/she-care.jpg", label: "She Care" },
              { src: "/images/products/combo-acidity-amla.jpg", label: "Combos" },
              { src: "/images/products/sea-buckthorn.jpg", label: "Sea Buckthorn" },
            ].map((h) => (
              <div key={h.src} className="rounded-2xl overflow-hidden bg-leaf-800 aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={h.src} alt={h.label} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="max-w-7xl mx-auto px-4 -mt-0 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST.map((t) => (
            <div key={t.title} className="bg-white rounded-2xl border border-leaf-900/10 p-5 text-center">
              <div className="text-3xl mb-2">{t.icon}</div>
              <h3 className="font-bold text-leaf-900 mb-1">{t.title}</h3>
              <p className="text-[13px] text-stone-500 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-leaf-950 text-center mb-2">
          Shop by Category
        </h2>
        <p className="text-center text-stone-500 mb-8">Find the right Ayurvedic care for your routine</p>
        <div className="grid md:grid-cols-3 gap-6">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-leaf-800"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/85 via-leaf-950/20 to-transparent" />
              <div className="absolute bottom-0 p-6 text-cream-50">
                <h3 className="font-serif text-2xl font-bold">{c.name}</h3>
                <p className="text-cream-100/80 text-sm">{c.tagline}</p>
                <span className="inline-block mt-3 text-sm font-semibold text-amber-300">
                  Shop now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-cream-100 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-leaf-950 text-center mb-2">
            Our Bestsellers
          </h2>
          <p className="text-center text-stone-500 mb-8">The formulas customers reorder again and again</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestsellers.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/shop"
              className="inline-block bg-leaf-700 hover:bg-leaf-800 text-cream-50 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              View All {PRODUCTS.length} Products
            </Link>
          </div>
        </div>
      </section>

      {/* JUICE STRIP */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-leaf-950">Herbal Juices</h2>
            <p className="text-stone-500 mt-1">One small serving a day, a big step for wellness</p>
          </div>
          <Link href="/category/juices" className="text-leaf-700 font-semibold hover:underline shrink-0">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {juices.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="bg-leaf-900 text-cream-50 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🌿</div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Why {SITE.brand}?
          </h2>
          <p className="text-cream-100/80 text-lg leading-relaxed mb-4">
            We started {SITE.brand} with a simple frustration — most "herbal" products
            hide behind long, unreadable labels. So we do the opposite: short ingredient
            lists, traditional recipes, honest prices, and no tall claims.
          </p>
          <p className="text-cream-100/80 text-lg leading-relaxed">
            Every juice is made from farm-sourced herbs, quality-checked batch by batch,
            and packed fresh. Just Ayurveda, done honestly.
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-leaf-950 font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-leaf-950 text-center mb-8">
          Common Questions
        </h2>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="bg-white rounded-2xl border border-leaf-900/10 px-5 py-4 group">
              <summary className="font-semibold text-leaf-950 cursor-pointer list-none flex justify-between items-center">
                {f.q}
                <span className="text-leaf-600 group-open:rotate-45 transition-transform text-xl">＋</span>
              </summary>
              <p className="text-stone-600 text-[15px] mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-4">
        <div className="bg-amber-400 rounded-3xl px-6 py-10 text-center text-leaf-950">
          <h2 className="font-serif text-3xl font-bold mb-2">Start your Ayurvedic routine today</h2>
          <p className="mb-6">Free shipping above {inr(SITE.freeShipAbove)} · COD available</p>
          <Link
            href="/shop"
            className="inline-block bg-leaf-900 hover:bg-leaf-950 text-cream-50 font-bold px-10 py-3.5 rounded-full text-lg transition-colors"
          >
            Shop All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
