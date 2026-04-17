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
          className="text-gold-dark text-[11px] md:text-xs tracking-[0.35em] uppercase mb-8"
        >
          Triple W Rentals · Dallas · FIFA World Cup 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-charcoal text-[44px] leading-[1.05] sm:text-6xl md:text-7xl max-w-4xl mb-8"
        >
          The World Cup Is Coming to Dallas.
          <br />
          <span className="text-gradient-gold">We&apos;ll Make Sure You&apos;re Ready.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-charcoal/70 text-base md:text-xl max-w-2xl mb-6 leading-relaxed"
        >
          Hotels near AT&amp;T Stadium are booked, overpriced, and miles from the action.
          We bring a premium RV to wherever you&apos;re staying — fully set up, stocked,
          and ready before your first match.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-gold-dark text-[13px] md:text-sm tracking-wide mb-10"
        >
          ★★★★★ 4.7 stars across 200+ Google Reviews
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
          className="mt-6 text-charcoal/60 text-xs md:text-sm tracking-wide"
        >
          20 premium units · Delivered across the U.S. · Personally handled by Westin and his team
        </motion.p>
      </div>
    </section>
  );
}
