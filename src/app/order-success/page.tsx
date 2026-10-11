"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { SITE } from "@/lib/site";

function SuccessInner() {
  const q = useSearchParams();
  const order = q.get("order") ?? "";

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-leaf-700 text-cream-50 grid place-items-center text-4xl mb-6">
        ✓
      </div>
      <h1 className="font-serif text-4xl font-bold text-leaf-950 mb-3">Order placed!</h1>
      <p className="text-stone-500 mb-2">Thank you for shopping with {SITE.brand}.</p>
      {order && (
        <p className="mb-6">
          Your order ID is <span className="font-bold text-leaf-800 bg-leaf-100 px-3 py-1 rounded-full">{order}</span>
        </p>
      )}
      <p className="text-sm text-stone-400 mb-8 max-w-md mx-auto">
        We'll call you shortly to confirm your order. It will be dispatched within 24–48 hours.
      </p>
      <Link
        href="/shop"
        className="inline-block bg-leaf-700 hover:bg-leaf-800 text-cream-50 font-bold px-8 py-3 rounded-full"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default function OrderSuccess() {
  return (
    <Suspense>
      <SuccessInner />
    </Suspense>
  );
}
