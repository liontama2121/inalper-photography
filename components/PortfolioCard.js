"use client";
import { useRef } from "react";
import Image from "next/image";

export default function PortfolioCard({ photo, index, onClick }) {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);

  const handleEnter = async () => {
    const { default: anime } = await import("animejs");
    anime({ targets: cardRef.current, scale: 1.03, duration: 400, easing: "easeOutExpo" });
    anime({ targets: overlayRef.current, opacity: [0, 1], duration: 350, easing: "easeOutQuad" });
    anime({ targets: titleRef.current, translateY: [8, 0], opacity: [0, 1], duration: 350, easing: "easeOutExpo" });
  };

  const handleLeave = async () => {
    const { default: anime } = await import("animejs");
    anime({ targets: cardRef.current, scale: 1, duration: 500, easing: "easeOutExpo" });
    anime({ targets: overlayRef.current, opacity: [1, 0], duration: 300, easing: "easeInQuad" });
    anime({ targets: titleRef.current, opacity: [1, 0], duration: 200, easing: "easeInQuad" });
  };

  return (
    <div
      className="portfolio-card relative overflow-hidden bg-white/5 group"
      style={{
        aspectRatio: index % 5 === 0 ? "4/5" : index % 3 === 0 ? "3/4" : "4/3",
        opacity: 0,
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => onClick(photo)}
    >
      <div ref={cardRef} className="w-full h-full">
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* Hover overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0"
      >
        <div ref={titleRef} className="opacity-0">
          <p className="text-xs tracking-[0.25em] uppercase text-white/50 mb-1">
            {photo.category}
          </p>
          <h3 className="text-sm font-light text-white">{photo.title}</h3>
        </div>
      </div>
    </div>
  );
}
