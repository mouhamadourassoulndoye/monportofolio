'use client';

// ============================================================
// Parcours Content — Portfolio Mouhamed Ndoye
// Enriched parcours page with hero and dedicated timeline
// ============================================================

import { motion } from 'framer-motion';
import { GraduationCap, Rocket, BookOpen } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { TimelineSection } from '@/components/sections/timeline-section';
import { PageTransition } from '@/components/layout/page-transition';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const highlights = [
  {
    icon: GraduationCap,
    value: 'M2',
    label: 'Génie Logiciel',
    color: '#6366f1',
  },
  {
    icon: BookOpen,
    value: '5+',
    label: 'Années d\'études',
    color: '#3b82f6',
  },
  {
    icon: Rocket,
    value: '10+',
    label: 'Projets réalisés',
    color: '#8b5cf6',
  },
];

export function ParcoursContent() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <PageTransition>
      {/* Hero section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-300/15 to-blue-300/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-purple-300/15 to-indigo-300/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Parcours"
            title="Mon chemin académique"
            description="De la Licence en Informatique au Master Génie Logiciel, un parcours guidé par la passion pour l'ingénierie logicielle et l'ambition d'aller vers le Doctorat."
          />

          {/* Highlight stats */}
          <motion.div
            ref={ref}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  className="group relative flex flex-col items-center p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-border/60 transition-all duration-500 text-center"
                  whileHover={{ y: -4 }}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${item.color}08, transparent 70%)`,
                    }}
                  />
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl mb-3"
                    style={{
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}20`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground font-medium mt-1">{item.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <TimelineSection />
    </PageTransition>
  );
}
