import Link from "next/link";
import { inr, savePct, type Product } from "@/lib/site";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-leaf-900/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-cream-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {p.badge && (
            <span className="bg-leaf-700 text-cream-50 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
              {p.badge}
            </span>
          )}
          <span className="bg-amber-400 text-leaf-950 text-[11px] font-bold px-2.5 py-1 rounded-full">
            SAVE {savePct(p)}%
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-1 grow">
        <h3 className="font-semibold text-leaf-950 leading-snug group-hover:text-leaf-700 transition-colors">
          {p.name}
        </h3>
        <p className="text-[13px] text-stone-500 line-clamp-2">{p.tagline}</p>
        <div className="mt-auto pt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-leaf-800">{inr(p.price)}</span>
          <span className="text-sm text-stone-400 line-through">{inr(p.mrp)}</span>
        </div>
        <span className="mt-2 inline-block text-center bg-leaf-700 group-hover:bg-leaf-800 text-cream-50 text-sm font-semibold py-2 rounded-full transition-colors">
          Add to Cart
        </span>
      </div>
    </Link>
  );
}
