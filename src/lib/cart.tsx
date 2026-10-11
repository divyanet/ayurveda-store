"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./site";

export type CartItem = {
  key: string;
  slug: string;
  name: string;
  image: string;
  variantLabel?: string;
  price: number;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  add: (p: Product, qty: number, variantLabel?: string, unitPrice?: number) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "vedahebals_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const value = useMemo<CartCtx>(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const total = items.reduce((s, i) => s + i.qty * i.price, 0);
    return {
      items,
      count,
      total,
      add: (p, qty, variantLabel, unitPrice) => {
        const price = unitPrice ?? p.price;
        const key = `${p.slug}::${variantLabel ?? "std"}`;
        setItems((prev) => {
          const ex = prev.find((i) => i.key === key);
          if (ex) return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i));
          return [...prev, { key, slug: p.slug, name: p.name, image: p.image, variantLabel, price, qty }];
        });
      },
      remove: (key) => setItems((prev) => prev.filter((i) => i.key !== key)),
      setQty: (key, qty) =>
        setItems((prev) => (qty <= 0 ? prev.filter((i) => i.key !== key) : prev.map((i) => (i.key === key ? { ...i, qty } : i)))),
      clear: () => setItems([]),
    };
  }, [items]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart(): CartCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
}
