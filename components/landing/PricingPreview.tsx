"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles, Building } from "lucide-react";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";

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
      "Communauté",
      "Support email",
    ],
    cta: "Commencer gratuitement",
    highlighted: false,
    icon: <Sparkles size={20} className="text-[var(--text-muted)]" />,
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
      "Certificats premium",
      "Parcours adaptatifs IA",
      "Notes horodatées illimitées",
      "Téléchargement des ressources",
      "Support prioritaire",
    ],
    cta: "Essai gratuit 14 jours",
    highlighted: true,
    icon: <Sparkles size={20} className="text-[var(--accent)]" />,
  },
  {
    name: "Entreprise",
    price: "Custom",
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
    icon: <Building size={20} className="text-[var(--text-muted)]" />,
  },
];

export default function PricingPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="pricing" className="bg-white py-24">
      <FadeInChild className="text-center mb-16">
        <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
          Tarifs
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-[var(--text-primary)]">
          Un plan pour chaque <span className="text-[var(--accent)]">ambition</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
          Commencez gratuitement, évoluez selon vos besoins. Tous les plans incluent l&apos;accès à la communauté.
        </p>
      </FadeInChild>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex"
          >
            <div className={`elite-card p-8 bg-white relative flex flex-col w-full ${
              tier.highlighted ? "border-2 border-[var(--accent)] shadow-xl scale-105 z-10" : "border border-[var(--border)]"
            }`}>
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--accent)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Le plus populaire
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  {tier.icon}
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">{tier.name}</h3>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-display font-bold text-[var(--text-primary)]">{tier.price}</span>
                  {tier.period && (
                    <span className="text-sm font-medium text-[var(--text-muted)]">{tier.period}</span>
                  )}
                </div>
                <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                    <Check
                      size={18}
                      className={`shrink-0 ${
                        tier.highlighted ? "text-[var(--accent)]" : "text-[var(--success)]"
                      }`}
                    />
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.name === "Entreprise" ? "/contact" : "/register"}
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  tier.highlighted 
                    ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-lg shadow-blue-200" 
                    : "bg-[var(--bg-alt)] text-[var(--text-primary)] hover:bg-[var(--border)]"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
