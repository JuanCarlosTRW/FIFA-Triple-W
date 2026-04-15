"use client";

import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center noise-overlay"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 bg-charcoal" />
      <div
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,168,83,0.18) 0%, rgba(184,146,47,0.08) 35%, transparent 70%)",
          animation: "orbDrift 24s ease-in-out infinite",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute -bottom-1/3 -right-1/4 w-[80vw] h-[80vw] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,168,83,0.14) 0%, rgba(26,21,16,0.4) 40%, transparent 72%)",
          animation: "orbDriftAlt 30s ease-in-out infinite",
          filter: "blur(28px)",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 w-[40vw] h-[40vw] rounded-full opacity-40 -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle at center, rgba(232,201,122,0.10) 0%, transparent 65%)",
          animation: "orbDrift 28s ease-in-out infinite reverse",
          filter: "blur(32px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-gold text-[11px] md:text-xs tracking-[0.35em] uppercase mb-8"
        >
          Triple W Rentals · FIFA World Cup 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-cream text-[44px] leading-[1.05] sm:text-6xl md:text-7xl max-w-4xl mb-8"
        >
          Your World Cup Headquarters.
          <br />
          <span className="text-gradient-gold">Delivered to Dallas.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-text-secondary text-base md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Skip the $1,000/night hotels. Get a premium RV delivered, set up,
          and ready before your first match at Dallas Stadium.
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
          20 Premium RVs · Nationwide Delivery · Limited Availability
        </motion.p>
      </div>
    </section>
  );
}
