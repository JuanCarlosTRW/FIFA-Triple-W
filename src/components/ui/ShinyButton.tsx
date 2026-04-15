"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
  className?: string;
};

export function ShinyButton({ children, className, ...props }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={cn(
        "relative overflow-hidden rounded-lg px-8 py-4 text-charcoal font-semibold",
        "bg-gold hover:bg-gold-light transition-colors duration-300",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{
          animation: "shimmer 2.5s linear infinite",
          backgroundSize: "200% 100%",
        }}
      />
    </motion.button>
  );
}
