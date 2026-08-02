import { CaseStudy } from '@/types';

export const espaceNumeriqueCaseStudy: CaseStudy = {
  slug: 'espace-numerique',
  title: 'Espace Numérique Chef de Département',
  subtitle: 'Plateforme de suivi pédagogique avec React et JSON',
  heroImage: '/images/projects/marketplace.webp', // Using a placeholder for now
  context:
    'Dans beaucoup d’universités, le suivi de la progression des cours par les professeurs reste manuel et fragmenté. Ce projet vise à mettre en place un espace numérique centralisé pour les chefs de département et responsables de masters afin de superviser efficacement et en temps réel l\'avancement des cours.',
  problematic:
    'Comment concevoir et mettre en place un espace numérique intuitif, sécurisé et efficace, spécifiquement dédié aux responsables de formation, pour permettre un suivi centralisé, fiable et en temps réel de la progression pédagogique ?',
  objectives: [
    'Offrir une interface claire pour visualiser en temps réel la progression des enseignements',
    'Fournir des outils pour suivre l’avancement des cours par spécialité et promotion',
    'Mettre en place un système d’alerte automatique signalant les retards ou absences',
    'Assurer la gestion sécurisée des accès selon les rôles'
  ],
  architecture: {
    description:
      'L\'application est développée avec React et Bootstrap pour une interface utilisateur réactive et ergonomique. La gestion des données s\'appuie sur des fichiers JSON, favorisant une architecture flexible, légère et facilement maintenable. Le système est structuré en plusieurs composants dont la gestion de la progression semestrielle et la progression des cours.',
    diagram: [
      { id: 'react', label: 'React', description: 'Interface utilisateur dynamique', icon: 'Layout', color: '#61dafb' },
      { id: 'bootstrap', label: 'Bootstrap', description: 'Design responsive et composants', icon: 'Brush', color: '#7952b3' },
      { id: 'json', label: 'JSON', description: 'Gestion des données structurées', icon: 'Database', color: '#4479a1' },
      { id: 'uml', label: 'UML', description: 'Modélisation du système', icon: 'GitBranch', color: '#f59e0b' },
    ],
  },
  technologies: [
    { name: 'React', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'JSON', category: 'Base de données' },
    { name: 'UML', category: 'Modélisation' },
  ],
  challenges: [
    {
      title: 'Consolidation des informations dispersées',
      description: 'Rassembler les informations sur l’avancement des cours et les présences qui étaient auparavant éparpillées sur divers supports.',
      solution: 'Création d\'un tableau de bord synthétique avec des indicateurs visuels (CustomProgressBar) pour visualiser l\'avancement global et détaillé.',
    },
    {
      title: 'Détection rapide des retards',
      description: 'Permettre aux responsables de réagir rapidement face aux irrégularités du semestre.',
      solution: 'Mise en place de visualisations par statut (validés, en attente, non soumis) et conception pour des alertes automatisées.',
    },
  ],
  solutions: [
    'Développement d\'une barre de progression personnalisée (CustomProgressBar) dynamique',
    'Tableaux de bord spécifiques pour les chefs de département et responsables de master',
    'Modélisation UML complète (cas d\'utilisation, activités, séquences, classes, composants)',
  ],
  results: [
    'Centralisation de l\'information pédagogique',
    'Amélioration de la transparence et de la réactivité',
    'Réduction de la charge administrative et meilleure coordination',
  ],
  skills: [
    'Conception et Modélisation UML',
    'Développement de composants UI React',
    'Analyse des besoins utilisateurs',
    'Architecture logicielle modulaire',
  ],
  perspectives: [
    'Passage à une gestion de données relationnelle (SGBD) pour un passage à l\'échelle',
    'Intégration des modules en cours de développement (candidatures, notes, emplois du temps)',
  ],
  report: '/rapports/Rapportfa.pdf',
  color: '#06b6d4',
};
