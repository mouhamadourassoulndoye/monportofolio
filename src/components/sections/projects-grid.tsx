'use client';

// ============================================================
// Projects Grid Section — Homepage
// ============================================================

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { ProjectCard } from '@/components/projects/project-card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { projects } from '@/data/projects';

export function ProjectsGrid() {
  const { ref, isInView } = useScrollAnimation();
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Projets"
          title="Réalisations sélectionnées"
          description="Des projets concrets qui illustrent ma capacité à concevoir des solutions logicielles complètes."
        />

        <motion.div
          ref={ref}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/projets"
            className="group inline-flex items-center gap-2 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/50 hover:border-border transition-all duration-200"
          >
            Voir tous les projets
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
