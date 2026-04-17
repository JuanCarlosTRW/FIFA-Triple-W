"use client";

import { BlurFade } from "./ui/BlurFade";

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gold mx-auto mb-6"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <rect x="8" y="14" width="3" height="3" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gold mx-auto mb-6"
    >
      <path d="M1 3h15v13H1z" />
      <path d="M16 8h4l3 4v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gold mx-auto mb-6"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 22V18a2 2 0 0 1 4 0v4" />
      <rect x="6" y="2" width="12" height="10" rx="2" />
    </svg>
  );
}

const STEPS = [
  {
    num: "STEP 01",
    title: "Choose Your Dates",
    desc: "Tell us which matches you're attending and we'll recommend the right rental window for your full World Cup schedule.",
    Icon: CalendarIcon,
  },
  {
    num: "STEP 02",
    title: "We Deliver & Set Up",
    desc: "Your RV arrives at your campground or chosen location, fully set up and ready. Weston and his team personally walk you through everything before your first match.",
    Icon: TruckIcon,
  },
  {
    num: "STEP 03",
    title: "Enjoy the Tournament",
    desc: "Come home to your own space after every match. Cook, relax, sleep well. When the tournament wraps, we pick up. That's it.",
    Icon: TrophyIcon,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-charcoal w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <BlurFade>
          <h2 className="font-display text-cream text-4xl md:text-5xl text-center leading-tight mb-16 md:mb-20">
            Simple From the First Call to the Last Match.
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((s, i) => (
            <BlurFade key={s.num} delay={0.15 + i * 0.15}>
              <div className="group bg-charcoal-warm/50 border border-white/5 rounded-2xl p-8 md:p-10 text-center h-full transition-all duration-300 hover:border-gold/25 hover:-translate-y-1 hover:bg-charcoal-warm/70">
                <s.Icon />
                <p className="text-gold/50 text-[11px] tracking-[0.3em] uppercase mb-3 font-medium">
                  {s.num}
                </p>
                <h3 className="font-display text-cream text-2xl md:text-[26px] mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-text-secondary text-[15px] leading-relaxed">
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
