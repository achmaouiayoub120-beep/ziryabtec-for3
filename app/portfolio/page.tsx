"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 min-h-screen">
        <SectionWrapper id="portfolio">
          <FadeInChild className="text-center mb-16">
            <p className="text-[var(--text-sm)] text-[var(--electric-blue)] font-medium uppercase tracking-widest mb-3">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">
              Les projets de nos <GradientText>apprenants</GradientText>
            </h1>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Découvrez les applications, sites web et outils créés par notre communauté d'étudiants.
            </p>
          </FadeInChild>
          <FadeInChild>
            <div className="flex items-center justify-center p-12 glass rounded-[var(--radius-lg)] border-dashed border-2 border-[var(--glass-border)]">
              <p className="text-[var(--text-muted)]">Cette section est en cours de construction.</p>
            </div>
          </FadeInChild>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
