import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZiryabTec — علم بلا حدود | Plateforme E-Learning Premium",
  description:
    "La première plateforme d'apprentissage tech ultra-premium du Maroc. Cours vidéo, tuteur IA, certificats vérifiables. Apprenez. Progressez. Prouvez-le.",
  keywords: [
    "e-learning",
    "formation",
    "maroc",
    "cours en ligne",
    "développement",
    "IA",
    "certificat",
    "ZiryabTec",
  ],
  openGraph: {
    title: "ZiryabTec — Un savoir sans frontières",
    description:
      "Plateforme e-learning ultra-premium avec tuteur IA, parcours adaptatifs et certificats vérifiables.",
    type: "website",
    locale: "fr_FR",
    siteName: "ZiryabTec",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${jakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text-primary)]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
