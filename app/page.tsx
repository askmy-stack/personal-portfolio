import Hero from "@/components/hero/Hero";
import TechMarquee from "@/components/marquee/TechMarquee";
import SelectedWork from "@/components/work/SelectedWork";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Reading from "@/components/reading/Reading";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <SelectedWork />
      <About />
      <Experience />
      <Reading />
      <Contact />
    </>
  );
}
