import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: `About Us — ${SITE.brand}` };

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold text-leaf-950 mb-6">About {SITE.brand}</h1>
      <div className="space-y-5 text-stone-700 leading-relaxed text-[17px]">
        <p>
          {SITE.brand} began with a simple idea — Ayurveda works best when it stays honest.
          No miracle claims, no hidden ingredients, no confusing labels. Just traditional
          recipes made from real herbs, at prices that make sense.
        </p>
        <p>
          Our juices are prepared from farm-sourced herbs like amla, giloy, karela, shatavari
          and ashwagandha. Every batch goes through basic purity and quality checks before it
          is bottled and shipped to you.
        </p>
        <h2 className="font-serif text-2xl font-bold text-leaf-950 pt-4">What we promise</h2>
        <ul className="space-y-3">
          {[
            "Short, readable ingredient lists — you always know what you're drinking.",
            "No artificial colours, flavours or added sugars in our juices.",
            "Honest pricing with regular combo offers — no fake discounts.",
            "Dispatched in 24–48 hours, with COD available across India.",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="text-leaf-600 font-bold">✓</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <h2 className="font-serif text-2xl font-bold text-leaf-950 pt-4">A small note</h2>
        <p>
          We are a young brand and we are learning every day from our customers' feedback.
          If anything about your order isn't right, write to us at {SITE.email} — a real
          person will reply.
        </p>
      </div>
    </div>
  );
}
