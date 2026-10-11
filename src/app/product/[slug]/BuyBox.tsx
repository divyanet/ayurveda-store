"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { inr, type Product } from "@/lib/site";
import { useCart } from "@/lib/cart";

export default function BuyBox({
  product,
  packOptions,
}: {
  product: Product;
  packOptions: { label: string; price: number; mrp: number }[];
}) {
  const [pack, setPack] = useState(0);
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const router = useRouter();
  const opt = packOptions[pack];

  const buy = (goCheckout: boolean) => {
    add(product, qty, opt.label, opt.price);
    if (goCheckout) router.push("/checkout");
    else router.push("/cart");
  };

  return (
    <div>
      {packOptions.length > 1 && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-leaf-950 mb-2">Pack size</p>
          <div className="flex flex-wrap gap-2">
            {packOptions.map((o, i) => (
              <button
                key={o.label}
                onClick={() => setPack(i)}
                className={`text-sm font-medium px-4 py-2 rounded-full border-2 transition-colors ${
                  pack === i
                    ? "border-leaf-700 bg-leaf-700 text-cream-50"
                    : "border-leaf-900/15 text-stone-600 hover:border-leaf-700"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-3xl font-bold text-leaf-800">{inr(opt.price)}</span>
        <span className="text-lg text-stone-400 line-through">{inr(opt.mrp)}</span>
        <span className="text-sm font-bold text-leaf-700">
          ({Math.round(((opt.mrp - opt.price) / opt.mrp) * 100)}% off)
        </span>
      </div>
      <p className="text-xs text-stone-400 mb-5">Inclusive of all taxes</p>

      <div className="flex items-center gap-4 mb-5">
        <div className="flex items-center border-2 border-leaf-900/15 rounded-full overflow-hidden">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-10 h-10 text-xl text-leaf-800 hover:bg-cream-100"
            aria-label="Decrease"
          >
            −
          </button>
          <span className="w-8 text-center font-bold">{qty}</span>
          <button
            onClick={() => setQty(Math.min(9, qty + 1))}
            className="w-10 h-10 text-xl text-leaf-800 hover:bg-cream-100"
            aria-label="Increase"
          >
            ＋
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => buy(false)}
          className="flex-1 border-2 border-leaf-700 text-leaf-800 hover:bg-leaf-700 hover:text-cream-50 font-bold py-3.5 rounded-full transition-colors"
        >
          🛒 Add to Cart
        </button>
        <button
          onClick={() => buy(true)}
          className="flex-1 bg-amber-400 hover:bg-amber-300 text-leaf-950 font-bold py-3.5 rounded-full transition-colors"
        >
          ⚡ Buy Now
        </button>
      </div>
    </div>
  );
}
