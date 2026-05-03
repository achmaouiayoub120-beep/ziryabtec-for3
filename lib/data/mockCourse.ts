export const mockCoursesData: Record<string, any> = {
  "python-avance": {
    theme: { fr: "Développement", en: "Development" },
    category: { fr: "Data Science", en: "Data Science" },
    course: {
      id: "python-avance",
      badge: { fr: "Best Seller", en: "Best Seller" },
      title: { fr: "Python Avancé & Data Science", en: "Advanced Python & Data Science" },
      instructor: "Pr. Ahmed Benali",
      rating: 4.8,
      duration: 18.5,
      price: 299,
      coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      enrollBtn: { fr: "S'inscrire à ce cours", en: "Enroll in this course" },
      prerequisitesTitle: { fr: "Pré-requis", en: "Prerequisites" },
      prerequisites: {
        fr: ["Bases de Python", "Notions de statistiques", "Ordinateur avec accès internet"],
        en: ["Python basics", "Basic statistics", "Computer with internet access"]
      },
      curriculumTitle: { fr: "Programme du cours", en: "Course Curriculum" },
      curriculum: [
        {
          id: "mod1",
          title: { fr: "Structures de données avancées", en: "Advanced Data Structures" },
          lessons: [
            { title: { fr: "Listes et Dictionnaires", en: "Lists and Dictionaries" }, duration: "20 min", type: "video" },
            { title: { fr: "Générateurs et Itérateurs", en: "Generators and Iterators" }, duration: "25 min", type: "video" }
          ]
        },
        {
          id: "mod2",
          title: { fr: "Analyse de données avec Pandas", en: "Data Analysis with Pandas" },
          lessons: [
            { title: { fr: "Introduction à Pandas", en: "Introduction to Pandas" }, duration: "30 min", type: "video" },
            { title: { fr: "Nettoyage de données", en: "Data Cleaning" }, duration: "45 min", type: "document" }
          ]
        }
      ]
    }
  },
  "react-nextjs": {
    theme: { fr: "Frontend", en: "Frontend" },
    category: { fr: "React", en: "React" },
    course: {
      id: "react-nextjs",
      badge: { fr: "Nouveau", en: "New" },
      title: { fr: "React & Next.js — De Zéro au Déploiement", en: "React & Next.js — Zero to Deployment" },
      instructor: "Sara El Mansouri",
      rating: 4.9,
      duration: 24.25,
      price: 399,
      coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
      enrollBtn: { fr: "S'inscrire à ce cours", en: "Enroll in this course" },
      prerequisitesTitle: { fr: "Pré-requis", en: "Prerequisites" },
      prerequisites: {
        fr: ["HTML, CSS, et JavaScript moderne (ES6+)", "Familiarité avec la ligne de commande"],
        en: ["HTML, CSS, and modern JavaScript (ES6+)", "Familiarity with command line"]
      },
      curriculumTitle: { fr: "Programme du cours", en: "Course Curriculum" },
      curriculum: [
        {
          id: "mod1",
          title: { fr: "Bases de React", en: "React Basics" },
          lessons: [
            { title: { fr: "Composants et Props", en: "Components and Props" }, duration: "25 min", type: "video" },
            { title: { fr: "État et Cycle de vie", en: "State and Lifecycle" }, duration: "30 min", type: "video" }
          ]
        },
        {
          id: "mod2",
          title: { fr: "Introduction à Next.js", en: "Introduction to Next.js" },
          lessons: [
            { title: { fr: "App Router vs Pages Router", en: "App Router vs Pages Router" }, duration: "35 min", type: "video" },
            { title: { fr: "Server Components", en: "Server Components" }, duration: "40 min", type: "document" }
          ]
        }
      ]
    }
  },
  "ai-practical": {
    theme: { fr: "IA & Data", en: "AI & Data" },
    category: { fr: "Machine Learning", en: "Machine Learning" },
    course: {
      id: "ai-practical",
      badge: { fr: "IA Incluse", en: "AI Included" },
      title: { fr: "Intelligence Artificielle Pratique", en: "Practical Artificial Intelligence" },
      instructor: "Dr. Karim Fassi",
      rating: 4.7,
      duration: 32,
      price: 499,
      coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      enrollBtn: { fr: "S'inscrire à ce cours", en: "Enroll in this course" },
      prerequisitesTitle: { fr: "Pré-requis", en: "Prerequisites" },
      prerequisites: {
        fr: [
          "Notions de base en programmation Python",
          "Compréhension des mathématiques appliquées (Algèbre linéaire)",
          "Un ordinateur avec une connexion internet stable"
        ],
        en: [
          "Basic knowledge of Python programming",
          "Understanding of applied mathematics (Linear Algebra)",
          "A computer with a stable internet connection"
        ]
      },
      curriculumTitle: { fr: "Programme du cours", en: "Course Curriculum" },
      curriculum: [
        {
          id: "module-1",
          title: { fr: "Introduction à l'Intelligence Artificielle", en: "Introduction to Artificial Intelligence" },
          lessons: [
            { title: { fr: "Qu'est-ce que l'IA ?", en: "What is AI?" }, duration: "15 min", type: "video" },
            { title: { fr: "Histoire et évolution", en: "History and Evolution" }, duration: "20 min", type: "document" },
            { title: { fr: "Domaines d'application", en: "Fields of Application" }, duration: "25 min", type: "video" }
          ]
        },
        {
          id: "module-2",
          title: { fr: "Fondamentaux du Machine Learning", en: "Machine Learning Fundamentals" },
          lessons: [
            { title: { fr: "Apprentissage supervisé vs non supervisé", en: "Supervised vs Unsupervised Learning" }, duration: "35 min", type: "video" },
            { title: { fr: "Les algorithmes de classification", en: "Classification Algorithms" }, duration: "40 min", type: "video" },
            { title: { fr: "Évaluation des modèles", en: "Model Evaluation" }, duration: "30 min", type: "document" }
          ]
        },
        {
          id: "module-3",
          title: { fr: "Réseaux de Neurones et Deep Learning", en: "Neural Networks and Deep Learning" },
          lessons: [
            { title: { fr: "Architecture d'un neurone artificiel", en: "Architecture of an Artificial Neuron" }, duration: "45 min", type: "video" },
            { title: { fr: "Créer votre premier réseau", en: "Creating your first network" }, duration: "1h 15 min", type: "video" },
            { title: { fr: "Optimisation et descente de gradient", en: "Optimization and Gradient Descent" }, duration: "50 min", type: "video" }
          ]
        }
      ]
    }
  },
  "devops-aws": {
    theme: { fr: "Infrastructure", en: "Infrastructure" },
    category: { fr: "Cloud & DevOps", en: "Cloud & DevOps" },
    course: {
      id: "devops-aws",
      badge: { fr: "Recommandé", en: "Recommended" },
      title: { fr: "DevOps & Cloud — AWS + Docker", en: "DevOps & Cloud — AWS + Docker" },
      instructor: "Youssef Amrani",
      rating: 4.6,
      duration: 20,
      price: 349,
      coverImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop",
      enrollBtn: { fr: "S'inscrire à ce cours", en: "Enroll in this course" },
      prerequisitesTitle: { fr: "Pré-requis", en: "Prerequisites" },
      prerequisites: {
        fr: ["Bases de Linux", "Compréhension du réseau", "Compte AWS gratuit"],
        en: ["Linux basics", "Understanding of networking", "Free AWS account"]
      },
      curriculumTitle: { fr: "Programme du cours", en: "Course Curriculum" },
      curriculum: [
        {
          id: "mod1",
          title: { fr: "Introduction à Docker", en: "Introduction to Docker" },
          lessons: [
            { title: { fr: "Conteneurisation vs Virtualisation", en: "Containerization vs Virtualization" }, duration: "25 min", type: "video" },
            { title: { fr: "Créer son premier Dockerfile", en: "Creating your first Dockerfile" }, duration: "40 min", type: "video" }
          ]
        },
        {
          id: "mod2",
          title: { fr: "Déploiement sur AWS", en: "Deployment on AWS" },
          lessons: [
            { title: { fr: "Services EC2 et S3", en: "EC2 and S3 Services" }, duration: "45 min", type: "video" },
            { title: { fr: "Automatisation avec CI/CD", en: "Automation with CI/CD" }, duration: "50 min", type: "document" }
          ]
        }
      ]
    }
  },
  "cybersecurity-hacking": {
    theme: { fr: "Sécurité", en: "Security" },
    category: { fr: "Cybersécurité", en: "Cybersecurity" },
    course: {
      id: "cybersecurity-hacking",
      badge: { fr: "Nouveau", en: "New" },
      title: { fr: "Cybersécurité : Hacking Éthique", en: "Cybersecurity: Ethical Hacking" },
      instructor: "Amine Chraibi",
      rating: 4.8,
      duration: 28,
      price: 449,
      coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
      enrollBtn: { fr: "S'inscrire à ce cours", en: "Enroll in this course" },
      prerequisitesTitle: { fr: "Pré-requis", en: "Prerequisites" },
      prerequisites: {
        fr: ["Connaissances réseau (TCP/IP)", "Familiarité avec Linux (Kali)"],
        en: ["Network knowledge (TCP/IP)", "Familiarity with Linux (Kali)"]
      },
      curriculumTitle: { fr: "Programme du cours", en: "Course Curriculum" },
      curriculum: [
        {
          id: "mod1",
          title: { fr: "Bases de la Cybersécurité", en: "Cybersecurity Basics" },
          lessons: [
            { title: { fr: "Les vulnérabilités courantes", en: "Common vulnerabilities" }, duration: "30 min", type: "video" },
            { title: { fr: "Phishing et Social Engineering", en: "Phishing and Social Engineering" }, duration: "25 min", type: "video" }
          ]
        },
        {
          id: "mod2",
          title: { fr: "Techniques de Pénétration", en: "Penetration Techniques" },
          lessons: [
            { title: { fr: "Utilisation de Metasploit", en: "Using Metasploit" }, duration: "50 min", type: "video" },
            { title: { fr: "Rapport d'audit de sécurité", en: "Security Audit Reporting" }, duration: "35 min", type: "document" }
          ]
        }
      ]
    }
  },
  "microservices": {
    theme: { fr: "Backend", en: "Backend" },
    category: { fr: "Architecture", en: "Architecture" },
    course: {
      id: "microservices",
      badge: { fr: "Avancé", en: "Advanced" },
      title: { fr: "Architecture Microservices", en: "Microservices Architecture" },
      instructor: "Pr. Hassan El Fassi",
      rating: 4.5,
      duration: 26.5,
      price: 399,
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      enrollBtn: { fr: "S'inscrire à ce cours", en: "Enroll in this course" },
      prerequisitesTitle: { fr: "Pré-requis", en: "Prerequisites" },
      prerequisites: {
        fr: ["Expérience en développement Backend", "Notions de bases de données relationnelles"],
        en: ["Experience in Backend development", "Relational database concepts"]
      },
      curriculumTitle: { fr: "Programme du cours", en: "Course Curriculum" },
      curriculum: [
        {
          id: "mod1",
          title: { fr: "Monolithe vs Microservices", en: "Monolith vs Microservices" },
          lessons: [
            { title: { fr: "Comprendre les limites du monolithe", en: "Understanding Monolith Limits" }, duration: "20 min", type: "video" },
            { title: { fr: "Découplage des services", en: "Service Decoupling" }, duration: "35 min", type: "video" }
          ]
        },
        {
          id: "mod2",
          title: { fr: "Communication Inter-Services", en: "Inter-Service Communication" },
          lessons: [
            { title: { fr: "API REST vs gRPC", en: "REST API vs gRPC" }, duration: "40 min", type: "video" },
            { title: { fr: "Message Brokers (RabbitMQ)", en: "Message Brokers (RabbitMQ)" }, duration: "45 min", type: "video" }
          ]
        }
      ]
    }
  },
  "ml-masterclass": {
    theme: { fr: "IA & Data", en: "AI & Data" },
    category: { fr: "Machine Learning", en: "Machine Learning" },
    course: {
      id: "ml-masterclass",
      badge: { fr: "IA Incluse", en: "AI Included" },
      title: { fr: "Machine Learning Masterclass", en: "Machine Learning Masterclass" },
      instructor: "Dr. Karim Fassi",
      rating: 4.9,
      duration: 35,
      price: 549,
      coverImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
      enrollBtn: { fr: "S'inscrire à ce cours", en: "Enroll in this course" },
      prerequisitesTitle: { fr: "Pré-requis", en: "Prerequisites" },
      prerequisites: {
        fr: ["Python Intermédiaire", "Mathématiques pour l'IA"],
        en: ["Intermediate Python", "Mathematics for AI"]
      },
      curriculumTitle: { fr: "Programme du cours", en: "Course Curriculum" },
      curriculum: [
        {
          id: "mod1",
          title: { fr: "Modèles Prédictifs", en: "Predictive Models" },
          lessons: [
            { title: { fr: "Régression linéaire et logistique", en: "Linear and Logistic Regression" }, duration: "45 min", type: "video" }
          ]
        },
        {
          id: "mod2",
          title: { fr: "Deep Learning Avancé", en: "Advanced Deep Learning" },
          lessons: [
            { title: { fr: "Réseaux convolutifs (CNN)", en: "Convolutional Networks (CNN)" }, duration: "55 min", type: "video" }
          ]
        }
      ]
    }
  },
  "powerbi": {
    theme: { fr: "Data", en: "Data" },
    category: { fr: "Data Viz", en: "Data Viz" },
    course: {
      id: "powerbi",
      badge: { fr: "Populaire", en: "Popular" },
      title: { fr: "Data Visualization avec PowerBI", en: "Data Visualization with PowerBI" },
      instructor: "Nisrine Mansour",
      rating: 4.7,
      duration: 12,
      price: 199,
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      enrollBtn: { fr: "S'inscrire à ce cours", en: "Enroll in this course" },
      prerequisitesTitle: { fr: "Pré-requis", en: "Prerequisites" },
      prerequisites: {
        fr: ["Notions de base sur Excel", "Compréhension des données structurées"],
        en: ["Basic Excel knowledge", "Understanding of structured data"]
      },
      curriculumTitle: { fr: "Programme du cours", en: "Course Curriculum" },
      curriculum: [
        {
          id: "mod1",
          title: { fr: "Introduction à PowerBI", en: "Introduction to PowerBI" },
          lessons: [
            { title: { fr: "Connexion aux sources de données", en: "Connecting to Data Sources" }, duration: "20 min", type: "video" }
          ]
        },
        {
          id: "mod2",
          title: { fr: "Création de Dashboards", en: "Creating Dashboards" },
          lessons: [
            { title: { fr: "Visualisations interactives", en: "Interactive Visualizations" }, duration: "45 min", type: "video" }
          ]
        }
      ]
    }
  },
  "ux-strategy": {
    theme: { fr: "Design", en: "Design" },
    category: { fr: "UX/UI", en: "UX/UI" },
    course: {
      id: "ux-strategy",
      badge: { fr: "Nouveau", en: "New" },
      title: { fr: "UX Design Strategy", en: "UX Design Strategy" },
      instructor: "Lina Berrada",
      rating: 4.9,
      duration: 15,
      price: 299,
      coverImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
      enrollBtn: { fr: "S'inscrire à ce cours", en: "Enroll in this course" },
      prerequisitesTitle: { fr: "Pré-requis", en: "Prerequisites" },
      prerequisites: {
        fr: ["Curiosité", "Empathie pour l'utilisateur"],
        en: ["Curiosity", "Empathy for the user"]
      },
      curriculumTitle: { fr: "Programme du cours", en: "Course Curriculum" },
      curriculum: [
        {
          id: "mod1",
          title: { fr: "Recherche Utilisateur", en: "User Research" },
          lessons: [
            { title: { fr: "Méthodes d'interview", en: "Interviewing Methods" }, duration: "30 min", type: "video" },
            { title: { fr: "Création de Personas", en: "Creating Personas" }, duration: "35 min", type: "video" }
          ]
        },
        {
          id: "mod2",
          title: { fr: "Prototypage", en: "Prototyping" },
          lessons: [
            { title: { fr: "Wireframing sur Figma", en: "Wireframing on Figma" }, duration: "40 min", type: "video" },
            { title: { fr: "Tests d'utilisabilité", en: "Usability Testing" }, duration: "25 min", type: "document" }
          ]
        }
      ]
    }
  }
};

// Exporter une fonction utilitaire pour faciliter la recherche d'un cours
export const getCourseById = (id: string) => mockCoursesData[id] || mockCoursesData["ai-practical"];

// Pour assurer la compatibilité ascendante avec l'ancien code qui importe mockCourse
export const mockCourse = mockCoursesData["ai-practical"];
