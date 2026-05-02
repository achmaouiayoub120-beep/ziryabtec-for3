"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles, Building } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  icon: React.ReactNode;
}

const tiers: PricingTier[] = [
  {
    name: "Gratuit",
    price: "0",
    period: "MAD / toujours",
    description: "Parfait pour découvrir la plateforme et apprendre les bases.",
    features: [
      "3 cours gratuits",
      "Quiz basiques",
      "Certificats standard",
      "Communauté Discord",
      "Support email",
    ],
    cta: "Commencer gratuitement",
    highlighted: false,
    icon: <Sparkles size={20} className="text-[var(--text-secondary)]" />,
  },
  {
    name: "Pro",
    price: "249",
    period: "MAD / mois",
    description: "L'expérience complète pour les apprenants sérieux.",
    features: [
      "Accès illimité à tous les cours",
      "Tuteur IA contextuel",
      "Quiz auto-générés avancés",
      "Certificats holographiques",
      "Parcours adaptatifs IA",
      "Notes horodatées illimitées",
      "Téléchargement des ressources",
      "Support prioritaire",
    ],
    cta: "Essai gratuit 14 jours",
    highlighted: true,
    icon: <Sparkles size={20} className="text-[var(--electric-blue)]" />,
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    period: "",
    description: "Formez vos équipes avec un suivi personnalisé et un reporting complet.",
    features: [
      "Tout le plan Pro",
      "Dashboard administrateur",
      "Reporting & analytics",
      "SSO / SAML",
      "Cours privés personnalisés",
      "Account manager dédié",
      "SLA garanti",
    ],
    cta: "Contacter l'équipe",
    highlighted: false,
    icon: <Building size={20} className="text-[var(--text-secondary)]" />,
  },
];

export default function PricingPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="pricing">
      <FadeInChild className="text-center mb-16">
        <p className="text-[var(--text-sm)] text-[var(--electric-blue)] font-medium uppercase tracking-widest mb-3">
          Tarifs
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">
          Un plan pour chaque{" "}
          <GradientText>ambition</GradientText>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          Commencez gratuitement, évoluez selon vos besoins. Tous les plans incluent l&apos;accès à la communauté.
        </p>
      </FadeInChild>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial={shouldReduceMotion ? {} : "initial"}
        whileInView={shouldReduceMotion ? {} : "animate"}
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {tiers.map((tier) => (
          <motion.div
            key={tier.name}
            variants={{
              initial: { opacity: 0, y: 30, filter: "blur(8px)" },
              animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
            }}
          >
            <GlassCard
              glow={tier.highlighted ? "blue" : "none"}
              className={`relative h-full flex flex-col ${
                tier.highlighted
                  ? "border-[rgba(37,99,235,0.3)] shadow-[0_0_40px_rgba(37,99,235,0.15)]"
                  : ""
              }`}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--electric-blue)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-[var(--glow-blue)]">
                  Le plus populaire
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  {tier.icon}
                  <h3 className="text-[var(--text-lg)] font-semibold">{tier.name}</h3>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  {tier.period && (
                    <span className="text-[var(--text-sm)] text-[var(--text-muted)]">{tier.period}</span>
                  )}
                </div>
                <p className="text-[var(--text-sm)] text-[var(--text-secondary)]">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[var(--text-sm)]">
                    <Check
                      size={16}
                      className={`shrink-0 mt-0.5 ${
                        tier.highlighted ? "text-[var(--electric-blue)]" : "text-[var(--emerald)]"
                      }`}
                    />
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "primary" : "secondary"}
                className="w-full"
                magnetic={tier.highlighted}
              >
                {tier.cta}
              </Button>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
