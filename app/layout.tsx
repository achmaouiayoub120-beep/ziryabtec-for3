import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-obsidian)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
