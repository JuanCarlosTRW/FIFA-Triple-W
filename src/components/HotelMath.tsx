"use client";

import { BlurFade } from "./ui/BlurFade";
import { NumberTicker } from "./ui/NumberTicker";

const BENEFITS = [
  "Sleeps 6–10 comfortably",
  "Full kitchen, private bathroom, climate-controlled",
  "Delivered and set up wherever you're staying",
  "One flat price — no surge fees, no hidden costs",
  "Your own private space for the full tournament",
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
            <p className="text-gold text-[11px] tracking-[0.35em] uppercase mb-6">The Dallas Reality</p>
            <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-8">
              Hotels Weren&apos;t Built for a Tournament Like This.
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10">
              Since the World Cup schedule dropped, hotels within striking distance of
              AT&amp;T Stadium have tripled in price — and most of the good ones are
              already gone. A single night near the stadium now runs over $1,000. Five
              nights during the group stage can easily cross $12,000 for a family of
              six. That&apos;s before food, parking, or the rideshare surge on match day.
            </p>
            <div className="flex flex-col gap-5">
              <Stat value={1000} prefix="$" suffix="+" label="per night near AT&T Stadium" />
              <Stat
                value={2400}
                prefix="$"
                suffix="+"
                label="per night for a group of six (two rooms)"
                delay={0.1}
              />
              <Stat
                value={12000}
                prefix="$"
                suffix="+"
                label="for five nights during the group stage"
                delay={0.2}
              />
              <Stat
                value={300}
                suffix="%"
                label="hotel price surge since the schedule was announced"
                delay={0.3}
              />
            </div>
            <p className="text-text-secondary text-sm mt-8 italic">
              And that&apos;s if you can still find a room.
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
              A Better Way to Stay
            </p>
            <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-8">
              Your Own Space, Right Where You Want It.
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10">
              We deliver a premium RV to the campground or location of your choice,
              fully set up and ready to walk into. You get your own kitchen, your own
              bathroom, room to sleep six to ten people comfortably, and one honest
              price from start to finish — no surge pricing, no fine print, no
              surprises the morning of your match.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-cream text-base md:text-[17px]">
                  <span className="text-gold text-xl leading-tight mt-[2px]">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mb-10 rounded-lg border border-gold/20 bg-gold/[0.04] px-5 py-4">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-1.5">
                Optional Add-On
              </p>
              <p className="text-cream text-[15px] md:text-base leading-snug">
                <span className="font-semibold">Starlink Wi-Fi</span> — high-speed
                satellite internet for your unit. Stream matches, hop on a work call,
                stay connected anywhere we deliver.
              </p>
            </div>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 border border-gold/60 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 px-6 py-3 rounded-md text-sm font-medium tracking-wide uppercase"
            >
              Reserve Your Dates <span aria-hidden>→</span>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
