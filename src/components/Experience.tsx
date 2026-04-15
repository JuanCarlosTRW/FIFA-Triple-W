"use client";

import { BlurFade } from "./ui/BlurFade";
import { TextReveal } from "./ui/TextReveal";

export default function Experience() {
  return (
    <section className="relative bg-charcoal-warm w-full py-24 md:py-40 overflow-hidden noise-overlay">
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
              Wake up on match day in your own space. Make coffee. No lobby. No checkout.
              No strangers.
            </p>
            <p>
              Tailgate with your crew before kickoff. Come back after the final whistle
              to AC, a real kitchen, and actual beds.
            </p>
            <p className="text-cream/90 font-medium">
              The RV isn&apos;t the backup plan. It&apos;s the better plan.
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
