'use client';

// ============================================================
// Contact Content — Portfolio Mouhamed Ndoye
// ============================================================

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { ContactForm } from '@/components/forms/contact-form';
import { PageTransition } from '@/components/layout/page-transition';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { siteConfig } from '@/data/site-config';

export function ContactContent() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <PageTransition>
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Contact"
            title="Travaillons ensemble"
            description="Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question ou simplement envie de discuter, n'hésitez pas à me contacter."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Contact Info */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Informations de contact
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Remplissez le formulaire ou contactez-moi directement via mes réseaux sociaux ou mon adresse email.
                </p>
              </motion.div>

              <div className="space-y-6">
                <motion.a
                  variants={fadeInUp}
                  href={`mailto:${siteConfig.links.email}`}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/30 hover:border-border/80 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="text-base font-semibold text-foreground">{siteConfig.links.email}</p>
                  </div>
                </motion.a>

                {siteConfig.links.phone && (
                  <motion.a
                    variants={fadeInUp}
                    href={`tel:${siteConfig.links.phone}`}
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/30 hover:border-border/80 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Téléphone</p>
                      <p className="text-base font-semibold text-foreground">{siteConfig.links.phone}</p>
                    </div>
                  </motion.a>
                )}

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Localisation</p>
                    <p className="text-base font-semibold text-foreground">Thiès, Sénégal</p>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <p className="text-sm font-medium text-foreground">Réseaux sociaux</p>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/50 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/50 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl shadow-2xl"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
