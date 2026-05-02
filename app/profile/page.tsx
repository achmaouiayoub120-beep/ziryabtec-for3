"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import GradientText from "@/components/ui/GradientText";
import { User, Award, BookOpen } from "lucide-react";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 min-h-screen">
        <SectionWrapper id="profile">
          <FadeInChild className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-2">
              Votre <GradientText>Espace Personnel</GradientText>
            </h1>
            <p className="text-[var(--text-secondary)]">
              Gérez votre apprentissage et suivez vos progrès.
            </p>
          </FadeInChild>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInChild className="md:col-span-1">
              <GlassCard className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--neon-cyan)] flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
                  <User size={40} />
                </div>
                <h2 className="text-xl font-bold mb-1">Ayoub Achmaoui</h2>
                <p className="text-[var(--text-sm)] text-[var(--electric-blue)] mb-6">Étudiant Pro</p>
                <div className="space-y-4 text-left border-t border-[var(--glass-border)] pt-6">
                  <div className="flex justify-between items-center text-[var(--text-sm)]">
                    <span className="text-[var(--text-muted)]">Cours complétés</span>
                    <span className="font-semibold text-white">4</span>
                  </div>
                  <div className="flex justify-between items-center text-[var(--text-sm)]">
                    <span className="text-[var(--text-muted)]">Certificats</span>
                    <span className="font-semibold text-white">2</span>
                  </div>
                  <div className="flex justify-between items-center text-[var(--text-sm)]">
                    <span className="text-[var(--text-muted)]">Membre depuis</span>
                    <span className="font-semibold text-white">Avril 2026</span>
                  </div>
                </div>
              </GlassCard>
            </FadeInChild>

            <FadeInChild className="md:col-span-2 space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <BookOpen size={20} className="text-[var(--electric-blue)]" />
                Cours récents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <GlassCard>
                  <p className="text-[10px] text-[var(--electric-blue)] font-medium uppercase tracking-wider mb-1">Développement</p>
                  <h4 className="font-semibold mb-3">Python Avancé & Data Science</h4>
                  <div className="w-full h-1.5 rounded-full bg-[var(--bg-border)] mb-2">
                    <div className="h-full rounded-full bg-[var(--emerald)]" style={{ width: "65%" }} />
                  </div>
                  <p className="text-xs text-[var(--text-muted)] text-right">65%</p>
                </GlassCard>
                <GlassCard>
                  <p className="text-[10px] text-[var(--neon-cyan)] font-medium uppercase tracking-wider mb-1">Frontend</p>
                  <h4 className="font-semibold mb-3">React & Next.js</h4>
                  <div className="w-full h-1.5 rounded-full bg-[var(--bg-border)] mb-2">
                    <div className="h-full rounded-full bg-[var(--emerald)]" style={{ width: "12%" }} />
                  </div>
                  <p className="text-xs text-[var(--text-muted)] text-right">12%</p>
                </GlassCard>
              </div>

              <h3 className="text-xl font-bold flex items-center gap-2 mt-8">
                <Award size={20} className="text-[var(--emerald)]" />
                Derniers Certificats
              </h3>
              <GlassCard className="flex items-center gap-4 border-l-4 border-l-[var(--emerald)]">
                <div className="w-12 h-12 rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center text-[var(--emerald)]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Bases de la Programmation</h4>
                  <p className="text-xs text-[var(--text-muted)]">Délivré le 12 Avril 2026</p>
                </div>
              </GlassCard>
            </FadeInChild>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
