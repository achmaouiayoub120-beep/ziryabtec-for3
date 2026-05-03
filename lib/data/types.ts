export interface Lesson {
  title: string;
  duration: string;
  type: 'video' | 'document';
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface CourseContent {
  title: string;
  subtitle: string;
  category: string;
  theme: string;
  instructor: string;
  objectives: string[];
  audience: string;
  prerequisites: string[];
  curriculum: Module[];
}

export interface SessionConfig {
  price?: number;
  nextDate?: string;
  location?: string;
  minParticipants?: number;
}

export interface Course {
  id: string;
  ref: string;
  coverImage: string;
  logoImage: string;
  rating: number;
  reviewCount: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  sessions: {
    inter?: SessionConfig;
    intra?: SessionConfig;
    surMesure?: boolean;
  };
  fr: CourseContent;
  en: CourseContent;
}
