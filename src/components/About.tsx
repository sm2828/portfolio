import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Left glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3">04 / ABOUT</p>
          <div className="flex items-end gap-6">
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-text">
              ABOUT ME
            </h2>
            <div className="hidden md:block h-px flex-1 bg-white/5 mb-4" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-lg text-text/70 leading-relaxed mb-6">
              I'm Sean, a passionate full-stack developer with a strong focus on user experience. I was born in Missouri, USA; raised in Pell City, Alabama.
              I graduated from the University of Alabama at Birmingham in December 2023 with a B.A. in Computer Science and a minor in Design/Photography. 
            </p>
            <p className="font-body text-base text-muted leading-relaxed mb-8">
              If I wasn't busy — I'd be hiking.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { label: 'Hobbies', value: 'Fortnite · Memecoins · Anime · Weight Lifting · Running' },
                { label: 'Fav. Food', value: "Pizza · Sushi · K-BBQ · McDonald's" },
                { label: 'Fun Facts', value: "I'm Engaged · I have two cats · I'm learning Mandarin" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <span className="font-mono text-xs text-muted pt-0.5 w-20 shrink-0">{item.label}</span>
                  <span className="font-mono text-xs text-text/60">—</span>
                  <span className="font-body text-sm text-text/70">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-sm overflow-hidden glow-cyan">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 font-mono text-xs text-muted">sean@portfolio ~</span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm space-y-2">
                <p className="text-muted">$ <span className="text-text">whoami</span></p>
                <p className="text-accent">Sean Neville — Full Stack Developer</p>
                <p className="text-muted mt-2">$ <span className="text-text">cat skills.txt</span></p>
                <div className="text-text/60 space-y-1 ml-0">
                  <p>→ React, TypeScript, JavaScript</p>
                  <p>→ Firebase, Supabase, Node.js</p>
                  <p>→ REST APIs, Git, UI Design</p>
                </div>
                <p className="text-muted mt-2">$ <span className="text-text">git log --oneline</span></p>
                <div className="text-text/60 space-y-1 text-xs">
                  <p><span className="text-accent2">a3f2b1c</span> feat: CollabRoom</p>
                  <p><span className="text-accent2">7d9e4f2</span> feat: Global Gmonads</p>
                  <p><span className="text-accent2">2c8a1e5</span> feat: The Gallery</p>
                </div>
                <p className="text-muted mt-2">$ <span className="cursor-blink text-text">▊</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
