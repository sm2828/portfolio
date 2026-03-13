import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
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
              I'm Sean; A full-stack developer with a strong focus on user experience. I was born in Missouri, USA; raised in Pell City, Alabama.
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

        </div>
      </div>
    </section>
  );
}
