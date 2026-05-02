"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn, transitions } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Partners", href: "/partners" },
  { label: "Profile", href: "/profile" },
  { label: "FAQs", href: "/faqs" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? {} : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transitions.enter}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[rgba(11,14,20,0.85)] backdrop-blur-xl border-b border-[var(--glass-border)]"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" aria-label="ZiryabTec Home">
            <img src="/logo.png" alt="ZiryabTec" className="h-16 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[var(--text-sm)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--electric-blue)] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </a>
            <a href="/register">
              <Button variant="primary" size="sm" magnetic>
                S'inscrire
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitions.smooth}
            className="fixed inset-0 z-40 bg-[rgba(6,8,16,0.95)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.05 } }}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl font-medium text-[var(--text-primary)] hover:text-[var(--electric-blue)] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a href="/login" onClick={() => setIsMobileOpen(false)} className="w-full">
                  <Button variant="ghost" size="lg" className="w-full">
                    Login
                  </Button>
                </a>
                <a href="/register" onClick={() => setIsMobileOpen(false)} className="w-full">
                  <Button variant="primary" size="lg" magnetic className="w-full">
                    S'inscrire
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
