'use client';

// ============================================================
// About Preview Section — Homepage
// Premium glassmorphism cards with gradient border hover effect
// ============================================================

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Eye, Compass, Target } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { fadeInUp } from '@/lib/animations';

const aboutItems = [
  {
    title: 'Vision',
    description:
      'Je crois qu\'un logiciel bien conçu est un investissement durable. Chaque ligne de code doit servir un objectif clair et contribuer à une architecture cohérente.',
    icon: Eye,
    gradient: 'from-blue-500 to-violet-500',
    accentColor: '#6366f1',
  },
  {
    title: 'Méthode',
    description:
      'De l\'analyse du besoin à la mise en production, j\'applique une démarche structurée : comprendre, concevoir, développer, tester et documenter.',
    icon: Compass,
    gradient: 'from-violet-500 to-purple-500',
    accentColor: '#8b5cf6',
  },
  {
    title: 'Objectif',
    description:
      'Poursuivre en recherche doctorale pour approfondir les problématiques d\'architecture logicielle tout en contribuant à former la prochaine génération d\'ingénieurs.',
    icon: Target,
    gradient: 'from-purple-500 to-pink-500',
    accentColor: '#a855f7',
  },
];

export function AboutPreview() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="À propos"
          title="Ingénieur logiciel orienté solutions"
          description="Une approche méthodique et rigoureuse de la conception logicielle."
        />

        <motion.div
          ref={ref}
          className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {aboutItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="group relative p-8 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-500 overflow-hidden"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Decorative number */}
                <span className="absolute -top-3 -right-2 text-[100px] font-bold text-foreground/[0.03] leading-none select-none pointer-events-none transition-all duration-500 group-hover:text-foreground/[0.06]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Hover glow */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />

                {/* Animated gradient border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${item.accentColor}20, transparent, ${item.accentColor}10)`,
                  }}
                />

                {/* Top gradient line */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient} origin-left`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <motion.div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/a-propos"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            En savoir plus sur mon parcours
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
