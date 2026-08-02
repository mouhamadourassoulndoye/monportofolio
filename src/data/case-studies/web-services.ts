// ============================================================
// Étude de cas : Web Services — Portfolio Mouhamed Ndoye
// ============================================================

import { CaseStudy } from '@/types';

export const webServicesCaseStudy: CaseStudy = {
  slug: 'web-services',
  title: 'Projet Web Services',
  subtitle: 'Architecture orientée services SOAP et REST',
  heroImage: '/images/projects/webservices.webp',
  context:
    'Ce projet académique du Master explore les architectures orientées services (SOA) en implémentant des services web SOAP et REST avec Java EE. Il met en pratique les standards de communication inter-applicative.',
  problematic:
    'Comment concevoir une architecture orientée services interopérable, documentée et testable, combinant les approches SOAP et REST selon les cas d\'usage ?',
  objectives: [
    'Implémenter des services web REST avec JAX-RS',
    'Implémenter des services web SOAP avec JAX-WS',
    'Documenter les APIs avec Swagger/OpenAPI',
    'Tester les services avec Postman et SoapUI',
    'Comparer les approches SOAP et REST',
  ],
  architecture: {
    description: 'Architecture SOA avec services SOAP pour les opérations critiques nécessitant un contrat strict (WSDL) et services REST pour les opérations CRUD légères et les échanges JSON.',
    diagram: [
      { id: 'rest', label: 'JAX-RS', description: 'Services REST / JSON', icon: 'ArrowRightLeft', color: '#3b82f6' },
      { id: 'soap', label: 'JAX-WS', description: 'Services SOAP / XML', icon: 'FileCode', color: '#10b981' },
      { id: 'swagger', label: 'Swagger', description: 'Documentation API', icon: 'FileText', color: '#f59e0b' },
      { id: 'postman', label: 'Postman', description: 'Tests API', icon: 'TestTube', color: '#ef4444' },
    ],
  },
  technologies: [
    { name: 'Java EE', category: 'Plateforme' },
    { name: 'JAX-RS', category: 'REST' },
    { name: 'JAX-WS', category: 'SOAP' },
    { name: 'Swagger/OpenAPI', category: 'Documentation' },
    { name: 'Postman', category: 'Test' },
    { name: 'SoapUI', category: 'Test SOAP' },
    { name: 'GlassFish', category: 'Serveur' },
  ],
  challenges: [
    {
      title: 'Interopérabilité SOAP/REST',
      description: 'Faire coexister les deux paradigmes dans une architecture cohérente.',
      solution: 'Séparation claire des couches, façade commune pour la logique métier et documentation unifiée.',
    },
    {
      title: 'Gestion des erreurs',
      description: 'Fournir des messages d\'erreur cohérents entre les services SOAP et REST.',
      solution: 'Exception mappers personnalisés pour REST et SOAP fault handlers pour les services SOAP.',
    },
  ],
  solutions: [
    'Services REST documentés avec Swagger',
    'Services SOAP avec WSDL auto-générés',
    'Collection Postman pour les tests automatisés',
    'Gestion des erreurs unifiée',
  ],
  results: [
    'Architecture SOA fonctionnelle et documentée',
    'APIs REST et SOAP testées et validées',
    'Documentation Swagger interactive',
    'Compréhension approfondie des standards de services web',
  ],
  skills: [
    'Architecture orientée services',
    'Développement de services REST',
    'Développement de services SOAP',
    'Documentation d\'APIs',
    'Tests de services web',
  ],
  perspectives: [
    'Migration vers des microservices avec Spring Cloud',
    'Intégration d\'un API Gateway',
    'Mise en place de GraphQL comme alternative',
  ],
  color: '#8b5cf6',
};
