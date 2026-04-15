"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// June 14, 2026 3:00 PM CDT (UTC-5)
const TARGET = new Date("2026-06-14T20:00:00Z").getTime();

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(now: number): Parts {
  const delta = Math.max(0, TARGET - now);
  const days = Math.floor(delta / 86400000);
  const hours = Math.floor((delta % 86400000) / 3600000);
  const minutes = Math.floor((delta % 3600000) / 60000);
  const seconds = Math.floor((delta % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

const formatDays = (n: number) => String(n);
const formatUnit = (n: number) => String(n).padStart(2, "0");

function Unit({ display, label, wide }: { display: string; label: string; wide?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center bg-charcoal-warm/60 border border-gold/20 backdrop-blur-sm rounded-lg px-3 py-4 md:py-5 ${
        wide ? "min-w-[84px] md:min-w-[110px] px-4 md:px-6" : "min-w-[70px] md:min-w-[90px] md:px-5"
      }`}
    >
      <div className="relative h-12 md:h-16 w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-gold text-4xl md:text-6xl font-semibold tabular-nums leading-none"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-text-secondary">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [parts, setParts] = useState<Parts>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    setParts(diff(Date.now()));
    const id = setInterval(() => setParts(diff(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  const done =
    mounted && parts.days === 0 && parts.hours === 0 && parts.minutes === 0 && parts.seconds === 0;

  if (done) {
    return (
      <div className="font-display text-gold text-3xl md:text-4xl">The World Cup is Here.</div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 md:gap-4">
        <Unit display={formatDays(parts.days)} label="Days" wide />
        <span className="font-display text-gold/40 text-3xl md:text-5xl">:</span>
        <Unit display={formatUnit(parts.hours)} label="Hours" />
        <span className="font-display text-gold/40 text-3xl md:text-5xl">:</span>
        <Unit display={formatUnit(parts.minutes)} label="Mins" />
        <span className="font-display text-gold/40 text-3xl md:text-5xl">:</span>
        <Unit display={formatUnit(parts.seconds)} label="Secs" />
      </div>
      <p className="text-text-secondary text-xs md:text-sm mt-4 tracking-wide">
        until Netherlands vs Japan kicks off at Dallas Stadium
      </p>
    </div>
  );
}
