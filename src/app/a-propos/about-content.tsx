'use client';

// ============================================================
// About Content — Portfolio Mouhamed Ndoye
// ============================================================

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/section-header';
import { WorkflowSection } from '@/components/sections/workflow-section';
import { PageTransition } from '@/components/layout/page-transition';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Code, Target, Lightbulb, Users, BookOpen, Rocket } from 'lucide-react';

const values = [
  {
    icon: Code,
    title: 'Rigueur technique',
    description: 'Chaque solution repose sur des principes solides : clean code, design patterns, tests et documentation. La qualité du code n\'est pas négociable.',
  },
  {
    icon: Target,
    title: 'Orientation résultat',
    description: 'Un logiciel n\'a de valeur que s\'il résout un problème concret. Je privilégie toujours l\'impact fonctionnel et l\'expérience utilisateur.',
  },
  {
    icon: Lightbulb,
    title: 'Curiosité intellectuelle',
    description: 'La technologie évolue constamment. Je consacre du temps chaque semaine à explorer de nouvelles technologies et à approfondir mes connaissances.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Les meilleurs logiciels naissent du travail d\'équipe. Je valorise la communication claire, les code reviews et le partage de connaissances.',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Un code bien documenté est un code qui survit à son auteur. Je considère la documentation comme partie intégrante du développement.',
  },
  {
    icon: Rocket,
    title: 'Amélioration continue',
    description: 'Chaque projet est une opportunité d\'apprentissage. Je cherche constamment à améliorer mes processus, mes outils et mes compétences.',
  },
];

export function AboutContent() {
  const { ref: introRef, isInView: introInView } = useScrollAnimation();
  const { ref: valuesRef, isInView: valuesInView } = useScrollAnimation();

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="À propos"
            title="Qui suis-je ?"
            align="left"
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Image */}
            <motion.div
              className="lg:col-span-4 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={introInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-2xl border-4 border-violet-100 dark:border-card shadow-2xl shadow-violet-200/50 dark:shadow-none">
                <img
                  src="/images/profile-hero.jpg"
                  alt="Mouhamed Ndoye"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-full opacity-50" />
            </motion.div>

            {/* Content */}
            <motion.div
              ref={introRef}
              className="lg:col-span-8 space-y-6"
              initial="hidden"
              animate={introInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-lg text-foreground leading-relaxed">
                Je suis <strong>Mouhamed Ndoye</strong>, ingénieur logiciel en formation, actuellement en Master 2 Génie Logiciel. Mon parcours académique m&apos;a permis de construire une expertise solide dans la conception d&apos;applications web, l&apos;architecture logicielle et l&apos;ingénierie des données.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-base text-muted-foreground leading-relaxed">
                Ce qui me distingue, c&apos;est ma capacité à aborder chaque projet comme un problème d&apos;ingénierie : je commence par comprendre le contexte et les contraintes, puis je conçois une architecture adaptée avant d&apos;écrire la première ligne de code. Cette approche méthodique me permet de produire des solutions qui sont non seulement fonctionnelles, mais aussi maintenables et évolutives.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-base text-muted-foreground leading-relaxed">
                À travers mes projets académiques — marketplace e-commerce, pipeline Big Data, administration Oracle — j&apos;ai développé une vision complète du cycle de vie logiciel, de l&apos;analyse des besoins jusqu&apos;au déploiement en production. Chaque projet a renforcé ma conviction que la qualité logicielle repose sur trois piliers : une architecture bien pensée, un code propre et une documentation rigoureuse.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-base text-muted-foreground leading-relaxed">
                Mon ambition est de poursuivre en recherche doctorale pour approfondir les problématiques d&apos;architecture logicielle et de qualité du code, tout en contribuant à la formation de la prochaine génération d&apos;ingénieurs en tant qu&apos;enseignant-chercheur.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 lg:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Philosophie"
            title="Mes valeurs d'ingénieur"
            description="Les principes qui guident mon approche du développement logiciel."
          />

          <motion.div
            ref={valuesRef}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-border/80 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/80 mb-4">
                  <value.icon className="h-5 w-5 text-foreground/70" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <WorkflowSection />
    </PageTransition>
  );
}
