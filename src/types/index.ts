// ============================================================
// Types TypeScript — Portfolio Mouhamed Ndoye
// ============================================================

/** Niveau de compétence */
export type SkillLevel = 'débutant' | 'intermédiaire' | 'avancé' | 'expert';

/** Technologie utilisée */
export interface Technology {
  name: string;
  icon?: string;
  category?: string;
}

/** Domaine d'expertise */
export interface ExpertiseDomain {
  id: string;
  title: string;
  description: string;
  level: SkillLevel;
  percentage: number;
  icon: string;
  technologies: Technology[];
  projects: string[]; // slugs des projets associés
  color: string;
}

/** Projet */
export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  stack: Technology[];
  category: string;
  link?: string;
  github?: string;
  report?: string;
  featured: boolean;
  date: string;
  color: string;
}

/** Étude de cas complète */
export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  context: string;
  problematic: string;
  objectives: string[];
  architecture: {
    description: string;
    diagram?: PipelineStep[];
  };
  technologies: Technology[];
  challenges: Challenge[];
  solutions: string[];
  results: string[];
  skills: string[];
  perspectives: string[];
  gallery?: string[];
  github?: string;
  demoVideo?: string;
  report?: string;
  color: string;
}

/** Étape de pipeline pour diagrammes */
export interface PipelineStep {
  id: string;
  label: string;
  description: string;
  icon: string;
  color: string;
}

/** Défi technique */
export interface Challenge {
  title: string;
  description: string;
  solution: string;
}

/** Élément de la timeline */
export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  type: 'education' | 'project' | 'goal';
  tags?: string[];
}

/** Étape du workflow */
export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

/** Rapport technique */
export interface Report {
  id: string;
  title: string;
  summary: string;
  technologies: Technology[];
  pdfUrl?: string;
  caseStudySlug?: string;
  coverColor: string;
  date: string;
  pages?: number;
}

/** Lien de navigation */
export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

/** Configuration du site */
export interface SiteConfig {
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
  author: {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    avatar?: string;
  };
}

/** Props pour les animations de section */
export interface SectionAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Formulaire de contact */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
