'use client';

// ============================================================
// Scroll Progress Bar — Portfolio Mouhamed Ndoye
// Premium gradient bar with glow effect
// ============================================================

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Glow opacity increases as user scrolls more
  const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0.5, 0.8]);

  return (
    <>
      {/* Glow shadow underneath */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] origin-left z-[60] pointer-events-none"
        style={{
          scaleX,
          opacity: glowOpacity,
          background: 'linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6, #a855f7)',
          filter: 'blur(6px)',
        }}
      />
      {/* Main bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[61]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6, #a855f7)',
        }}
      />
    </>
  );
}
