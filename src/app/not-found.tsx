import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-4">🌿</div>
      <h1 className="font-serif text-4xl font-bold text-leaf-950 mb-3">Page not found</h1>
      <p className="text-stone-500 mb-8">This page seems to have wandered off into the forest.</p>
      <Link href="/" className="inline-block bg-leaf-700 hover:bg-leaf-800 text-cream-50 font-bold px-8 py-3 rounded-full">
        Back to Home
      </Link>
    </div>
  );
}
