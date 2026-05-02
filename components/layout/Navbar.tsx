"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Instagram, Youtube, Linkedin, UserCircle } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Partners", href: "/partners" },
  { label: "FAQs", href: "/faqs" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group" aria-label="ZiryabTec Home">
            <img src="/logo.png" alt="ZiryabTec" className="h-14 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="/profile" className="flex items-center gap-2 text-[15px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              <UserCircle size={20} />
              Mon Profil
            </a>
            <a 
              href="/register"
              className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-5 py-2.5 rounded-[8px] font-medium text-[15px] transition-all transform hover:scale-[0.98] active:scale-95 shadow-sm hover:shadow-md flex items-center gap-2"
            >
              S'inscrire gratuitement
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
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl font-display font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <div className="h-px bg-[var(--border)] my-4 w-full" />
              
              <a href="/profile" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-3 text-lg font-medium text-[var(--text-secondary)]">
                <UserCircle size={24} /> Mon Profil
              </a>
              
              <a 
                href="/register" 
                onClick={() => setIsMobileOpen(false)} 
                className="bg-[var(--accent)] text-white text-center px-6 py-4 rounded-[8px] font-medium text-lg mt-4"
              >
                S'inscrire gratuitement
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
