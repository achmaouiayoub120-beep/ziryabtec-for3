"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 min-h-screen">
        <SectionWrapper id="about">
          <FadeInChild className="text-center mb-16">
            <p className="text-[var(--text-sm)] text-[var(--electric-blue)] font-medium uppercase tracking-widest mb-3">
              À Propos
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">
              L'histoire de <GradientText>ZiryabTec</GradientText>
            </h1>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              ZiryabTec est né d'une vision simple : rendre l'éducation technologique de niveau mondial accessible à tous les talents marocains et francophones.
            </p>
            <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[var(--radius-lg)] text-left space-y-6 text-[var(--text-secondary)]">
              <p>
                Inspiré par Ziryab, le génie universel de l'Andalousie, notre plateforme incarne l'excellence, l'innovation et le partage du savoir. Nous croyons que la technologie ne devrait avoir aucune frontière.
              </p>
              <p>
                Notre mission est d'équiper la prochaine génération de développeurs, data scientists et ingénieurs cloud avec les outils les plus avancés du marché, dont notre technologie exclusive de tuteur IA contextuel.
              </p>
              <div className="border-t border-[var(--glass-border)] pt-8 mt-8 text-center">
                <p className="text-2xl font-bold text-[var(--text-primary)] mb-2">Rejoignez le mouvement</p>
                <p className="font-mono text-sm text-[var(--text-muted)]" dir="rtl">علم بلا حدود</p>
              </div>
            </div>
          </FadeInChild>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
