'use client';

// ============================================================
// Workflow Section — Portfolio Mouhamed Ndoye
// Animated vertical workflow with 8 steps
// ============================================================

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { workflowSteps } from '@/data/timeline';

export function WorkflowSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Méthodologie"
          title="Ma façon de travailler"
          description="Une approche structurée et itérative pour chaque projet, de la compréhension du besoin à l'amélioration continue."
        />

        <motion.div
          ref={ref}
          className="mt-16 max-w-2xl mx-auto"
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
          {workflowSteps.map((step, index) => {
            const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>>)[step.icon] || LucideIcons.Circle;
            return (
              <motion.div
                key={step.id}
                className="relative flex gap-6"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm z-10">
                    <IconComponent className="h-4 w-4 text-foreground/70" />
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      className="w-px flex-1 bg-gradient-to-b from-border to-border/20 min-h-[2rem]"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      style={{ transformOrigin: 'top' }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 pt-1">
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    <span className="text-muted-foreground font-normal mr-2">
                      {String(step.id).padStart(2, '0')}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
