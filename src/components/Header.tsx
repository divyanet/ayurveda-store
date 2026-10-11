"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE, CATEGORIES } from "@/lib/site";
import { useCart } from "@/lib/cart";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop All" },
  ...CATEGORIES.map((c) => ({ href: `/category/${c.slug}`, label: c.name })),
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { count } = useCart();
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-leaf-900 text-cream-50 text-center text-[13px] py-2 px-3 tracking-wide">
        Free shipping on orders above {SITE.currency}
        {SITE.freeShipAbove} · COD available across India
      </div>
      <div className="bg-cream-50/95 backdrop-blur border-b border-leaf-900/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-leaf-700 text-cream-50 grid place-items-center text-xl">🌿</span>
            <span className="font-serif text-2xl font-bold text-leaf-900">{SITE.brand}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium text-leaf-950">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`hover:text-leaf-700 transition-colors ${path === n.href ? "text-leaf-700 underline underline-offset-8 decoration-2" : ""}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative inline-flex items-center gap-2 bg-leaf-700 hover:bg-leaf-800 text-cream-50 text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              🛒 Cart
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-leaf-950 text-xs font-bold w-6 h-6 rounded-full grid place-items-center">
                  {count}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-2xl text-leaf-900"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {open && (
          <nav className="md:hidden border-t border-leaf-900/10 px-4 py-3 flex flex-col gap-3 text-[15px] font-medium text-leaf-950 bg-cream-50">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-1">
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
