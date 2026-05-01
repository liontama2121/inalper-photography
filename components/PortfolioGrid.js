"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { categories, photos as allPhotos } from "@/lib/photos";
import PortfolioCard from "./PortfolioCard";
import Lightbox from "./Lightbox";

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const gridRef = useRef(null);
  const filterBarRef = useRef(null);

  const filteredPhotos =
    activeCategory === "All"
      ? allPhotos
      : allPhotos.filter((p) => p.category === activeCategory);

  // Initial grid reveal
  useEffect(() => {
    import("animejs").then(({ default: anime }) => {
      anime({
        targets: filterBarRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 700,
        easing: "easeOutExpo",
        delay: 300,
      });
    });
  }, []);

  // Stagger cards on category change
  useEffect(() => {
    if (!gridRef.current) return;
    import("animejs").then(({ default: anime }) => {
      anime({
        targets: gridRef.current.querySelectorAll(".portfolio-card"),
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        delay: (_el, i) => i * 50,
        easing: "easeOutExpo",
      });
    });
  }, [activeCategory]);

  const handleCategoryChange = async (cat) => {
    if (cat === activeCategory) return;
    const { default: anime } = await import("animejs");

    // Fade out current cards
    await anime({
      targets: gridRef.current?.querySelectorAll(".portfolio-card"),
      opacity: 0,
      translateY: -20,
      duration: 250,
      easing: "easeInExpo",
    }).finished;

    setActiveCategory(cat);
  };

  const openLightbox = useCallback((photo) => {
    const idx = filteredPhotos.findIndex((p) => p.id === photo.id);
    setLightboxIndex(idx);
  }, [filteredPhotos]);

  const navigate = useCallback((dir) => {
    setLightboxIndex((i) => {
      const next = i + dir;
      if (next < 0) return filteredPhotos.length - 1;
      if (next >= filteredPhotos.length) return 0;
      return next;
    });
  }, [filteredPhotos.length]);

  return (
    <section className="px-8 md:px-16 pb-24">
      {/* Section label */}
      <div className="mb-12">
        <p className="text-xs tracking-[0.35em] uppercase text-white/30">Portfolio</p>
      </div>

      {/* Category filter */}
      <div
        ref={filterBarRef}
        className="mb-12 flex flex-wrap gap-3 opacity-0"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 text-xs tracking-[0.2em] uppercase border transition-colors duration-300 ${
              activeCategory === cat
                ? "border-white text-white bg-white text-black"
                : "border-white/20 text-white/40 hover:border-white/50 hover:text-white/70"
            }`}
            style={activeCategory === cat ? { color: "#000" } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"
      >
        {filteredPhotos.slice(0, 24).map((photo, i) => (
          <PortfolioCard
            key={photo.id}
            photo={photo}
            index={i}
            onClick={openLightbox}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={filteredPhotos}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={navigate}
        />
      )}
    </section>
  );
}
