"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId;
    let isVisible = false;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const tick = () => {
      // Dot: near-instant follow
      dotX += (mouseX - dotX) * 0.85;
      dotY += (mouseY - dotY) * 0.85;

      // Ring: lagged follow (anime.js-style easing via lerp)
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      dot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;

      rafId = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      ring.style.transform += " scale(1.8)";
    };

    const onLeave = () => {
      ring.style.transform = ring.style.transform.replace(" scale(1.8)", "");
    };

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] opacity-0"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/60 rounded-full pointer-events-none z-[9998] opacity-0"
        style={{ willChange: "transform", transition: "border-color 0.3s" }}
      />
    </>
  );
}
