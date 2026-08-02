// ============================================================
// Page CV — Portfolio Mouhamed Ndoye
// ============================================================

import type { Metadata } from 'next';
import { CVContent } from './cv-content';

export const metadata: Metadata = {
  title: 'CV — Mouhamed Ndoye',
  description:
    'Curriculum Vitae de Mouhamed Ndoye, Ingénieur Logiciel. Expériences, formations et compétences.',
};

export default function CVPage() {
  return <CVContent />;
}
