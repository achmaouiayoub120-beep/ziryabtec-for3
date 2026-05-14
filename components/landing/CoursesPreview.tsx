"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PlayCircle, UserPlus, ArrowRight, Search, X } from "lucide-react";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries, translatedCourses } from "@/lib/i18n/dictionaries";

interface Course {
  title: string;
  category: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  badge?: "bestseller" | "new" | "ai";
  progress?: number;
  color: string;
  image: string;
}

const courses: Course[] = [
  {
    title: "Python Avancé & Data Science",
    category: "Développement",
    instructor: "Pr. Ahmed Benali",
    rating: 4.8,
    students: 1240,
    duration: "18h 30min",
    price: 299,
    badge: "bestseller",
    color: "from-blue-600/20 to-cyan-600/20",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "React & Next.js — De Zéro au Déploiement",
    category: "Frontend",
    instructor: "Sara El Mansouri",
    rating: 4.9,
    students: 890,
    duration: "24h 15min",
    price: 399,
    badge: "new",
    color: "from-cyan-600/20 to-emerald-600/20",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Intelligence Artificielle Pratique",
    category: "IA & Machine Learning",
    instructor: "Dr. Karim Fassi",
    rating: 4.7,
    students: 2100,
    duration: "32h",
    price: 499,
    badge: "ai",
    color: "from-purple-600/20 to-blue-600/20",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "DevOps & Cloud — AWS + Docker",
    category: "Infrastructure",
    instructor: "Youssef Amrani",
    rating: 4.6,
    students: 650,
    duration: "20h",
    price: 349,
    progress: 42,
    color: "from-emerald-600/20 to-yellow-600/20",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Cybersécurité : Hacking Éthique",
    category: "Sécurité",
    instructor: "Amine Chraibi",
    rating: 4.8,
    students: 940,
    duration: "28h",
    price: 449,
    badge: "new",
    color: "from-red-600/20 to-rose-600/20",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Architecture Microservices",
    category: "Backend",
    instructor: "Pr. Hassan El Fassi",
    rating: 4.5,
    students: 410,
    duration: "26h 30min",
    price: 399,
    color: "from-green-600/20 to-teal-600/20",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Machine Learning Masterclass",
    category: "IA & Data",
    instructor: "Dr. Karim Fassi",
    rating: 4.9,
    students: 210,
    duration: "35h",
    price: 549,
    badge: "ai",
    color: "from-purple-600/20 to-indigo-600/20",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Data Visualization avec PowerBI",
    category: "Data",
    instructor: "Nisrine Mansour",
    rating: 4.7,
    students: 520,
    duration: "12h",
    price: 199,
    color: "from-yellow-400/20 to-orange-400/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "UX Design Strategy",
    category: "Design",
    instructor: "Lina Berrada",
    rating: 4.9,
    students: 310,
    duration: "15h",
    price: 299,
    badge: "new",
    color: "from-pink-400/20 to-purple-400/20",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
  },
];

