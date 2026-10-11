import type { Metadata } from "next";
import { SITE, PRODUCTS, CATEGORIES } from "@/lib/site";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: `Shop All Ayurvedic Products — ${SITE.brand}`,
  description: "Browse all herbal juices, value combos and classical Ayurvedic formulations.",
};

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-leaf-950 mb-2">Shop All Products</h1>
      <p className="text-stone-500 mb-8">{PRODUCTS.length} honest Ayurvedic products, one store.</p>

      {CATEGORIES.map((c) => {
        const items = PRODUCTS.filter((p) => p.category === c.slug);
        if (!items.length) return null;
        return (
          <section key={c.slug} className="mb-12">
            <div className="flex items-end justify-between mb-5">
              <h2 className="font-serif text-2xl font-bold text-leaf-950">{c.name}</h2>
              <span className="text-sm text-stone-400">{items.length} products</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {items.map((p) => (
                <ProductCard key={p.slug} p={p} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
