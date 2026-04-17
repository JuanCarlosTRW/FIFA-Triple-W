"use client";

import { BlurFade } from "./ui/BlurFade";
import { TextReveal } from "./ui/TextReveal";
import { SoftGlowBackground } from "./ui/SoftGlowBackground";

export default function Experience() {
  return (
    <section className="relative bg-charcoal-warm w-full py-24 md:py-40 overflow-hidden noise-overlay">
      <SoftGlowBackground color="#FF7112" opacity={0.28} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <BlurFade>
          <h2 className="font-display text-cream text-[40px] md:text-6xl leading-[1.1] mb-10">
            <TextReveal>More Than a Place to Sleep.</TextReveal>
          </h2>
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="text-text-secondary text-[17px] md:text-[19px] leading-[1.7] max-w-2xl mx-auto">
            <p>
              The World Cup only comes to your city once in a generation. The matches
              are the memory you came for — but the quiet moments matter too. Morning
              coffee before the crowds wake up. The walk back after a win. A real bed,
              a real shower, a space that feels like yours for the week. That&apos;s
              what we build every rental around.
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={0.35}>
          <a
            href="#booking"
            className="mt-12 inline-flex items-center justify-center bg-gold hover:bg-gold-light text-charcoal font-semibold text-base md:text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-[0_0_40px_rgba(212,168,83,0.25)] hover:shadow-[0_0_60px_rgba(212,168,83,0.4)]"
          >
            Reserve Your Dates <span aria-hidden className="ml-2">→</span>
          </a>
        </BlurFade>
      </div>
    </section>
  );
}
