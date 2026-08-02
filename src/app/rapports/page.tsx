// ============================================================
// Page Rapports — Portfolio Mouhamed Ndoye
// ============================================================

import type { Metadata } from 'next';
import { RapportsContent } from './rapports-content';

export const metadata: Metadata = {
  title: 'Rapports Techniques — Mouhamed Ndoye',
  description:
    'Bibliothèque de rapports techniques et d\'études de cas détaillées rédigés par Mouhamed Ndoye sur des sujets d\'ingénierie logicielle.',
};

export default function RapportsPage() {
  return <RapportsContent />;
}
