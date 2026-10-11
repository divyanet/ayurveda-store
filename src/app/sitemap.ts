import type { MetadataRoute } from "next";
import { PRODUCTS, CATEGORIES } from "@/lib/site";

export const dynamic = "force-static";

const BASE = "https://vedahebals.example"; // TODO: real domain

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/shop", "/about", "/contact", "/cart", "/checkout", "/shipping", "/refunds", "/privacy", "/terms"];
  return [
    ...staticPages.map((p) => ({ url: `${BASE}${p}`, lastModified: now })),
    ...CATEGORIES.map((c) => ({ url: `${BASE}/category/${c.slug}`, lastModified: now })),
    ...PRODUCTS.map((p) => ({ url: `${BASE}/product/${p.slug}`, lastModified: now })),
  ];
}
