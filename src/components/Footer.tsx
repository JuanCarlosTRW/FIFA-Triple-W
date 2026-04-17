import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-display text-gold text-lg tracking-[0.18em] uppercase mb-2">
          Triple W Rentals
        </p>
        <p className="text-text-secondary text-sm mb-3">
          Tyler, Texas · Nationwide Delivery
        </p>
        <p className="text-text-secondary text-sm mb-3">
          Led by Weston Walker — outfitting premium RVs for events across the country.
        </p>
        <p className="mb-6">
          <a
            href="tel:+19729656901"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm tracking-wide font-medium"
          >
            <Phone size={14} aria-hidden />
            (972) 965-6901
          </a>
        </p>
        <p className="text-text-secondary text-[13px]">
          © 2026 Triple W Rentals. All rights reserved.
        </p>
        <p className="text-text-secondary/50 text-[12px] mt-3">
          This site is not affiliated with or endorsed by FIFA.
        </p>
      </div>
    </footer>
  );
}
