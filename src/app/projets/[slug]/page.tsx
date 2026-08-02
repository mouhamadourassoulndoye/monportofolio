// ============================================================
// Dynamic Case Study Page — Portfolio Mouhamed Ndoye
// ============================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCaseStudy, getAllCaseStudySlugs } from '@/data/case-studies';
import { CaseStudyContent } from './case-study-content';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return { title: 'Projet introuvable' };

  return {
    title: `${caseStudy.title} — Mouhamed Ndoye`,
    description: caseStudy.context.slice(0, 160),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return <CaseStudyContent caseStudy={caseStudy} />;
}
