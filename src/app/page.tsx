import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HotelMath from "@/components/HotelMath";
import MatchSchedule from "@/components/MatchSchedule";
import Fleet from "@/components/Fleet";
import HowItWorks from "@/components/HowItWorks";
import Experience from "@/components/Experience";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

function GoldDivider() {
  return (
    <div className="w-full flex justify-center bg-charcoal py-6">
      <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GoldDivider />
      <HotelMath />
      <MatchSchedule />
      <GoldDivider />
      <Fleet />
      <HowItWorks />
      <GoldDivider />
      <Experience />
      <Reviews />
      <FAQ />
      <GoldDivider />
      <section className="bg-charcoal w-full pt-2 pb-10">
        <p className="text-center font-sans text-cream/75 text-[13px] md:text-sm tracking-wide px-6">
          Led by Weston — outfitting premium RVs for events across Texas.
        </p>
      </section>
      <BookingForm />
      <Footer />
    </main>
  );
}
