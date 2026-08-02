'use client';

// ============================================================
// Expertise Preview Section — Homepage
// ============================================================

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { AnimatedCard } from '@/components/shared/animated-card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { expertiseDomains } from '@/data/expertise';

export function ExpertisePreview() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Expertise"
          title="Domaines de compétence"
          description="Des fondamentaux du génie logiciel aux technologies cloud, une expertise construite projet après projet."
        />

        <motion.div
          ref={ref}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {expertiseDomains.map((domain, index) => {
            const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>>)[domain.icon] || LucideIcons.Circle;
            return (
              <motion.div
                key={domain.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                <AnimatedCard
                  className="p-6 h-full"
                  glowColor={domain.color.replace('#', '').match(/.{2}/g)?.map(h => parseInt(h, 16)).join(', ') || '120, 119, 198'}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{
                          background: `${domain.color}12`,
                          border: `1px solid ${domain.color}20`,
                        }}
                      >
                        <IconComponent
                          className="h-5 w-5"
                          style={{ color: domain.color }}
                        />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground capitalize">
                        {domain.level}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-2">
                        {domain.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {domain.description}
                      </p>
                    </div>

                    {/* Progress bar */}
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-full rounded-full bg-muted/80 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: domain.color }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${domain.percentage}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>

                    {/* Top 3 techs */}
                    <div className="flex flex-wrap gap-1.5">
                      {domain.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium bg-muted/50 text-muted-foreground"
                        >
                          {tech.name}
                        </span>
                      ))}
                      {domain.technologies.length > 3 && (
                        <span className="text-[10px] text-muted-foreground px-1 py-0.5">
                          +{domain.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/expertise"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Voir toutes mes compétences
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
