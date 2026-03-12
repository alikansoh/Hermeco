import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeWork from "./components/HowWeWork";
import Projects from "./components/Projects";
import WelcomeModal from "./components/Welcomemodal";

export default function Home() {
  return (
    <main className="">
      <WelcomeModal />
      <Hero />
      <About />
      <WhyChooseUs />
      <HowWeWork />
      {/* <Projects /> */}
    </main>
  );
}