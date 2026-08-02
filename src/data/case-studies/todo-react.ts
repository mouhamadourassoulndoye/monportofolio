// ============================================================
// Étude de cas : Todo React — Portfolio Mouhamed Ndoye
// ============================================================

import { CaseStudy } from '@/types';

export const todoReactCaseStudy: CaseStudy = {
  slug: 'todo-react',
  title: 'Todo React',
  subtitle: 'Application de gestion de tâches moderne avec React',
  heroImage: '/images/projects/todo.webp',
  context:
    'Projet de développement frontend réalisé pour approfondir la maîtrise de React et de son écosystème. L\'application met en œuvre les concepts fondamentaux de React : composants, hooks, state management et interactions utilisateur.',
  problematic:
    'Comment concevoir une application de gestion de tâches qui soit à la fois fonctionnelle, réactive et agréable à utiliser, en exploitant pleinement les capacités de React ?',
  objectives: [
    'Maîtriser les React Hooks (useState, useEffect, useContext)',
    'Implémenter un state management efficace',
    'Développer une interface réactive avec animations',
    'Persister les données avec le LocalStorage',
    'Créer une expérience utilisateur fluide et intuitive',
  ],
  architecture: {
    description: 'Architecture basée sur des composants React fonctionnels avec hooks. State management via Context API et persistance locale avec LocalStorage.',
    diagram: [
      { id: 'components', label: 'Composants React', description: 'Interface modulaire', icon: 'Layout', color: '#61dafb' },
      { id: 'hooks', label: 'React Hooks', description: 'Logique et état', icon: 'Code', color: '#10b981' },
      { id: 'context', label: 'Context API', description: 'State management', icon: 'Blocks', color: '#f59e0b' },
      { id: 'storage', label: 'LocalStorage', description: 'Persistance locale', icon: 'Database', color: '#8b5cf6' },
    ],
  },
  technologies: [
    { name: 'React', category: 'Framework' },
    { name: 'TypeScript', category: 'Langage' },
    { name: 'CSS Modules', category: 'Style' },
    { name: 'LocalStorage API', category: 'Stockage' },
  ],
  challenges: [
    {
      title: 'State management complexe',
      description: 'Gérer l\'état de multiples tâches avec filtres, tri et statuts.',
      solution: 'Utilisation de useReducer avec Context API pour un state management prévisible et centralisé.',
    },
    {
      title: 'Animations fluides',
      description: 'Animer l\'ajout, la suppression et le réordonnancement des tâches.',
      solution: 'CSS transitions et animations avec gestion des clés React pour des transitions naturelles.',
    },
  ],
  solutions: [
    'Composants fonctionnels réutilisables',
    'Hooks personnalisés pour la logique métier',
    'Filtres et tri dynamiques',
    'Persistance automatique des données',
  ],
  results: [
    'Application fonctionnelle avec CRUD complet',
    'Filtres par statut (tout, actif, terminé)',
    'Animations fluides lors des interactions',
    'Données persistées entre les sessions',
  ],
  skills: [
    'Développement React',
    'TypeScript',
    'State management',
    'Composants réutilisables',
    'Persistance côté client',
  ],
  perspectives: [
    'Ajout d\'un backend pour la synchronisation multi-appareils',
    'Système de catégories et d\'étiquettes',
    'Mode collaboratif en temps réel',
  ],
  color: '#06b6d4',
};
