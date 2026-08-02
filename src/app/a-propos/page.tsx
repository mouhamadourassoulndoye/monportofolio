// ============================================================
// Page À propos — Portfolio Mouhamed Ndoye
// ============================================================

import type { Metadata } from 'next';
import { AboutContent } from './about-content';

export const metadata: Metadata = {
  title: 'À propos — Mouhamed Ndoye',
  description:
    'Découvrez le parcours, la vision et la philosophie d\'ingénierie logicielle de Mouhamed Ndoye, Software Engineer et étudiant en Master 2 Génie Logiciel.',
};

export default function AboutPage() {
  return <AboutContent />;
}
