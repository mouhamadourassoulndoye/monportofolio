'use client';

// ============================================================
// Case Study Hero — Portfolio Mouhamed Ndoye
// ============================================================

import { motion } from 'framer-motion';
import { ArrowLeft, Github, PlayCircle, FileText } from 'lucide-react';
import Link from 'next/link';
import { SkillBadge } from '@/components/shared/skill-badge';
import { Technology } from '@/types';

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  color: string;
  technologies: Technology[];
  github?: string;
  demoVideo?: string;
  report?: string;
}

export function CaseStudyHero({
  title,
  subtitle,
  color,
  technologies,
  github,
  demoVideo,
  report,
}: CaseStudyHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${color}08, ${color}03, transparent)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Decorative */}
      <motion.div
        className="absolute top-20 right-20 h-96 w-96 rounded-full blur-3xl opacity-20"
        style={{ background: color }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-16 pt-32 w-full">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Retour aux projets
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.p>

        {/* Technologies */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {technologies.map((tech) => (
            <SkillBadge key={tech.name} name={tech.name} />
          ))}
        </motion.div>

        {/* Links */}
        {(github || demoVideo || report) && (
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-colors"
              >
                <Github className="h-4 w-4" />
                Code Source
              </a>
            )}
            {demoVideo && (
              <a
                href={demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                <PlayCircle className="h-4 w-4" />
                Démo Vidéo
              </a>
            )}
            {report && (
              <a
                href={report}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                <FileText className="h-4 w-4" />
                Voir le Rapport
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
