import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const steps = [
  {
    phase: "01",
    title: "Производство",
    location: "Шэньчжэнь, Китай",
    description: "Размещение заказа на сертифицированных фабриках. Контроль качества на этапе производства.",
  },
  {
    phase: "02",
    title: "Контроль качества",
    location: "QC-инспекция",
    description: "Многоступенчатая проверка: входной контроль, промежуточный, финальный перед отгрузкой.",
  },
  {
    phase: "03",
    title: "Логистика",
    location: "Море / Авиа / Ж/Д",
    description: "Оптимальный маршрут доставки. Таможенное оформление, страхование груза.",
  },
  {
    phase: "04",
    title: "Монтаж",
    location: "Объект заказчика",
    description: "Профессиональный монтаж, пусконаладка, обучение персонала, гарантийное обслуживание.",
  },
];

const LogisticsSection = () => {
  return (
    <section className="py-[16vh] px-6 md:px-12 bg-card rounded-3xl mx-4 md:mx-8 border border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-20"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4 block">
            Логистика
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-background max-w-4xl">
            От фабрики в Китае — до клиники заказчика
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-primary/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.15 }}
                className="relative md:pr-8"
              >
                {/* Node */}
                <div className="w-6 h-6 rounded-full border-2 border-primary bg-foreground mb-6 flex items-center justify-center relative z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <span className="font-mono text-[10px] tracking-widest text-primary block mb-1">
                  {step.phase}
                </span>
                <h3 className="text-xl font-display font-medium text-background mb-1">
                  {step.title}
                </h3>
                <span className="font-mono text-[10px] text-primary/60 block mb-3">
                  {step.location}
                </span>
                <p className="text-sm text-background/50 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA in logistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-background/10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <p className="text-background/60 max-w-md leading-relaxed">
            Нужна консультация по логистике или стоимости поставки?
          </p>
          <a
            href="/#contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity shrink-0"
          >
            Запросить расчёт
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LogisticsSection;
