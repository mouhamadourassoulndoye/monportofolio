'use client';

// ============================================================
// CV Content — Portfolio Mouhamed Ndoye
// ============================================================

import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code, Users, Mail, Phone } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { PageTransition } from '@/components/layout/page-transition';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function CVContent() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <PageTransition>
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            badge="Curriculum Vitae"
            title="Mon profil professionnel"
            description="Une vue d'ensemble de mon parcours, mes compétences et mes expériences."
          />

          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/cv_de_mouhamed_ndoye.pdf"
              download="CV_Mouhamed_Ndoye.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-all duration-200"
            >
              <Download className="h-4 w-4" />
              Télécharger la version PDF
            </a>
          </motion.div>

          <motion.div
            ref={ref}
            className="mt-16 space-y-12"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {/* Expériences */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Briefcase className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Expériences</h2>
              </div>
              <div className="space-y-8 pl-4 border-l border-border/50 ml-5">
                <div className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-blue-500 ring-4 ring-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground">Développeur Full Stack – Marketplace (Projet Personnel)</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md w-fit">2025 – 2026</span>
                  </div>
                  <p className="text-sm font-medium text-foreground/80 mb-3">Thiès, Sénégal</p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>Développement d&apos;une plateforme web d&apos;achat, de vente et d&apos;échange avec React et Spring Boot.</li>
                    <li>Mise en place d&apos;API REST sécurisées et de l&apos;authentification via Keycloak.</li>
                    <li>Conteneurisation des services avec Docker.</li>
                    <li>Technologies : Java, Spring Boot, React, Keycloak, Docker, PostgreSQL.</li>
                  </ul>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-border ring-4 ring-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground">Développeur Web – Gestion des Alumni</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md w-fit">2024 – 2025</span>
                  </div>
                  <p className="text-sm font-medium text-foreground/80 mb-3">Université Assane Seck de Ziguinchor</p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>Développement d&apos;une plateforme de gestion basée sur une architecture microservices.</li>
                    <li>Implémentation d&apos;interfaces React et d&apos;API REST.</li>
                    <li>Travail selon la méthodologie Agile Scrum.</li>
                    <li>Technologies : React, Spring Boot, API REST, Git.</li>
                  </ul>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-border ring-4 ring-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground">Développeur Big Data – Pipeline d&apos;Analyse de Données</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md w-fit">2024 – 2025</span>
                  </div>
                  <p className="text-sm font-medium text-foreground/80 mb-3">Université Assane Seck de Ziguinchor</p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>Conception d&apos;un pipeline de collecte, de traitement et d&apos;analyse de données.</li>
                    <li>Réalisation du web scraping et des traitements Big Data.</li>
                    <li>Technologies : Python, Pentaho, Cassandra, Spark SQL.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Formations */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <GraduationCap className="h-5 w-5 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Formations</h2>
              </div>
              <div className="space-y-8 pl-4 border-l border-border/50 ml-5">
                <div className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-purple-500 ring-4 ring-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground">Master 2 Informatique – Spécialité Génie Logiciel (en cours)</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md w-fit">2024 – 2025</span>
                  </div>
                  <p className="text-sm font-medium text-foreground/80 mb-2">Université Assane Seck de Ziguinchor</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-border ring-4 ring-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground">Master 1 Informatique – Spécialité Génie Logiciel</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md w-fit">2023 – 2024</span>
                  </div>
                  <p className="text-sm font-medium text-foreground/80 mb-2">Université Assane Seck de Ziguinchor</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-border ring-4 ring-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground">Licence en Mathématiques, Physique et Informatique – Spécialité Informatique</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md w-fit">2020 – 2023</span>
                  </div>
                  <p className="text-sm font-medium text-foreground/80 mb-2">Université Assane Seck de Ziguinchor</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-border ring-4 ring-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground">Baccalauréat</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md w-fit">2019 – 2020</span>
                  </div>
                  <p className="text-sm font-medium text-foreground/80 mb-2">Lycée Malick Sy de Thiès</p>
                </div>
              </div>
            </motion.div>

            {/* Compétences techniques */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 border border-green-500/20">
                  <Code className="h-5 w-5 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Compétences Techniques</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-border/50 bg-card/30">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Langages & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Python', 'TypeScript', 'JavaScript', 'Spring Boot', 'React', 'Next.js'].map(tech => (
                      <span key={tech} className="inline-flex items-center rounded-md bg-muted/50 px-2 py-1 text-xs font-medium text-muted-foreground border border-border/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 rounded-xl border border-border/50 bg-card/30">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Bases de données & Data</h3>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'Oracle DB', 'PostgreSQL', 'Cassandra', 'Spark SQL', 'Pentaho ETL'].map(tech => (
                      <span key={tech} className="inline-flex items-center rounded-md bg-muted/50 px-2 py-1 text-xs font-medium text-muted-foreground border border-border/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 rounded-xl border border-border/50 bg-card/30">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Outils & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Docker', 'Docker Compose', 'Linux', 'Vercel', 'Postman', 'Swagger'].map(tech => (
                      <span key={tech} className="inline-flex items-center rounded-md bg-muted/50 px-2 py-1 text-xs font-medium text-muted-foreground border border-border/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 rounded-xl border border-border/50 bg-card/30">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Méthodologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Agile / Scrum', 'UML', 'Design Patterns', 'Architecture Microservices', 'CI/CD'].map(tech => (
                      <span key={tech} className="inline-flex items-center rounded-md bg-muted/50 px-2 py-1 text-xs font-medium text-muted-foreground border border-border/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Références */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <Users className="h-5 w-5 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Références</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Reference 1 */}
                <div className="p-5 rounded-xl border border-border/50 bg-card/30 space-y-3 transition-colors hover:border-border">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Dr Serigne DIAGNE</h3>
                    <p className="text-xs font-medium text-muted-foreground mt-1">Chef du Département d&apos;Informatique</p>
                    <p className="text-xs text-muted-foreground">UFR des Sciences et Technologies, UASZ</p>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-border/50">
                    <a href="mailto:sdiagne@univ-zig.sn" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Mail className="h-4 w-4" />
                      sdiagne@univ-zig.sn
                    </a>
                  </div>
                </div>

                {/* Reference 2 */}
                <div className="p-5 rounded-xl border border-border/50 bg-card/30 space-y-3 transition-colors hover:border-border">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Dr Khadim DRAMÉ</h3>
                    <p className="text-xs font-medium text-muted-foreground mt-1">Enseignant-Chercheur – Dpt. Informatique</p>
                    <p className="text-xs text-muted-foreground">UFR des Sciences et Technologies, UASZ</p>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-border/50">
                    <a href="mailto:kdrame@univ-zig.sn" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Mail className="h-4 w-4" />
                      kdrame@univ-zig.sn
                    </a>
                    <a href="tel:+221774165803" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Phone className="h-4 w-4" />
                      (+221) 77 416 58 03
                    </a>
                  </div>
                </div>

                {/* Reference 3 */}
                <div className="p-5 rounded-xl border border-border/50 bg-card/30 space-y-3 transition-colors hover:border-border">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Marie NDIAYE</h3>
                    <p className="text-xs font-medium text-muted-foreground mt-1">Enseignante – Dpt. Informatique</p>
                    <p className="text-xs text-muted-foreground">UFR des Sciences et Technologies, UASZ</p>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-border/50">
                    <a href="mailto:marie.ndiaye@univ-zig.sn" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Mail className="h-4 w-4" />
                      marie.ndiaye@univ-zig.sn
                    </a>
                    <a href="tel:+221774444172" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Phone className="h-4 w-4" />
                      (+221) 77 444 41 72
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
