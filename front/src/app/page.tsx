
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeWork from "./components/HowWeWork";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <WhyChooseUs />
      <HowWeWork />
    </main>
  );
}
