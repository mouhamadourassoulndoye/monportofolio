'use client';

// ============================================================
// Footer — Portfolio Mouhamed Ndoye
// Premium footer with animated gradient separator,
// enhanced hover effects and polished layout
// ============================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from 'lucide-react';
import { mainNavLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function Footer() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.footer
      ref={ref}
      className="relative border-t border-border/20 bg-muted/5"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      {/* Animated gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <motion.div
          className="h-full w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #6366f1, #8b5cf6, #6366f1, transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Subtle top fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-violet-500/[0.02] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-violet-500/20">
                MN
              </div>
              <div>
                <p className="text-sm font-semibold">{siteConfig.author.name}</p>
                <p className="text-xs text-muted-foreground">{siteConfig.author.title}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Concevoir des solutions logicielles fiables, performantes et évolutives.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm font-semibold text-foreground">Navigation</p>
            <nav className="grid grid-cols-2 gap-2">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group py-0.5"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-[-2px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: siteConfig.links.github, label: 'GitHub', color: '#6366f1' },
                { icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn', color: '#3b82f6' },
                { icon: Mail, href: `mailto:${siteConfig.links.email}`, label: 'Email', color: '#8b5cf6' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border/30 text-muted-foreground hover:text-foreground transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  style={{
                    // Dynamic hover styles applied via CSS
                  }}
                >
                  <social.icon className="h-4 w-4 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {siteConfig.links.email}
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.author.name}. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Conçu et développé avec
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="h-3 w-3 text-red-400 fill-red-400" />
            </motion.span>
            et passion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
