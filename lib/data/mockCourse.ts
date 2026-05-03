import { Course } from "./types";

export const mockCoursesData: Record<string, Course> = {
  "python-avance": {
    id: "python-avance",
    ref: "ZT-PY-001",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    logoImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    rating: 4.8,
    reviewCount: 1240,
    duration: "18h 30min",
    level: "intermediate",
    sessions: {
      inter: {
        price: 2990,
        nextDate: "2026-06-15",
        location: "Casablanca"
      },
      intra: {
        price: 8500,
        minParticipants: 4
      },
      surMesure: true
    },
    fr: {
      title: "Python Avancé & Data Science",
      subtitle: "Maîtrisez Python pour l'analyse de données, l'automatisation et le développement backend complexe.",
      category: "Data Science",
      theme: "Développement",
      instructor: "Pr. Ahmed Benali",
      objectives: [
        "Maîtriser les structures de données avancées (Listes, Dictionnaires, Sets)",
        "Créer des visualisations de données percutantes avec Matplotlib",
        "Nettoyer et analyser des jeux de données complexes avec Pandas",
        "Optimiser les performances du code Python"
      ],
      audience: "Développeurs souhaitant se spécialiser en Data Science, Analystes de données, Ingénieurs logiciels.",
      prerequisites: [
        "Bases de Python (variables, boucles, fonctions)",
        "Notions de statistiques",
        "Ordinateur avec accès internet"
      ],
      curriculum: [
        {
          title: "Structures de données avancées",
          lessons: [
            { title: "Listes et Dictionnaires en profondeur", duration: "20 min", type: "video" },
            { title: "Générateurs et Itérateurs", duration: "25 min", type: "video" }
          ]
        },
        {
          title: "Analyse de données avec Pandas",
          lessons: [
            { title: "Introduction à Pandas", duration: "30 min", type: "video" },
            { title: "Nettoyage de données", duration: "45 min", type: "document" }
          ]
        }
      ]
    },
    en: {
      title: "Advanced Python & Data Science",
      subtitle: "Master Python for data analysis, automation, and complex backend development.",
      category: "Data Science",
      theme: "Development",
      instructor: "Prof. Ahmed Benali",
      objectives: [
        "Master advanced data structures (Lists, Dictionaries, Sets)",
        "Create impactful data visualizations with Matplotlib",
        "Clean and analyze complex datasets with Pandas",
        "Optimize Python code performance"
      ],
      audience: "Developers wanting to specialize in Data Science, Data Analysts, Software Engineers.",
      prerequisites: [
        "Python basics (variables, loops, functions)",
        "Basic statistics",
        "Computer with internet access"
      ],
      curriculum: [
        {
          title: "Advanced Data Structures",
          lessons: [
            { title: "In-depth Lists and Dictionaries", duration: "20 min", type: "video" },
            { title: "Generators and Iterators", duration: "25 min", type: "video" }
          ]
        },
        {
          title: "Data Analysis with Pandas",
          lessons: [
            { title: "Introduction to Pandas", duration: "30 min", type: "video" },
            { title: "Data Cleaning", duration: "45 min", type: "document" }
          ]
        }
      ]
    }
  },
  "react-nextjs": {
    id: "react-nextjs",
    ref: "ZT-WEB-002",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    logoImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    rating: 4.9,
    reviewCount: 890,
    duration: "24h 15min",
    level: "advanced",
    sessions: {
      inter: {
        price: 3500,
        nextDate: "2026-07-02",
        location: "Rabat"
      },
      intra: {
        price: 10000,
        minParticipants: 5
      },
      surMesure: false
    },
    fr: {
      title: "React & Next.js — De Zéro au Déploiement",
      subtitle: "Construisez des applications web modernes, rapides et optimisées pour le SEO avec React et Next.js.",
      category: "React",
      theme: "Frontend",
      instructor: "Sara El Mansouri",
      objectives: [
        "Maîtriser les fondamentaux de React (Composants, Hooks, Context)",
        "Comprendre le Server-Side Rendering (SSR) avec Next.js",
        "Gérer le routage et les API routes",
        "Déployer des applications sur Vercel"
      ],
      audience: "Développeurs web, Intégrateurs, Profils fullstack souhaitant maîtriser l'écosystème React.",
      prerequisites: [
        "HTML, CSS, et JavaScript moderne (ES6+)",
        "Familiarité avec la ligne de commande"
      ],
      curriculum: [
        {
          title: "Bases de React",
          lessons: [
            { title: "Composants et Props", duration: "25 min", type: "video" },
            { title: "État et Cycle de vie", duration: "30 min", type: "video" }
          ]
        },
        {
          title: "Introduction à Next.js",
          lessons: [
            { title: "App Router vs Pages Router", duration: "35 min", type: "video" },
            { title: "Server Components", duration: "40 min", type: "document" }
          ]
        }
      ]
    },
    en: {
      title: "React & Next.js — Zero to Deployment",
      subtitle: "Build modern, fast, and SEO-optimized web applications with React and Next.js.",
      category: "React",
      theme: "Frontend",
      instructor: "Sara El Mansouri",
      objectives: [
        "Master React fundamentals (Components, Hooks, Context)",
        "Understand Server-Side Rendering (SSR) with Next.js",
        "Manage routing and API routes",
        "Deploy applications on Vercel"
      ],
      audience: "Web developers, Integrators, Fullstack profiles wanting to master the React ecosystem.",
      prerequisites: [
        "HTML, CSS, and modern JavaScript (ES6+)",
        "Familiarity with command line"
      ],
      curriculum: [
        {
          title: "React Basics",
          lessons: [
            { title: "Components and Props", duration: "25 min", type: "video" },
            { title: "State and Lifecycle", duration: "30 min", type: "video" }
          ]
        },
        {
          title: "Introduction to Next.js",
          lessons: [
            { title: "App Router vs Pages Router", duration: "35 min", type: "video" },
            { title: "Server Components", duration: "40 min", type: "document" }
          ]
        }
      ]
    }
  },
  "ai-practical": {
    id: "ai-practical",
    ref: "ZT-IA-003",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    logoImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    rating: 4.7,
    reviewCount: 2100,
    duration: "32h",
    level: "intermediate",
    sessions: {
      intra: {
        price: 12000,
        minParticipants: 4
      },
      surMesure: true
    },
    fr: {
      title: "Intelligence Artificielle Pratique",
      subtitle: "Découvrez les fondements de l'IA, du Machine Learning au Deep Learning, avec des cas concrets.",
      category: "Machine Learning",
      theme: "IA & Data",
      instructor: "Dr. Karim Fassi",
      objectives: [
        "Comprendre les concepts clés de l'IA et du Machine Learning",
        "Entraîner des modèles prédictifs avec Scikit-Learn",
        "Concevoir des réseaux de neurones avec TensorFlow/Keras",
        "Déployer des modèles en production"
      ],
      audience: "Data Scientists juniors, Développeurs curieux, Chefs de projet IT.",
      prerequisites: [
        "Notions de base en programmation Python",
        "Compréhension des mathématiques appliquées (Algèbre linéaire)"
      ],
      curriculum: [
        {
          title: "Introduction à l'Intelligence Artificielle",
          lessons: [
            { title: "Qu'est-ce que l'IA ?", duration: "15 min", type: "video" },
            { title: "Domaines d'application", duration: "25 min", type: "video" }
          ]
        },
        {
          title: "Réseaux de Neurones",
          lessons: [
            { title: "Architecture d'un neurone artificiel", duration: "45 min", type: "video" },
            { title: "Créer votre premier réseau", duration: "1h 15 min", type: "video" }
          ]
        }
      ]
    },
    en: {
      title: "Practical Artificial Intelligence",
      subtitle: "Discover the foundations of AI, from Machine Learning to Deep Learning, with concrete cases.",
      category: "Machine Learning",
      theme: "AI & Data",
      instructor: "Dr. Karim Fassi",
      objectives: [
        "Understand key concepts of AI and Machine Learning",
        "Train predictive models with Scikit-Learn",
        "Design neural networks with TensorFlow/Keras",
        "Deploy models in production"
      ],
      audience: "Junior Data Scientists, Curious Developers, IT Project Managers.",
      prerequisites: [
        "Basic knowledge of Python programming",
        "Understanding of applied mathematics (Linear Algebra)"
      ],
      curriculum: [
        {
          title: "Introduction to Artificial Intelligence",
          lessons: [
            { title: "What is AI?", duration: "15 min", type: "video" },
            { title: "Fields of Application", duration: "25 min", type: "video" }
          ]
        },
        {
          title: "Neural Networks",
          lessons: [
            { title: "Architecture of an Artificial Neuron", duration: "45 min", type: "video" },
            { title: "Creating your first network", duration: "1h 15 min", type: "video" }
          ]
        }
      ]
    }
  }
};

export const getCourseById = (id: string): Course => mockCoursesData[id] || mockCoursesData["ai-practical"];

// Provide backward compatibility for older code
export const mockCourse = mockCoursesData["ai-practical"];