function CoursesContent() {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const t = dictionaries[language].courses;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // État local pour le champ de recherche textuelle
  const [localSearch, setLocalSearch] = useState(searchParams.get("search") || "");

  const searchQuery = searchParams.get("search") || "";
  const categoryFilter = searchParams.get("category") || "all";
  const priceFilter = searchParams.get("price") || "all";

  // Obtenir les catégories uniques
  const categories = ["all", ...Array.from(new Set(translatedCourses.map(c => c[language].category)))];

  // Mettre à jour l'URL de manière dynamique
  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Filtrage du tableau de cours
  const filteredCourses = translatedCourses.filter((course) => {
    const matchesSearch = course[language].title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || course[language].category === categoryFilter;
    let matchesPrice = true;
    if (priceFilter === "free") matchesPrice = course.price === 0;
    if (priceFilter === "paid") matchesPrice = course.price > 0;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <SectionWrapper id="courses" suppressHydrationWarning className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
      <FadeInChild className="mb-12">
        <span className="font-mono text-sm text-[var(--accent)] font-bold tracking-widest uppercase mb-4 block">{t.catalog}</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              {t.description}
            </p>
          </div>
        </div>

        {/* Barre de filtres */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-[var(--border)]">
          {/* Recherche */}
          <div className="relative flex-1 w-full">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder={t.filters.searchPlaceholder}
              value={localSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                updateParam("search", e.target.value);
              }}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
            {localSearch && (
              <button 
                onClick={() => { setLocalSearch(""); updateParam("search", ""); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          {/* Catégories */}
          <div className="w-full md:w-auto">
            <select 
              value={categoryFilter}
              onChange={(e) => updateParam("category", e.target.value)}
              className="w-full md:w-48 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              <option value="all">{t.filters.allCategories}</option>
              {categories.filter(c => c !== "all").map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Prix */}
          <div className="w-full md:w-auto">
            <select 
              value={priceFilter}
              onChange={(e) => updateParam("price", e.target.value)}
              className="w-full md:w-40 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              <option value="all">{t.filters.allPrices}</option>
              <option value="free">{t.filters.free}</option>
              <option value="paid">{t.filters.paid}</option>
            </select>
          </div>
        </div>
      </FadeInChild>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={shouldReduceMotion ? {} : "initial"}
        whileInView={shouldReduceMotion ? {} : "animate"}
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {filteredCourses.map((course, i) => (
          <motion.div
            key={course.id + i}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="elite-card group flex flex-col h-full bg-white overflow-hidden relative"
          >
            {/* The whole card is a link, but we use a more standard approach */}
            <Link 
              suppressHydrationWarning
              href={`/courses/${course.id}`} 
              className="absolute inset-0 z-10"
              aria-label={course[language].title}
            />
            
            <div className="relative h-48 w-full overflow-hidden">
              <img src={course.image} alt={course[language].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {course.badge && (
                <div className={`absolute top-4 left-4 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white z-20 ${course.badge === 'new' ? 'bg-[var(--success)]' : 'bg-[var(--gold)]'}`}>
                  {course.badge === "bestseller" ? t.badges.bestseller : course.badge === "new" ? t.badges.new : t.badges.ai}
                </div>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="inline-block px-2.5 py-1 rounded bg-[var(--accent-light)] text-[var(--accent)] font-medium text-xs mb-4 w-fit">
                {course[language].category}
              </div>
              <h3 className="font-display font-bold text-xl leading-tight text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                {course[language].title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                <UserPlus size={14} /> {course[language].instructor}
              </p>
              
              <div className="flex items-center gap-4 text-sm font-medium text-[var(--text-muted)] mb-6">
                <span className="flex items-center gap-1"><span className="text-yellow-400">★</span> {course.rating} ({course.students})</span>
                <span className="flex items-center gap-1"><PlayCircle size={14} /> {course.duration}</span>
              </div>
              
              <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-center justify-between">
                {course.progress != null ? (
                  <div className="w-full">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[var(--text-muted)] font-medium">{t.progress}</span>
                      <span className="text-[var(--success)] font-bold">{course.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[var(--bg-alt)] overflow-hidden">
                      <div className="h-full bg-[var(--success)] rounded-full" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="font-mono font-bold text-xl text-[var(--text-primary)]">{course.price} MAD</span>
                    <span className="text-sm font-bold text-[var(--accent)] flex items-center gap-1 group-hover:translate-x-1 transition-all">
                      {t.view} <ArrowRight size={16} />
                    </span>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        {filteredCourses.length === 0 && (
          <div className="col-span-full py-12 text-center text-[var(--text-secondary)]">
            {t.filters.noResults}
          </div>
        )}
      </motion.div>
    </SectionWrapper>
  );
}

export default function CoursesPreview() {
  const { language } = useLanguage();
  const t = dictionaries[language].courses;

  return (
    <Suspense fallback={<div className="py-24 text-center">{t.filters.loading}</div>}>
      <CoursesContent />
    </Suspense>
  );
}
