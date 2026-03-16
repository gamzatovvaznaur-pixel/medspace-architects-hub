import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-blueprint.jpg";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const stats = [
  { value: "120 дн.", label: "среднее время готовности одного проекта", code: "TIME" },
  { value: "84%", label: "прохождение государственных экспертиз с 1 раза", code: "DEF" },
  { value: "45 дн.", label: "средний срок поставки из Шэньчжэня", code: "LOG" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-[12vh] px-6 md:px-12 overflow-hidden">
      {/* Blueprint background */}
      <div className="absolute inset-0 blueprint-grid" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.1 }}
          className="mb-8"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Медицинское проектирование & поставки
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground max-w-5xl mb-8 leading-[1.05] tracking-tight"
        >
          Проектируем технологически сложные медицинские центры
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed text-pretty"
        >
          От разработки рабочей документации до ввода в эксплуатацию. Прямые поставки оборудования и мебели из Китая. Полное согласование в ГАСН.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity text-center"
          >
            Запросить консультацию
          </a>
          <Link
            to="/services"
            className="inline-block border border-border text-foreground px-10 py-4 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-secondary transition-colors text-center"
          >
            Наши услуги
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.code}
              className={`py-8 ${i > 0 ? "md:border-l border-t md:border-t-0 border-border" : ""} ${i > 0 ? "md:pl-8" : ""}`}
            >
              <span className="font-mono text-[10px] tracking-widest text-primary mb-2 block">
                {stat.code}
              </span>
              <span className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {stat.value}
              </span>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
