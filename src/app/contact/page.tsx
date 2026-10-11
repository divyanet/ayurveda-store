import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: `Contact Us — ${SITE.brand}` };

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold text-leaf-950 mb-6">Contact Us</h1>
      <p className="text-stone-600 mb-8">
        Questions about a product, your order, or anything else? Reach out — we reply within
        one working day.
      </p>
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {[
          { icon: "📞", title: "Call / WhatsApp", text: SITE.phone, sub: "9 AM – 6 PM, Mon–Sat" },
          { icon: "✉️", title: "Email", text: SITE.email, sub: "Replies within 24 hrs" },
          { icon: "📍", title: "Address", text: SITE.address, sub: "India" },
        ].map((c) => (
          <div key={c.title} className="bg-white rounded-2xl border border-leaf-900/10 p-6 text-center">
            <div className="text-3xl mb-2">{c.icon}</div>
            <h3 className="font-bold text-leaf-950 mb-1">{c.title}</h3>
            <p className="text-sm text-stone-600 break-words">{c.text}</p>
            <p className="text-xs text-stone-400 mt-1">{c.sub}</p>
          </div>
        ))}
      </div>
      <div className="bg-amber-100 border border-amber-300 rounded-2xl p-5 text-sm text-amber-900">
        Note: phone number, email and address shown here are placeholders. Replace them with
        your real business contact details in <code>src/lib/site.ts</code> before going live.
      </div>
    </div>
  );
}
