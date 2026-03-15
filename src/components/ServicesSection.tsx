import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const services = [
  {
    code: "DOC-P",
    title: "Проектная документация",
    description:
      "Разработка полного комплекта проектной документации для медицинских учреждений любой сложности. Соответствие СанПиН, СП и техническим регламентам.",
  },
  {
    code: "DOC-R",
    title: "Рабочая документация",
    description:
      "Детализированные чертежи, спецификации и узлы для строительства. Медицинские газы, чистые помещения, инженерные системы.",
  },
  {
    code: "SUP-AN",
    title: "Авторский надзор",
    description:
      "Контроль соответствия строительства проектным решениям. Оперативное решение технических вопросов на площадке.",
  },
  {
    code: "PROC-EQ",
    title: "Поставка оборудования",
    description:
      "Прямые контракты с производителями медицинского оборудования в Китае. Сертификация, логистика, монтаж.",
  },
  {
    code: "PROC-FN",
    title: "Поставка мебели",
    description:
      "Медицинская и специализированная мебель от проверенных фабрик. Индивидуальное производство под проект.",
  },
  {
    code: "ADM-GA",
    title: "Согласование документации",
    description:
      "Полное сопровождение при прохождении экспертизы и согласовании в ГАСН. Устранение замечаний, получение разрешений.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-[12vh] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4 block">
            Услуги
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground max-w-3xl">
            Полный цикл — от концепции до ввода в эксплуатацию
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, i) => (
            <motion.div
              key={service.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
              whileHover={{ x: 8 }}
              className={`border-l-4 border-l-primary border-b border-border pl-6 pr-6 py-8 group cursor-default bg-surface hover:bg-secondary/50 transition-colors`}
            >
              <span className="font-mono text-[10px] tracking-widest text-primary mb-2 block">
                {service.code}
              </span>
              <h3 className="text-xl md:text-2xl font-display font-medium mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty max-w-md">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
