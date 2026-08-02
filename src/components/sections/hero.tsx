'use client';

// ============================================================
// Hero Section — Portfolio Mouhamed Ndoye
// Premium hero with large portrait photo, animated gradients,
// typing effect, floating particles and count-up stats
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Code, Server, Database, Cloud, Layout, Blocks } from 'lucide-react';
import { GradientBlob } from '@/components/shared/gradient-blob';
import { GridBackground } from '@/components/shared/grid-background';
import { siteConfig } from '@/data/site-config';

const orbitIcons = [
  { icon: Code, label: 'Java', delay: 0 },
  { icon: Layout, label: 'React', delay: 1.5 },
  { icon: Server, label: 'Spring', delay: 3 },
  { icon: Database, label: 'SQL', delay: 4.5 },
  { icon: Cloud, label: 'Docker', delay: 6 },
  { icon: Blocks, label: 'API', delay: 7.5 },
];

const stats = [
  { value: '10+', label: 'Projets' },
  { value: 'M2', label: 'Génie Logiciel' },
  { value: 'Full Stack', label: 'Java & React' },
];

const titles = [
  'Développeur Full Stack Java & React',
  'Ingénieur Logiciel',
  'Architecte Microservices',
];

// Floating particles for premium background effect
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-violet-400/20 to-blue-400/20"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -(Math.random() * 100 + 50)],
            x: [0, (Math.random() - 0.5) * 60],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Typing effect hook
function useTypingEffect(texts: string[], typingSpeed = 60, deletingSpeed = 30, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

export function Hero() {
  const typedTitle = useTypingEffect(titles, 50, 25, 2500);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden noise-overlay"
      onMouseMove={handleMouseMove}
    >
      <GridBackground />
      <GradientBlob />
      <FloatingParticles />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 dark:border-border/50 dark:bg-muted/50 px-4 py-1.5 text-xs font-medium text-violet-700 dark:text-muted-foreground backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Disponible pour de nouvelles opportunités
              </span>
            </motion.div>

            {/* Name */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {siteConfig.author.name.split(' ').map((word, i) => (
                  <span key={i} className="block">
                    {i === 0 ? word : (
                      <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                        {word}
                      </span>
                    )}
                  </span>
                ))}
              </motion.h1>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Typing effect title */}
                <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-foreground/90 to-foreground/70 bg-clip-text text-transparent h-8 sm:h-9">
                  {typedTitle}
                  <span className="inline-block w-[2px] h-5 sm:h-6 bg-violet-500 ml-0.5 animate-pulse align-text-bottom" />
                </p>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">
                  {siteConfig.author.subtitle}
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {siteConfig.author.bio}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/projets"
                className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white overflow-hidden transition-all duration-300 active:scale-[0.98] shadow-lg shadow-violet-500/25 magnetic-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 transition-all duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <span className="relative">Explorer mes projets</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="/cv_de_mouhamed_ndoye.pdf"
                download="CV_Mouhamed_Ndoye.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-violet-200 dark:border-border/50 bg-white/60 dark:bg-card/50 backdrop-blur-sm px-6 py-3 text-sm font-medium text-foreground hover:bg-violet-50/80 dark:hover:bg-muted/50 hover:border-violet-300 dark:hover:border-border transition-all duration-300 active:scale-[0.98] magnetic-hover"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Télécharger le CV
              </a>
            </motion.div>

            {/* Stats with animated reveal */}
            <motion.div
              className="flex gap-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="space-y-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-500 dark:to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile Photo — Full portrait with decorative elements */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: springX, y: springY }}
          >
            <div className="relative w-80 sm:w-[360px] lg:w-[420px]">
              {/* Decorative gradient background shape */}
              <motion.div
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-400/30 via-violet-400/20 to-purple-400/30 dark:from-blue-500/20 dark:via-violet-500/15 dark:to-purple-500/20 blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Animated border ring */}
              <motion.div
                className="absolute -inset-[3px] rounded-[2rem] bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 opacity-60"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />

              {/* Photo container */}
              <div className="relative rounded-[calc(2rem-3px)] overflow-hidden shadow-2xl shadow-violet-500/20 glow-pulse">
                <div className="aspect-[3/4]">
                  <Image
                    src="/images/avatar.jpg"
                    alt={siteConfig.author.name}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 420px"
                  />
                </div>
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                {/* Decorative light shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-4 -right-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-200 dark:border-border/50 bg-white/90 dark:bg-card/80 backdrop-blur-md shadow-xl"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Code className="h-6 w-6 text-violet-600 dark:text-violet-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 dark:border-border/50 bg-white/90 dark:bg-card/80 backdrop-blur-md shadow-xl"
                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <Server className="h-5 w-5 text-blue-600 dark:text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-6 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-200 dark:border-border/50 bg-white/90 dark:bg-card/80 backdrop-blur-md shadow-xl"
                animate={{ y: [0, -6, 0], x: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <Database className="h-5 w-5 text-purple-600 dark:text-purple-500" />
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 -right-5 flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-200 dark:border-border/50 bg-white/90 dark:bg-card/80 backdrop-blur-md shadow-xl"
                animate={{ y: [0, 6, 0], x: [0, 3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <Layout className="h-5 w-5 text-indigo-600 dark:text-indigo-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — improved with mouse wheel animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Défiler</span>
          <div className="w-5 h-9 rounded-full border-2 border-violet-300/60 dark:border-muted-foreground/30 flex items-start justify-center p-1.5 backdrop-blur-sm">
            <motion.div
              className="w-1 h-2 rounded-full bg-gradient-to-b from-violet-500 to-blue-500"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
