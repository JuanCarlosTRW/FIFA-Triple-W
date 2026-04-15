"use client";

import { BlurFade } from "./ui/BlurFade";
import { cn } from "@/lib/utils";

type Match = {
  date: string;
  teams: string;
  time: string;
  stage: string;
  knockout?: boolean;
};

const MATCHES: Match[] = [
  { date: "June 14, 2026", teams: "Netherlands vs Japan", time: "3:00 PM CT", stage: "Group F" },
  { date: "June 17, 2026", teams: "England vs Croatia", time: "3:00 PM CT", stage: "Group L" },
  { date: "June 22, 2026", teams: "Argentina vs Austria", time: "12:00 PM CT", stage: "Group J" },
  { date: "June 25, 2026", teams: "Japan vs TBD (Playoff)", time: "6:00 PM CT", stage: "Group F" },
  { date: "June 27, 2026", teams: "Jordan vs Argentina", time: "9:00 PM CT", stage: "Group J" },
  { date: "June 30, 2026", teams: "Round of 32", time: "12:00 PM CT", stage: "Knockout", knockout: true },
  { date: "July 3, 2026", teams: "Round of 32", time: "1:00 PM CT", stage: "Knockout", knockout: true },
  { date: "July 6, 2026", teams: "Round of 16", time: "2:00 PM CT", stage: "Knockout", knockout: true },
  { date: "July 14, 2026", teams: "Semifinal", time: "2:00 PM CT", stage: "Semifinal", knockout: true },
];

function Card({ match, index }: { match: Match; index: number }) {
  return (
    <BlurFade delay={0.05 + index * 0.08}>
      <div
        className={cn(
          "bg-charcoal-warm border border-white/5 rounded-xl p-6 h-full relative overflow-hidden",
          "border-l-[2px]",
          match.knockout ? "border-l-gold-light" : "border-l-gold"
        )}
      >
        <p className="text-gold text-[11px] tracking-[0.25em] uppercase mb-3 font-medium">
          {match.date}
        </p>
        <h3 className="font-display text-cream text-[22px] md:text-2xl leading-snug mb-4">
          {match.teams}
        </h3>
        <p className="text-text-secondary text-[13px] tracking-wide">
          {match.time} · {match.stage}
        </p>
      </div>
    </BlurFade>
  );
}

export default function MatchSchedule() {
  return (
    <section className="relative bg-charcoal-mid w-full py-20 md:py-32">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(212,168,83,0.4) 50%, transparent 100%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <BlurFade>
          <h2 className="font-display text-cream text-4xl md:text-5xl text-center mb-6 leading-tight">
            9 Matches. 30 Days. One Stadium.
          </h2>
        </BlurFade>
        <BlurFade delay={0.15}>
          <p className="text-text-secondary text-center text-base md:text-lg max-w-2xl mx-auto mb-16">
            The biggest names in world football are coming to Arlington.
            Your accommodation should match the occasion.
          </p>
        </BlurFade>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {MATCHES.map((m, i) => (
            <Card key={`${m.date}-${m.teams}`} match={m} index={i} />
          ))}
        </div>

        {/* Mobile scroll */}
        <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4">
          {MATCHES.map((m, i) => (
            <div
              key={`${m.date}-${m.teams}`}
              className="snap-start shrink-0 w-[78vw] max-w-[320px]"
            >
              <Card match={m} index={i} />
            </div>
          ))}
        </div>

        <BlurFade delay={0.2}>
          <p className="text-text-secondary text-center text-[15px] max-w-3xl mx-auto mt-14 leading-relaxed">
            Argentina twice. England. Netherlands. Japan. A semifinal.
            This isn&apos;t just any World Cup venue — Dallas gets the marquee matches.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
