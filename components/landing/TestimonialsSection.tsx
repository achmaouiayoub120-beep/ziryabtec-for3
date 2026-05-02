"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Fatima Zahra El Idrissi",
    role: "Développeuse Full-Stack",
    company: "OCP Group",
    quote:
      "ZiryabTec a transformé ma façon d'apprendre. Le tuteur IA est incroyable — il répond comme un vrai formateur, avec les timestamps de la vidéo en bonus. J'ai décroché ma promotion grâce aux compétences acquises ici.",
    rating: 5,
    avatar: "FZ",
  },
  {
    name: "Youssef Amrani",
    role: "Data Scientist",
    company: "Capgemini Maroc",
    quote:
      "Le parcours Python & Data Science est le meilleur contenu francophone que j'ai trouvé. La qualité des cours surpasse largement ce qu'on trouve sur les plateformes internationales. Et tout ça à un prix accessible.",
    rating: 5,
    avatar: "YA",
  },
  {
    name: "Nadia Bennani",
    role: "Étudiante en Informatique",
    company: "ENSIAS",
    quote:
      "En tant qu'étudiante, j'apprécie la flexibilité et la qualité premium. Les certificats vérifiables m'ont aidée à me démarquer lors de mes candidatures de stage. L'interface est magnifique aussi!",
    rating: 5,
    avatar: "NB",
  },
  {
    name: "Karim Tazi",
    role: "CTO",
    company: "StartupFlow",
    quote:
      "J'ai formé toute mon équipe de développeurs via ZiryabTec. Le dashboard d'entreprise nous permet de suivre la progression de chacun. ROI évident dès le premier mois.",
    rating: 4,
    avatar: "KT",
  },
  {
    name: "Salma Chraibi",
    role: "DevOps Engineer",
    company: "Freelance",
    quote:
      "Le cours DevOps & Cloud est exceptionnellement bien structuré. Les quiz générés par l'IA après chaque chapitre m'ont vraiment aidée à consolider mes connaissances. بزاف مزيان!",
    rating: 5,
    avatar: "SC",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <SectionWrapper id="testimonials" className="overflow-hidden">
      <FadeInChild className="text-center mb-16">
        <p className="text-[var(--text-sm)] text-[var(--electric-blue)] font-medium uppercase tracking-widest mb-3">
          Témoignages
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">
          Ce que disent nos{" "}
          <GradientText>apprenants</GradientText>
        </h2>
      </FadeInChild>

      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="glass rounded-[var(--radius-lg)] p-8 md:p-12 text-center"
          >
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--neon-cyan)] flex items-center justify-center text-xl font-bold text-white mx-auto mb-4 shadow-[var(--glow-blue)]">
              {t.avatar}
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < t.rating
                      ? "fill-[var(--amber-warn)] text-[var(--amber-warn)]"
                      : "text-[var(--text-muted)]"
                  }
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-[var(--text-lg)] md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="font-semibold text-[var(--text-primary)]">{t.name}</span>
                <BadgeCheck size={16} className="text-[var(--electric-blue)]" />
              </div>
              <p className="text-[var(--text-sm)] text-[var(--text-muted)]">
                {t.role} · {t.company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[rgba(37,99,235,0.3)] transition-all"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-[var(--electric-blue)] w-6"
                    : "bg-[var(--bg-border)] hover:bg-[var(--text-muted)]"
                }`}
                aria-label={`Voir témoignage ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[rgba(37,99,235,0.3)] transition-all"
            aria-label="Témoignage suivant"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
