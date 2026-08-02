// ============================================================
// Timeline — Portfolio Mouhamed Ndoye
// ============================================================

import { TimelineItem, WorkflowStep } from '@/types';

export const timelineItems: TimelineItem[] = [
  {
    id: 'licence',
    year: '2020 – 2023',
    title: 'Licence Informatique',
    subtitle: 'Mathématiques, Physique et Informatique',
    description:
      'Fondamentaux de l\'informatique. Acquisition des bases solides en algorithmique, programmation orientée objet (Java, C++), bases de données et réseaux.',
    icon: 'GraduationCap',
    type: 'education',
    tags: ['Java', 'Python', 'Algorithmique', 'SQL'],
  },
  {
    id: 'master1',
    year: '2023 – 2024',
    title: 'Master 1 Informatique',
    subtitle: 'Spécialisation Génie Logiciel',
    description:
      'Approfondissement des concepts d\'architecture logicielle, développement web et bases de données avancées.',
    icon: 'BookOpen',
    type: 'education',
    tags: ['React', 'Spring Boot', 'Génie Logiciel'],
  },
  {
    id: 'master2',
    year: '2024 – 2025',
    title: 'Master 2 Informatique',
    subtitle: 'Spécialisation Génie Logiciel (en cours)',
    description:
      'Consolidation de l\'expertise en architecture logicielle, conception et développement d\'applications web microservices.',
    icon: 'Award',
    type: 'education',
    tags: ['Architecture', 'Microservices', 'Développement Web'],
  },
  {
    id: 'exp-bigdata',
    year: '2024 – 2025',
    title: 'Développeur Big Data',
    subtitle: 'Université Assane Seck de Ziguinchor',
    description:
      'Conception d\'un pipeline de collecte, de traitement et d\'analyse de données. Réalisation du web scraping et des traitements Big Data.',
    icon: 'Database',
    type: 'project',
    tags: ['Python', 'Pentaho', 'Cassandra', 'Spark SQL'],
  },
  {
    id: 'exp-alumni',
    year: '2024 – 2025',
    title: 'Développeur Web',
    subtitle: 'Université Assane Seck de Ziguinchor',
    description:
      'Développement d\'une plateforme de gestion des Alumni basée sur une architecture microservices. Implémentation d\'interfaces React et d\'API REST avec la méthodologie Agile Scrum.',
    icon: 'Code',
    type: 'project',
    tags: ['React', 'Spring Boot', 'API REST', 'Git'],
  },
  {
    id: 'exp-market',
    year: '2025 – 2026',
    title: 'Développeur Full Stack',
    subtitle: 'Projet Personnel',
    description:
      'Développement d\'une plateforme web d\'achat, de vente et d\'échange (Marketplace). Mise en place d\'API REST sécurisées via Keycloak et conteneurisation des services avec Docker.',
    icon: 'Rocket',
    type: 'project',
    tags: ['Java', 'Spring Boot', 'React', 'Docker', 'PostgreSQL'],
  },
  {
    id: 'doctorat',
    year: 'Objectif',
    title: 'Doctorat en Informatique',
    subtitle: 'Recherche en génie logiciel',
    description:
      'Ambition de poursuivre en recherche doctorale pour approfondir les problématiques d\'architecture logicielle et de qualité du code.',
    icon: 'Telescope',
    type: 'goal',
    tags: ['Recherche', 'Architecture logicielle'],
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: 'Comprendre',
    description: 'Analyser le besoin métier, identifier les utilisateurs cibles et définir le périmètre fonctionnel du projet.',
    icon: 'Search',
  },
  {
    id: 2,
    title: 'Analyser',
    description: 'Étudier les contraintes techniques, évaluer les solutions existantes et identifier les risques potentiels.',
    icon: 'FileSearch',
  },
  {
    id: 3,
    title: 'Concevoir',
    description: 'Modéliser l\'architecture logicielle, définir les interfaces et choisir les technologies adaptées.',
    icon: 'PenTool',
  },
  {
    id: 4,
    title: 'Développer',
    description: 'Implémenter la solution en respectant les bonnes pratiques, les design patterns et les conventions de code.',
    icon: 'Code',
  },
  {
    id: 5,
    title: 'Tester',
    description: 'Valider le fonctionnement par des tests unitaires, d\'intégration et de bout en bout.',
    icon: 'TestTube',
  },
  {
    id: 6,
    title: 'Documenter',
    description: 'Rédiger la documentation technique, les guides d\'utilisation et les rapports de projet.',
    icon: 'FileText',
  },
  {
    id: 7,
    title: 'Déployer',
    description: 'Mettre en production avec conteneurisation, intégration continue et monitoring.',
    icon: 'Upload',
  },
  {
    id: 8,
    title: 'Améliorer',
    description: 'Recueillir les retours, analyser les métriques et itérer pour optimiser continuellement la solution.',
    icon: 'TrendingUp',
  },
];
