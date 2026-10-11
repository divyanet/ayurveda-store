"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SITE, inr } from "@/lib/site";
import { useCart } from "@/lib/cart";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const router = useRouter();
  const [pay, setPay] = useState("cod");
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", pincode: "" });
  const shipping = total >= SITE.freeShipAbove ? 0 : 49;

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const valid =
    form.name.trim().length >= 3 &&
    /^[6-9]\d{9}$/.test(form.phone.trim()) &&
    form.address.trim().length >= 10 &&
    form.city.trim().length >= 2 &&
    /^\d{6}$/.test(form.pincode.trim());

  const placeOrder = () => {
    if (!valid || !items.length) return;
    const orderId = `VH${Date.now().toString().slice(-8)}`;
    try {
      localStorage.setItem(
        "vedahebals_last_order",
        JSON.stringify({ orderId, total: total + shipping, pay, name: form.name, items: items.length, date: new Date().toISOString() })
      );
    } catch {}
    clear();
    router.push(`/order-success?order=${orderId}`);
  };

  if (!items.length) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-3xl font-bold text-leaf-950 mb-4">Nothing to check out</h1>
        <Link href="/shop" className="inline-block bg-leaf-700 text-cream-50 font-bold px-8 py-3 rounded-full">
          Shop Products
        </Link>
      </div>
    );
  }

  const input =
    "w-full border-2 border-leaf-900/15 rounded-xl px-4 py-2.5 text-[15px] focus:border-leaf-700 focus:outline-none bg-white";

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-leaf-950 mb-8">Checkout</h1>
      <div className="grid md:grid-cols-[1fr_320px] gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-leaf-900/10 p-6">
            <h2 className="font-serif text-xl font-bold text-leaf-950 mb-4">Delivery Details</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className={input} placeholder="Full name *" value={form.name} onChange={set("name")} />
              <input className={input} placeholder="10-digit mobile number *" value={form.phone} onChange={set("phone")} inputMode="numeric" />
              <textarea className={`${input} sm:col-span-2`} rows={3} placeholder="Full address (house no, street, landmark) *" value={form.address} onChange={set("address")} />
              <input className={input} placeholder="City *" value={form.city} onChange={set("city")} />
              <input className={input} placeholder="PIN code *" value={form.pincode} onChange={set("pincode")} inputMode="numeric" />
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-leaf-900/10 p-6">
            <h2 className="font-serif text-xl font-bold text-leaf-950 mb-4">Payment Method</h2>
            <div className="space-y-3">
              {[
                { id: "cod", label: "💵 Cash on Delivery", note: "Pay when your order arrives" },
                { id: "upi", label: "📱 UPI / Online Payment", note: "Pay securely via UPI, card or net-banking" },
              ].map((m) => (
                <label
                  key={m.id}
                  className={`flex items-start gap-3 border-2 rounded-2xl px-4 py-3 cursor-pointer transition-colors ${
                    pay === m.id ? "border-leaf-700 bg-leaf-50" : "border-leaf-900/10"
                  }`}
                >
                  <input type="radio" name="pay" checked={pay === m.id} onChange={() => setPay(m.id)} className="mt-1" />
                  <span>
                    <span className="font-semibold text-leaf-950 block">{m.label}</span>
                    <span className="text-sm text-stone-500">{m.note}</span>
                    {m.id === "upi" && (
                      <span className="block text-xs text-amber-700 mt-1">
                        Note: online payment gateway integration is pending — please choose COD for now.
                      </span>
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-leaf-900/10 p-6 h-fit">
          <h2 className="font-serif text-xl font-bold text-leaf-950 mb-4">Your Order</h2>
          <div className="space-y-2 text-sm max-h-56 overflow-auto mb-4">
            {items.map((i) => (
              <div key={i.key} className="flex justify-between gap-2 text-stone-600">
                <span className="line-clamp-1">{i.name} × {i.qty}</span>
                <span className="font-semibold text-leaf-950 shrink-0">{inr(i.price * i.qty)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-leaf-900/10 pt-3 space-y-2 text-sm">
            <div className="flex justify-between text-stone-600"><span>Subtotal</span><span>{inr(total)}</span></div>
            <div className="flex justify-between text-stone-600"><span>Shipping</span><span>{shipping === 0 ? "FREE" : inr(shipping)}</span></div>
            <div className="flex justify-between font-bold text-lg text-leaf-950"><span>Total</span><span>{inr(total + shipping)}</span></div>
          </div>
          <button
            onClick={placeOrder}
            disabled={!valid}
            className={`w-full mt-5 font-bold py-3.5 rounded-full transition-colors ${
              valid ? "bg-amber-400 hover:bg-amber-300 text-leaf-950" : "bg-stone-200 text-stone-400 cursor-not-allowed"
            }`}
          >
            Place Order · {inr(total + shipping)}
          </button>
          {!valid && <p className="text-xs text-stone-400 mt-2 text-center">Please fill all delivery details correctly.</p>}
        </div>
      </div>
    </div>
  );
}
