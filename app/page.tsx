import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import LogoMarquee from "@/components/landing/LogoMarquee";
import BentoFeatures from "@/components/landing/BentoFeatures";
import CoursesPreview from "@/components/landing/CoursesPreview";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingPreview from "@/components/landing/PricingPreview";
import CTASection from "@/components/landing/CTASection";
import { prisma } from "@/lib/db";

export default async function Home() {
  const dbCourses = await prisma.course.findMany({
    include: { instructor: true },
    take: 8 // Only fetch the top 8 courses for the homepage
  });

  const formattedCourses = dbCourses.map(c => ({
    title: c.title,
    category: c.category,
    instructor: c.instructor.name,
    rating: c.rating,
    students: c.students,
    duration: c.duration,
    price: c.price,
    badge: c.badge as any,
    color: c.color,
    image: c.image
  }));

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LogoMarquee />
        <BentoFeatures />
        <CoursesPreview initialCourses={formattedCourses.length > 0 ? formattedCourses : undefined} />
        <StatsSection />
        <TestimonialsSection />
        <PricingPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
