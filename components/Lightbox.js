"use client";
import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function Lightbox({ photos, activeIndex, onClose, onNavigate }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const photo = photos[activeIndex];

  // Open animation
  useEffect(() => {
    if (!containerRef.current) return;
    import("animejs").then(({ default: anime }) => {
      anime({
        targets: containerRef.current,
        opacity: [0, 1],
        duration: 300,
        easing: "easeOutQuad",
      });
      anime({
        targets: imgRef.current,
        scale: [0.88, 1],
        opacity: [0, 1],
        duration: 500,
        easing: "easeOutExpo",
      });
    });
  }, [activeIndex]);

  const close = useCallback(async () => {
    const { default: anime } = await import("animejs");
    await anime({
      targets: [imgRef.current, containerRef.current],
      opacity: 0,
      scale: [1, 0.92],
      duration: 300,
      easing: "easeInExpo",
    }).finished;
    onClose();
  }, [onClose]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, onNavigate]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!photo) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center opacity-0"
      onClick={close}
    >
      {/* Image */}
      <div
        ref={imgRef}
        className="relative max-w-[90vw] max-h-[85vh] opacity-0"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.srcLarge}
          alt={photo.title}
          width={1600}
          height={1200}
          className="object-contain max-h-[85vh] w-auto"
          priority
        />
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-white/40">
              {photo.category}
            </p>
            <p className="text-sm text-white/70 mt-0.5">{photo.title}</p>
          </div>
          <p className="text-xs text-white/30">
            {activeIndex + 1} / {photos.length}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
        aria-label="Previous"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
        aria-label="Next"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Close */}
      <button
        className="absolute top-6 right-8 text-white/40 hover:text-white transition-colors text-xs tracking-[0.25em] uppercase"
        onClick={close}
        aria-label="Close"
      >
        Close ✕
      </button>
    </div>
  );
}
