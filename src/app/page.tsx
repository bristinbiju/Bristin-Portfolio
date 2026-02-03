"use client";

import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import LogoMarquee from "@/components/sections/logo-marquee";
import BenefitsGrid from "@/components/sections/benefits-grid";
import WhyChooseUs from "@/components/sections/why-choose-us";
import CapabilitiesSection from "@/components/sections/capabilities";
import TestimonialsSection from "@/components/sections/testimonials";
import Pricing from "@/components/sections/pricing";
import FAQSection from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <LogoMarquee />
      <BenefitsGrid />
      <CapabilitiesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <Pricing />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
