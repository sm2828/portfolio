import { motion } from 'framer-motion';
import { skills } from '../data/projects';

const skillColors: Record<string, string> = {
  'React': '#00f5ff',
  'TypeScript': '#3178c6',
  'JavaScript': '#f7df1e',
  'Node.js': '#68a063',
  'Firebase': '#ff9900',
  'Supabase': '#3ecf8e',
  'REST APIs': '#7b2fff',
  'Git': '#f05032',
  'API Integration': '#00f5ff',
  'UI Design': '#ff2d78',
  'TailwindCSS': '#38bdf8',
  'Technical Docs': '#94a3b8',
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3">03 / SKILLS</p>
          <div className="flex items-end gap-6">
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-text">
              STACK
            </h2>
            <div className="hidden md:block h-px flex-1 bg-white/5 mb-4" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Skill bars */}
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm text-text">{skill.name}</span>
                  <span className="font-mono text-xs text-muted">{skill.level}%</span>
                </div>
                <div className="h-px bg-white/5 relative overflow-visible">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      transformOrigin: 'left',
                      width: `${skill.level}%`,
                      height: '1px',
                      backgroundColor: skillColors[skill.name] || '#00f5ff',
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 + 1.2 }}
                    style={{
                      position: 'absolute',
                      top: -3,
                      left: `${skill.level}%`,
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      backgroundColor: skillColors[skill.name] || '#00f5ff',
                      transform: 'translateX(-50%)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Skill tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex flex-wrap gap-3 content-start"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.1, y: -4 }}
                className="relative group cursor-default"
                data-hover
              >
                <div
                  className="px-4 py-2 glass border transition-all duration-300"
                  style={{
                    borderColor: `${skillColors[skill.name] || '#00f5ff'}30`,
                  }}
                >
                  <span
                    className="font-mono text-xs relative z-10"
                    style={{ color: skillColors[skill.name] || '#00f5ff' }}
                  >
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Decorative lines */}
            <div className="absolute -right-8 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
