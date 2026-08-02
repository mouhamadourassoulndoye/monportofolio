'use client';

// ============================================================
// Project Card — Portfolio Mouhamed Ndoye
// Premium card with cursor-following glow, geometric patterns
// and smooth parallax hover effects
// ============================================================

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/types';
import { SkillBadge } from '@/components/shared/skill-badge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const glowBackground = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      ${project.color}12,
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      <Link href={`/projets/${project.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-border/60 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/30">
          {/* Cursor-following glow */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: glowBackground }}
          />

          {/* Image area */}
          <div
            className="relative h-48 sm:h-56 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)`,
            }}
          >
            {/* Geometric pattern background */}
            <div className="absolute inset-0">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `radial-gradient(circle, ${project.color} 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
              
              {/* Main shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="h-24 w-24 rounded-3xl rotate-12 transition-all duration-700 group-hover:rotate-6 group-hover:scale-125"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}25, ${project.color}08)`,
                    border: `1px solid ${project.color}15`,
                    boxShadow: `0 0 40px ${project.color}10`,
                  }}
                />
                <motion.div
                  className="absolute h-16 w-16 rounded-2xl -rotate-6 transition-all duration-700 group-hover:-rotate-12 group-hover:scale-125"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                    border: `1px solid ${project.color}10`,
                  }}
                />
                <motion.div
                  className="absolute h-8 w-8 rounded-lg rotate-45 transition-all duration-700 group-hover:rotate-90 group-hover:scale-150"
                  style={{
                    background: `${project.color}20`,
                  }}
                />
              </div>
            </div>

            {/* Hover gradient overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to top, ${project.color}15, transparent)`,
              }}
            />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-xl"
                style={{
                  background: `${project.color}12`,
                  color: project.color,
                  border: `1px solid ${project.color}20`,
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Arrow */}
            <div className="absolute top-4 right-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-xl border border-border/30 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors">
                {project.title}
              </h3>
              <span className="text-xs text-muted-foreground font-medium bg-muted/50 px-2 py-0.5 rounded-full">{project.date}</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.stack.slice(0, 4).map((tech) => (
                <SkillBadge key={tech.name} name={tech.name} variant="ghost" />
              ))}
              {project.stack.length > 4 && (
                <span className="inline-flex items-center px-2 py-1 text-xs text-muted-foreground font-medium">
                  +{project.stack.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
