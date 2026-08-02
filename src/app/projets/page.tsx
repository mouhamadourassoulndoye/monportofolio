// ============================================================
// Page Projets — Portfolio Mouhamed Ndoye
// ============================================================

import type { Metadata } from 'next';
import { ProjectsContent } from './projects-content';

export const metadata: Metadata = {
  title: 'Projets — Mouhamed Ndoye',
  description:
    'Découvrez les projets de Mouhamed Ndoye : Marketplace, Pipeline Big Data, Oracle Database, Web Services et applications React.',
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
