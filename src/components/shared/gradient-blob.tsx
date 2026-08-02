'use client';

// ============================================================
// Gradient Blob — Animated background blobs, light-mode optimized
// ============================================================

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientBlobProps {
  className?: string;
}

export function GradientBlob({ className }: GradientBlobProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none -z-10', className)}>
      <motion.div
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-violet-300/30 via-blue-300/20 to-transparent dark:from-violet-500/25 dark:via-blue-500/15 dark:to-transparent blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-300/25 via-indigo-300/20 to-transparent dark:from-blue-500/20 dark:via-indigo-500/15 dark:to-transparent blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-b from-indigo-200/15 via-violet-200/10 to-transparent dark:from-indigo-500/8 dark:via-violet-500/5 dark:to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {/* Fourth blob — warm accent */}
      <motion.div
        className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-amber-200/15 via-rose-200/10 to-transparent dark:from-amber-500/8 dark:via-rose-500/5 dark:to-transparent blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  );
}
