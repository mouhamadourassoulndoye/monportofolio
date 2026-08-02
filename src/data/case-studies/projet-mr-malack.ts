import { CaseStudy } from '@/types';

export const projetMrMalackCaseStudy: CaseStudy = {
  slug: 'projet-mr-malack',
  title: 'Microservices Gestion Étudiants',
  subtitle: 'Architecture Microservices avec Spring Cloud et Angular',
  heroImage: '/images/projects/marketplace.webp', // Using a placeholder for now
  context:
    'Dans le cadre des projets académiques (Projet Mr Malack), ce projet visait à concevoir un système de gestion d\'étudiants et de classes basé sur une architecture microservices robuste.',
  problematic:
    'Comment séparer les différentes responsabilités d\'une application de gestion scolaire en services indépendants, résilients, et capables de communiquer de manière sécurisée et fluide ?',
  objectives: [
    'Concevoir une architecture distribuée avec Spring Boot',
    'Mettre en place un serveur de configuration centralisé (Config Server)',
    'Implémenter l\'enregistrement et la découverte de services (Eureka / Register Server)',
    'Orchestrer les requêtes via une API Gateway',
    'Développer une interface utilisateur cliente avec Angular',
  ],
  architecture: {
    description:
      'L\'application est divisée en plusieurs microservices : un service étudiant, un service classe, un registre (Eureka), une gateway et un config server. Le frontend est développé en Angular.',
    diagram: [
      { id: 'angular', label: 'Angular', description: 'Interface utilisateur SPA', icon: 'Layout', color: '#dd0031' },
      { id: 'gateway', label: 'API Gateway', description: 'Routage centralisé', icon: 'Server', color: '#6db33f' },
      { id: 'eureka', label: 'Eureka', description: 'Service Registry', icon: 'Network', color: '#f59e0b' },
      { id: 'microservices', label: 'Microservices (Étudiant, Classe)', description: 'Logique métier autonome', icon: 'Database', color: '#4479a1' },
    ],
  },
  technologies: [
    { name: 'Angular', category: 'Frontend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Spring Cloud Gateway', category: 'Infrastructure' },
    { name: 'Netflix Eureka', category: 'Service Registry' },
    { name: 'Spring Cloud Config', category: 'Configuration' },
  ],
  challenges: [
    {
      title: 'Orchestration des services',
      description: 'Permettre aux services de se découvrir et de communiquer entre eux sans couplage fort.',
      solution: 'Utilisation de Netflix Eureka pour le registre de services et d\'une API Gateway pour centraliser le trafic entrant.',
    },
    {
      title: 'Configuration centralisée',
      description: 'Gérer les configurations de plusieurs microservices de manière unifiée.',
      solution: 'Mise en place de Spring Cloud Config Server pour distribuer dynamiquement les configurations.',
    },
  ],
  solutions: [
    'Séparation claire des domaines métiers (Étudiant, Classe)',
    'Découverte dynamique des services via Eureka',
    'Routage et filtrage via Spring Cloud Gateway',
  ],
  results: [
    'Architecture hautement scalable et modulaire',
    'Interface utilisateur Angular connectée à la gateway',
    'Système résilient aux pannes de services individuels',
  ],
  skills: [
    'Architecture Microservices',
    'Spring Boot & Spring Cloud',
    'Développement Frontend Angular',
    'Conception d\'API RESTful',
  ],
  perspectives: [
    'Déploiement avec Docker et Docker Compose',
    'Ajout d\'un serveur d\'authentification (ex: Keycloak)',
    'Mise en place de la traçabilité distribuée (Zipkin / Sleuth)',
  ],
  github: 'https://github.com/mouhamadourassoulndoye/Projet_Mr_Malack.git',
  demoVideo: 'https://youtu.be/A7hrOPmSvHE',
  color: '#dd0031',
};
