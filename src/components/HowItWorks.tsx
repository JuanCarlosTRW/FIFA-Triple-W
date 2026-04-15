"use client";

import { BlurFade } from "./ui/BlurFade";

const STEPS = [
  {
    num: "01",
    title: "Choose Your Dates",
    desc: "Tell us which matches you're attending. We'll recommend the right rental window to cover your full World Cup schedule.",
  },
  {
    num: "02",
    title: "We Deliver & Set Up",
    desc: "Your RV arrives at your campground or RV park, ready to go. Westin personally walks you through everything before your first match.",
  },
  {
    num: "03",
    title: "Enjoy the World Cup",
    desc: "Come home to your own space after every match. Cook, relax, sleep comfortably. We pick up when you're done.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-charcoal w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <BlurFade>
          <h2 className="font-display text-cream text-4xl md:text-5xl text-center leading-tight mb-16 md:mb-20">
            Three Steps. Zero Stress.
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {STEPS.map((s, i) => (
            <BlurFade key={s.num} delay={0.15 + i * 0.15}>
              <div className="relative md:px-6">
                {i > 0 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute left-0 top-12 bottom-12 w-px bg-gold/20"
                  />
                )}
                {i > 0 && (
                  <span
                    aria-hidden
                    className="md:hidden block w-10 h-px bg-gold/30 mx-auto mb-8 -mt-4"
                  />
                )}
                <p className="font-display text-gold/30 text-5xl md:text-6xl font-semibold mb-4 leading-none">
                  {s.num}
                </p>
                <h3 className="font-display text-cream text-2xl md:text-[26px] mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-text-secondary text-[15px] md:text-base leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
