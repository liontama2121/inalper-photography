"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

export default function GalleryGrid({ photos }) {
  const gridRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (!gridRef.current) return;
    import("animejs").then(({ default: anime }) => {
      anime({
        targets: gridRef.current.querySelectorAll(".gallery-item"),
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 700,
        delay: (_el, i) => i * 60,
        easing: "easeOutExpo",
      });
    });
  }, []);

  const navigate = useCallback(
    (dir) => {
      setLightboxIndex((i) => {
        const next = i + dir;
        if (next < 0) return photos.length - 1;
        if (next >= photos.length) return 0;
        return next;
      });
    },
    [photos.length]
  );

  return (
    <div
      ref={gridRef}
      className="px-8 md:px-16 py-12 columns-1 sm:columns-2 lg:columns-3 gap-1"
    >
      {photos.map((photo, i) => (
        <div
          key={photo.id}
          className="gallery-item break-inside-avoid mb-1 relative overflow-hidden opacity-0 group"
          onClick={() => setLightboxIndex(i)}
        >
          <Image
            src={photo.src}
            alt={photo.title}
            width={photo.width}
            height={photo.height}
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-end p-5 opacity-0 group-hover:opacity-100">
            <p className="text-xs tracking-[0.2em] uppercase text-white/80">
              {photo.title}
            </p>
          </div>
        </div>
      ))}

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={navigate}
        />
      )}
    </div>
  );
}
