"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          className="font-display text-gold text-lg md:text-xl tracking-[0.18em] uppercase"
        >
          Triple W Rentals
        </a>
        <a
          href="#booking"
          className={cn(
            "px-4 py-2 md:px-5 md:py-2.5 rounded-md text-xs md:text-sm font-medium tracking-wide uppercase transition-all duration-300",
            scrolled
              ? "bg-gold text-charcoal hover:bg-gold-light shadow-[0_0_20px_rgba(212,168,83,0.25)]"
              : "border border-gold/60 text-gold hover:bg-gold hover:text-charcoal"
          )}
        >
          Reserve Your Dates
        </a>
      </div>
    </header>
  );
}
