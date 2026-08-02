'use client';

// ============================================================
// Pipeline Diagram — Animated pipeline visualization
// ============================================================

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { PipelineStep } from '@/types';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

interface PipelineDiagramProps {
  steps: PipelineStep[];
  className?: string;
  title?: string;
}

export function PipelineDiagram({ steps, className, title }: PipelineDiagramProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div ref={ref} className={cn('w-full', className)}>
      {title && (
        <motion.h3
          className="text-xl font-semibold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
      )}
      <div className="relative flex flex-col items-center gap-0">
        {steps.map((step, index) => {
          const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>>)[step.icon] || LucideIcons.Circle;
          return (
            <div key={step.id} className="flex flex-col items-center">
              {/* Step */}
              <motion.div
                className="relative flex items-center gap-4 w-full max-w-md p-4 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: `${step.color}15`,
                    border: `1px solid ${step.color}25`,
                  }}
                >
                  <IconComponent className="h-5 w-5" style={{ color: step.color }} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-foreground">
                    {step.label}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <motion.div
                  className="flex flex-col items-center py-1"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scaleY: 1 }
                      : { opacity: 0, scaleY: 0 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.3,
                    ease: 'easeOut',
                  }}
                >
                  <div className="w-px h-6 bg-gradient-to-b from-border to-border/30" />
                  <motion.div
                    className="flex h-6 w-6 items-center justify-center"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                  >
                    <LucideIcons.ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </motion.div>
                  <div className="w-px h-6 bg-gradient-to-b from-border/30 to-border" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
