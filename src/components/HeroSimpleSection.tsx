import { motion } from "framer-motion";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";
import heroImg from "@/assets/hero-blueprint.jpg";

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HeroSimpleSection = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <section className="relative min-h-screen flex items-end pb-16 pt-28 md:pb-24 md:pt-36 px-6 md:px-12 overflow-hidden dark-section">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,10%)] via-[hsl(220,15%,10%)/85%] to-transparent" />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.05 }}
          className="font-mono text-xs tracking-widest uppercase text-accent mb-8 block"
        >
          Проектирование медицинских учреждений
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white max-w-5xl mb-8 leading-[1.05] tracking-tight"
        >
          Проектируем клиники так, чтобы вам не пришлось разбираться в этом самим
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.3 }}
          className="text-lg md:text-xl text-white/65 max-w-2xl mb-12 leading-relaxed"
        >
          Берём на себя весь путь — от первой концепции до получения лицензии. Объясняем человеческим языком, отвечаем на вопросы, остаёмся на вашей стороне до конца.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={openCallback}
            className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Обсудить проект
          </button>
          <button
            onClick={() => scrollTo("full-cycle")}
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
