// ============================================================
// Page Parcours — Portfolio Mouhamed Ndoye
// ============================================================

import type { Metadata } from 'next';
import { ParcoursContent } from './parcours-content';

export const metadata: Metadata = {
  title: 'Parcours — Mouhamed Ndoye',
  description:
    'Parcours académique et professionnel de Mouhamed Ndoye : Licence, Master, projets d\'envergure et ambition doctorale.',
};

export default function ParcoursPage() {
  return <ParcoursContent />;
}
