'use client';

// ============================================================
// Projects Content — Portfolio Mouhamed Ndoye
// ============================================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/shared/section-header';
import { ProjectCard } from '@/components/projects/project-card';
import { PageTransition } from '@/components/layout/page-transition';
import { projects, projectCategories } from '@/data/projects';
import { cn } from '@/lib/utils';

export function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects =
    activeCategory === 'Tous'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Projets"
            title="Mes réalisations"
            description="Chaque projet est une opportunité d'apprentissage et une démonstration de compétences concrètes."
          />

          {/* Filters */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  activeCategory === category
                    ? 'bg-foreground text-background'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
