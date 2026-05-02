"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import GradientText from "@/components/ui/GradientText";

export default function FAQsPage() {
  const faqs = [
    {
      q: "Comment fonctionne le tuteur IA ?",
      a: "Le tuteur IA analyse le contenu de votre cours actuel. Vous pouvez lui poser des questions spécifiques sur le sujet abordé, et il vous guidera vers la bonne réponse en mentionnant même le passage exact dans la vidéo."
    },
    {
      q: "Puis-je annuler mon abonnement à tout moment ?",
      a: "Oui, notre abonnement est sans engagement. Vous pouvez l'annuler à tout moment depuis votre espace profil."
    },
    {
      q: "Les certificats sont-ils reconnus ?",
      a: "Absolument. Nos certificats sont générés avec une empreinte numérique unique (holographique) et un QR code, ce qui permet à tout employeur de vérifier leur authenticité directement sur notre plateforme."
    },
    {
      q: "Proposez-vous des tarifs pour les étudiants ?",
      a: "Oui, nous offrons une réduction de 30% pour les étudiants marocains sous présentation d'une carte étudiante valide. Contactez notre support."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 min-h-screen">
        <SectionWrapper id="faqs">
          <FadeInChild className="text-center mb-16">
            <p className="text-[var(--text-sm)] text-[var(--electric-blue)] font-medium uppercase tracking-widest mb-3">
              Support
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">
              Questions <GradientText>Fréquentes</GradientText>
            </h1>
          </FadeInChild>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeInChild key={index}>
                <GlassCard className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)]">{faq.q}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{faq.a}</p>
                </GlassCard>
              </FadeInChild>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
