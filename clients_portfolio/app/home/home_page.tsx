"use client";

import NavSection from "./sections/NavSection";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import WhySection from "./sections/WhySection";
import ProcessSection from "./sections/ProcessSection";
import EngagementsSection from "./sections/EngagementsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import JoinSection from "./sections/JoinSection";
import StartPlanSection from "./sections/StartPlanSection";

export default function HomePage() {
  return (
    <>
      <NavSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <EngagementsSection />
      <TestimonialsSection />
      <JoinSection />
      <StartPlanSection />
    </>
  );
}
