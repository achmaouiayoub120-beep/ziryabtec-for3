"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Video, Award, BarChart3, Zap, Brain, User } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

const features = [
  {
    icon: Bot,
    title: "Tuteur IA Contextuel",
    description:
      "Un assistant intelligent qui connaît le contenu de votre cours et répond en temps réel. Il cite les timestamps vidéo et guide sans donner la réponse.",
    size: "col-span-2 row-span-2",
    accent: "blue" as const,
    preview: (
      <div className="mt-4 space-y-3 text-[var(--text-sm)]">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-secondary)] shrink-0 mt-0.5"><User size={12} /></div>
          <div className="glass rounded-lg rounded-tl-none px-3 py-2 text-xs">
            C&apos;est quoi self en Python ?
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-[rgba(37,99,235,0.2)] flex items-center justify-center text-[var(--electric-blue)] shrink-0 mt-0.5"><Bot size={14} /></div>
          <div className="glass rounded-lg rounded-tl-none px-3 py-2 text-xs text-[var(--text-secondary)]">
            <code className="text-[var(--text-code)]">self</code> fait référence à l&apos;instance courante de la classe.
            <span className="block text-[var(--electric-blue)] mt-1 text-[10px]">[Voir à 14:32 dans la vidéo →]</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Zap,
    title: "Quiz Auto-Générés",
    description: "L'IA analyse la transcription de chaque leçon et génère des quiz pertinents en un clic.",
    size: "col-span-1 row-span-1",
    accent: "cyan" as const,
  },
  {
    icon: BarChart3,
    title: "Analytics Temps Réel",
    description: "Streak, progression, graphiques d'activité — votre dashboard personnel façon Command Center.",
    size: "col-span-1 row-span-1",
    accent: "emerald" as const,
  },
  {
    icon: Video,
    title: "Lecteur Vidéo Premium",
    description:
      "Controls custom, notes horodatées, vitesse variable, sous-titres automatiques, PiP natif — tout dans un lecteur conçu pour l'apprentissage.",
    size: "col-span-2 row-span-1",
    accent: "blue" as const,
    preview: (
      <div className="mt-4 rounded-[var(--radius-sm)] bg-[var(--bg-elevated)] overflow-hidden">
        <div className="h-24 bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-elevated)] flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[rgba(37,99,235,0.2)] flex items-center justify-center">
            <Video size={18} className="text-[var(--electric-blue)]" />
          </div>
        </div>
        <div className="px-3 py-2 flex items-center gap-2">
          <div className="flex-1 h-1 rounded-full bg-[var(--bg-border)]">
            <div className="h-full rounded-full bg-[var(--electric-blue)] w-[45%]" />
          </div>
          <span className="text-[9px] text-[var(--text-muted)] font-mono">12:34 / 28:00</span>
        </div>
      </div>
    ),
  },
  {
    icon: Award,
    title: "Certificats Holographiques",
    description:
      "Pas de PDF. Des certificats web animés avec effet holographique, QR code unique et vérification publique instantanée.",
    size: "col-span-1 row-span-1",
    accent: "cyan" as const,
    preview: (
      <div className="mt-3 p-3 rounded-[var(--radius-sm)] border border-[var(--glass-border)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(37,99,235,0.08)] via-[rgba(6,182,212,0.05)] to-[rgba(16,185,129,0.08)] animate-holo" />
        <div className="relative text-center">
          <div className="text-[9px] text-[var(--text-muted)] uppercase tracking-widest">Certificat</div>
          <div className="text-xs font-bold mt-1">Python Avancé</div>
          <div className="text-[9px] text-[var(--text-muted)] mt-1">Vérifié ✓</div>
        </div>
      </div>
    ),
  },
  {
    icon: Brain,
    title: "Parcours Adaptatif",
    description: "L'IA construit un Knowledge Graph de vos compétences et adapte le parcours en temps réel.",
    size: "col-span-1 row-span-1",
    accent: "emerald" as const,
  },
];

export default function BentoFeatures() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="features">
      <FadeInChild className="text-center mb-16">
        <p className="text-[var(--text-sm)] text-[var(--electric-blue)] font-medium uppercase tracking-widest mb-3">
          Fonctionnalités
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">
          Tout ce qu&apos;il faut pour{" "}
          <GradientText>apprendre mieux</GradientText>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          Des outils de pointe combinés dans une expérience fluide et immersive, conçue pour la communauté tech marocaine.
        </p>
      </FadeInChild>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
        initial={shouldReduceMotion ? {} : "initial"}
        whileInView={shouldReduceMotion ? {} : "animate"}
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={{
              initial: { opacity: 0, y: 20, filter: "blur(8px)" },
              animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
            }}
            className={feature.size}
          >
            <GlassCard
              glow={feature.accent}
              className="h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center"
                  style={{
                    background:
                      feature.accent === "blue"
                        ? "rgba(37,99,235,0.15)"
                        : feature.accent === "cyan"
                        ? "rgba(6,182,212,0.15)"
                        : "rgba(16,185,129,0.15)",
                  }}
                >
                  <feature.icon
                    size={20}
                    style={{
                      color:
                        feature.accent === "blue"
                          ? "var(--electric-blue)"
                          : feature.accent === "cyan"
                          ? "var(--neon-cyan)"
                          : "var(--emerald)",
                    }}
                  />
                </div>
                <h3 className="text-[var(--text-lg)] font-semibold">{feature.title}</h3>
              </div>
              <p className="text-[var(--text-sm)] text-[var(--text-secondary)] leading-relaxed">
                {feature.description}
              </p>
              {feature.preview}
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
