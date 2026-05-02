"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Video, Award, BarChart3, Zap, Brain, User } from "lucide-react";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";

const features = [
  {
    icon: Bot,
    title: "Tuteur IA Contextuel",
    description:
      "Un assistant intelligent qui connaît le contenu de votre cours et répond en temps réel. Il cite les timestamps vidéo et guide sans donner la réponse.",
    size: "col-span-2 row-span-2",
    accent: "blue" as const,
    preview: (
      <div className="mt-6 space-y-4 text-sm">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] shrink-0"><User size={14} /></div>
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-[var(--text-primary)]">
            C&apos;est quoi self en Python ?
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[var(--accent)] shrink-0"><Bot size={16} /></div>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-[var(--text-primary)]">
            <code className="bg-blue-100 px-1 rounded text-[var(--accent)]">self</code> fait référence à l&apos;instance courante de la classe.
            <span className="block text-[var(--accent)] mt-1.5 text-xs font-bold">[Voir à 14:32 dans la vidéo →]</span>
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
      <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg-alt)] overflow-hidden shadow-sm">
        <div className="h-32 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center relative">
           <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--accent)]">
            <Video size={20} />
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 px-2">
            <div className="flex-1 h-1 rounded-full bg-white/50 overflow-hidden">
               <div className="h-full bg-[var(--accent)] w-[45%]" />
            </div>
            <span className="text-[10px] text-[var(--text-muted)] font-bold">12:34</span>
          </div>
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
      <div className="mt-4 p-4 rounded-xl border border-blue-100 bg-blue-50/50 relative overflow-hidden group">
        <div className="relative text-center">
          <div className="text-[10px] text-[var(--accent)] uppercase font-bold tracking-widest">Certificat</div>
          <div className="text-sm font-bold mt-1 text-[var(--text-primary)]">Python Avancé</div>
          <div className="text-[10px] text-[var(--success)] font-bold mt-1 flex items-center justify-center gap-1">✓ Vérifié</div>
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
    <SectionWrapper id="features" className="py-24 bg-[var(--bg-alt)]">
      <FadeInChild className="text-center mb-16">
        <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
          Fonctionnalités
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-[var(--text-primary)]">
          Tout ce qu&apos;il faut pour <span className="text-[var(--accent)]">apprendre mieux</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
          Des outils de pointe combinés dans une expérience fluide et immersive, conçue pour la communauté tech marocaine.
        </p>
      </FadeInChild>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto max-w-[1200px] mx-auto"
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
            <div className="elite-card h-full p-8 bg-white flex flex-col border border-[var(--border)] hover:border-[var(--accent)] transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[var(--accent)]">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">{feature.title}</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
                {feature.description}
              </p>
              {feature.preview}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
