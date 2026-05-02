"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Play, Sparkles, Flame, Bot } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GradientText from "@/components/ui/GradientText";
import { transitions } from "@/lib/utils";

const stats = [
  { value: 2400, suffix: "+", label: "Apprenants" },
  { value: 48, label: "Cours" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

const titleWords = ["Apprenez.", "Progressez.", "Prouvez-le."];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Zellige Pattern Background */}
      <div className="absolute inset-0 zellige-pattern opacity-40" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[var(--bg-obsidian)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-obsidian)] to-transparent" />

      {/* Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--electric-blue)] opacity-[0.04] blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[var(--neon-cyan)] opacity-[0.05] blur-[100px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Pre-title Badge */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitions.enter, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[var(--text-sm)] text-[var(--text-secondary)] mb-8"
          >
            <Sparkles size={14} className="text-[var(--electric-blue)]" />
            <span>Plateforme N°1 au Maroc</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--emerald)] animate-pulse" />
          </motion.div>

          {/* Hero Title — Staggered Word Reveal */}
          <h1 className="mb-6">
            {titleWords.map((word, i) => (
              <motion.span
                key={word}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  ...transitions.enter,
                  delay: 0.2 + i * 0.12,
                }}
                className="inline-block mr-4 text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.04em] leading-[1.05]"
              >
                {i === 2 ? (
                  <GradientText>{word}</GradientText>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitions.enter, delay: 0.55 }}
            className="text-[var(--text-lg)] md:text-xl text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            La première plateforme d&apos;apprentissage tech{" "}
            <span className="text-[var(--text-primary)] font-medium">ultra-premium</span> du Maroc.
            Tuteur IA, parcours adaptatifs, certificats vérifiables.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitions.enter, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <Button variant="primary" size="lg" magnetic className="animate-pulse-glow">
              Commencer gratuitement
            </Button>
            <Button variant="secondary" size="lg">
              <Play size={16} className="text-[var(--electric-blue)]" />
              Explorer les cours
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitions.enter, delay: 0.85 }}
            className="flex items-center justify-center lg:justify-start gap-8 md:gap-12"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix || ""}
                    duration={2 + i * 0.3}
                  />
                </div>
                <div className="text-[var(--text-xs)] text-[var(--text-muted)] uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Floating Dashboard Preview */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, x: 40, rotateY: -8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ ...transitions.enter, delay: 0.5, duration: 0.8 }}
          className="flex-1 hidden lg:block"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative glass rounded-[var(--radius-lg)] p-1 animate-float"
            style={{ transform: "rotateY(-4deg) rotateX(2deg)" }}
          >
            {/* Glow border */}
            <div className="absolute -inset-[1px] rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--electric-blue)] via-transparent to-[var(--neon-cyan)] opacity-30" />

            {/* Dashboard Mockup */}
            <div className="relative rounded-[var(--radius-lg)] bg-[var(--bg-surface)] p-6 overflow-hidden">
              {/* Topbar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--electric-blue)] flex items-center justify-center text-xs text-white font-bold">A</div>
                  <div>
                    <div className="text-xs font-medium">Bonjour, Ayoub</div>
                    <div className="text-[10px] text-[var(--text-muted)]">Niveau Intermédiaire</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 rounded-md bg-[rgba(245,158,11,0.15)] text-[var(--amber-warn)] text-[10px] font-bold flex items-center gap-1"><Flame size={10} /> 14j</div>
                  <div className="w-6 h-6 rounded-md glass" />
                </div>
              </div>

              {/* Bento Grid Preview */}
              <div className="grid grid-cols-3 gap-3">
                {/* Progress Card */}
                <div className="col-span-2 rounded-[var(--radius-sm)] bg-[var(--bg-elevated)] p-4">
                  <div className="text-[10px] text-[var(--text-muted)] mb-2">Cours actif</div>
                  <div className="text-xs font-medium mb-3">Python Avancé & Data Science</div>
                  <div className="w-full h-2 rounded-full bg-[var(--bg-border)]">
                    <div className="h-full rounded-full bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-cyan)] w-[65%]" />
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-1">65% complété</div>
                </div>
                {/* Rank Card */}
                <div className="rounded-[var(--radius-sm)] bg-[var(--bg-elevated)] p-4 flex flex-col items-center justify-center">
                  <div className="text-[10px] text-[var(--text-muted)] mb-1">Rank</div>
                  <div className="text-lg font-bold text-[var(--neon-cyan)]">#42</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Maroc</div>
                </div>
                {/* Chart Area */}
                <div className="col-span-2 rounded-[var(--radius-sm)] bg-[var(--bg-elevated)] p-4">
                  <div className="text-[10px] text-[var(--text-muted)] mb-2">Activité · 30 jours</div>
                  <svg viewBox="0 0 200 50" className="w-full h-10">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(37,99,235,0.3)" />
                        <stop offset="100%" stopColor="rgba(37,99,235,0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0,40 C20,35 40,20 60,25 C80,30 100,10 120,15 C140,20 160,5 180,10 L200,8 L200,50 L0,50Z" fill="url(#chartGrad)" />
                    <path d="M0,40 C20,35 40,20 60,25 C80,30 100,10 120,15 C140,20 160,5 180,10 L200,8" fill="none" stroke="var(--electric-blue)" strokeWidth="2" />
                  </svg>
                </div>
                {/* AI Card */}
                <div className="rounded-[var(--radius-sm)] bg-[var(--bg-elevated)] p-4">
                  <div className="text-[10px] text-[var(--text-muted)] mb-1">Tuteur IA</div>
                  <div className="text-lg"><Bot size={18} /></div>
                  <div className="text-[10px] text-[var(--electric-blue)]">En ligne</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[var(--text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
