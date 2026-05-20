import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const stages = [
  {
    n: "01",
    title: "Концепция",
    text: "Смотрим помещение, слушаем ваши планы, проверяем — что действительно реально на этой площади. Показываем варианты компоновки и честно говорим, что лучше изменить ещё до проекта.",
  },
  {
    n: "02",
    title: "Планировки",
    text: "Рисуем грамотное зонирование: чистые и грязные потоки, маршруты пациентов и персонала, соблюдение санитарных требований. Согласовываем каждую деталь с вами.",
  },
  {
    n: "03",
    title: "Рабочая документация",
    text: "Готовим полный комплект: архитектурные решения, электроснабжение, вентиляция и кондиционирование, водоснабжение и канализация, медицинские газы, слаботочные системы, пожарная сигнализация, отделка.",
  },
  {
    n: "04",
    title: "Согласования и лицензия",
    text: "Сопровождаем вас в Роспотребнадзоре и Росздравнадзоре. Готовим документы, отвечаем на замечания, доводим до выдачи СЭЗ и медицинской лицензии.",
  },
];

const sections = [
  "Архитектурно-строительные решения",
  "Электроснабжение и освещение",
  "Вентиляция и кондиционирование",
  "Водоснабжение и канализация",
  "Медицинские газы",
  "Отопление и теплоснабжение",
  "Пожарная сигнализация",
  "Слаботочные системы",
  "Технология медицинских процессов",
  "Отделочные материалы",
];

const FullCycleSection = () => {
  return (
    <section id="full-cycle" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Полный цикл
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight mb-6">
            Делаем всё под ключ — вам не нужно искать ещё кого-то
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Часто клиенту приходится собирать команду из разных подрядчиков: один рисует планировки, другой — инженерку, третий бегает по согласованиям. У нас всё это под одной крышей и под одной ответственностью.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border mb-16">
          {stages.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
              className="bg-background p-8 md:p-10"
            >
              <span className="font-mono text-xs text-accent mb-5 block">{s.n}</span>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="border border-border rounded-3xl p-8 md:p-12 bg-card"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Разделы проекта
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 max-w-2xl">
            Что входит в комплект документации
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {sections.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.03 }}
                className="bg-card p-5 text-sm text-foreground leading-snug"
              >
                {s}
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 leading-relaxed max-w-2xl">
            Каждый раздел делает профильный инженер с опытом именно в медицинских объектах. Все решения сразу учитывают СанПиН, СП и требования Роспотребнадзора.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FullCycleSection;
