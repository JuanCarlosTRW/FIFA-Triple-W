"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
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
          className="font-display text-gold text-base sm:text-lg md:text-xl tracking-[0.14em] sm:tracking-[0.18em] uppercase whitespace-nowrap"
        >
          Triple W Rentals
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+19729656901"
            aria-label="Call Triple W Rentals at (972) 965-6901"
            className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light transition-colors whitespace-nowrap text-xs sm:text-sm font-medium"
          >
            <Phone size={14} aria-hidden />
            <span className="hidden sm:inline">(972) 965-6901</span>
          </a>
          <a
            href="#booking"
            className={cn(
              "whitespace-nowrap rounded-md font-medium tracking-wide uppercase transition-all duration-300",
              "px-3 py-2 text-[10px] sm:px-4 sm:py-2 sm:text-xs md:px-5 md:py-2.5 md:text-sm",
              scrolled
                ? "bg-gold text-charcoal hover:bg-gold-light shadow-[0_0_20px_rgba(212,168,83,0.25)]"
                : "border border-gold/60 text-gold hover:bg-gold hover:text-charcoal"
            )}
          >
            <span className="sm:hidden">Reserve</span>
            <span className="hidden sm:inline">Reserve Your Dates</span>
          </a>
        </div>
      </div>
    </header>
  );
}
