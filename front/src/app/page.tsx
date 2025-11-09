import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeWork from "./components/HowWeWork";
import Projects from "./components/Projects";
import OfferModal from "./components/offer"; // Add this

export default function Home() {
  return (
    <main className="">
      <OfferModal /> {/* Add this at the top */}
      <Hero />
      <About />
      <WhyChooseUs />
      <HowWeWork />
      <Projects />
    </main>
  );
}