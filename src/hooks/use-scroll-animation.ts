// ============================================================
// Custom Hooks — useScrollAnimation
// ============================================================

'use client';

import { useRef } from 'react';
import { useInView, UseInViewOptions } from 'framer-motion';

interface UseScrollAnimationOptions extends Omit<UseInViewOptions, 'root'> {
  threshold?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
    ...options,
  });

  return { ref, isInView };
}
