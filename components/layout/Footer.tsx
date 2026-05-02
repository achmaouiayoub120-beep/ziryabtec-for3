import { Github, Linkedin, Twitter, Youtube, Mail, MapPin, Phone, Heart } from "lucide-react";

const footerLinks = {
  plateforme: [
    { label: "Tous les cours", href: "/courses" },
    { label: "Parcours IA", href: "#" },
    { label: "Certifications", href: "#" },
    { label: "Tarifs", href: "#" },
    { label: "Entreprises", href: "#" },
  ],
  ressources: [
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "FAQ", href: "/faqs" },
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
    <footer className="relative border-t border-[var(--border)] bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="ZiryabTec" className="h-16 w-auto" />
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 max-w-sm">
              La première plateforme d&apos;apprentissage tech ultra-premium du Maroc.
              Apprenez. Progressez. Prouvez-le.
            </p>
            <p className="text-[var(--accent)] text-xs mb-6 font-mono font-medium" dir="rtl">
              علم بلا حدود — Un savoir sans frontières
            </p>
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <div className="space-y-3 text-sm text-[var(--text-secondary)] font-medium">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[var(--accent)]" /> 
                <a href="https://maps.app.goo.gl/Casablanca" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
                  Casablanca, Maroc
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[var(--accent)]" /> contact@ziryabtec.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[var(--accent)]" /> +212 6 123 456
              </div>
            </div>
          </div>

          {/* Plateforme */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-6 font-display">
              Plateforme
            </h4>
            <ul className="space-y-4">
              {footerLinks.plateforme.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-6 font-display">
              Ressources
            </h4>
            <ul className="space-y-4">
              {footerLinks.ressources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-6 font-display">
              Légal
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-[var(--text-muted)]">
            © {new Date().getFullYear()} ZiryabTec. Tous droits réservés.
          </p>
          <p className="text-sm font-medium text-[var(--text-muted)] flex items-center gap-1">
            Construit avec <Heart size={14} className="text-red-500 fill-red-500" /> au Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}
