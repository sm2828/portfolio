import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -8, y: dx * 8 });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
      data-hover
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? 'transform 0.1s ease' : 'transform 0.5s ease',
      }}
      className={`group relative glass rounded-sm overflow-hidden cursor-pointer ${
        isFeatured ? 'col-span-1 md:col-span-2' : ''
      }`}
    >
      {/* Glow border */}
      <div
        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${project.accent}15, ${project.accent2}10)`,
          boxShadow: `inset 0 0 0 1px ${project.accent}30`,
        }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${project.accent}, transparent)`,
        }}
      />

      <div className={`p-6 md:p-8 ${isFeatured ? 'md:p-10' : ''}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="font-mono text-xs text-muted mb-2 tracking-widest">{project.category} · {project.year}</p>
            <h3
              className={`font-display tracking-wider text-text group-hover:text-white transition-colors ${
                isFeatured ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'
              }`}
            >
              {project.title}
            </h3>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            onClick={(e) => e.stopPropagation()}
            className="p-2 border border-white/10 hover:border-accent/40 hover:text-accent text-muted transition-all duration-200 flex-shrink-0"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Description */}
        <p className={`font-body text-muted group-hover:text-text/70 transition-colors leading-relaxed mb-6 ${
          isFeatured ? 'max-w-2xl text-base' : 'text-sm'
        }`}>
          {project.description}
        </p>

        {/* Featured extra visual */}
        {isFeatured && (
          <div className="mb-6 p-4 border border-white/5 rounded-sm bg-white/[0.02] relative overflow-hidden">
            <div className="flex gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            <div className="font-mono text-xs text-muted space-y-1">
              <p><span className="text-accent">const</span> <span className="text-text">room</span> = <span className="text-accent2">await</span> CollabRoom.<span className="text-green-400">create</span>{'()'}</p>
              <p><span className="text-accent">await</span> room.<span className="text-green-400">connect</span>{'({ realtime: true })'}</p>
              <p className="text-muted/60">{'// users connected: 🟢🟢🟢🟢'}</p>
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: `linear-gradient(135deg, ${project.accent}05, transparent)` }}
            />
          </div>
        )}

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 border border-white/8 text-muted group-hover:border-white/15 transition-colors"
              style={{ '--accent': project.accent } as React.CSSProperties}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom CTA */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          data-hover
          onClick={(e) => e.stopPropagation()}
          className="mt-6 inline-flex items-center gap-2 text-muted group-hover:text-accent transition-colors duration-300"
        >
          <ExternalLink size={12} />
          <span className="font-mono text-xs tracking-wider">VIEW LIVE</span>
        </a>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, rgba(255,255,255,0.01) 100%)',
        }}
      />
    </motion.div>
  );
}
