"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BlurFade } from "./ui/BlurFade";

const FAQS = [
  {
    q: "How far are the RV parks from AT&T Stadium?",
    a: "There are several RV parks and campgrounds within 15–30 minutes of AT&T Stadium in Arlington. We can recommend the best options based on your group size and preferences. Many of our World Cup renters are booking at parks along the I-30 and I-20 corridors for easy stadium access.",
  },
  {
    q: "Do you deliver and set up the RV?",
    a: "Yes. We deliver nationwide across the entire US. Your RV arrives at your campground or designated location fully prepped — leveled, connected, and ready for you. Weston and his team personally walk you through the unit so you're comfortable with everything before your first match.",
  },
  {
    q: "What if I only need the RV for 3–4 days?",
    a: "We offer flexible rental windows. Whether you're coming for a single match or staying for the entire group stage, we'll build a rental period that fits your schedule. Just tell us your dates and we'll make it work.",
  },
  {
    q: "Is there AC? It's Texas in June.",
    a: "Every unit comes with full air conditioning. We know Texas summers. Our RVs are built to keep you cool and comfortable — you'll sleep better than you would in most hotels.",
  },
  {
    q: "What if my team advances and I want to extend my rental?",
    a: "If your unit is available for the extended dates, we'll make it happen. We'll do our best to accommodate schedule changes — just give us as much notice as possible.",
  },
  {
    q: "What's included in the rental?",
    a: "Full kitchen, full bathroom, sleeping for 6–10 (depending on unit), AC, generator, linens and basic kitchen supplies. We deliver, set up, and pick up. You just show up and enjoy.",
  },
  {
    q: "How do I reserve?",
    a: "Fill out the form below with your dates and group size. Weston and his team will personally confirm your reservation within 24 hours and help you choose the right unit.",
  },
];

function Item({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gold/10">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-cream text-base md:text-[17px] font-medium leading-snug group-hover:text-gold transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-gold text-2xl leading-none shrink-0 mt-[-2px]"
          aria-hidden
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary text-[15px] leading-relaxed pb-6 pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-charcoal w-full py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <BlurFade>
          <h2 className="font-display text-cream text-4xl md:text-5xl text-center leading-tight mb-14">
            Questions Before You Book
          </h2>
        </BlurFade>
        <BlurFade delay={0.15}>
          <div>
            {FAQS.map((f, i) => (
              <Item
                key={f.q}
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
