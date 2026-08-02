// ============================================================
// Étude de cas : Filtre de Bloom — Portfolio Mouhamed Ndoye
// ============================================================

import { CaseStudy } from '@/types';

export const projetBloomCaseStudy: CaseStudy = {
  slug: 'projet-bloom',
  title: 'Filtre de Bloom',
  subtitle: 'Implémentation d\'un filtre de Bloom en OCaml',
  heroImage: '/images/projects/bloom.webp',
  context:
    'Dans le cadre du Master 1 Informatique (Programmation fonctionnelle), ce projet vise à implémenter une structure de données probabiliste, le filtre de Bloom, en OCaml. L\'objectif est de tester efficacement l\'appartenance de mots (depuis un dictionnaire anglais) tout en minimisant l\'utilisation de l\'espace mémoire.',
  problematic:
    'Comment concevoir une structure de données permettant de tester rapidement la présence d\'un élément dans un grand ensemble, tout en acceptant un faible taux de faux positifs maîtrisable ?',
  objectives: [
    'Implémenter un filtre de Bloom fonctionnel en OCaml',
    'Calculer dynamiquement la taille optimale (m) et le nombre de fonctions de hachage (k)',
    'Comparer les performances avec une recherche dichotomique classique',
    'Analyser et mesurer le taux de faux positifs',
  ],
  architecture: {
    description: 'Le projet est développé en OCaml pur et repose sur des fonctions de hachage multiples pour configurer les bits d\'un tableau, permettant une vérification d\'appartenance ultra-rapide.',
    diagram: [
      { id: 'ocaml', label: 'OCaml', description: 'Langage fonctionnel', icon: 'Code', color: '#f59e0b' },
      { id: 'hash', label: 'Hachage', description: 'Multiples fonctions de hachage', icon: 'Hash', color: '#10b981' },
      { id: 'data', label: 'Dictionnaire', description: 'Données de test', icon: 'Database', color: '#3b82f6' },
    ],
  },
  technologies: [
    { name: 'OCaml', category: 'Langage' },
  ],
  challenges: [
    {
      title: 'Calcul optimal des paramètres',
      description: 'Il fallait déterminer la taille exacte du filtre (m) et le nombre de fonctions de hachage (k) pour garantir un taux de faux positifs cible.',
      solution: 'Application rigoureuse des formules mathématiques de probabilité pour initialiser le filtre avec les valeurs idéales.',
    },
    {
      title: 'Gestion des faux positifs',
      description: 'Le filtre de Bloom peut indiquer qu\'un mot est présent alors qu\'il ne l\'est pas (faux positif).',
      solution: 'Implémentation d\'une série de tests pour mesurer expérimentalement ce taux et vérifier qu\'il est conforme à la théorie.',
    },
  ],
  solutions: [
    'Programme en ligne de commande affichant clairement chaque étape de l\'initialisation',
    'Comparaison directe avec la recherche dichotomique pour illustrer le compromis temps/espace',
    'Simulation de tests sur des milliers de mots pour évaluer la précision'
  ],
  results: [
    'Une implémentation robuste et performante du filtre de Bloom',
    'Validation expérimentale du taux de faux positifs',
    'Démonstration claire des avantages des structures probabilistes'
  ],
  skills: [
    'Programmation fonctionnelle',
    'Structures de données avancées',
    'Algorithmes probabilistes',
    'OCaml'
  ],
  perspectives: [
    'Ajout du support pour la suppression d\'éléments (Counting Bloom Filter)',
    'Interface graphique pour visualiser l\'état des bits',
  ],
  github: 'https://github.com/mouhamadourassoulndoye/projet-bloom',
  color: '#f59e0b',
};
