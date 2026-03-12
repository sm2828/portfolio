import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const words = ['React.', 'TypeScript.', 'Firebase.', 'learning.', 'building.', 'Solana.', 'Supabase.', 'AI.', 'memes.'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent2/5 blur-[80px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-muted border border-white/10 px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-wider text-text">
            SEAN
          </h1>
          <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-wider text-gradient">
            NEVILLE
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="font-mono text-base md:text-lg text-muted">
            I love{' '}
            <span className="text-accent">
              {displayed}
              <span className="cursor-blink">|</span>
            </span>
          </p>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="font-body text-xl md:text-2xl text-text/70 font-light max-w-2xl leading-relaxed">
            Full-stack developer specializing in modern web applications using React, TypeScript,
            and cloud backends. Strong focus on clean code, intuitive UX, and building responsive
            experiences.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <a
            href="#projects"
            data-hover
            className="group flex items-center gap-3 px-7 py-3.5 bg-accent text-bg font-mono text-sm font-medium tracking-wider hover:bg-accent/90 transition-all duration-200"
          >
            VIEW PROJECTS
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            data-hover
            className="flex items-center gap-3 px-7 py-3.5 border border-white/10 text-text font-mono text-sm tracking-wider hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            CONTACT
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap gap-8 border-t border-white/5 pt-8"
        >
          {[
            { label: 'Projects Shipped', value: '4+' },
            { label: 'Tech Stack', value: 'React / TS' },
            { label: 'Focus', value: 'Full Stack' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-accent">{stat.value}</p>
              <p className="font-mono text-xs text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
