import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.brand} — Pure Ayurvedic Products Online`,
  description:
    "Shop authentic Ayurvedic juices, wellness combos and classical formulations. Natural ingredients, honest prices, delivered across India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
