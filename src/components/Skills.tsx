import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiPython,
} from 'react-icons/si';
import { FiCloud, FiShare2, FiFileText, FiCpu } from 'react-icons/fi';

type SkillItem = {
  name: string;
  icon: IconType;
};

type SkillCategory = {
  name: string;
  accent: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    accent: '#00f5ff',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TailwindCSS', icon: SiTailwindcss },
    ],
  },
  {
    name: 'Backend',
    accent: '#7b2fff',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'REST APIs', icon: FiCloud },
      { name: 'API Integration', icon: FiShare2 },
    ],
  },
  {
    name: 'Backend Services',
    accent: '#3ecf8e',
    skills: [
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Supabase', icon: SiSupabase },
    ],
  },
  {
    name: 'Development',
    accent: '#f05032',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'Technical Documentation', icon: FiFileText },
    ],
  },
  {
    name: 'Other',
    accent: '#ff2d78',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'AI-Assisted Development', icon: FiCpu },
    ],
  },
];

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.05 }}
              className="glass border border-white/5 p-5 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-muted">
                  {category.name}
                </h3>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: category.accent }}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-accent/40 transition-all duration-200"
                      data-hover
                    >
                      <span className="text-accent/80 group-hover:text-accent">
                        <Icon size={14} />
                      </span>
                      <span className="font-mono text-[11px] text-muted group-hover:text-text">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
