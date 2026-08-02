'use client';

// ============================================================
// Skill Badge — Portfolio Mouhamed Ndoye
// ============================================================

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
}

export function SkillBadge({
  name,
  className,
  variant = 'default',
}: SkillBadgeProps) {
  return (
    <motion.span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200',
        variant === 'default' &&
          'bg-muted/80 text-muted-foreground border border-border/30 hover:bg-muted hover:border-border/50',
        variant === 'outline' &&
          'border border-border/50 text-muted-foreground hover:bg-muted/50',
        variant === 'ghost' &&
          'text-muted-foreground hover:bg-muted/50',
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.span>
  );
}
