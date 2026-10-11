import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE, CATEGORIES, getCategory, productsByCategory } from "@/lib/site";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCategory(slug);
  return {
    title: c ? `${c.name} — ${SITE.brand}` : "Category",
    description: c?.tagline,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) notFound();
  const items = productsByCategory(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-leaf-900 text-cream-50 rounded-3xl px-6 py-10 mb-10 flex items-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={c.image} alt={c.name} className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover hidden sm:block" />
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-1">{c.name}</h1>
          <p className="text-cream-100/70">{c.tagline}</p>
          <p className="text-cream-100/50 text-sm mt-1">{items.length} products</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}
