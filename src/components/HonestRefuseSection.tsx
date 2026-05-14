import { motion } from "framer-motion";
import { X } from "lucide-react";

const transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

const refuseList = [
  "Помещение в жилом доме без отдельного входа и нужной вентиляции — мы не сможем «нарисовать» соответствие нормам.",
  "Заказчик хочет «согласовать как есть» нарушения СанПиН — мы не подписываем проекты, которые не пройдут СЭЗ.",
  "Сроки «нужно вчера» без реальной возможности сделать качественно — мы не берёмся ради «закрыть смету».",
  "Виды медпомощи, в которых у нас нет проверенной экспертизы — порекомендуем профильного коллегу.",
];

const HonestRefuseSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[hsl(var(--surface))]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-10 max-w-2xl"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Честно
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
            Мы откажемся от работы, если…
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Лучше сразу сказать «нет», чем потом возвращать деньги и время.
          </p>
        </motion.div>

        <div className="grid gap-3">
          {refuseList.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-background"
            >
              <span className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <X className="w-4 h-4 text-accent" />
              </span>
              <p className="text-foreground leading-relaxed">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonestRefuseSection;
