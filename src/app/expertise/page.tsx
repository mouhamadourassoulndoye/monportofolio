// ============================================================
// Page Expertise — Portfolio Mouhamed Ndoye
// ============================================================

import type { Metadata } from 'next';
import { ExpertiseContent } from './expertise-content';

export const metadata: Metadata = {
  title: 'Expertise — Mouhamed Ndoye',
  description:
    'Domaines de compétence de Mouhamed Ndoye : Software Engineering, Backend, Frontend, Database, Data Engineering et Cloud.',
};

export default function ExpertisePage() {
  return <ExpertiseContent />;
}
