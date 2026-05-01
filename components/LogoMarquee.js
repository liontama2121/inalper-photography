"use client";
import { useEffect, useRef } from "react";

const PARTNERS = [
  "World Games",
  "Athletics Federation",
  "Rugby Union",
  "Olympic Committee",
  "Sports Photography",
  "Swimming Federation",
  "Cycling Union",
  "Boxing Commission",
  "Basketball League",
  "Gymnastics Federation",
];

export default function LogoMarquee() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.5; // px per frame
    let rafId;

    const tick = () => {
      position -= speed;
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    animationRef.current = rafId;

    return () => cancelAnimationFrame(rafId);
  }, []);

  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-24 border-t border-b border-white/10 overflow-hidden">
      <div className="mb-12 px-8 md:px-16">
        <p className="text-xs tracking-[0.35em] uppercase text-white/30">
          Professional Relationships
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div ref={trackRef} className="flex gap-16 whitespace-nowrap w-max">
          {items.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-white/20 hover:text-white/60 transition-colors duration-500"
            >
              <span className="w-1 h-1 bg-white/20 rounded-full flex-shrink-0" />
              <span className="text-sm tracking-[0.2em] uppercase font-light">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
