'use client';

// ============================================================
// Animated Card — Portfolio Mouhamed Ndoye
// Carte avec hover 3D tilt, glassmorphism et gradient glow
// ============================================================

import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function AnimatedCard({
  children,
  className,
  glowColor = '120, 119, 198',
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Smooth springs for tilt
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);

    // Calculate tilt angles (subtle — max 4 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set((y - centerY) / centerY * -4);
    rotateY.set((x - centerX) / centerX * 4);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const background = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(${glowColor}, 0.08),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-shadow duration-300 hover:border-border hover:shadow-xl',
        className
      )}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      {/* Mouse-tracking glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />
      {/* Inner highlight for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none z-0" />
      <div className="relative z-10" style={{ transform: 'translateZ(0)' }}>{children}</div>
    </motion.div>
  );
}
