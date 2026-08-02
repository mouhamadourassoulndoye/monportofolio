// ============================================================
// Index des études de cas — Portfolio Mouhamed Ndoye
// ============================================================

import { CaseStudy } from '@/types';
import { marketplaceCaseStudy } from './marketplace';
import { bigDataCaseStudy } from './big-data';
import { bibliothequeCaseStudy } from './bibliotheque';
import { oracleCaseStudy } from './oracle';
import { webServicesCaseStudy } from './web-services';
import { todoReactCaseStudy } from './todo-react';
import { calendrierReactCaseStudy } from './calendrier-react';
import { projetMrMalackCaseStudy } from './projet-mr-malack';
import { espaceNumeriqueCaseStudy } from './espace-numerique';
import { projetBloomCaseStudy } from './projet-bloom';

export const caseStudies: Record<string, CaseStudy> = {
  marketplace: marketplaceCaseStudy,
  'big-data': bigDataCaseStudy,
  bibliotheque: bibliothequeCaseStudy,
  oracle: oracleCaseStudy,
  'web-services': webServicesCaseStudy,
  'todo-react': todoReactCaseStudy,
  'calendrier-react': calendrierReactCaseStudy,
  'projet-mr-malack': projetMrMalackCaseStudy,
  'espace-numerique': espaceNumeriqueCaseStudy,
  'projet-bloom': projetBloomCaseStudy,
};

export const getCaseStudy = (slug: string): CaseStudy | undefined => {
  return caseStudies[slug];
};

export const getAllCaseStudySlugs = (): string[] => {
  return Object.keys(caseStudies);
};
