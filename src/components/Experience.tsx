"use client";

import { BlurFade } from "./ui/BlurFade";
import { TextReveal } from "./ui/TextReveal";

export default function Experience() {
  return (
    <section className="relative bg-charcoal-warm w-full py-24 md:py-40 overflow-hidden noise-overlay">
      {/* TODO: Full-bleed atmospheric RV setup image — dusk, string lights, chairs, grill */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(212,168,83,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(184,146,47,0.08) 0%, transparent 55%)",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <BlurFade>
          <h2 className="font-display text-cream text-[40px] md:text-6xl leading-[1.1] mb-10">
            <TextReveal>More Than a Place to Sleep.</TextReveal>
          </h2>
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="text-text-secondary text-[17px] md:text-[19px] leading-[1.7] max-w-2xl mx-auto space-y-5">
            <p>
              Tailgate before the match. Come back to AC and a real bed after.
              Cook breakfast for the group instead of waiting 45 minutes at a
              hotel restaurant. Watch the recap on your own couch. Step outside
              to the atmosphere of a World Cup city that&apos;s alive with energy.
            </p>
            <p className="text-cream/90">
              This isn&apos;t just accommodation. It&apos;s your World Cup basecamp.
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={0.35}>
          <a
            href="#booking"
            className="mt-12 inline-block text-gold text-base md:text-lg border-b border-gold/40 hover:border-gold pb-1 transition-all duration-300"
          >
            Reserve your basecamp →
          </a>
        </BlurFade>
      </div>
    </section>
  );
}
