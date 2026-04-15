"use client";

import Image from "next/image";
import { BlurFade } from "./ui/BlurFade";

type Unit = {
  name: string;
  specs: string;
  image: string;
};

/* TODO: Replace with unique RV photos */
const RV_IMAGE =
  "https://static.wixstatic.com/media/62f926_5c14016a71f74c77a7eedfa86309eadd~mv2.jpg";

const FLEET: Unit[] = [
  {
    name: "The Family Flagship",
    specs: "Sleeps 8 · Full Kitchen · Full Bath · AC",
    image: RV_IMAGE,
  },
  {
    name: "The Group Suite",
    specs: "Sleeps 10 · Full Kitchen · Full Bath · AC",
    image: RV_IMAGE,
  },
  {
    name: "The Couples Retreat",
    specs: "Sleeps 6 · Full Kitchen · Full Bath · AC",
    image: RV_IMAGE,
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="bg-cream w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <BlurFade>
          <h2 className="font-display text-charcoal text-4xl md:text-5xl text-center leading-tight mb-6">
            Premium RVs. Not Rental-Platform Gambles.
          </h2>
        </BlurFade>
        <BlurFade delay={0.15}>
          <p className="text-charcoal/60 text-center text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Every unit in our fleet is personally maintained, deep-cleaned, and
            inspected by Westin before delivery. What you see is what you get.
          </p>
        </BlurFade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET.map((unit, i) => (
            <BlurFade key={unit.name} delay={0.2 + i * 0.1}>
              <article className="group">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-charcoal-warm mb-5">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-display text-charcoal text-xl md:text-[22px] mb-1">
                  {unit.name}
                </h3>
                <p className="text-charcoal/50 text-sm tracking-wide">{unit.specs}</p>
              </article>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5}>
          <div className="text-center mt-16">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-warm text-gold font-semibold text-base px-10 py-4 rounded-lg transition-all duration-300"
            >
              Reserve Your Unit <span aria-hidden>→</span>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
