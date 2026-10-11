import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE, PRODUCTS, getProduct, getCategory, relatedProducts, inr, savePct, packPrice } from "@/lib/site";
import ProductCard from "@/components/ProductCard";
import BuyBox from "./BuyBox";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${SITE.brand}`,
    description: p.tagline,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const cat = getCategory(p.category);
  const related = relatedProducts(slug);
  const packOptions =
    p.category === "juices"
      ? [0, 1, 2].map((i) => ({
          label: ["1000 ml — Pack of 1", "1000 ml — Pack of 2", "1000 ml — Pack of 3"][i],
          price: packPrice(p.price, i),
          mrp: packPrice(p.mrp, i),
        }))
      : [{ label: "Standard pack", price: p.price, mrp: p.mrp }];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 mb-14">
        <div className="bg-white rounded-3xl border border-leaf-900/10 overflow-hidden aspect-square">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
        </div>
        <div>
          {cat && (
            <p className="text-sm font-semibold text-leaf-600 uppercase tracking-widest mb-2">{cat.name}</p>
          )}
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-leaf-950 mb-2">{p.name}</h1>
          <p className="text-stone-500 text-lg mb-4">{p.tagline}</p>
          {p.badge && (
            <span className="inline-block bg-leaf-700 text-cream-50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              {p.badge} · Save {savePct(p)}%
            </span>
          )}
          <BuyBox product={p} packOptions={packOptions} />
          <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[13px]">
            {[
              ["🚚", "Dispatched in 24–48 hrs"],
              ["💵", "COD available"],
              ["↩️", "7-day easy returns"],
            ].map(([i, t]) => (
              <div key={t} className="bg-cream-100 rounded-xl px-2 py-3">
                <div className="text-xl">{i}</div>
                <div className="text-stone-600 mt-1">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-14">
        <div className="bg-white rounded-3xl border border-leaf-900/10 p-6 md:p-8">
          <h2 className="font-serif text-2xl font-bold text-leaf-950 mb-4">Why you'll love it</h2>
          <ul className="space-y-3">
            {p.benefits.map((b) => (
              <li key={b} className="flex gap-3 text-stone-700">
                <span className="text-leaf-600 font-bold">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-leaf-900/10 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-leaf-950 mb-4">Key ingredients</h2>
            <div className="flex flex-wrap gap-2">
              {p.ingredients.map((ing) => (
                <span key={ing} className="bg-leaf-100 text-leaf-900 text-sm font-medium px-3 py-1.5 rounded-full">
                  🌿 {ing}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-leaf-900/10 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-leaf-950 mb-4">How to use</h2>
            <ol className="space-y-2.5">
              {p.howToUse.map((s, i) => (
                <li key={s} className="flex gap-3 text-stone-700">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-leaf-700 text-cream-50 text-xs font-bold grid place-items-center">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-cream-100 rounded-3xl p-6 md:p-8 mb-14">
        <h2 className="font-serif text-2xl font-bold text-leaf-950 mb-4">About this product</h2>
        <div className="space-y-3 text-stone-700 leading-relaxed max-w-4xl">
          {p.description.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-4 max-w-4xl">
          Note: This is an Ayurvedic wellness preparation, not a medicine. It is not intended to
          diagnose, treat, cure or prevent any disease. Please consult your doctor if you are
          pregnant, nursing, or on regular medication.
        </p>
      </div>

      <h2 className="font-serif text-3xl font-bold text-leaf-950 mb-6">You may also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((r) => (
          <ProductCard key={r.slug} p={r} />
        ))}
      </div>
    </div>
  );
}
