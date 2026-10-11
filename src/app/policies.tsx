import type { Metadata } from "next";
import { SITE } from "@/lib/site";

function Page({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold text-leaf-950 mb-6">{title}</h1>
      <div className="space-y-4 text-stone-700 leading-relaxed">{children}</div>
    </div>
  );
}

export function Shipping() {
  return (
    <Page title="Shipping Policy">
      <p>Orders are dispatched within 24–48 hours of confirmation (working days).</p>
      <p>Delivery usually takes 3–7 working days anywhere in India.</p>
      <p>Shipping is FREE on orders above {SITE.currency}{SITE.freeShipAbove}. A flat {SITE.currency}49 shipping charge applies below that.</p>
      <p>Cash on Delivery (COD) is available across India.</p>
      <p>You will receive tracking details on your mobile number once your order ships.</p>
    </Page>
  );
}

export function Refunds() {
  return (
    <Page title="Refund & Return Policy">
      <p>We accept returns within 7 days of delivery for unopened, unused products in original packaging.</p>
      <p>If you receive a damaged, leaking or wrong product, share a photo within 48 hours of delivery and we will replace it free of charge.</p>
      <p>Refunds for prepaid orders are processed to the original payment method within 5–7 working days of approval.</p>
      <p>For COD orders, refunds are made via bank transfer/UPI.</p>
      <p>To start a return, contact us at {SITE.email} or {SITE.phone} with your order ID.</p>
    </Page>
  );
}

export function Privacy() {
  return (
    <Page title="Privacy Policy">
      <p>We collect only the information needed to process your order — your name, phone number, delivery address and order details.</p>
      <p>Your data is never sold or shared with third parties for marketing. It is shared only with our delivery partners to fulfil your order.</p>
      <p>Payment information is processed securely by our payment gateway; we never store your card or UPI details.</p>
      <p>You can ask us to correct or delete your personal data anytime by writing to {SITE.email}.</p>
    </Page>
  );
}

export function Terms() {
  return (
    <Page title="Terms of Service">
      <p>By placing an order on {SITE.brand}, you agree that you are 18 years or older and that the delivery details you provide are accurate.</p>
      <p>Our products are Ayurvedic wellness preparations, not medicines, and are not intended to diagnose, treat, cure or prevent any disease.</p>
      <p>Prices and offers may change without notice. In case of a pricing error, we reserve the right to cancel the order with a full refund.</p>
      <p>Any disputes will be subject to the jurisdiction of courts in {SITE.address}.</p>
    </Page>
  );
}

export const metadata: Metadata = { title: `Policies — ${SITE.brand}` };
