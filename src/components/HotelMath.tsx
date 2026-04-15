"use client";

import { BlurFade } from "./ui/BlurFade";
import { NumberTicker } from "./ui/NumberTicker";

const BENEFITS = [
  "Sleeps 6–10 comfortably",
  "Full kitchen, bathroom, and AC",
  "Delivered and set up at your location",
  "One price. No surge fees. No surprises.",
  "Your own private space for the entire tournament",
];

function Stat({
  value,
  prefix,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  return (
    <div className="flex items-baseline gap-4 border-b border-white/5 pb-5">
      <div className="font-display text-gold text-4xl md:text-5xl font-semibold min-w-[140px] md:min-w-[180px]">
        <NumberTicker value={value} prefix={prefix} suffix={suffix} delay={delay} />
      </div>
      <p className="text-cream/80 text-sm md:text-base leading-snug">{label}</p>
    </div>
  );
}

export default function HotelMath() {
  return (
    <section className="relative w-full">
      <div className="grid md:grid-cols-2">
        <BlurFade
          as="div"
          delay={0.1}
          className="bg-charcoal px-6 py-20 md:py-32 md:px-16 lg:px-20 border-b md:border-b-0 md:border-r border-white/5"
        >
          <div className="max-w-xl md:ml-auto">
            <p className="text-gold text-[11px] tracking-[0.35em] uppercase mb-6">The Reality</p>
            <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-10">
              Do the Hotel Math.
              <br />
              It Doesn&apos;t Add Up.
            </h2>
            <div className="flex flex-col gap-5">
              <Stat value={1000} prefix="$" suffix="+" label="per night near AT&T Stadium" />
              <Stat
                value={2400}
                prefix="$"
                suffix="+"
                label="per night for a group of 6 (two rooms)"
                delay={0.1}
              />
              <Stat
                value={12000}
                prefix="$"
                suffix="+"
                label="for 5 nights during group stage"
                delay={0.2}
              />
              <Stat
                value={300}
                suffix="%"
                label="hotel price surge since schedule announced"
                delay={0.3}
              />
            </div>
            <p className="text-text-secondary text-sm mt-8 italic">
              And that&apos;s if you can even find a room.
            </p>
          </div>
        </BlurFade>

        <BlurFade
          as="div"
          delay={0.3}
          className="bg-charcoal-warm px-6 py-20 md:py-32 md:px-16 lg:px-20"
        >
          <div className="max-w-xl">
            <p className="text-gold text-[11px] tracking-[0.35em] uppercase mb-6">
              The Smarter Play
            </p>
            <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-10">
              A Better Way to Stay.
              <br />
              A Fraction of the Price.
            </h2>
            <ul className="flex flex-col gap-4 mb-10">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-cream text-base md:text-[17px]">
                  <span className="text-gold text-xl leading-tight mt-[2px]">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#fleet"
              className="inline-flex items-center gap-2 border border-gold/60 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 px-6 py-3 rounded-md text-sm font-medium tracking-wide uppercase"
            >
              See Available Units <span aria-hidden>→</span>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
