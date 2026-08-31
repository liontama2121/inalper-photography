import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import LogoMarquee from "@/components/LogoMarquee";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <PortfolioGrid />

      <LogoMarquee />

      {/* CTA */}
      <section className="py-40 px-8 md:px-16 flex flex-col items-center text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.4em] uppercase text-white/30 mb-6">
            Get in touch
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-12 max-w-2xl">
            Memories Worth Telling
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Link
            href="/contact"
            className="inline-block border border-white px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors duration-500"
          >
            Start a project
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
