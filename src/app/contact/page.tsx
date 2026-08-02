// ============================================================
// Page Contact — Portfolio Mouhamed Ndoye
// ============================================================

import type { Metadata } from 'next';
import { ContactContent } from './contact-content';

export const metadata: Metadata = {
  title: 'Contact — Mouhamed Ndoye',
  description:
    'Contactez Mouhamed Ndoye pour des opportunités de collaboration, recrutement ou projets en ingénierie logicielle.',
};

export default function ContactPage() {
  return <ContactContent />;
}
