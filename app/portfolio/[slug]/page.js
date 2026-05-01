import { notFound } from "next/navigation";
import {
  getPhotosByCategory,
  getCategoryBySlug,
  categoryExists,
  categories,
  toSlug,
} from "@/lib/photos";
import GalleryGrid from "./GalleryGrid";
import Link from "next/link";

export function generateStaticParams() {
  return categories
    .filter((c) => c !== "All")
    .map((c) => ({ slug: toSlug(c) }));
}

export default function CategoryPage({ params }) {
  if (!categoryExists(params.slug)) notFound();

  const photos = getPhotosByCategory(params.slug);
  const categoryName = getCategoryBySlug(params.slug);

  return (
    <div className="min-h-screen pt-28">
      {/* Header */}
      <div className="px-8 md:px-16 py-16 border-b border-white/10">
        <Link
          href="/"
          className="text-xs tracking-[0.25em] uppercase text-white/30 hover:text-white/70 transition-colors"
        >
          ← Back
        </Link>
        <h1 className="mt-8 text-5xl md:text-7xl font-light tracking-tight">
          {categoryName}
        </h1>
        <p className="mt-3 text-xs tracking-[0.25em] uppercase text-white/30">
          {photos.length} photographs
        </p>
      </div>

      {/* Masonry gallery */}
      <GalleryGrid photos={photos} />
    </div>
  );
}
