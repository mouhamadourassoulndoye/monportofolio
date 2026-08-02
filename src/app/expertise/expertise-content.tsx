'use client';

// ============================================================
// Expertise Content — Portfolio Mouhamed Ndoye
// ============================================================

import { motion } from 'framer-motion';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { AnimatedCard } from '@/components/shared/animated-card';
import { SkillBadge } from '@/components/shared/skill-badge';
import { PageTransition } from '@/components/layout/page-transition';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { expertiseDomains } from '@/data/expertise';
import { projects } from '@/data/projects';

export function ExpertiseContent() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <PageTransition>
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Expertise"
            title="Domaines de compétence"
            description="Une expertise construite projet après projet, couvrant l'ensemble du spectre de l'ingénierie logicielle."
          />

          <motion.div
            ref={ref}
            className="mt-16 space-y-8"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {expertiseDomains.map((domain) => {
              const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>>)[domain.icon] || LucideIcons.Circle;
              const relatedProjects = projects.filter((p) =>
                domain.projects.includes(p.slug)
              );

              return (
                <motion.div key={domain.id} variants={fadeInUp}>
                  <AnimatedCard className="p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Info */}
                      <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-4">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-xl"
                            style={{
                              background: `${domain.color}12`,
                              border: `1px solid ${domain.color}20`,
                            }}
                          >
                            <IconComponent className="h-6 w-6" style={{ color: domain.color }} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {domain.title}
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs font-medium text-muted-foreground capitalize">
                                {domain.level}
                              </span>
                              <div className="w-24 h-1.5 rounded-full bg-muted/80 overflow-hidden">
                                <motion.div
                                  className="h-full rounded-full"
                                  style={{ background: domain.color }}
                                  initial={{ width: 0 }}
                                  animate={isInView ? { width: `${domain.percentage}%` } : { width: 0 }}
                                  transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground">{domain.percentage}%</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {domain.description}
                        </p>

                        {/* Technologies */}
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Technologies
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {domain.technologies.map((tech) => (
                              <SkillBadge key={tech.name} name={tech.name} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Related Projects */}
                      <div className="space-y-3">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Projets associés
                        </p>
                        <div className="space-y-2">
                          {relatedProjects.map((project) => (
                            <Link
                              key={project.slug}
                              href={`/projets/${project.slug}`}
                              className="group flex items-center gap-3 p-3 rounded-xl border border-border/30 hover:border-border/60 hover:bg-muted/30 transition-all duration-200"
                            >
                              <div
                                className="h-2 w-2 rounded-full shrink-0"
                                style={{ background: project.color }}
                              />
                              <div className="min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">
                                  {project.title}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {project.date}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
