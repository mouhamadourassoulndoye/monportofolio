'use client';

// ============================================================
// Case Study Content — Portfolio Mouhamed Ndoye
// Full case study page with all sections
// ============================================================

import { motion } from 'framer-motion';
import { Target, AlertTriangle, CheckCircle, Lightbulb, TrendingUp, Eye } from 'lucide-react';
import { CaseStudy } from '@/types';
import { CaseStudyHero } from '@/components/projects/case-study-hero';
import { PipelineDiagram } from '@/components/projects/pipeline-diagram';
import { SkillBadge } from '@/components/shared/skill-badge';
import { PageTransition } from '@/components/layout/page-transition';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

function Section({
  icon: Icon,
  title,
  children,
  color,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  children: React.ReactNode;
  color?: string;
}) {
  const { ref, isInView } = useScrollAnimation();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className="space-y-6"
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{
            background: color ? `${color}12` : undefined,
            border: color ? `1px solid ${color}20` : undefined,
          }}
        >
          <Icon className="h-5 w-5" style={{ color: color || undefined }} />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </motion.div>
      {children}
    </motion.div>
  );
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  return (
    <PageTransition>
      <CaseStudyHero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        color={caseStudy.color}
        technologies={caseStudy.technologies}
        github={caseStudy.github}
        demoVideo={caseStudy.demoVideo}
        report={caseStudy.report}
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-24 space-y-20">
        {/* Context */}
        <Section icon={Eye} title="Contexte" color={caseStudy.color}>
          <motion.p variants={fadeInUp} className="text-base text-muted-foreground leading-relaxed">
            {caseStudy.context}
          </motion.p>
        </Section>

        {/* Problematic */}
        <Section icon={AlertTriangle} title="Problématique" color="#f59e0b">
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5"
          >
            <p className="text-base text-foreground leading-relaxed italic">
              {caseStudy.problematic}
            </p>
          </motion.div>
        </Section>

        {/* Objectives */}
        <Section icon={Target} title="Objectifs" color="#3b82f6">
          <motion.ul variants={fadeInUp} className="space-y-3">
            {caseStudy.objectives.map((objective, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold mt-0.5">
                  {i + 1}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {objective}
                </p>
              </li>
            ))}
          </motion.ul>
        </Section>

        {/* Architecture */}
        {caseStudy.architecture.diagram && (
          <Section icon={Target} title="Architecture" color={caseStudy.color}>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground leading-relaxed mb-8">
              {caseStudy.architecture.description}
            </motion.p>
            <PipelineDiagram steps={caseStudy.architecture.diagram} />
          </Section>
        )}

        {/* Challenges */}
        <Section icon={AlertTriangle} title="Défis techniques" color="#ef4444">
          <div className="space-y-4">
            {caseStudy.challenges.map((challenge, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-border/50 bg-card/30 space-y-3"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {challenge.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
                <div className="pt-2 border-t border-border/30">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    Solution
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section icon={CheckCircle} title="Résultats" color="#10b981">
          <motion.ul variants={fadeInUp} className="space-y-3">
            {caseStudy.results.map((result, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {result}
                </p>
              </li>
            ))}
          </motion.ul>
        </Section>

        {/* Skills */}
        <Section icon={Lightbulb} title="Compétences développées" color="#8b5cf6">
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
            {caseStudy.skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </motion.div>
        </Section>

        {/* Perspectives */}
        <Section icon={TrendingUp} title="Perspectives" color="#06b6d4">
          <motion.ul variants={fadeInUp} className="space-y-3">
            {caseStudy.perspectives.map((perspective, i) => (
              <li key={i} className="flex items-start gap-3">
                <TrendingUp className="h-4 w-4 shrink-0 text-cyan-500 mt-1" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {perspective}
                </p>
              </li>
            ))}
          </motion.ul>
        </Section>
      </div>
    </PageTransition>
  );
}
