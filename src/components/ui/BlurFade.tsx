"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "li" | "span";
};

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 16,
  blur = "6px",
  once = true,
  amount = 0.2,
  as = "div",
}: Props) {
  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset, filter: `blur(${blur})` },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
