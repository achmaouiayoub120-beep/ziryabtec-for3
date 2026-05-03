"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import { ExternalLink, Github } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Botola Pro Stats",
      category: "Data Science",
      student: "Amine R.",
      desc: "Analyse prédictive des résultats du championnat marocain utilisant Python et Scikit-learn.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "E-Commerce Artisanat",
      category: "Full Stack",
      student: "Yasmine L.",
      desc: "Plateforme de vente de produits artisanaux marocains avec Next.js 14 et Stripe.",
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Gestion de Copropriété AI",
      category: "SaaS",
      student: "Karim T.",
      desc: "Application de gestion de syndic avec automatisation des factures par IA.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 min-h-screen bg-[var(--bg)]">
        <SectionWrapper id="portfolio">
          <FadeInChild className="text-center mb-16">
            <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-[var(--text-primary)]">
              Les projets de nos <span className="text-[var(--accent)]">apprenants</span>
            </h1>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
              Découvrez les applications, sites web et outils innovants créés par notre communauté d'étudiants d'élite.
            </p>
          </FadeInChild>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <FadeInChild key={i}>
                <div className="elite-card group overflow-hidden bg-white">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent)] cursor-pointer">
                        <Github size={20} />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent)] cursor-pointer">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] font-medium mb-4 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                      <span className="text-xs font-bold text-[var(--text-muted)]">Par {project.student}</span>
                      <span className="text-xs font-bold text-[var(--accent)]">Projet Certifié</span>
                    </div>
                  </div>
                </div>
              </FadeInChild>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
