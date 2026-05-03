"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Star, Clock, CreditCard, PlayCircle, FileText, ChevronDown, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getCourseById } from "@/lib/data/mockCourse";

export default function CourseDetailsView({ courseId }: { courseId?: string }) {
  const { language } = useLanguage();
  const currentCourse = getCourseById(courseId || "ai-practical");
  const [openModule, setOpenModule] = useState<string | null>(currentCourse.course.curriculum[0].id);

  const theme = currentCourse.theme[language];
  const category = currentCourse.category[language];
  const courseData = currentCourse.course;

  const toggleModule = (id: string) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-24 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-[var(--text-secondary)] mb-8 overflow-x-auto whitespace-nowrap">
          <span className="hover:text-[var(--accent)] cursor-pointer transition-colors">{theme}</span>
          <ChevronRight size={16} className="mx-2 shrink-0" />
          <span className="hover:text-[var(--accent)] cursor-pointer transition-colors">{category}</span>
          <ChevronRight size={16} className="mx-2 shrink-0" />
          <span className="text-[var(--text-primary)] font-medium truncate">{courseData.title[language]}</span>
        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 items-start">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-semibold border border-[var(--accent)]/20">
              {courseData.badge[language]}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] leading-tight">
              {courseData.title[language]}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-bold text-sm">
                  {courseData.instructor.charAt(0)}
                </div>
                <span className="font-medium text-[var(--text-primary)]">{courseData.instructor}</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-500">
                <Star size={18} fill="currentColor" />
                <span className="font-medium text-[var(--text-primary)]">{courseData.rating}</span>
              </div>
            </div>

            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-[var(--card-shadow)] relative mt-8">
              <img 
                src={courseData.coverImage} 
                alt={courseData.title[language]} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                 <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full p-4 transition-all transform hover:scale-105">
                   <PlayCircle size={32} />
                 </button>
              </div>
            </div>
          </div>

          {/* Sticky Enrollment Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[var(--card-shadow)] border border-[var(--border)] sticky top-32">
            <div className="text-4xl font-bold text-[var(--text-primary)] mb-6">
              {courseData.price} MAD
            </div>
            
            <div className="space-y-4 mb-8 text-[var(--text-secondary)]">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-[var(--accent)]" />
                <span>{courseData.duration} {language === 'fr' ? 'heures de contenu' : 'hours of content'}</span>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-[var(--accent)]" />
                <span>{language === 'fr' ? 'Paiement sécurisé' : 'Secure payment'}</span>
              </div>
            </div>

            <button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white py-4 rounded-xl font-medium text-lg transition-all transform hover:scale-[0.98] active:scale-95 shadow-md">
              {courseData.enrollBtn[language]}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 mt-16">
          <div className="space-y-12">
            {/* Prerequisites */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                {courseData.prerequisitesTitle[language]}
              </h2>
              <ul className="space-y-4">
                {(courseData.prerequisites[language] as string[]).map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle2 size={24} className="text-[var(--accent)] shrink-0" />
                    <span className="pt-0.5">{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Curriculum Accordion */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                {courseData.curriculumTitle[language]}
              </h2>
              <div className="space-y-4">
                {(courseData.curriculum as any[]).map((module: any) => (
                  <div 
                    key={module.id} 
                    className="border border-[var(--border)] rounded-xl overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-[var(--bg)] transition-colors"
                    >
                      <h3 className="font-semibold text-lg text-[var(--text-primary)] text-left">
                        {module.title[language]}
                      </h3>
                      <ChevronDown 
                        size={20} 
                        className={`text-[var(--text-secondary)] transition-transform duration-300 ${openModule === module.id ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openModule === module.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-5 pt-2 space-y-3 bg-[var(--bg)] border-t border-[var(--border)]">
                            {(module.lessons as any[]).map((lesson: any, idx: number) => (
                              <div key={idx} className="flex items-center justify-between py-2 group cursor-pointer">
                                <div className="flex items-center gap-3">
                                  {lesson.type === 'video' ? (
                                    <PlayCircle size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
                                  ) : (
                                    <FileText size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
                                  )}
                                  <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                                    {lesson.title[language]}
                                  </span>
                                </div>
                                <span className="text-sm text-[var(--text-secondary)] font-mono">
                                  {lesson.duration}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Empty column to match the grid layout of Hero */}
          <div className="hidden lg:block"></div>
        </div>

      </div>
    </div>
  );
}
