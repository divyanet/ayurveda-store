import Link from "next/link";
import { SITE, CATEGORIES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-leaf-950 text-cream-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-9 h-9 rounded-full bg-leaf-700 grid place-items-center text-xl">🌿</span>
            <span className="font-serif text-2xl font-bold">{SITE.brand}</span>
          </div>
          <p className="text-sm text-cream-100/70 leading-relaxed">
            {SITE.tagline}. Traditional Ayurvedic recipes, honest ingredients, and
            everyday wellness — delivered to your doorstep.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-amber-300">Shop</h4>
          <ul className="space-y-2 text-sm text-cream-100/80">
            <li><Link href="/shop" className="hover:text-amber-300">All Products</Link></li>
            {CATEGORIES.map((c) => (
              <li key={c.slug}><Link href={`/category/${c.slug}`} className="hover:text-amber-300">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-amber-300">Help</h4>
          <ul className="space-y-2 text-sm text-cream-100/80">
            <li><Link href="/about" className="hover:text-amber-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-amber-300">Contact Us</Link></li>
            <li><Link href="/shipping" className="hover:text-amber-300">Shipping Policy</Link></li>
            <li><Link href="/refunds" className="hover:text-amber-300">Refund Policy</Link></li>
            <li><Link href="/privacy" className="hover:text-amber-300">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-amber-300">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-amber-300">Reach Us</h4>
          <ul className="space-y-2 text-sm text-cream-100/80">
            <li>📞 {SITE.phone}</li>
            <li>✉️ {SITE.email}</li>
            <li>📍 {SITE.address}</li>
            <li className="text-cream-100/60">Support: 9 AM – 6 PM, Mon–Sat</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream-100/10">
        <div className="max-w-7xl mx-auto px-4 py-5 text-xs text-cream-100/50 leading-relaxed">
          <p className="mb-2">
            Disclaimer: Our products are Ayurvedic wellness preparations, not medicines.
            They are not intended to diagnose, treat, cure or prevent any disease.
            If you are pregnant, nursing, or taking medication, please consult your doctor before use.
          </p>
          <p>© {new Date().getFullYear()} {SITE.brand}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
