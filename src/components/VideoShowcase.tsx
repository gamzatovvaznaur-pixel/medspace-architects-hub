import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const VideoShowcase = () => {
  return (
    <section className="py-24 px-6 md:px-12 dark-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-center mb-12"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Видео
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-4">
            Архитектура зрения
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Видеообзор одного из наших реализованных проектов — от концепции до воплощения
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.15 }}
          className="rounded-2xl overflow-hidden aspect-video bg-black/40 border border-white/10"
        >
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            poster=""
          >
            <source src="/videos/architecture-vision.mp4" type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="tel:+79182633627"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" /> Обсудить ваш проект
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
