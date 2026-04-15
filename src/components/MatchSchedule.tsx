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
  { date: "JUNE 14, 2026", teams: "Netherlands vs Japan", time: "3:00 PM CT", stage: "Group F" },
  { date: "JUNE 17, 2026", teams: "England vs Croatia", time: "3:00 PM CT", stage: "Group L" },
  { date: "JUNE 22, 2026", teams: "Argentina vs Austria", time: "12:00 PM CT", stage: "Group J" },
  { date: "JUNE 25, 2026", teams: "Japan vs Sweden", time: "6:00 PM CT", stage: "Group F" },
  { date: "JUNE 27, 2026", teams: "Jordan vs Argentina", time: "9:00 PM CT", stage: "Group J" },
  { date: "JUNE 30, 2026", teams: "Round of 32", time: "12:00 PM CT", stage: "Knockout", knockout: true },
  { date: "JULY 3, 2026", teams: "Round of 32", time: "1:00 PM CT", stage: "Knockout", knockout: true },
  { date: "JULY 6, 2026", teams: "Round of 16", time: "2:00 PM CT", stage: "Knockout", knockout: true },
  { date: "JULY 14, 2026", teams: "Semifinal", time: "2:00 PM CT", stage: "Knockout", knockout: true },
];

function Card({ match, index }: { match: Match; index: number }) {
  return (
    <BlurFade delay={0.05 + index * 0.08}>
      <div
        className={cn(
          "bg-charcoal-warm border border-white/5 rounded-xl p-6 h-full relative overflow-hidden",
          "border-l-[2px]",
          match.knockout ? "border-l-gold-light/60" : "border-l-gold/40"
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
            9 Matches. 30 Days. One Stadium. Your Move.
          </h2>
        </BlurFade>
        <BlurFade delay={0.15}>
          <p className="text-text-secondary text-center text-base md:text-lg max-w-2xl mx-auto mb-16">
            Argentina. England. Netherlands. The world&apos;s best are coming to Arlington.
            Where you stay should match the occasion.
          </p>
        </BlurFade>

        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {MATCHES.map((m, i) => (
            <Card key={`${m.date}-${m.teams}`} match={m} index={i} />
          ))}
        </div>

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
      </div>
    </section>
  );
}
