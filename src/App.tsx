import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollProgress from './components/ScrollProgress';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';


export default function App() {

  return (
    <div className="relative bg-bg min-h-screen noise-overlay">
      {(
        <>
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
