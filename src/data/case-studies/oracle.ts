// ============================================================
// Étude de cas : Oracle Database — Portfolio Mouhamed Ndoye
// ============================================================

import { CaseStudy } from '@/types';

export const oracleCaseStudy: CaseStudy = {
  slug: 'oracle',
  title: 'Poste de Santé (Oracle Database)',
  subtitle: 'Administration avancée, PL/SQL et RMAN pour un poste de santé',
  heroImage: '/images/projects/oracle.webp',
  context:
    'Dans le cadre du cours d\'Administration de Bases de Données Relationnelles (Master), il nous a été confié la réalisation d\'un TP consistant à mettre en place et manipuler une base de données d\'un poste de santé. Ce travail s\'inscrit dans un contexte pédagogique visant à renforcer nos compétences pratiques sur Oracle.',
  problematic:
    'Comment concevoir une base de données opérationnelle permettant de gérer efficacement les infirmiers, les patients, les services, les salles, les lits et les consultations, tout en assurant l\'administration avancée de l\'instance Oracle ?',
  objectives: [
    'Conception et création de la base de données PosteDeSante',
    'Création de tables avec des clusters pour optimiser le stockage',
    'Développement d\'objets Oracle (séquences, triggers, fonctions et procédures dans un package)',
    'Insertion de données de test',
    'Planification de tâches automatisées (Jobs Oracle)',
    'Mise en place de stratégies de sauvegarde et restauration avec RMAN',
  ],
  architecture: {
    description:
      'L\'environnement s\'articule autour de la base de données Oracle PosteDeSante, structurée avec des clusters. La logique métier est encapsulée dans des packages PL/SQL, l\'intégrité garantie par des triggers, et l\'administration sécurisée par des jobs planifiés et des sauvegardes RMAN.',
    diagram: [
      { id: 'db', label: 'Conception', description: 'Tables et Clusters (Infirmiers, Patients, etc.)', icon: 'Database', color: '#4479a1' },
      { id: 'plsql', label: 'PL/SQL', description: 'Packages, procédures et séquences', icon: 'Code', color: '#ef4444' },
      { id: 'triggers', label: 'Triggers', description: 'Contrôle d\'occupation des lits', icon: 'Zap', color: '#f59e0b' },
      { id: 'rman', label: 'RMAN', description: 'Sauvegarde et restauration', icon: 'Shield', color: '#10b981' },
      { id: 'scheduler', label: 'Scheduler', description: 'Automatisation des tâches', icon: 'Clock', color: '#3b82f6' },
    ],
  },
  technologies: [
    { name: 'Oracle Database', category: 'SGBD' },
    { name: 'PL/SQL', category: 'Langage procédural' },
    { name: 'SQL*Plus', category: 'Interface CLI' },
    { name: 'RMAN', category: 'Recovery Manager' },
    { name: 'Oracle Scheduler', category: 'Automatisation' },
  ],
  challenges: [
    {
      title: 'Optimisation du stockage',
      description: 'Stocker conjointement les données fréquemment accédées ensemble.',
      solution: 'Création de clusters (Infirmier_Patient_Cluster et Salle_Lit_Cluster).',
    },
    {
      title: 'Contrôle d\'intégrité complexe',
      description: 'Empêcher qu\'un patient occupe deux lits en même temps.',
      solution: 'Création d\'un trigger (vifierOccpationLit) qui lève une exception si le patient n\'a pas de date de fin sur une occupation précédente.',
    },
    {
      title: 'Stratégie de sauvegarde',
      description: 'Assurer la pérennité de la base de données sans catalogue de récupération.',
      solution: 'Configuration RMAN pour la sauvegarde des datafiles (SYSTEM, SYSAUX, UNDO, USERS), des journaux d\'archives et autobackup du controlfile.',
    },
  ],
  solutions: [
    'Conception optimisée avec des clusters de tables',
    'Package sp_sante regroupant des fonctions de statistiques (nombre d\'infirmiers) et des procédures d\'affichage (patients par salle)',
    'Trigger empêchant les doubles affectations de lits',
    'Scripts RMAN pour la sauvegarde et restauration complète de la base',
    'Jobs Oracle Scheduler pour automatiser l\'exécution des procédures',
  ],
  results: [
    'Base de données PosteDeSante pleinement fonctionnelle',
    'Logique métier PL/SQL testée et validée par des données de test',
    'Sauvegarde RMAN testée avec succès (restauration des datafiles et controlfiles)',
    'Planification des tâches opérationnelle',
  ],
  skills: [
    'Développement PL/SQL (Packages, Triggers, Séquences)',
    'Administration Oracle Database',
    'Utilisation des Clusters de tables',
    'Sauvegarde et restauration avec RMAN',
    'Ordonnancement avec DBMS_SCHEDULER',
  ],
  perspectives: [
    'Développement d\'une interface graphique (Java ou Web) pour la gestion du poste de santé',
    'Mise en place d\'un catalogue RMAN centralisé',
    'Implémentation de Data Guard pour la réplication',
  ],
  report: '/rapports/Rapport_PosteDeSante.pdf',
  color: '#ef4444',
};
