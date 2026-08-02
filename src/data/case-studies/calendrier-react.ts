// ============================================================
// Étude de cas : Calendrier React — Portfolio Mouhamed Ndoye
// ============================================================

import { CaseStudy } from '@/types';

export const calendrierReactCaseStudy: CaseStudy = {
  slug: 'calendrier-react',
  title: 'Calendrier de Planification',
  subtitle: 'Application premium de calendrier interactif avec React et Tailwind CSS',
  heroImage: '/images/projects/calendrier.webp',
  context:
    'Projet frontend visant à développer une application de calendrier premium et interactive en React. Ce projet intègre le glassmorphism, la gestion d\'événements catégorisés par couleur, et l\'utilisation de FullCalendar pour des vues multiples.',
  problematic:
    'Comment développer une interface de calendrier moderne, esthétique et hautement interactive offrant une excellente expérience utilisateur ?',
  objectives: [
    'Développer une interface premium avec le concept de glassmorphism',
    'Implémenter la gestion d\'événements par catégories colorées',
    'Intégrer FullCalendar avec vues jour, semaine et mois',
    'Créer un tableau de bord avec des statistiques en temps réel',
    'Assurer la persistance des données via localStorage',
  ],
  architecture: {
    description: 'Application React modulaire avec un design system personnalisé, intégration profonde de FullCalendar, et gestion d\'état locale.',
    diagram: [
      { id: 'ui', label: 'Design Premium', description: 'Glassmorphism et animations', icon: 'Layout', color: '#6366f1' },
      { id: 'fullcalendar', label: 'FullCalendar', description: 'Vues et drag & drop', icon: 'Calendar', color: '#ec4899' },
      { id: 'events', label: 'Catégorisation', description: 'Tags et codes couleurs', icon: 'Tag', color: '#10b981' },
      { id: 'state', label: 'LocalStorage', description: 'Persistance locale', icon: 'Database', color: '#f59e0b' },
    ],
  },
  technologies: [
    { name: 'React', category: 'Framework' },
    { name: 'TypeScript', category: 'Langage' },
    { name: 'FullCalendar', category: 'Librairie' },
    { name: 'Tailwind CSS', category: 'Style' },
    { name: 'Lucide', category: 'Icônes' },
  ],
  challenges: [
    {
      title: 'Personnalisation de FullCalendar',
      description: 'Surcharger les styles par défaut de FullCalendar pour qu\'ils correspondent au design system premium (border-radius, couleurs, polices).',
      solution: 'Création d\'un fichier CSS dédié avec plus de 30 overrides spécifiques aux classes de FullCalendar.',
    },
    {
      title: 'Implémentation du Glassmorphism',
      description: 'Créer un effet de verre dépoli fluide pour les modals sans impacter les performances.',
      solution: 'Utilisation judicieuse de backdrop-filter, des couleurs semi-transparentes et des ombres douces avec Tailwind CSS.',
    },
  ],
  solutions: [
    'Interface utilisateur premium avec palette de couleurs moderne',
    'Modals avec glassmorphism et animations d\'apparition fluides',
    'Sidebar riche avec mini-statistiques et liste des prochains événements',
    'Système robuste de catégories d\'événements avec rendu visuel distinct',
  ],
  results: [
    'Application de planification élégante et entièrement fonctionnelle',
    'Expérience utilisateur améliorée avec des micro-interactions',
    'Code propre et styles centralisés via un design system',
  ],
  skills: [
    'UI/UX Design avancé',
    'Intégration de bibliothèques tierces complexes',
    'Création de Design System CSS',
    'State management en React',
  ],
  perspectives: [
    'Connexion à une base de données backend (Spring Boot ou Node.js)',
    'Authentification des utilisateurs',
    'Partage de calendriers entre utilisateurs',
  ],
  github: 'https://github.com/mouhamadourassoulndoye/Calendrier_Planification-React-JS-',
  demoVideo: 'https://youtu.be/A7hrOPmSvHE',
  color: '#6366f1',
};
