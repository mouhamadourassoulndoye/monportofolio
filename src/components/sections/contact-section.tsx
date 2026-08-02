'use client';

// ============================================================
// Contact Section — Homepage
// Premium with animated gradient border CTA and glowing socials
// ============================================================

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { fadeInUp } from '@/lib/animations';
import { siteConfig } from '@/data/site-config';

const socials = [
  { icon: Github, href: siteConfig.links.github, label: 'GitHub', color: '#6366f1', hoverBg: 'hover:bg-indigo-50 dark:hover:bg-indigo-950/30' },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn', color: '#3b82f6', hoverBg: 'hover:bg-blue-50 dark:hover:bg-blue-950/30' },
  { icon: Mail, href: `mailto:${siteConfig.links.email}`, label: 'Email', color: '#8b5cf6', hoverBg: 'hover:bg-violet-50 dark:hover:bg-violet-950/30' },
];

export function ContactSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-violet-300/10 to-blue-300/10 blur-3xl -z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Contact"
          title="Travaillons ensemble"
          description="Vous avez un projet, une opportunité ou simplement envie d'échanger ? N'hésitez pas à me contacter."
        />

        <motion.div
          ref={ref}
          className="mt-16 flex flex-col items-center gap-10"
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
          {/* Social links with color shift */}
          <motion.div variants={fadeInUp} className="flex gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm text-muted-foreground transition-all duration-300 ${social.hoverBg}`}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {/* Hover glow ring */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    boxShadow: `0 0 20px ${social.color}20, 0 0 40px ${social.color}10`,
                  }}
                />
                {/* Hover border color */}
                <div 
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current transition-all duration-300 opacity-0 group-hover:opacity-20"
                  style={{ borderColor: social.color }}
                />
                <social.icon 
                  className="h-5 w-5 transition-colors duration-300"
                  style={{ color: undefined }}
                />
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button with animated gradient border */}
          <motion.div variants={fadeInUp}>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm font-semibold text-white overflow-hidden transition-all duration-300 active:scale-[0.98] magnetic-hover shadow-lg shadow-violet-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              />
              {/* Glow behind button */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
              <Sparkles className="relative h-4 w-4" />
              <span className="relative">Me contacter</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Email display */}
          <motion.p
            variants={fadeInUp}
            className="text-sm text-muted-foreground font-medium"
          >
            {siteConfig.links.email}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
