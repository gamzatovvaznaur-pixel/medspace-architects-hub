import { motion } from "framer-motion";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";
import heroImg from "@/assets/hero-blueprint.jpg";

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

const HeroSimpleSection = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden dark-section">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,15%,10%)]/60 via-[hsl(220,15%,10%)]/80 to-[hsl(220,15%,10%)]" />

      <div className="relative max-w-4xl mx-auto w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6"
        >
          С нашим проектом — лицензия
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Всё под ключ. Осталось выполнить ряд шагов — и клиника работает.
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
            className="border border-white/20 text-white px-10 py-4 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            Как мы работаем
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSimpleSection;
