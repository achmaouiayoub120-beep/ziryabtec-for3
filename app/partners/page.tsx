"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LogoMarquee from "@/components/landing/LogoMarquee";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 min-h-screen">
        <SectionWrapper id="partners">
          <FadeInChild className="text-center mb-16">
            <p className="text-[var(--text-sm)] text-[var(--electric-blue)] font-medium uppercase tracking-widest mb-3">
              Partenaires
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">
              Nos <GradientText>Partenaires Technologiques</GradientText>
            </h1>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
              Nous collaborons avec les meilleures entreprises tech pour vous offrir une formation de pointe.
            </p>
          </FadeInChild>
          <LogoMarquee />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
