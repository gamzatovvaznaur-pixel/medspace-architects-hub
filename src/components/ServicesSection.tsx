import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const services = [
  {
    slug: "design",
    code: "DOC-P",
    title: "Проектная документация",
    description: "Разработка полного комплекта проектной документации для медицинских учреждений любой сложности.",
  },
  {
    slug: "design",
    code: "DOC-R",
    title: "Рабочая документация",
    description: "Детализированные чертежи, спецификации и узлы для строительства. Медицинские газы, чистые помещения.",
  },
  {
    slug: "supervision",
    code: "SUP-AN",
    title: "Авторский надзор",
    description: "Контроль соответствия строительства проектным решениям. Оперативное решение технических вопросов.",
  },
  {
    slug: "equipment",
    code: "PROC-EQ",
    title: "Поставка оборудования",
    description: "Прямые контракты с производителями медицинского оборудования в Китае. Экономия 30–50%.",
  },
  {
    slug: "furniture",
    code: "PROC-FN",
    title: "Поставка мебели",
    description: "Медицинская и специализированная мебель от проверенных фабрик. Индивидуальное производство.",
  },
  {
    slug: "approval",
    code: "ADM-GA",
    title: "Согласование документации",
    description: "Полное сопровождение при прохождении экспертизы и согласовании в ГАСН.",
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
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4 block">
              Услуги
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground max-w-3xl">
              Полный цикл — от концепции до ввода в эксплуатацию
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-display text-sm font-medium shrink-0 hover:opacity-80 transition-opacity"
          >
            Все услуги
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, i) => (
            <motion.div
              key={service.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
            >
                <Link
                  to={`/services/${service.slug}`}
                  className="block border-l-4 border-l-primary border-b border-border pl-6 pr-6 py-8 rounded-xl group cursor-pointer bg-card hover:bg-secondary transition-colors"
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
