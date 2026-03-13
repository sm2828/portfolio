import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 400);
          return 100;
        }
        return p + Math.random() * 12 + 4;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 bg-bg z-[9999] flex flex-col items-center justify-center gap-8"
    >
      <div className="text-center">
        <p className="font-display text-5xl text-text tracking-widest mb-2">SN</p>
        <p className="font-mono text-xs text-muted tracking-[0.4em]">LOADING PORTFOLIO</p>
      </div>
      <div className="w-48 h-px bg-white/5 relative overflow-hidden">
        <motion.div
          style={{ scaleX: progress / 100 }}
          className="absolute inset-0 bg-accent origin-left"
        />
      </div>
      <p className="font-mono text-xs text-muted">{Math.min(100, Math.floor(progress))}%</p>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative bg-bg min-h-screen noise-overlay">
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <AnimatedBackground />
          <ScrollProgress />
          <Nav />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}
