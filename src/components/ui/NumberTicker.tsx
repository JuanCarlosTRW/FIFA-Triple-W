"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
};

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  decimalPlaces = 0,
  className,
  prefix,
  suffix,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => {
      motionValue.set(direction === "down" ? 0 : value);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [inView, value, direction, delay, motionValue]);

  useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      setDisplay(
        Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)))
      );
    });
    return () => unsub();
  }, [springValue, decimalPlaces]);

  return (
    <motion.span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
