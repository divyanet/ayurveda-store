"use client";

import Link from "next/link";
import { SITE, inr } from "@/lib/site";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const { items, total, setQty, remove } = useCart();
  const shipping = total >= SITE.freeShipAbove || total === 0 ? 0 : 49;

  if (!items.length) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="font-serif text-3xl font-bold text-leaf-950 mb-3">Your cart is empty</h1>
        <p className="text-stone-500 mb-8">Add some Ayurvedic goodness to get started.</p>
        <Link
          href="/shop"
          className="inline-block bg-leaf-700 hover:bg-leaf-800 text-cream-50 font-bold px-8 py-3 rounded-full"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-leaf-950 mb-8">Your Cart</h1>
      <div className="grid md:grid-cols-[1fr_320px] gap-8">
        <div className="space-y-4">
          {items.map((i) => (
            <div key={i.key} className="bg-white rounded-2xl border border-leaf-900/10 p-4 flex gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={i.image} alt={i.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div className="grow">
                <h3 className="font-semibold text-leaf-950">{i.name}</h3>
                {i.variantLabel && <p className="text-xs text-stone-400">{i.variantLabel}</p>}
                <p className="font-bold text-leaf-800 mt-1">{inr(i.price)}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center border border-leaf-900/15 rounded-full">
                    <button onClick={() => setQty(i.key, i.qty - 1)} className="w-8 h-8 text-lg" aria-label="Decrease">−</button>
                    <span className="w-6 text-center text-sm font-bold">{i.qty}</span>
                    <button onClick={() => setQty(i.key, i.qty + 1)} className="w-8 h-8 text-lg" aria-label="Increase">＋</button>
                  </div>
                  <button onClick={() => remove(i.key)} className="text-sm text-red-600 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
              <div className="font-bold text-leaf-950 shrink-0">{inr(i.price * i.qty)}</div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl border border-leaf-900/10 p-6 h-fit">
          <h2 className="font-serif text-xl font-bold text-leaf-950 mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-stone-600">
              <span>Subtotal</span>
              <span className="font-semibold text-leaf-950">{inr(total)}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Shipping</span>
              <span className="font-semibold text-leaf-950">{shipping === 0 ? "FREE" : inr(shipping)}</span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-amber-700 bg-amber-100 rounded-lg px-3 py-2">
                Add {inr(SITE.freeShipAbove - total)} more for FREE shipping
              </p>
            )}
            <div className="border-t border-leaf-900/10 pt-3 flex justify-between font-bold text-lg text-leaf-950">
              <span>Total</span>
              <span>{inr(total + shipping)}</span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="block text-center mt-5 bg-amber-400 hover:bg-amber-300 text-leaf-950 font-bold py-3.5 rounded-full transition-colors"
          >
            Proceed to Checkout →
          </Link>
          <Link href="/shop" className="block text-center mt-3 text-sm text-leaf-700 hover:underline">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
