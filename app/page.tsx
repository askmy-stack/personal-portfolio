import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import SectionDivider from "@/components/SectionDivider";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const FeaturedProjects = dynamic(() => import("@/components/FeaturedProjects"));
const Certifications = dynamic(() => import("@/components/Certifications"));
const Services = dynamic(() => import("@/components/Services"));
const Writings = dynamic(() => import("@/components/Writings"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <FeaturedProjects />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Writings />
      <SectionDivider />
      <Contact />
    </>
  );
}
