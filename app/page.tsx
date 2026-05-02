import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ArrowRight, CheckCircle2, PlayCircle, BookOpen, UserPlus, 
  Award, MessageSquare, BrainCircuit, BarChart3, Target, 
  Video, Trophy, Flame, Star, MapPin, ExternalLink 
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--bg)] font-sans">
        
        {/* ── SECTION 1: HERO ── */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(26,86,219,0.06),transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(26,86,219,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(26,86,219,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-50" />
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-light)] text-[var(--accent)] font-medium text-sm mb-8">
                  <Trophy size={14} /> Plateforme N°1 au Maroc
                </div>
                
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.08] text-[var(--text-primary)] mb-6 tracking-tight">
                  Apprenez les <span className="relative inline-block">
                    technologies
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--accent)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 0" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span><br />
                  qui font le futur.
                </h1>
                
                <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl leading-relaxed">
                  Cours en ligne créés par des experts marocains.<br />
                  Certifications reconnues. Tuteur IA inclus.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                  <a href="/register" className="w-full sm:w-auto px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-xl font-medium text-lg transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2">
                    Commencer gratuitement <ArrowRight size={20} />
                  </a>
                  <a href="/courses" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-alt)] text-[var(--text-primary)] rounded-xl font-medium text-lg transition-all flex items-center justify-center">
                    Voir le catalogue
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] font-medium">
                    Rejoignez <strong className="text-[var(--text-primary)]">+2 000 apprenants actifs</strong>
                  </p>
                </div>
              </div>
              
              {/* Right Visual */}
              <div className="lg:col-span-5 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(26,86,219,0.08)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
                
                <div className="elite-card p-6 w-full max-w-md mx-auto -rotate-2 animate-float relative z-10 bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Ayoub" className="w-14 h-14 rounded-full border-2 border-[var(--border)]" />
                    <div>
                      <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">Salut, Ayoub</h3>
                      <p className="text-sm text-[var(--text-secondary)]">Prêt pour ta session ?</p>
                    </div>
                    <div className="ml-auto bg-orange-100 text-orange-600 px-3 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                      <Flame size={12} /> 14 jrs
                    </div>
                  </div>
                  
                  <div className="bg-[var(--bg-alt)] rounded-xl p-4 mb-6">
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-[var(--text-primary)]">Python Avancé</span>
                      <span className="text-[var(--accent)] font-mono">65%</span>
                    </div>
                    <div className="w-full h-2 bg-[var(--border)] rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--accent)] w-[65%] rounded-full" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-[var(--text-secondary)]">Compétences acquises</p>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">Py</div>
                      <div className="w-8 h-8 rounded bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-xs">Re</div>
                      <div className="w-8 h-8 rounded bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">Do</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* ── SECTION 2: STATS BAR ── */}
        <section className="bg-[var(--bg-alt)] border-y border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[var(--border)] text-center">
              <div>
                <p className="text-4xl font-display font-bold text-[var(--accent)] mb-2">120+</p>
                <p className="text-[13px] text-[var(--text-muted)] uppercase tracking-wider font-medium">Cours disponibles</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-[var(--accent)] mb-2">2 000+</p>
                <p className="text-[13px] text-[var(--text-muted)] uppercase tracking-wider font-medium">Apprenants actifs</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-[var(--accent)] mb-2">98%</p>
                <p className="text-[13px] text-[var(--text-muted)] uppercase tracking-wider font-medium">Taux de satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-[var(--accent)] mb-2">500+</p>
                <p className="text-[13px] text-[var(--text-muted)] uppercase tracking-wider font-medium">Certificats délivrés</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: FEATURED COURSES ── */}
        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="font-mono text-sm text-[var(--accent)] font-bold tracking-widest uppercase mb-4 block">Catalogue</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-4">Nos cours populaires</h2>
                <p className="text-lg text-[var(--text-secondary)]">Des formations créées par des experts, mises à jour en continu.</p>
              </div>
              <a href="/courses" className="hidden md:inline-flex items-center gap-2 font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                Voir tout le catalogue <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-4 overflow-x-auto pb-4 mb-10 border-b border-[var(--border)] no-scrollbar">
            {["Tout", "Développement", "IA & Data", "Mobile", "Design", "DevOps"].map((tab, i) => (
              <button 
                key={tab} 
                className={`whitespace-nowrap pb-4 px-2 font-medium transition-all relative ${
                  i === 0 ? "text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {tab}
                {i === 0 && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--accent)]" />}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Python Avancé & Data Science", inst: "Pr. Ahmed Benali", tag: "Développement", price: "299 MAD", rating: "4.8", reviews: "1240", time: "18h30", badge: "Best Seller", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop" },
              { title: "React & Next.js — De Zéro au Déploiement", inst: "Sara El Mansouri", tag: "Frontend", price: "399 MAD", rating: "4.9", reviews: "890", time: "22h00", badge: "Nouveau", badgeColor: "bg-[var(--success)]", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop" },
              { title: "Intelligence Artificielle Pratique", inst: "Dr. Karim Fassi", tag: "IA & Machine Learning", price: "499 MAD", rating: "4.7", reviews: "450", time: "15h45", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop" },
              { title: "DevOps & Cloud AWS + Docker", inst: "Youssef Amrani", tag: "Infrastructure", price: "349 MAD", rating: "4.6", reviews: "320", time: "12h00", img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=600&auto=format&fit=crop" },
              { title: "UI/UX Design avec Figma", inst: "Lina Berrada", tag: "Design", price: "249 MAD", rating: "4.9", reviews: "1500", time: "10h30", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop" },
              { title: "Développement Mobile Flutter", inst: "Hamza Tazi", tag: "Mobile", price: "349 MAD", rating: "4.7", reviews: "670", time: "24h00", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop" },
              { title: "Cybersécurité : Hacking Éthique", inst: "Amine Chraibi", tag: "Sécurité", price: "449 MAD", rating: "4.8", reviews: "940", time: "28h00", badge: "Populaire", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" },
              { title: "Architecture Microservices", inst: "Pr. Hassan El Fassi", tag: "Backend", price: "399 MAD", rating: "4.5", reviews: "410", time: "26h30", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" },
              { title: "Machine Learning Masterclass", inst: "Dr. Karim Fassi", tag: "IA & Data", price: "549 MAD", rating: "4.9", reviews: "210", time: "35h00", badge: "Premium", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop" }
            ].map((course, i) => (
              <div key={i} className="elite-card group cursor-pointer flex flex-col h-full bg-white">
                <div className="relative h-48 w-full overflow-hidden rounded-t-[11px]">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {course.badge && (
                    <div className={`absolute top-4 left-4 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white ${course.badgeColor || "bg-[var(--gold)]"}`}>
                      {course.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="inline-block px-2.5 py-1 rounded bg-[var(--accent-light)] text-[var(--accent)] font-medium text-xs mb-4 w-fit">
                    {course.tag}
                  </div>
                  <h3 className="font-display font-bold text-xl leading-tight text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                    <UserPlus size={14} /> {course.inst}
                  </p>
                  <div className="flex items-center gap-4 text-sm font-medium text-[var(--text-muted)] mb-6">
                    <span className="flex items-center gap-1"><Star size={14} className="text-yellow-400 fill-yellow-400" /> {course.rating} ({course.reviews})</span>
                    <span className="flex items-center gap-1"><PlayCircle size={14} /> {course.time}</span>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <span className="font-mono font-bold text-xl text-[var(--text-primary)]">{course.price}</span>
                    <span className="text-sm font-medium text-[var(--accent)] flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      Voir le cours <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <a href="/courses" className="inline-flex items-center gap-2 font-medium text-[var(--text-primary)] hover:text-[var(--accent)] px-6 py-3 border border-[var(--border)] rounded-lg w-full justify-center">
              Voir tout le catalogue <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* ── SECTION 4: AI TUTOR & FEATURES ── */}
        <section className="bg-[#0B0E14] text-white py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Tout ce qu'il faut pour apprendre mieux</h2>
              <p className="text-xl text-gray-400">Une expérience pensée pour maximiser votre rétention et accélérer votre carrière.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: BrainCircuit, title: "Tuteur IA Contextuel", desc: "Répond en temps réel à vos questions en citant les passages exacts de la vidéo." },
                { icon: BarChart3, title: "Analytics Personnel", desc: "Dashboard de progression façon Command Center pour suivre vos performances." },
                { icon: Target, title: "Parcours Adaptatifs", desc: "Notre IA ajuste le contenu et les quiz selon vos points forts et vos lacunes." },
                { icon: Video, title: "Lecteur Vidéo Premium", desc: "Prise de notes horodatées, Picture-in-Picture, et raccourcis clavier pro." },
                { icon: Award, title: "Certificats Vérifiables", desc: "Chaque réussite génère un certificat avec QR code unique vérifiable publiquement." },
                { icon: MessageSquare, title: "Communauté Active", desc: "Accès au forum VIP et aux sessions Live exclusives chaque semaine." }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: HOW IT WORKS ── */}
        <section className="py-24 bg-[var(--bg-alt)] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)]">Commencez en 3 étapes</h2>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-[var(--border)] border-dashed border-t-2 border-transparent" style={{ borderImage: "repeating-linear-gradient(90deg, var(--border), var(--border) 10px, transparent 10px, transparent 20px) 1" }} />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {[
                  { step: "01", icon: UserPlus, title: "Créez votre compte", desc: "Inscription gratuite en moins de 2 minutes." },
                  { step: "02", icon: BookOpen, title: "Choisissez votre cours", desc: "Accédez à plus de 120 formations premium." },
                  { step: "03", icon: Award, title: "Obtenez votre certificat", desc: "Validez vos acquis et boostez votre CV." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center relative group">
                    <div className="absolute -top-10 text-[120px] font-display font-bold text-[var(--accent)] opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-500">
                      {item.step}
                    </div>
                    <div className="w-28 h-28 rounded-full bg-white border border-[var(--border)] shadow-sm flex items-center justify-center mb-8 relative z-10">
                      <div className="w-20 h-20 rounded-full bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center">
                        <item.icon size={32} />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-3">{item.title}</h3>
                    <p className="text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5.5: STUDENT PROJECTS ── */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <span className="font-mono text-sm text-[var(--accent)] font-bold tracking-widest uppercase mb-4 block">Succès Apprenants</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)]">
                  Les projets de nos <span className="text-[var(--accent)]">apprenants</span>
                </h2>
              </div>
              <a href="/portfolio" className="hidden md:flex items-center gap-2 font-bold text-[var(--accent)] group">
                Voir tout le portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Botola Pro Stats",
                  cat: "Data Science",
                  img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop",
                  desc: "Analyse prédictive des résultats du championnat marocain utilisant Python."
                },
                {
                  title: "E-Commerce Artisanat",
                  cat: "Full Stack",
                  img: "https://images.unsplash.com/photo-1502404689626-648af9859bb1?q=80&w=600&auto=format&fit=crop",
                  desc: "Plateforme de vente de produits artisanaux avec Next.js 14 et Stripe."
                },
                {
                  title: "Gestion de Copropriété AI",
                  cat: "SaaS",
                  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
                  desc: "Application de gestion de syndic avec automatisation par IA."
                }
              ].map((project, i) => (
                <div key={i} className="elite-card group overflow-hidden bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--text-primary)]">
                        <ExternalLink size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest mb-2">{project.cat}</div>
                    <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-2">{project.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <a href="/portfolio" className="inline-flex items-center gap-2 font-bold text-[var(--accent)]">
                Voir tout le portfolio <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: TESTIMONIALS ── */}
        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)]">Ce que disent nos apprenants</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Salma Bennani", role: "Développeuse Front-end · Inwi", text: "La qualité des cours est exceptionnelle. J'ai pu décrocher mon premier emploi chez Inwi juste après avoir complété le parcours React." },
              { name: "Youssef Alaoui", role: "Tech Lead · OCP Group", text: "Je cherchais une plateforme pour mettre à jour mes compétences en DevOps. ZiryabTec m'a offert exactement ce dont j'avais besoin." },
              { name: "Hiba Mansour", role: "Data Scientist Junior", text: "Le tuteur IA est un vrai game-changer. Il explique les concepts mathématiques complexes de manière claire et précise." }
            ].map((testimonial, i) => (
              <div key={i} className="elite-card p-8 bg-white">
                <div className="flex gap-1 text-[var(--gold)] mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} className="fill-[var(--gold)]" />)}
                </div>
                <p className="text-[var(--text-secondary)] italic mb-8 leading-relaxed font-sans text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-bold text-[var(--text-primary)] font-display">{testimonial.name}</p>
                    <p className="text-sm text-[var(--text-muted)]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: LOCATION (GOOGLE MAPS) ── */}
        <section className="py-24 bg-[var(--bg-alt)] border-t border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-mono text-sm text-[var(--accent)] font-bold tracking-widest uppercase mb-4 block">Notre Siège</span>
                <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-6">Retrouvez-nous à Casablanca</h2>
                <p className="text-lg text-[var(--text-secondary)] mb-8">
                  Nos bureaux sont situés au cœur de Casablanca. Venez nous rencontrer pour discuter de vos projets de formation ou découvrir nos locaux.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[var(--text-primary)] font-medium">
                    <div className="w-10 h-10 rounded-full bg-white border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
                      <MapPin size={20} />
                    </div>
                    <span>Bd d'Anfa, Casablanca 20000, Maroc</span>
                  </div>
                  <div className="flex items-center gap-4 text-[var(--text-primary)] font-medium">
                    <div className="w-10 h-10 rounded-full bg-white border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
                      <Video size={20} />
                    </div>
                    <span>Sessions hybrides disponibles</span>
                  </div>
                </div>
              </div>
              <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl border border-[var(--border)]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106371.4983058864!2d-7.669394589257812!3d33.589886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1714654500000!5m2!1sfr!2sma" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: FINAL CTA ── */}
        <section className="bg-[var(--accent)] py-24 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Prêt à transformer votre carrière ?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Commencez gratuitement. Sans carte bancaire. Rejoignez l'élite des développeurs au Maroc.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="/register" className="w-full sm:w-auto px-8 py-4 bg-white text-[var(--accent)] hover:bg-gray-50 rounded-xl font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg">
                Créer mon compte gratuit
              </a>
              <a href="/courses" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:border-white hover:bg-white/10 rounded-xl font-medium text-lg transition-all">
                Voir le catalogue
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-white/80 text-sm font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 size={18} /> 3 cours offerts</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={18} /> Sans engagement</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={18} /> Certificats inclus</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
