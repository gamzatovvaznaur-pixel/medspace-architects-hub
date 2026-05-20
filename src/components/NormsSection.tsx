import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const norms = [
  {
    code: "СП 158.13330",
    title: "Здания и помещения медицинских организаций",
    text: "Базовый свод правил по проектированию: габариты помещений, состав, материалы, инженерия.",
  },
  {
    code: "СанПиН 2.1.3678-20",
    title: "Санитарно-эпидемиологические требования",
    text: "Чистые и грязные потоки, разделение зон, требования к отделке, дезинфекция, обращение с отходами.",
  },
  {
    code: "СП 60.13330",
    title: "Отопление, вентиляция и кондиционирование",
    text: "Кратности воздухообмена в каждом типе кабинета, фильтрация, требования к операционным и стерилизационным.",
  },
  {
    code: "СП 256.1325800",
    title: "Электроустановки жилых и общественных зданий",
    text: "Категорийность по надёжности электроснабжения, ИБП, медицинские группы помещений (1-я, 2-я группа).",
  },
  {
    code: "ФЗ-323 и 99",
    title: "Лицензирование медицинской деятельности",
    text: "Требования к помещению, оборудованию, кадрам. То, что проверит Росздравнадзор перед выдачей лицензии.",
  },
  {
    code: "Приказ 298н",
    title: "Требования к оснащению",
    text: "Перечень минимально необходимого оборудования для каждой медицинской услуги.",
  },
];

const NormsSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="max-w-3xl mb-14"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Нормативная база
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight mb-6">
            В голове держим больше двадцати документов — чтобы вы не держали ни одного
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Медицинский проект — это десятки сводов правил, СанПиНов, приказов и регламентов. Мы знаем их наизусть и применяем сразу при проектировании, а не правим документацию после замечаний.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {norms.map((n, i) => (
            <motion.div
              key={n.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.05 }}
              className="border border-border rounded-2xl p-6 bg-background hover:border-accent/40 transition-colors"
            >
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3 block">
                {n.code}
              </span>
              <h3 className="font-display font-semibold text-foreground mb-2 leading-snug">
                {n.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{n.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NormsSection;
