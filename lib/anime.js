// Reusable animation parameter builders — call inside useEffect only
// Each returns a params object ready for anime()

export const fadeInUp = (targets, delay = 0) => ({
  targets,
  translateY: [50, 0],
  opacity: [0, 1],
  duration: 900,
  delay,
  easing: "easeOutExpo",
});

export const staggerFadeIn = (targets, staggerDelay = 80) => ({
  targets,
  translateY: [30, 0],
  opacity: [0, 1],
  duration: 700,
  easing: "easeOutExpo",
  delay: (_el, i) => i * staggerDelay,
});

export const slideDown = (targets, delay = 0) => ({
  targets,
  translateY: [-80, 0],
  opacity: [0, 1],
  duration: 800,
  delay,
  easing: "easeOutExpo",
});

export const scaleIn = (targets, delay = 0) => ({
  targets,
  scale: [0.85, 1],
  opacity: [0, 1],
  duration: 600,
  delay,
  easing: "easeOutExpo",
});

export const fadeOut = (targets) => ({
  targets,
  opacity: [1, 0],
  translateY: [0, -20],
  duration: 300,
  easing: "easeInExpo",
});
