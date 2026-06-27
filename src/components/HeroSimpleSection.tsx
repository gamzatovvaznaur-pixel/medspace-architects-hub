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
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-white/90" />

      <div className="relative max-w-4xl mx-auto w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6"
        >
          Проектирование медицинских учреждений с полным циклом сопровождения
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.15 }}
          className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Специализируемся на медицинских учреждениях от 400 м² класса комфорт+ и выше.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.25 }}
          className="text-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          От замера помещения до получения медицинской лицензии — проектирование, СЭЗ, согласование в Росздравнадзоре и Минздраве, авторский надзор.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={openCallback}
            className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Обсудить проект
          </button>
          <a
            href="tel:+79182633627"
            className="border border-foreground/20 text-foreground px-10 py-4 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-foreground/5 transition-colors text-center"
          >
            Позвонить
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSimpleSection;
