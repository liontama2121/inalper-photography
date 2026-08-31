"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const HEADLINE = "Photography that speaks for itself";
const QUOTE =
  "There are no rules for good photographs,\nthere are only good photographs.";

export default function Hero() {
  const lettersRef = useRef([]);
  const quoteRef = useRef(null);
  const scrollRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    import("animejs").then(({ default: anime }) => {
      const tl = anime.timeline({ easing: "easeOutExpo" });

      // Overlay fade
      tl.add({
        targets: overlayRef.current,
        opacity: [1, 0.4],
        duration: 1200,
      });

      // Letters appear one by one
      tl.add(
        {
          targets: lettersRef.current.filter(Boolean),
          opacity: [0, 1],
          translateY: [30, 0],
          delay: (_el, i) => i * 35,
          duration: 700,
        },
        "-=800"
      );

      // Scroll hint
      tl.add(
        {
          targets: scrollRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
        },
        "-=200"
      );
    });
  }, []);

  // Quote reveals on scroll via IntersectionObserver
  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        import("animejs").then(({ default: anime }) => {
          anime({
            targets: el,
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 1000,
            easing: "easeOutExpo",
          });
        });
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full">
      {/* Full-screen hero */}
      <div className="relative h-screen w-full flex items-end overflow-hidden">
        <div ref={overlayRef} className="absolute inset-0 bg-black opacity-100">
          <Image
            src="https://picsum.photos/seed/inalper-hero/1920/1080"
            alt="Inalper Photography hero"
            fill
            priority
            className="object-cover"
            style={{ mixBlendMode: "luminosity", opacity: 0.5 }}
          />
        </div>

        {/* Headline */}
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-5xl">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight"
            aria-label={HEADLINE}
          >
            {HEADLINE.split("").map((char, i) => (
              <span
                key={i}
                ref={(el) => (lettersRef.current[i] = el)}
                className="inline-block opacity-0"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char === " " ? " " : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-8 right-8 md:right-12 opacity-0 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/40">
            Scroll
          </span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white/60 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Quote section */}
      <div className="relative py-32 px-8 md:px-16 flex justify-center">
        <blockquote
          ref={quoteRef}
          className="opacity-0 max-w-3xl text-center"
        >
          <p className="text-xl md:text-3xl font-light leading-relaxed text-white/80 whitespace-pre-line italic">
            &ldquo;{QUOTE}&rdquo;
          </p>
          <footer className="mt-6 text-xs tracking-[0.3em] uppercase text-white/30">
            — Ansel Adams
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
