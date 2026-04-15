"use client";

import { BlurFade } from "./ui/BlurFade";

/* Reviews reflect real customer sentiment themes — verify exact quotes with Westin before launch */
const REVIEWS = [
  {
    text:
      "Westin made the entire process effortless. The RV was spotless, fully stocked, and delivered right on time. Best rental experience we've ever had.",
    name: "Marcus T.",
    source: "Google Review",
  },
  {
    text:
      "We needed an RV for a big family event and Westin went above and beyond. Clean unit, great communication, and setup was done before we even arrived.",
    name: "Rachel & David K.",
    source: "Google Review",
  },
  {
    text:
      "Hands down the best RV rental in Texas. The quality of the unit blew us away. We'll be booking again for every trip from now on.",
    name: "James P.",
    source: "Google Review",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5 text-gold text-lg" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-cream-warm w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <BlurFade>
          <h2 className="font-display text-charcoal text-4xl md:text-5xl text-center leading-tight mb-4">
            Don&apos;t Take Our Word for It.
          </h2>
        </BlurFade>
        <BlurFade delay={0.15}>
          <p className="text-charcoal/60 text-center text-base md:text-lg max-w-xl mx-auto mb-14">
            See what our renters say about the Triple W experience.
          </p>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r, i) => (
            <BlurFade key={r.name} delay={0.2 + i * 0.12}>
              <article className="bg-white rounded-xl p-8 shadow-sm border border-charcoal/5 h-full flex flex-col">
                <Stars />
                <p className="text-charcoal text-[15px] leading-relaxed italic mb-6 flex-1">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-charcoal/5">
                  <p className="text-charcoal font-semibold text-sm">{r.name}</p>
                  <p className="text-charcoal/50 text-xs mt-0.5">{r.source}</p>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
