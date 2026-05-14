import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

const steps = [
  {
    n: "01",
    duration: "1 день",
    title: "Бесплатный аудит",
    result: "Понимаете, подходит ли ваше помещение и сколько займёт проект.",
  },
  {
    n: "02",
    duration: "3–5 дней",
    title: "Договор и ТЗ",
    result: "Зафиксированы цена, сроки, состав работ. Без сюрпризов.",
  },
  {
    n: "03",
    duration: "20–35 дней",
    title: "Проектная документация",
    result: "Полный комплект чертежей и разделов под СанПиН и СП.",
  },
  {
    n: "04",
    duration: "15–30 дней",
    title: "Согласование в Роспотребнадзоре",
    result: "Получаете СЭЗ. Можно подавать на лицензию Росздравнадзора.",
  },
  {
    n: "05",
    duration: "по запросу",
    title: "Авторский надзор и поставки",
    result: "Сопровождаем стройку, поставляем оборудование и мебель.",
  },
];

const ProcessRoadmap = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-12 max-w-2xl"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Процесс простыми словами
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
            5 этапов от обращения до СЭЗ
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Вы не будете ждать неделями ответа — следующий шаг всегда в течение 24 часов.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.06 }}
              className="bg-background p-6 flex flex-col"
            >
              <span className="font-mono text-xs text-accent mb-4">{s.n}</span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-3">
                {s.duration}
              </span>
              <h3 className="font-display font-semibold text-foreground mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                {s.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessRoadmap;
