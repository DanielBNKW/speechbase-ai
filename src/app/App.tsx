import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Problem from "@/app/components/Problem";
import Solution from "@/app/components/Solution";
import HowItWorks from "@/app/components/HowItWorks";
import Pricing from "@/app/components/Pricing";
import BottomCTA from "@/app/components/BottomCTA";
import Footer from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pricing />
      <BottomCTA />
      <Footer />
    </div>
  );
}