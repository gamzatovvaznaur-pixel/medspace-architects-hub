import { motion } from "framer-motion";
import { Shield, FileCheck, Lock, RefreshCw, Building2, Users } from "lucide-react";

const transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

const guarantees = [
  {
    icon: Shield,
    title: "СЭЗ с первого раза",
    text: "Если Роспотребнадзор не выдал заключение из-за проекта — переделываем за свой счёт.",
  },
  {
    icon: Lock,
    title: "Фиксированная цена",
    text: "Стоимость закрепляется в договоре. Никаких «доплат» в процессе работы.",
  },
  {
    icon: FileCheck,
    title: "Прозрачный договор",
    text: "Срок, состав работ и ответственность — на одной странице, без мелкого шрифта.",
  },
  {
    icon: RefreshCw,
    title: "Правки до результата",
    text: "Корректируем проект, пока не пройдёте экспертизу. Без счётчика правок.",
  },
];

const stats = [
  { icon: Building2, value: "9 лет", label: "проектируем медучреждения" },
  { icon: Users, value: "38 клиник", label: "уже работают по нашим проектам" },
];

const RiskReductionSection = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-12 max-w-2xl"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Как мы снижаем ваши риски
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
            Вы не платите за наши ошибки
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {guarantees.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.06 }}
              className="border border-border rounded-2xl p-6 flex gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <g.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1.5">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.2 + i * 0.06 }}
              className="dark-section rounded-2xl p-8 flex items-center gap-5"
            >
              <s.icon className="w-8 h-8 text-accent shrink-0" />
              <div>
                <div className="font-display font-bold text-3xl md:text-4xl text-white">{s.value}</div>
                <div className="text-sm text-white/60 mt-1">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskReductionSection;
