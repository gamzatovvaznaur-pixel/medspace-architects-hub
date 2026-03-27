import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const services = [
  { slug: "design", code: "01", title: "Проектная документация", description: "Полный комплект проектной документации для медицинских учреждений любой сложности." },
  { slug: "design", code: "02", title: "Рабочая документация", description: "Детализированные чертежи, спецификации и узлы. Медицинские газы, чистые помещения." },
  { slug: "supervision", code: "03", title: "Авторский надзор", description: "Контроль соответствия строительства проектным решениям на каждом этапе." },
  { slug: "equipment", code: "04", title: "Поставка оборудования", description: "Прямые контракты с производителями в Китае. Значительная экономия." },
  { slug: "furniture", code: "05", title: "Поставка мебели", description: "Медицинская и специализированная мебель от проверенных фабрик." },
  { slug: "approval", code: "06", title: "Согласование документации", description: "Полное сопровождение при прохождении экспертизы и согласовании в ГАСН." },
];

const ServicesSection = () => {
  const { openCallback } = useCallbackDialog();
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Услуги
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground max-w-3xl">
              Полный цикл — от концепции до ввода в эксплуатацию
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-display text-sm font-medium shrink-0 hover:opacity-80 transition-opacity"
          >
            Все услуги →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.06 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="block border border-border p-6 rounded-2xl group hover:bg-secondary transition-colors h-full"
              >
                <span className="font-mono text-xs text-accent mb-3 block">{service.code}</span>
                <h3 className="text-lg font-display font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={openCallback}
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Обсудить проект
          </button>
          <Link
            to="/services"
            className="border border-border text-foreground px-8 py-3.5 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-secondary transition-colors"
          >
            Подробнее об услугах
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
