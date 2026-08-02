// ============================================================
// Étude de cas : Bibliothèque — Portfolio Mouhamed Ndoye
// ============================================================

import { CaseStudy } from '@/types';

export const bibliothequeCaseStudy: CaseStudy = {
  slug: 'bibliotheque',
  title: 'Gestion de Bibliothèque Universitaire',
  subtitle: 'Application desktop Java avec interface graphique et JPA (Hibernate)',
  heroImage: '/images/projects/bibliotheque.webp',
  context:
    'Dans un contexte académique où la gestion des ressources documentaires est cruciale, ce projet vise à développer une application complète et intuitive. Son objectif est d\'automatiser et simplifier les tâches administratives effectuées par les bibliothécaires, notamment la gestion des abonnés, des livres et des emprunts.',
  problematic:
    'Comment concevoir un système d\'information fiable et ergonomique permettant à la fois aux administrateurs et aux bibliothécaires de gérer le cycle de vie d\'une bibliothèque (inscriptions, catalogue, prêts et retours) tout en garantissant l\'intégrité des données ?',
  objectives: [
    'Concevoir le schéma de base de données relationnelle adapté aux besoins',
    'Mettre en place la structure des objets Java (POJO) et le mapping avec JPA',
    'Développer des interfaces homme-machine (IHM) conviviales et intuitives',
    'Implémenter un espace Administrateur (gestion du personnel et statistiques)',
    'Implémenter un espace Bibliothécaire (gestion des abonnés, livres et emprunts/retours)',
  ],
  architecture: {
    description: 'L\'architecture repose sur Java Persistence API (JPA) pour le mapping objet-relationnel. Les entités clés (Administrateur, Adherent, Livre, Exemplaire, Emprunte, Rendre) sont soigneusement structurées pour garantir l\'intégrité référentielle.',
    diagram: [
      { id: 'ihm', label: 'IHM (Java Swing)', description: 'Interfaces graphiques (Dashboard, Formulaires)', icon: 'Layout', color: '#3b82f6' },
      { id: 'pojo', label: 'Entités POJO', description: 'Classes Java annotées', icon: 'Code', color: '#10b981' },
      { id: 'jpa', label: 'JPA / Hibernate', description: 'Persistance des données', icon: 'ArrowRightLeft', color: '#f59e0b' },
      { id: 'mysql', label: 'Base de données', description: 'Stockage relationnel', icon: 'Database', color: '#4479a1' },
    ],
  },
  technologies: [
    { name: 'Java', category: 'Langage' },
    { name: 'Java Swing', category: 'Interface graphique' },
    { name: 'JPA / Hibernate', category: 'ORM' },
    { name: 'MySQL', category: 'Base de données' },
    { name: 'Docker', category: 'DevOps' },
  ],
  challenges: [
    {
      title: 'Ergonomie des interfaces',
      description: 'Il fallait proposer une navigation claire entre la gestion des utilisateurs, du catalogue et des prêts.',
      solution: 'Création de tableaux de bord distincts avec menus latéraux (Dashboards dédiés Administrateur et Bibliothécaire) et formulaires épurés.',
    },
    {
      title: 'Intégrité des données',
      description: 'Gérer la complexité des relations entre un exemplaire, un livre, un adhérent et l\'historique des emprunts/retours.',
      solution: 'Utilisation stricte des annotations JPA pour définir les relations (clés étrangères) et garantir la cohérence lors des opérations CRUD.',
    },
  ],
  solutions: [
    'Espace Administrateur : Inscription, modification, suppression des bibliothécaires et suivi des statistiques globales',
    'Espace Bibliothécaire : Gestion complète des adhérents, du catalogue de livres et processus d\'emprunt/retour',
    'Tableau de bord statistique : Visualisation rapide du nombre de livres, exemplaires, abonnés et emprunts en cours',
  ],
  results: [
    'Interconnexion fluide des différentes entités garantissant l\'intégrité référentielle',
    'Application opérationnelle rendant les processus de prêt et de retour transparents',
    'Amélioration considérable de l\'efficacité des opérations au sein de la bibliothèque',
  ],
  skills: [
    'Conception de schémas de bases de données',
    'Développement d\'interfaces graphiques Java (IHM)',
    'Mapping Objet-Relationnel avec JPA (Hibernate)',
    'Programmation Orientée Objet (POJO)',
  ],
  perspectives: [
    'Ajout d\'un système de recommandation de livres',
    'Intégration d\'un scanner de codes-barres pour accélérer les prêts/retours',
    'Optimisation des performances pour les grands catalogues',
  ],
  github: 'https://github.com/mouhamadourassoulndoye/gestion-bibliotheque',
  report: '/rapports/RapportGestionBU.pdf',
  color: '#10b981',
};
