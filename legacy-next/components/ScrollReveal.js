"use client";
import { useEffect, useRef } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up", // "up" | "down" | "left" | "right" | "none"
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const translateMap = {
      up: [0, 50],
      down: [0, -50],
      left: [50, 0],
      right: [-50, 0],
      none: [0, 0],
    };
    const [translateX, translateY] = translateMap[direction] ?? [0, 50];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        import("animejs").then(({ default: anime }) => {
          anime({
            targets: el,
            translateY: translateY !== 0 ? [translateY, 0] : undefined,
            translateX: translateX !== 0 ? [translateX, 0] : undefined,
            opacity: [0, 1],
            duration: 900,
            delay,
            easing: "easeOutExpo",
          });
        });

        observer.disconnect();
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
