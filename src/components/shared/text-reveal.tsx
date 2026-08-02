'use client';

// ============================================================
// Text Reveal — Animated text reveal
// ============================================================

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

export function TextReveal({
  children,
  className,
  as: Component = 'p',
  delay = 0,
}: TextRevealProps) {
  const { ref, isInView } = useScrollAnimation();
  const words = children.split(' ');

  return (
    <Component ref={ref as React.Ref<HTMLHeadingElement>} className={cn('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
