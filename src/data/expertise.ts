// ============================================================
// Expertise — Portfolio Mouhamed Ndoye
// ============================================================

import { ExpertiseDomain } from '@/types';

export const expertiseDomains: ExpertiseDomain[] = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    description:
      'Conception d\'architectures logicielles robustes et évolutives. Application des design patterns, des principes SOLID et des méthodologies agiles pour produire un code maintenable et performant.',
    level: 'avancé',
    percentage: 85,
    icon: 'Blocks',
    technologies: [
      { name: 'Java', category: 'Langage' },
      { name: 'Python', category: 'Langage' },
      { name: 'TypeScript', category: 'Langage' },
      { name: 'Design Patterns', category: 'Architecture' },
      { name: 'UML', category: 'Modélisation' },
      { name: 'Git', category: 'Versionning' },
      { name: 'Docker', category: 'Conteneurisation' },
      { name: 'CI/CD', category: 'DevOps' },
    ],
    projects: ['marketplace'],
    color: '#6366f1',
  },
  {
    id: 'backend-engineering',
    title: 'Backend Engineering',
    description:
      'Développement d\'APIs RESTful et de services backend performants. Maîtrise des frameworks serveur, de l\'authentification, de la sécurité et de l\'optimisation des performances.',
    level: 'avancé',
    percentage: 80,
    icon: 'Server',
    technologies: [
      { name: 'Spring Boot', category: 'Framework' },
      { name: 'Java EE', category: 'Plateforme' },
      { name: 'Node.js', category: 'Runtime' },
      { name: 'REST API', category: 'Architecture' },
      { name: 'SOAP', category: 'Protocole' },
      { name: 'JWT', category: 'Sécurité' },
      { name: 'JPA/Hibernate', category: 'ORM' },
    ],
    projects: ['marketplace', 'bibliotheque'],
    color: '#10b981',
  },
  {
    id: 'frontend-engineering',
    title: 'Frontend Engineering',
    description:
      'Création d\'interfaces utilisateur modernes et réactives. Utilisation de React et de son écosystème pour développer des expériences web fluides et accessibles.',
    level: 'avancé',
    percentage: 78,
    icon: 'Layout',
    technologies: [
      { name: 'React', category: 'Framework' },
      { name: 'Next.js', category: 'Framework' },
      { name: 'TypeScript', category: 'Langage' },
      { name: 'Tailwind CSS', category: 'Style' },
      { name: 'Framer Motion', category: 'Animation' },
      { name: 'HTML/CSS', category: 'Base' },
      { name: 'JavaScript', category: 'Langage' },
    ],
    projects: ['marketplace', 'calendrier-react'],
    color: '#3b82f6',
  },
  {
    id: 'database-engineering',
    title: 'Database Engineering',
    description:
      'Conception et administration de bases de données relationnelles et NoSQL. Optimisation des requêtes, modélisation des données, sauvegarde et restauration.',
    level: 'avancé',
    percentage: 82,
    icon: 'Database',
    technologies: [
      { name: 'Oracle DB', category: 'SGBD' },
      { name: 'MySQL', category: 'SGBD' },
      { name: 'PostgreSQL', category: 'SGBD' },
      { name: 'PL/SQL', category: 'Langage' },
      { name: 'Apache Cassandra', category: 'NoSQL' },
      { name: 'RMAN', category: 'Sauvegarde' },
      { name: 'SQL', category: 'Langage' },
    ],
    projects: ['oracle', 'marketplace', 'bibliotheque', 'big-data'],
    color: '#ef4444',
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description:
      'Construction de pipelines de données pour la collecte, la transformation et l\'analyse de données massives. Maîtrise des outils ETL et des technologies de traitement distribué.',
    level: 'intermédiaire',
    percentage: 70,
    icon: 'BarChart3',
    technologies: [
      { name: 'Pentaho', category: 'ETL' },
      { name: 'Spark SQL', category: 'Traitement' },
      { name: 'Python', category: 'Scripting' },
      { name: 'Web Scraping', category: 'Collecte' },
      { name: 'Matplotlib', category: 'Visualisation' },
      { name: 'Pandas', category: 'Analyse' },
    ],
    projects: ['big-data'],
    color: '#f59e0b',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description:
      'Déploiement et gestion d\'applications dans le cloud. Conteneurisation avec Docker, intégration continue et déploiement automatisé.',
    level: 'intermédiaire',
    percentage: 65,
    icon: 'Cloud',
    technologies: [
      { name: 'Docker', category: 'Conteneurisation' },
      { name: 'Docker Compose', category: 'Orchestration' },
      { name: 'GitHub Actions', category: 'CI/CD' },
      { name: 'Vercel', category: 'Hébergement' },
      { name: 'Linux', category: 'OS' },
      { name: 'Nginx', category: 'Serveur' },
    ],
    projects: ['marketplace'],
    color: '#8b5cf6',
  },
];
