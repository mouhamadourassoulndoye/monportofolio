// ============================================================
// Étude de cas : Marketplace — Portfolio Mouhamed Ndoye
// ============================================================

import { CaseStudy } from '@/types';

export const marketplaceCaseStudy: CaseStudy = {
  slug: 'marketplace',
  title: 'Marketplace E-Commerce',
  subtitle: 'Plateforme full stack avec React, Spring Boot et Docker',
  heroImage: '/images/projects/marketplace.webp',
  context:
    'Dans le cadre du Master 2 Génie Logiciel, ce projet visait à concevoir une plateforme e-commerce fonctionnelle de bout en bout. L\'objectif était de mettre en pratique les compétences acquises en architecture logicielle, développement full stack et déploiement.',
  problematic:
    'Comment concevoir une plateforme e-commerce fiable, sécurisée et performante capable de gérer l\'inscription des utilisateurs, la publication de produits, la recherche, le panier d\'achat et la messagerie, tout en respectant les bonnes pratiques d\'ingénierie logicielle ?',
  objectives: [
    'Concevoir une architecture full stack modulaire et maintenable',
    'Implémenter un système d\'authentification sécurisé avec Keycloak',
    'Développer une API REST complète avec Spring Boot',
    'Créer une interface utilisateur réactive et moderne avec React',
    'Conteneuriser l\'application avec Docker pour faciliter le déploiement',
    'Mettre en place une base de données relationnelle optimisée',
  ],
  architecture: {
    description:
      'L\'architecture suit le pattern MVC côté backend avec Spring Boot, exposant une API REST consommée par un frontend React. L\'authentification est gérée via Keycloak. Le tout est conteneurisé avec Docker Compose.',
    diagram: [
      { id: 'react', label: 'React', description: 'Interface utilisateur réactive', icon: 'Layout', color: '#61dafb' },
      { id: 'spring', label: 'Spring Boot', description: 'API REST et logique métier', icon: 'Server', color: '#6db33f' },
      { id: 'keycloak', label: 'Keycloak', description: 'Authentification et autorisation', icon: 'Shield', color: '#f59e0b' },
      { id: 'mysql', label: 'MySQL', description: 'Stockage des données', icon: 'Database', color: '#4479a1' },
      { id: 'docker', label: 'Docker', description: 'Conteneurisation et déploiement', icon: 'Container', color: '#2496ed' },
    ],
  },
  technologies: [
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Style' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Spring Security', category: 'Sécurité' },
    { name: 'Keycloak', category: 'Authentification' },
    { name: 'MySQL', category: 'Base de données' },
    { name: 'JPA/Hibernate', category: 'ORM' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Docker Compose', category: 'Orchestration' },
  ],
  challenges: [
    {
      title: 'Sécurité de l\'authentification',
      description: 'Garantir la sécurité des sessions utilisateur et protéger les endpoints sensibles.',
      solution: 'Implémentation de l\'authentification avec Keycloak pour la gestion des sessions utilisateur, des rôles et la sécurisation des endpoints avec Spring Security.',
    },
    {
      title: 'Gestion des images produits',
      description: 'Stocker et servir efficacement les images uploadées par les vendeurs.',
      solution: 'Système d\'upload avec validation du type et de la taille, stockage optimisé et lazy loading côté frontend.',
    },
    {
      title: 'Recherche performante',
      description: 'Permettre une recherche rapide et pertinente dans le catalogue de produits.',
      solution: 'Requêtes SQL optimisées avec indexation, filtres dynamiques et pagination côté serveur.',
    },
  ],
  solutions: [
    'Architecture REST claire avec séparation des responsabilités',
    'Composants React réutilisables avec state management efficace',
    'Pipeline CI/CD avec Docker Compose pour le déploiement',
    'Tests automatisés pour garantir la stabilité du code',
  ],
  results: [
    'Plateforme fonctionnelle avec inscription, connexion et gestion de profil',
    'Catalogue produits avec recherche, filtres et pagination',
    'Système de panier et processus de commande complet',
    'Messagerie en temps réel entre acheteurs et vendeurs',
    'Déploiement conteneurisé reproductible',
  ],
  skills: [
    'Architecture full stack',
    'Développement d\'APIs REST',
    'Authentification et sécurité',
    'Développement React avancé',
    'Conteneurisation Docker',
    'Gestion de base de données',
  ],
  perspectives: [
    'Intégration d\'un système de paiement (Stripe)',
    'Mise en place de notifications push',
    'Déploiement sur un cloud provider (AWS/GCP)',
    'Ajout d\'un système de recommandation basé sur le machine learning',
  ],
  github: 'https://github.com/mouhamadourassoulndoye/marketplace',
  demoVideo: '/videos/marketplacedemo.mp4',
  color: '#6366f1',
};
