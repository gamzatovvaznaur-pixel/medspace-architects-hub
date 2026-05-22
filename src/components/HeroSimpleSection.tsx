import { motion } from "framer-motion";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";
import heroImg from "@/assets/hero-blueprint.jpg";

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

const HeroSimpleSection = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/85" />

      <div className="relative max-w-7xl mx-auto w-full text-center">

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-accent mb-6 block"
        >
          Делаем маленькие клиники большими
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.05] tracking-tight mb-6"
        >
          С нашим проектом — лицензия
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.3 }}
          className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Доведем до медицинской лицензии любую клинику — стоматологию 80 м², многопрофильный центр 2000 м², медицинскую лабораторию и любую другую. Давайте знакомиться!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={openCallback}
            className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Обсудить проект
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("full-cycle");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="border border-foreground/20 text-foreground px-10 py-4 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-foreground/5 transition-colors"
          >
            Как мы работаем
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSimpleSection;
