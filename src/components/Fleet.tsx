"use client";

import { BlurFade } from "./ui/BlurFade";
import PremiumImageGallery from "./ui/PremiumImageGallery";

/* TODO: Add video showcase — https://video.wixstatic.com/video/62f926_8ff76b0555c04f32acb69a68ef4633af/480p/mp4/file.mp4 */
const RV_IMAGES = [
  "https://static.wixstatic.com/media/62f926_c393c781146e46d6938c11efb3f377d6~mv2.webp",
  "https://static.wixstatic.com/media/62f926_72984415dae543f5a93113defc3976a4~mv2.webp",
  "https://static.wixstatic.com/media/62f926_6081972934c541bf9b8aaa703b74f585~mv2.webp",
  "https://static.wixstatic.com/media/62f926_69694ee7940c4fe4985b984e4067343e~mv2.webp",
  "https://static.wixstatic.com/media/62f926_26b6714d0a0d4937b73e45668ce44bd9~mv2.webp",
  "https://static.wixstatic.com/media/62f926_d5db0126f18a4cc0884f4308913f9362~mv2.webp",
  "https://static.wixstatic.com/media/62f926_e4c918f468b243d89371fa40f6424fce~mv2.webp",
  "https://static.wixstatic.com/media/62f926_b833defbf81b455991760bc1f4c878ff~mv2.webp",
  "https://static.wixstatic.com/media/62f926_1ba23ff81e904ae2b5feae14ed4754fb~mv2.webp",
  "https://static.wixstatic.com/media/62f926_cf6fafa3b7184f93b149c98ee96c783f~mv2.webp",
];

export default function Fleet() {
  return (
    <section id="fleet" className="bg-charcoal w-full py-20 md:py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <BlurFade>
          <h2 className="font-display text-cream text-4xl md:text-5xl text-center leading-tight mb-6">
            See What You&apos;re Getting.
            <br className="hidden sm:block" />
            <span className="text-gradient-gold"> Not What an Algorithm Picked.</span>
          </h2>
        </BlurFade>
        <BlurFade delay={0.15}>
          <p className="text-text-secondary text-center text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
            Every unit is hand-selected, deep-cleaned, and personally walked through by
            Weston and his team before it leaves our lot. What you see here is exactly
            what shows up at your door.
          </p>
        </BlurFade>

        <BlurFade delay={0.25}>
          <PremiumImageGallery images={RV_IMAGES} />
        </BlurFade>

        <BlurFade delay={0.45}>
          <div className="text-center mt-14">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-semibold text-base px-10 py-4 rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(212,168,83,0.2)]"
            >
              Reserve Your Unit <span aria-hidden>→</span>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
