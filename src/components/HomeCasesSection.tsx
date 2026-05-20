import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

import irisKrd from "@/assets/case-iris-1.webp";
import irisMhk from "@/assets/case-iris-mhk-1.webp";
import mavie from "@/assets/case-mavie-1.jpg";
import dentalSpb from "@/assets/case-dental-spb.jpg";
import multiKrd from "@/assets/case-multi-krasnodar.jpg";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const cases = [
  {
    title: "Центр офтальмохирургии «Ирис»",
    location: "Краснодар",
    slug: "/cases/iris-krasnodar",
    description: "Полноценный офтальмологический центр с операционным блоком и системой чистых помещений.",
    tags: ["Офтальмохирургия", "Операционный блок"],
    image: irisKrd,
    span: "md:col-span-2",
  },
  {
    title: "Диагностический центр «Ирис»",
    location: "Махачкала",
    slug: "/cases/iris-makhachkala",
    description: "Экспертная диагностика, высокоточное оборудование, продуманные потоки пациентов.",
    tags: ["Диагностика", "Федеральная сеть"],
    image: irisMhk,
  },
  {
    title: "Клиника эстетической медицины Mavie",
    location: "Москва, Зубовский бульвар",
    description: "Премиальная клиника в историческом центре. Сложное зонирование, бесшовная инженерия, премиальная отделка.",
    tags: ["Эстетическая медицина", "Премиум"],
    image: mavie,
  },
  {
    title: "Стоматологическая клиника",
    location: "Санкт-Петербург",
    description: "Шестикабинетная стоматология с собственной стерилизационной и рентгенкабинетом.",
    tags: ["Стоматология", "Рентген"],
    image: dentalSpb,
  },
  {
    title: "Многопрофильный медицинский центр",
    location: "Краснодарский край",
    description: "Поликлиника с приёмом по 12 специальностям, манипуляционная, дневной стационар.",
    tags: ["Многопрофильный", "Стационар"],
    image: multiKrd,
    span: "md:col-span-2",
  },
];

const HomeCasesSection = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <section id="cases" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="max-w-3xl mb-14"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Наши работы
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight mb-6">
            Клиники, которые работают и принимают пациентов
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Каждый из этих объектов прошёл Роспотребнадзор, получил лицензию и сегодня ведёт приём.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => {
            const CardInner = (
              <>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-5">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-2 block">
                  {c.location}
                </span>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 leading-snug">
                  {c.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {c.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-widest uppercase border border-border text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            );

            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.06 }}
                className={`group ${c.span ?? ""}`}
              >
                {c.slug ? (
                  <Link to={c.slug} className="block">
                    {CardInner}
                  </Link>
                ) : (
                  CardInner
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <button
            onClick={openCallback}
            className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Обсудить свой проект
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCasesSection;
