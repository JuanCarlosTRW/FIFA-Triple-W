"use client";

import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import { AnimatedFlagsBackground } from "./ui/AnimatedFlagsBackground";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <AnimatedFlagsBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-gold text-[11px] md:text-xs tracking-[0.35em] uppercase mb-8"
        >
          Triple W Rentals · Dallas · FIFA World Cup 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-cream text-[44px] leading-[1.05] sm:text-6xl md:text-7xl max-w-4xl mb-8"
        >
          Your World Cup Home Base.
          <br />
          <span className="text-gradient-gold">Delivered.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-text-secondary text-base md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Hotels near Dallas Stadium are $1,000+ a night — if you can even find one.
          We deliver a premium RV to your door, fully set up, before your first kickoff.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <CountdownTimer />
        </motion.div>

        <motion.a
          href="#booking"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-charcoal font-semibold text-base md:text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-[0_0_40px_rgba(212,168,83,0.25)] hover:shadow-[0_0_60px_rgba(212,168,83,0.4)]"
        >
          Reserve Your Dates
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-6 text-text-secondary text-xs md:text-sm tracking-wide"
        >
          20 Premium Units · Delivered Anywhere in the US · Book Before They&apos;re Gone
        </motion.p>
      </div>
    </section>
  );
}
