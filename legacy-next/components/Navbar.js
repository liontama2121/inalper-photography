"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    import("animejs").then(({ default: anime }) => {
      anime({
        targets: navRef.current,
        translateY: [-60, 0],
        opacity: [0, 1],
        duration: 900,
        delay: 200,
        easing: "easeOutExpo",
      });
    });
  }, []);

  const links = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-7 opacity-0"
      style={{ backdropFilter: "blur(0px)" }}
    >
      <Link
        href="/"
        className="text-sm font-light tracking-[0.3em] uppercase text-white hover:text-white/60 transition-colors duration-300"
      >
        Inalper
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-xs tracking-[0.25em] uppercase transition-colors duration-300 ${
                pathname === href
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-px bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-t border-white/10 py-8 px-8 flex flex-col gap-6 md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
