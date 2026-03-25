import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";
import heroImg from "@/assets/hero-blueprint.jpg";

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

const HeroSection = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <section className="relative min-h-screen flex items-end pb-12 pt-24 md:pb-20 md:pt-32 px-6 md:px-12 overflow-hidden dark-section">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,10%)] via-[hsl(220,15%,10%)/80%] to-transparent" />

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
          className="font-mono text-xs tracking-widest uppercase text-accent mb-6 block"
        >
          Медицинское проектирование & поставки
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white max-w-5xl mb-6 leading-[1.05] tracking-tight"
        >
          Проектируем технологически сложные медицинские центры
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.35 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed"
        >
          От разработки рабочей документации до ввода в эксплуатацию. Прямые поставки оборудования и мебели из Китая. Полное согласование в ГАСН.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <button
            onClick={openCallback}
            className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity text-center"
          >
            Заказать звонок
          </button>
          <Link
            to="/services"
            className="inline-block border border-white/20 text-white px-10 py-4 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-white/10 transition-colors text-center"
          >
            Наши услуги
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10"
        >
          {[
            { value: "Полный цикл", label: "от концепции до ввода в эксплуатацию" },
            { value: "Высокий %", label: "прохождение экспертиз с первого раза" },
            { value: "Прямые поставки", label: "оборудование и мебель из Китая" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-8 ${i > 0 ? "md:border-l border-t md:border-t-0 border-white/10 md:pl-8" : ""}`}
            >
              <span className="text-2xl md:text-3xl font-display font-bold text-white">
                {stat.value}
              </span>
              <p className="text-sm text-white/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
