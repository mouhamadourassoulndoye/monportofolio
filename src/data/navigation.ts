// ============================================================
// Navigation — Portfolio Mouhamed Ndoye
// ============================================================

import { NavLink } from '@/types';

export const mainNavLinks: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Projets', href: '/projets' },
  { label: 'Parcours', href: '/parcours' },
  { label: 'Rapports', href: '/rapports' },
  { label: 'CV', href: '/cv' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  navigation: mainNavLinks,
  social: [
    { label: 'GitHub', href: 'https://github.com/mouhamedndoye', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/mouhamedndoye', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:contact@mouhamedndoye.dev', icon: 'mail' },
  ],
};
