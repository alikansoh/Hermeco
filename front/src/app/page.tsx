
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <WhyChooseUs />
    </main>
  );
}
