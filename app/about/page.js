import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "About — Inalper Photography",
};

export default function About() {
  return (
    <div className="min-h-screen pt-28">
      {/* Header */}
      <div className="px-8 md:px-16 py-16 border-b border-white/10">
        <p className="text-xs tracking-[0.4em] uppercase text-white/30 mb-4">
          About
        </p>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight max-w-xl leading-none">
          Inaldo
          <br />
          Pérez
        </h1>
      </div>

      {/* Content */}
      <div className="px-8 md:px-16 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Photo */}
        <ScrollReveal direction="left">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://picsum.photos/seed/inalper-portrait/800/1066"
              alt="Inaldo Pérez — photographer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>

        {/* Bio */}
        <div className="flex flex-col gap-10 md:pt-8">
          <ScrollReveal delay={100}>
            <p className="text-lg font-light leading-relaxed text-white/80">
              Sports and documentary photographer based in Colombia. Specialized
              in capturing the decisive moment — the peak of effort, the
              geometry of bodies in motion, the emotion of competition.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-base font-light leading-relaxed text-white/50">
              With over a decade behind the lens, Inaldo has covered major
              international events including the World Games, Pan American
              Championships, and national sports federations across South
              America.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-base font-light leading-relaxed text-white/50">
              His approach is editorial: minimal post-processing, maximum
              authenticity. Every frame is a document — a proof that the moment
              existed exactly as it was.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="pt-4 flex flex-col gap-4 border-t border-white/10">
              {[
                ["Based", "Colombia"],
                ["Specialization", "Sports · Documentary · Events"],
                ["Languages", "Spanish · English"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-white/30 tracking-[0.15em] uppercase text-xs">
                    {label}
                  </span>
                  <span className="text-white/70">{value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <Link
              href="/contact"
              className="inline-block border border-white/30 px-8 py-3.5 text-xs tracking-[0.25em] uppercase text-white/70 hover:border-white hover:text-white transition-colors duration-400 w-fit"
            >
              Work together
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
