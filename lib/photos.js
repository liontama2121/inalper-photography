export const categories = [
  "All",
  "Rugby",
  "Taekwondo",
  "Skating",
  "Surf",
  "Artistic Gymnastics",
  "Swimming",
  "Cycling",
  "Boxing",
  "Basketball",
  "Athletics",
  "Weightlifting",
  "World Games",
  "Events",
  "Landscapes",
  "Soccer",
  "Nature",
];

export const toSlug = (cat) => cat.toLowerCase().replace(/\s+/g, "-");

const sportCategories = categories.filter((c) => c !== "All");

// Deterministic placeholder photos — swap src/srcLarge with real paths later
export const photos = sportCategories.flatMap((category, ci) =>
  Array.from({ length: 8 }, (_, i) => {
    const seed = `${toSlug(category)}-${i}`;
    return {
      id: ci * 8 + i + 1,
      category,
      slug: toSlug(category),
      title: `${category} — ${String(i + 1).padStart(2, "0")}`,
      src: `https://picsum.photos/seed/${seed}/800/600`,
      srcLarge: `https://picsum.photos/seed/${seed}/1600/1200`,
      width: 800,
      height: 600,
    };
  })
);

export const getPhotosByCategory = (slug) => {
  if (!slug || slug === "all") return photos;
  return photos.filter((p) => p.slug === slug);
};

export const getCategoryBySlug = (slug) =>
  categories.find((c) => toSlug(c) === slug);

export const categoryExists = (slug) =>
  sportCategories.some((c) => toSlug(c) === slug);
