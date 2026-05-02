import { Github, Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  plateforme: [
    { label: "Tous les cours", href: "#courses" },
    { label: "Parcours IA", href: "#" },
    { label: "Certifications", href: "#" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Entreprises", href: "#" },
  ],
  ressources: [
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Communauté", href: "#" },
    { label: "Vérifier un certificat", href: "#" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "CGU", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--glass-border)] bg-[var(--bg-void)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="ZiryabTec" className="h-20 w-auto" />
            </div>
            <p className="text-[var(--text-secondary)] text-[var(--text-sm)] leading-relaxed mb-4 max-w-sm">
              La première plateforme d&apos;apprentissage tech ultra-premium du Maroc.
              Apprenez. Progressez. Prouvez-le.
            </p>
            <p className="text-[var(--text-muted)] text-xs mb-6 font-[var(--font-mono)]" dir="rtl">
              علم بلا حدود — Un savoir sans frontières
            </p>
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-[var(--radius-sm)] glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--electric-blue)] hover:border-[rgba(37,99,235,0.3)] transition-all"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-[var(--text-sm)] text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <MapPin size={14} /> Casablanca, Maroc
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} /> contact@ziryabtec.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} /> +212 6 XX XX XX XX
              </div>
            </div>
          </div>

          {/* Plateforme */}
          <div>
            <h4 className="text-[var(--text-sm)] font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-4">
              Plateforme
            </h4>
            <ul className="space-y-3">
              {footerLinks.plateforme.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--text-sm)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-[var(--text-sm)] font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-4">
              Ressources
            </h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--text-sm)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-[var(--text-sm)] font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-4">
              Légal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--text-sm)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} ZiryabTec. Tous droits réservés.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Construit avec ❤️ au Maroc 🇲🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
