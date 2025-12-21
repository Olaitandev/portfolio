'use client'
import GradualBlurMemo from "@/components/GradualBlur";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";


export default function Home() {
  return (
    <div
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      <div style={{ height: "100%", overflowY: "auto", paddingBottom: "4rem" }}>
        <Header />
        <HeroSection />
        <ProjectsSection />
        <TapeSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>

      <GradualBlurMemo
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </div>
  );
}


