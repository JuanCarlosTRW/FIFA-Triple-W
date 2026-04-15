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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HotelMath />
      <MatchSchedule />
      <Fleet />
      <HowItWorks />
      <Experience />
      <Reviews />
      <FAQ />
      <BookingForm />
      <Footer />
    </main>
  );
}
