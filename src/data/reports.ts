// ============================================================
// Rapports techniques — Portfolio Mouhamed Ndoye
// ============================================================

import { Report } from '@/types';

export const reports: Report[] = [
  {
    id: 'rapport-marketplace',
    title: 'Marketplace E-Commerce : Architecture Full Stack',
    summary:
      'Rapport détaillant la conception et le développement d\'une plateforme e-commerce complète. Couvre l\'architecture React/Spring Boot, l\'authentification JWT, la conteneurisation Docker et les stratégies de déploiement.',
    technologies: [
      { name: 'React' },
      { name: 'Spring Boot' },
      { name: 'JWT' },
      { name: 'MySQL' },
      { name: 'Docker' },
    ],
    caseStudySlug: 'marketplace',
    coverColor: '#6366f1',
    date: '2024',
    pages: 45,
  },
  {
    id: 'rapport-bigdata',
    title: 'Pipeline Big Data : De la collecte à la visualisation',
    summary:
      'Étude complète de la mise en place d\'un pipeline de traitement de données massives. Aborde le web scraping, l\'ETL avec Pentaho, le stockage distribué Cassandra, le traitement Spark SQL et la visualisation des résultats.',
    technologies: [
      { name: 'Python' },
      { name: 'Pentaho' },
      { name: 'Cassandra' },
      { name: 'Spark SQL' },
      { name: 'Matplotlib' },
    ],
    caseStudySlug: 'big-data',
    coverColor: '#f59e0b',
    date: '2024',
    pages: 52,
  },
  {
    id: 'rapport-oracle',
    title: 'Administration Oracle : PL/SQL et gestion avancée',
    summary:
      'Rapport couvrant l\'administration avancée d\'Oracle Database : développement PL/SQL, création de packages et triggers, stratégies de sauvegarde RMAN, planification avec Oracle Scheduler et optimisation des performances.',
    technologies: [
      { name: 'Oracle DB' },
      { name: 'PL/SQL' },
      { name: 'RMAN' },
      { name: 'SQL*Plus' },
    ],
    caseStudySlug: 'oracle',
    coverColor: '#ef4444',
    date: '2024',
    pages: 38,
  },
  // {
  //   id: 'rapport-webservices',
  //   title: 'Architecture orientée services : SOAP et REST',
  //   summary:
  //     'Analyse de la conception d\'une architecture SOA combinant services SOAP et REST. Traite de l\'interopérabilité, de la documentation Swagger, des tests automatisés et du monitoring des services.',
  //   technologies: [
  //     { name: 'Java EE' },
  //     { name: 'JAX-RS' },
  //     { name: 'JAX-WS' },
  //     { name: 'Swagger' },
  //   ],
  //   caseStudySlug: 'web-services',
  //   coverColor: '#8b5cf6',
  //   date: '2024',
  //   pages: 35,
  // },
  {
    id: 'rapport-bibliotheque',
    title: 'Système de gestion de bibliothèque',
    summary:
      'Documentation technique du développement d\'une application de gestion de bibliothèque en Java. Présentation de l\'architecture MVC, de l\'interface JavaFX et de la gestion des données avec MySQL.',
    technologies: [
      { name: 'Java' },
      { name: 'JavaFX' },
      { name: 'MySQL' },
      { name: 'JDBC' },
    ],
    caseStudySlug: 'bibliotheque',
    coverColor: '#10b981',
    date: '2023',
    pages: 30,
  },
  {
    id: 'rapport-espacenumerique',
    title: 'Espace Numérique : Suivi Pédagogique',
    summary:
      'Rapport sur la conception et l\'implémentation d\'un espace numérique pour le suivi de la progression des cours, destiné aux chefs de département et responsables de formation.',
    technologies: [
      { name: 'React' },
      { name: 'Bootstrap' },
      { name: 'JSON' },
      { name: 'UML' },
    ],
    caseStudySlug: 'espace-numerique',
    coverColor: '#06b6d4',
    date: '2024',
    pages: 32,
  },
];
