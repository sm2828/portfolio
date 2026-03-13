import { motion } from 'framer-motion';
import { FaTelegramPlane } from "react-icons/fa";
import { Mail, Linkedin, Twitter, ArrowUpRight, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3">05 / CONTACT</p>
          <div className="flex items-end gap-6">
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-text">
              Reach Out
            </h2>
            <div className="hidden md:block h-px flex-1 bg-white/5 mb-4" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-xl text-text/70 leading-relaxed mb-8 max-w-md">
              I'm currently looking for a full-time position as a full-stack developer or anything that fits my skillset. 
              <br />
              <br />
              Drop me a message — I respond very quickly.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:seannevdev@proton.me"
                data-hover
                className="group flex items-center gap-4 p-5 glass border border-white/5 hover:border-accent/30 transition-all duration-300"
              >
                <div className="p-2.5 border border-white/10 group-hover:border-accent/30 text-muted group-hover:text-accent transition-all duration-300">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted mb-0.5">EMAIL</p>
                  <p className="font-body text-sm text-text group-hover:text-accent transition-colors">seannevdev@proton.me</p>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-muted group-hover:text-accent transition-colors" />
              </a>

              <a
                href="https://linkedin.com/in/sean-devs"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group flex items-center gap-4 p-5 glass border border-white/5 hover:border-accent2/30 transition-all duration-300"
              >
                <div className="p-2.5 border border-white/10 group-hover:border-accent2/30 text-muted group-hover:text-accent2 transition-all duration-300">
                  <Linkedin size={16} />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted mb-0.5">LINKEDIN</p>
                  <p className="font-body text-sm text-text group-hover:text-accent2 transition-colors">linkedin.com/in/sean-devs</p>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-muted group-hover:text-accent2 transition-colors" />
              </a>
              <a
                href="https://x.com/monadbull"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group flex items-center gap-4 p-5 glass border border-white/5 hover:border-sky-400/30 transition-all duration-300"
              >
                <div className="p-2.5 border border-white/10 group-hover:border-sky-400/30 text-muted group-hover:text-sky-400 transition-all duration-300">
                  <Twitter size={16} />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted mb-0.5">X</p>
                  <p className="font-body text-sm text-text group-hover:text-sky-400 transition-colors">x.com/monadbull</p>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-muted group-hover:text-sky-400 transition-colors" />
              </a>
              <a
                href="https://t.me/monadbull"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group flex items-center gap-4 p-5 glass border border-white/5 hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="p-2.5 border border-white/10 group-hover:border-emerald-400/30 text-muted group-hover:text-emerald-400 transition-all duration-300">
                  <Send size={16} />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted mb-0.5">Telegram</p>
                  <p className="font-body text-sm text-text group-hover:text-emerald-400 transition-colors">@monadbull</p>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-muted group-hover:text-emerald-400 transition-colors" />
              </a>

            </div>
          </motion.div>

          {/* Right — big CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-xs text-muted">
            © 2026 Sean Neville. Built with React + TypeScript + Vite.
          </p>
          <p className="font-mono text-xs text-muted">
            Designed & developed by <span className="text-accent">SN</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
