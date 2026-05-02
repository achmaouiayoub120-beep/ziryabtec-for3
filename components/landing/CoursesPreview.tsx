"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, Clock, Users, BookOpen } from "lucide-react";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

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
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Masterclass UI/UX Design avec Figma",
    category: "Design",
    instructor: "Lina Berrada",
    rating: 4.9,
    students: 1530,
    duration: "14h",
    price: 249,
    badge: "bestseller",
    color: "from-pink-600/20 to-orange-600/20",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Développement Mobile avec Flutter",
    category: "Mobile",
    instructor: "Hamza Tazi",
    rating: 4.7,
    students: 820,
    duration: "22h",
    price: 349,
    color: "from-blue-500/20 to-indigo-600/20",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Architecture Microservices avec Spring Boot",
    category: "Backend",
    instructor: "Pr. Hassan El Fassi",
    rating: 4.5,
    students: 410,
    duration: "26h 30min",
    price: 399,
    progress: 15,
    color: "from-green-600/20 to-teal-600/20",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={
            i < Math.floor(rating)
              ? "fill-[var(--amber-warn)] text-[var(--amber-warn)]"
              : "text-[var(--text-muted)]"
          }
        />
      ))}
      <span className="text-[var(--text-xs)] text-[var(--text-secondary)] ml-1">{rating}</span>
    </div>
  );
}

export default function CoursesPreview({ initialCourses = courses }: { initialCourses?: Course[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="courses">
      <FadeInChild className="text-center mb-16">
        <p className="text-[var(--text-sm)] text-[var(--electric-blue)] font-medium uppercase tracking-widest mb-3">
          Catalogue
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">
          Nos cours{" "}
          <GradientText>populaires</GradientText>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          Des formations créées par des experts marocains et internationaux, mises à jour régulièrement.
        </p>
      </FadeInChild>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={shouldReduceMotion ? {} : "initial"}
        whileInView={shouldReduceMotion ? {} : "animate"}
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {initialCourses.map((course) => (
          <motion.div
            key={course.title}
            variants={{
              initial: { opacity: 0, y: 20, filter: "blur(8px)" },
              animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
            }}
          >
            <GlassCard className="group cursor-pointer h-full overflow-hidden p-0">
              {/* Thumbnail */}
              <div className={`relative h-36 bg-gradient-to-br ${course.color} overflow-hidden`}>
                <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-[var(--bg-surface)/20] to-transparent opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen size={32} className="text-white/20" />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-sm font-medium text-white">Voir le cours →</span>
                </div>
                {/* Badge */}
                {course.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge variant={course.badge}>
                      {course.badge === "bestseller" ? "Best Seller" : course.badge === "new" ? "Nouveau" : "IA incluse"}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-[10px] text-[var(--electric-blue)] font-medium uppercase tracking-wider mb-1">
                  {course.category}
                </p>
                <h3 className="text-[var(--text-sm)] font-semibold mb-2 line-clamp-2 group-hover:text-[var(--electric-blue)] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[var(--text-xs)] text-[var(--text-muted)] mb-3">{course.instructor}</p>

                <StarRating rating={course.rating} />

                <div className="flex items-center gap-4 mt-3 text-[var(--text-xs)] text-[var(--text-muted)]">
                  <div className="flex items-center gap-1">
                    <Users size={11} /> {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={11} /> {course.duration}
                  </div>
                </div>

                {/* Price or Progress */}
                <div className="mt-4 pt-3 border-t border-[var(--glass-border)]">
                  {course.progress != null ? (
                    <div>
                      <div className="flex items-center justify-between text-[var(--text-xs)] mb-1">
                        <span className="text-[var(--text-muted)]">Progression</span>
                        <span className="text-[var(--emerald)] font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[var(--bg-border)]">
                        <div
                          className="h-full rounded-full bg-[var(--emerald)]"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">{course.price} <span className="text-[var(--text-xs)] text-[var(--text-muted)] font-normal">MAD</span></span>
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
