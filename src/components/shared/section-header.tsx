'use client';

// ============================================================
// Section Header — Portfolio Mouhamed Ndoye
// Premium with word-by-word reveal animation and shimmer badge
// ============================================================

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  align = 'center',
}: SectionHeaderProps) {
  const { ref, isInView } = useScrollAnimation();
  const words = title.split(' ');

  return (
    <motion.div
      ref={ref}
      className={cn(
        'max-w-2xl space-y-4',
        align === 'center' && 'mx-auto text-center',
        className
      )}
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
      {badge && (
        <motion.div variants={fadeInUp}>
          <span className="relative inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 backdrop-blur-sm overflow-hidden">
            <span className="relative z-10">{badge}</span>
            {/* Shimmer effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
            />
          </span>
        </motion.div>
      )}
      {/* Title with word-by-word reveal */}
      <div className="overflow-hidden">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em] bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 40,
                  filter: 'blur(8px)',
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>
      {description && (
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
