"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Instagram, Youtube, Linkedin, UserCircle, Globe } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const translations = {
  fr: {
    home: "Accueil",
    courses: "Formations",
    portfolio: "Portfolio",
    partners: "Partenaires",
    faqs: "FAQ",
    about: "À propos",
    profile: "Mon Profil",
    register: "S'inscrire gratuitement"
  },
  en: {
    home: "Home",
    courses: "Courses",
    portfolio: "Portfolio",
    partners: "Partners",
    faqs: "FAQs",
    about: "About Us",
    profile: "My Profile",
    register: "Sign Up Free"
  }
};

const navLinks = [
  { key: "home", href: "/" },
  { key: "courses", href: "/courses" },
  { key: "portfolio", href: "/portfolio" },
  { key: "partners", href: "/partners" },
  { key: "faqs", href: "/faqs" },
  { key: "about", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="bg-[var(--accent)] text-white text-[12px] py-2 px-6 md:px-12 hidden md:flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-6">
          <a href="tel:+2126123456" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
            <Phone size={14} />
            <span>(+212) 6 123 456</span>
          </a>
          <a href="mailto:ziryabtec@gmail.com" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
            <Mail size={14} />
            <span>ziryabtec@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            Casablanca, Maroc
          </span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-[var(--gold)] transition-colors"><Linkedin size={14} /></a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors"><Youtube size={14} /></a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      {/* ── NAVIGATION ── */}
      <motion.header
        initial={shouldReduceMotion ? {} : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "sticky top-0 left-0 right-0 z-40 transition-all duration-300 bg-white",
          isScrolled ? "border-b border-[var(--border)] shadow-[var(--card-shadow)]" : "border-b border-transparent"
        )}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group" aria-label="ZiryabTec Home">
            <img src="/logo.png" alt="ZiryabTec" className="h-20 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-[15px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors relative group"
              >
                {t[link.key as keyof typeof t]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Switcher - ALWAYS VISIBLE and PREMIUM */}
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleLanguage();
              }}
              className="flex items-center gap-2 text-[13px] font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] px-4 py-2 rounded-full shadow-lg transition-all active:scale-95 z-50"
              aria-label="Toggle Language"
            >
              <Globe size={16} className="text-white" />
              <span className="tracking-wide">{language.toUpperCase()}</span>
            </button>

            <div className="hidden lg:flex items-center gap-4">
              <a href="/profile" className="flex items-center gap-2 text-[15px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <UserCircle size={20} />
                {t.profile}
              </a>
              <a 
                href="/register"
                className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-5 py-2.5 rounded-[8px] font-medium text-[15px] transition-all transform hover:scale-[0.98] active:scale-95 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                {t.register}
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 top-[112px] md:top-[120px] z-30 bg-white lg:hidden border-t border-[var(--border)]"
          >
            <div className="flex flex-col p-8 gap-6 overflow-y-auto h-full pb-32">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 text-lg font-medium text-[var(--text-primary)] bg-[var(--bg)] border border-[var(--border)] rounded-md py-2 px-4 w-full"
              >
                <Globe size={20} />
                {language === 'fr' ? 'Passer en Anglais (EN)' : 'Switch to French (FR)'}
              </button>

              <div className="h-px bg-[var(--border)] my-2 w-full" />

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl font-display font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                >
                  {t[link.key as keyof typeof t]}
                </motion.a>
              ))}
              
              <div className="h-px bg-[var(--border)] my-4 w-full" />
              
              <a href="/profile" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-3 text-lg font-medium text-[var(--text-secondary)]">
                <UserCircle size={24} /> {t.profile}
              </a>
              
              <a 
                href="/register" 
                onClick={() => setIsMobileOpen(false)} 
                className="bg-[var(--accent)] text-white text-center px-6 py-4 rounded-[8px] font-medium text-lg mt-4"
              >
                {t.register}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
