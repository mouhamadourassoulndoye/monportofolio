// ============================================================
// Étude de cas : Big Data — Portfolio Mouhamed Ndoye
// ============================================================

import { CaseStudy } from '@/types';

export const bigDataCaseStudy: CaseStudy = {
  slug: 'big-data',
  title: 'Pipeline Big Data',
  subtitle: 'De la collecte web à la visualisation de données massives',
  heroImage: '/images/projects/bigdata.webp',
  context:
    'Ce projet s\'inscrit dans le cadre de l\'enseignement en ingénierie des données du Master 2. L\'objectif était de concevoir un pipeline complet de traitement de données massives, de la collecte automatisée jusqu\'à la visualisation des résultats, en utilisant des technologies adaptées à chaque étape.',
  problematic:
    'Comment construire un pipeline de données de bout en bout capable de collecter, transformer, stocker et analyser de grands volumes de données provenant de sources web, tout en garantissant la fiabilité, la scalabilité et la pertinence des analyses ?',
  objectives: [
    'Automatiser la collecte de données web via web scraping',
    'Transformer et nettoyer les données avec un outil ETL professionnel',
    'Stocker les données dans un système distribué adapté au Big Data',
    'Analyser les données à grande échelle avec Spark SQL',
    'Visualiser les résultats de manière claire et exploitable',
    'Documenter l\'ensemble du pipeline et les choix techniques',
  ],
  architecture: {
    description:
      'Le pipeline suit une architecture en 5 étapes séquentielles : collecte via web scraping Python, transformation ETL avec Pentaho, stockage distribué dans Apache Cassandra, traitement analytique avec Spark SQL, et visualisation avec Matplotlib.',
    diagram: [
      { id: 'scraping', label: 'Web Scraping', description: 'Collecte automatisée de données web avec Python', icon: 'Globe', color: '#3b82f6' },
      { id: 'etl', label: 'Pentaho ETL', description: 'Extraction, transformation et chargement des données', icon: 'ArrowRightLeft', color: '#10b981' },
      { id: 'cassandra', label: 'Apache Cassandra', description: 'Stockage distribué NoSQL haute disponibilité', icon: 'Database', color: '#f59e0b' },
      { id: 'spark', label: 'Spark SQL', description: 'Traitement analytique distribué à grande échelle', icon: 'Zap', color: '#ef4444' },
      { id: 'viz', label: 'Visualisation', description: 'Graphiques et tableaux de bord avec Matplotlib', icon: 'BarChart3', color: '#8b5cf6' },
    ],
  },
  technologies: [
    { name: 'Python', category: 'Scripting' },
    { name: 'BeautifulSoup', category: 'Web Scraping' },
    { name: 'Requests', category: 'HTTP' },
    { name: 'Pentaho Data Integration', category: 'ETL' },
    { name: 'Apache Cassandra', category: 'Base de données' },
    { name: 'CQL', category: 'Langage de requête' },
    { name: 'Apache Spark', category: 'Traitement distribué' },
    { name: 'Spark SQL', category: 'Analyse' },
    { name: 'Matplotlib', category: 'Visualisation' },
    { name: 'Pandas', category: 'Manipulation de données' },
  ],
  challenges: [
    {
      title: 'Qualité des données collectées',
      description: 'Les données issues du web scraping étaient souvent incomplètes, incohérentes ou mal formatées.',
      solution: 'Mise en place de pipelines de nettoyage avec Pentaho : validation des types, gestion des valeurs nulles, normalisation des formats et détection des doublons.',
    },
    {
      title: 'Modélisation Cassandra',
      description: 'La modélisation NoSQL diffère fondamentalement du relationnel et nécessite de penser en termes de requêtes.',
      solution: 'Application du principe "query-first design" : conception des tables en fonction des requêtes d\'analyse prévues, avec dénormalisation contrôlée.',
    },
    {
      title: 'Performance Spark SQL',
      description: 'Les premières requêtes analytiques étaient lentes sur les grands volumes de données.',
      solution: 'Optimisation du partitionnement des données, configuration du connecteur Spark-Cassandra et utilisation du caching Spark pour les requêtes itératives.',
    },
  ],
  solutions: [
    'Scripts Python modulaires et réutilisables pour le web scraping',
    'Jobs Pentaho paramétrables avec gestion des erreurs et logging',
    'Schéma Cassandra optimisé pour les requêtes analytiques',
    'Requêtes Spark SQL pour l\'agrégation et l\'analyse statistique',
    'Visualisations claires avec Matplotlib et Pandas',
  ],
  results: [
    'Pipeline fonctionnel de bout en bout, de la collecte à la visualisation',
    'Collecte automatisée de plusieurs milliers d\'enregistrements',
    'Transformation et nettoyage réduisant les données invalides de plus de 90%',
    'Stockage distribué permettant une scalabilité horizontale',
    'Analyses statistiques révélant des tendances exploitables',
    'Visualisations claires facilitant la prise de décision',
  ],
  skills: [
    'Web Scraping et collecte de données',
    'ETL et transformation de données',
    'Bases de données NoSQL distribuées',
    'Traitement distribué avec Spark',
    'Visualisation de données',
    'Architecture de pipeline de données',
  ],
  perspectives: [
    'Ajout d\'Apache Kafka pour le streaming en temps réel',
    'Orchestration avec Apache Airflow',
    'Intégration d\'un outil de BI (Tableau, Power BI)',
    'Déploiement sur un cluster Kubernetes',
    'Ajout de modèles de machine learning pour l\'analyse prédictive',
  ],
  report: '/rapports/rapportMouhamed_Ndoye_202001936.pdf',
  color: '#f59e0b',
};
