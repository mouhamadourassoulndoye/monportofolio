// ============================================================
// Projets — Portfolio Mouhamed Ndoye
// ============================================================

import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'marketplace',
    title: 'Marketplace E-Commerce',
    shortDescription: 'Plateforme e-commerce full stack avec React et Spring Boot.',
    description:
      'Plateforme e-commerce complète permettant aux utilisateurs de publier, rechercher et acheter des produits. Architecture microservices avec authentification Keycloak, gestion de panier, système de paiement et messagerie en temps réel.',
    image: '/images/projects/marketplace.webp',
    stack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Spring Boot', category: 'Backend' },
      { name: 'Keycloak', category: 'Sécurité' },
      { name: 'MySQL', category: 'Base de données' },
      { name: 'Docker', category: 'DevOps' },
      { name: 'Tailwind CSS', category: 'Frontend' },
    ],
    category: 'Full Stack',
    github: 'https://github.com/mouhamadourassoulndoye/marketplace',
    link: '/videos/marketplacedemo.mp4',
    featured: true,
    date: '2024',
    color: '#6366f1',
  },
  {
    slug: 'big-data',
    title: 'Pipeline Big Data',
    shortDescription: 'Pipeline de traitement de données massives avec Spark et Cassandra.',
    description:
      'Pipeline complet de collecte, transformation et analyse de données massives. Web scraping automatisé, ETL avec Pentaho, stockage distribué sur Apache Cassandra, traitement avec Spark SQL et visualisation interactive des résultats.',
    image: '/images/projects/bigdata.webp',
    stack: [
      { name: 'Python', category: 'Scraping' },
      { name: 'Pentaho', category: 'ETL' },
      { name: 'Apache Cassandra', category: 'Base de données' },
      { name: 'Spark SQL', category: 'Traitement' },
      { name: 'Matplotlib', category: 'Visualisation' },
    ],
    category: 'Data Engineering',
    report: '/rapports/rapportMouhamed_Ndoye_202001936.pdf',
    featured: true,
    date: '2024',
    color: '#f59e0b',
  },
  {
    slug: 'bibliotheque',
    title: 'Gestion de Bibliothèque',
    shortDescription: 'Système de gestion de bibliothèque avec interface moderne.',
    description:
      'Application de gestion de bibliothèque permettant le suivi des emprunts, la gestion du catalogue, la recherche avancée et la génération de rapports. Interface utilisateur intuitive avec tableau de bord analytique.',
    image: '/images/projects/bibliotheque.webp',
    stack: [
      { name: 'Java', category: 'Backend' },
      { name: 'Java Swing', category: 'Frontend' },
      { name: 'Hibernate', category: 'ORM' },
      { name: 'MySQL', category: 'Base de données' },
      { name: 'Docker', category: 'DevOps' },
    ],
    category: 'Desktop',
    github: 'https://github.com/mouhamadourassoulndoye/gestion-bibliotheque',
    report: '/rapports/RapportGestionBU.pdf',
    featured: true,
    date: '2024',
    color: '#10b981',
  },
  {
    slug: 'oracle',
    title: 'Oracle Database',
    shortDescription: 'Administration et développement avancé sous Oracle Database.',
    description:
      'Projet d\'administration Oracle couvrant le développement PL/SQL avancé, la création de packages et triggers, la mise en place de stratégies de sauvegarde RMAN, la planification de tâches avec Oracle Scheduler et l\'optimisation des performances.',
    image: '/images/projects/oracle.webp',
    stack: [
      { name: 'Oracle DB', category: 'Base de données' },
      { name: 'PL/SQL', category: 'Langage' },
      { name: 'RMAN', category: 'Sauvegarde' },
      { name: 'SQL*Plus', category: 'Outil' },
    ],
    category: 'Base de données',
    report: '/rapports/Rapport_PosteDeSante.pdf',
    featured: true,
    date: '2024',
    color: '#ef4444',
  },

  {
    slug: 'calendrier-react',
    title: 'Calendrier de Planification',
    shortDescription: 'Application premium de calendrier interactif avec React et Tailwind CSS.',
    description:
      'Application complète de calendrier avec une interface utilisateur moderne et premium (glassmorphism). Inclut la gestion des événements par catégories colorées, vues jour/semaine/mois avec FullCalendar, drag & drop, tableau de bord de statistiques et persistance locale.',
    image: '/images/projects/calendrier.webp',
    stack: [
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Langage' },
      { name: 'FullCalendar', category: 'Librairie' },
      { name: 'Tailwind CSS', category: 'Style' },
      { name: 'Lucide', category: 'Icônes' },
    ],
    category: 'Frontend',
    github: 'https://github.com/mouhamadourassoulndoye/Calendrier_Planification-React-JS-',
    link: '/videos/calendrier-planification-demo.mp4',
    featured: true,
    date: '2024',
    color: '#6366f1',
  },
  {
    slug: 'projet-mr-malack',
    title: 'Microservices Gestion Étudiants',
    shortDescription: 'Architecture Microservices avec Spring Cloud et Angular',
    description: 'Système de gestion d\'étudiants et de classes basé sur une architecture microservices robuste avec Spring Cloud (Eureka, Config Server, Gateway) et un client Angular.',
    image: '/images/projects/marketplace.webp', // Using marketplace image as placeholder
    stack: [
      { name: 'Angular', category: 'Frontend' },
      { name: 'Spring Boot', category: 'Backend' },
      { name: 'Spring Cloud', category: 'Infrastructure' },
    ],
    category: 'Full Stack',
    github: 'https://github.com/mouhamadourassoulndoye/Projet_Mr_Malack.git',
    link: '/videos/projet-mr-malack-demo.webm',
    featured: true,
    date: '2024',
    color: '#dd0031',
  },
  {
    slug: 'espace-numerique',
    title: 'Espace Numérique Chef de Département',
    shortDescription: 'Plateforme de suivi pédagogique avec React',
    description: 'Espace numérique dédié aux chefs de département et responsables de formation pour suivre en temps réel la progression pédagogique des cours. Architecture basée sur React, Bootstrap et des données structurées en JSON.',
    image: '/images/projects/todo.webp', // Placeholder
    stack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Bootstrap', category: 'Frontend' },
      { name: 'JSON', category: 'Base de données' },
      { name: 'UML', category: 'Modélisation' },
    ],
    category: 'Frontend',
    report: '/rapports/Rapportfa.pdf',
    featured: true,
    date: '2024',
    color: '#06b6d4',
  },
  {
    slug: 'projet-bloom',
    title: 'Filtre de Bloom',
    shortDescription: 'Implémentation probabiliste d\'un filtre de Bloom en OCaml.',
    description: 'Structure de données probabiliste développée en OCaml permettant de tester très rapidement l\'appartenance d\'un mot dans un dictionnaire avec calcul optimal des paramètres de hachage.',
    image: '/images/projects/todo.webp', // Placeholder
    stack: [
      { name: 'OCaml', category: 'Langage' },
      { name: 'Algorithmique', category: 'Théorie' },
    ],
    category: 'Backend',
    github: 'https://github.com/mouhamadourassoulndoye/projet-bloom',
    featured: true,
    date: '2024',
    color: '#f59e0b',
  },
];

export const projectCategories = [
  'Tous',
  'Full Stack',
  'Data Engineering',
  'Backend',
  'Frontend',
  'Desktop',
  'Base de données',
];
