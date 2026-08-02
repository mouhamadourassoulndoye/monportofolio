'use client';

// ============================================================
// Timeline Section — Portfolio Mouhamed Ndoye
// Animated academic and career timeline
// ============================================================

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { SkillBadge } from '@/components/shared/skill-badge';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { timelineItems } from '@/data/timeline';
import { cn } from '@/lib/utils';

export function TimelineSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Parcours"
          title="Mon chemin"
          description="De la Licence jusqu'à l'objectif Doctorat, un parcours guidé par la passion pour l'ingénierie logicielle."
        />

        <motion.div
          ref={ref}
          className="mt-16 max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {timelineItems.map((item, index) => {
            const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>>)[item.icon] || LucideIcons.Circle;
            const isGoal = item.type === 'goal';

            return (
              <motion.div
                key={item.id}
                className="relative flex gap-6 lg:gap-8"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                {/* Timeline marker */}
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border z-10 transition-all duration-300',
                      isGoal
                        ? 'border-violet-500/30 bg-violet-500/10'
                        : 'border-border/50 bg-card/80 backdrop-blur-sm'
                    )}
                  >
                    <IconComponent
                      className={cn(
                        'h-5 w-5',
                        isGoal ? 'text-violet-500' : 'text-foreground/70'
                      )}
                    />
                  </div>
                  {index < timelineItems.length - 1 && (
                    <motion.div
                      className="w-px flex-1 bg-gradient-to-b from-border to-border/10 min-h-[1rem]"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      style={{ transformOrigin: 'top' }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10 pt-1 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={cn(
                        'text-xs font-medium px-2.5 py-0.5 rounded-full',
                        isGoal
                          ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
                          : 'bg-muted/80 text-muted-foreground'
                      )}
                    >
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 font-medium mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <SkillBadge key={tag} name={tag} variant="ghost" />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
