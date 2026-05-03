import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import CoursesPreview from "@/components/landing/CoursesPreview";
import BentoFeatures from "@/components/landing/BentoFeatures";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingPreview from "@/components/landing/PricingPreview";
import CTASection from "@/components/landing/CTASection";
import LogoMarquee from "@/components/landing/LogoMarquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--bg)]">
        <HeroSection />
        <LogoMarquee />
        <StatsSection />
        <CoursesPreview />
        <BentoFeatures />
        <TestimonialsSection />
        <PricingPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
