'use client';

// ============================================================
// Rapports Content — Portfolio Mouhamed Ndoye
// ============================================================

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, ArrowRight, Download, BookOpen } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { AnimatedCard } from '@/components/shared/animated-card';
import { SkillBadge } from '@/components/shared/skill-badge';
import { PageTransition } from '@/components/layout/page-transition';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { reports } from '@/data/reports';

export function RapportsContent() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <PageTransition>
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Documentation"
            title="Rapports techniques"
            description="Une sélection d'études de cas détaillées et de rapports techniques rédigés durant mon parcours académique."
          />

          <motion.div
            ref={ref}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {reports.map((report) => (
              <motion.div key={report.id} variants={fadeInUp} className="flex">
                <AnimatedCard
                  className="flex flex-col w-full"
                  glowColor={report.coverColor.replace('#', '').match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(', ')}
                >
                  {/* Cover */}
                  <div
                    className="relative h-48 flex flex-col items-center justify-center p-6 text-center border-b border-border/50"
                    style={{
                      background: `linear-gradient(135deg, ${report.coverColor}15, ${report.coverColor}05)`,
                    }}
                  >
                    <BookOpen
                      className="h-12 w-12 mb-4 opacity-80"
                      style={{ color: report.coverColor }}
                    />
                    <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                      {report.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                        {report.date}
                      </span>
                      {report.pages && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {report.pages} pages
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                      {report.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {report.technologies.slice(0, 3).map((tech) => (
                        <SkillBadge key={tech.name} name={tech.name} variant="outline" />
                      ))}
                      {report.technologies.length > 3 && (
                        <span className="text-[10px] text-muted-foreground px-1 py-0.5">
                          +{report.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/30">
                      {report.caseStudySlug && (
                        <Link
                          href={`/projets/${report.caseStudySlug}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-foreground text-background px-4 py-2 text-xs font-medium hover:opacity-90 transition-all duration-200"
                        >
                          Étude de cas
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                      <button
                        disabled={!report.pdfUrl}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        title={!report.pdfUrl ? "PDF bientôt disponible" : "Télécharger le PDF"}
                      >
                        <Download className="h-3 w-3" />
                        PDF
                      </button>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
