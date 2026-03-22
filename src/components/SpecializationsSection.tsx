import { motion } from "framer-motion";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";
import specDental from "@/assets/spec-dental.jpg";
import specCosmetology from "@/assets/spec-cosmetology.jpg";
import specLaboratory from "@/assets/spec-laboratory.jpg";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const specializations = [
  {
    title: "Стоматологии",
    subtitle: "Стоматологические клиники и центры",
    image: specDental,
    description:
      "Проектируем стоматологические клиники любого масштаба — от кабинетов терапевтической стоматологии до многопрофильных центров с хирургическими блоками и зуботехническими лабораториями.",
    features: [
      "Планировка кабинетов с учётом Приказа Минздрава № 786н",
      "Интеграция рентген-оборудования (КЛКТ, визиографы) с радиационной защитой",
      "Проектирование систем аспирации и подачи сжатого воздуха",
      "Эргономичные кабинеты для комфорта врача и пациента",
    ],
  },
  {
    title: "Косметологии",
    subtitle: "Косметологические клиники и медицинские спа",
    image: specCosmetology,
    description:
      "Создаём проекты косметологических клиник, сочетающие строгие медицинские стандарты с атмосферой премиального сервиса. Каждый проект — это баланс между нормативными требованиями и эстетикой пространства.",
    features: [
      "Зонирование: инъекционные кабинеты, лазерные залы, процедурные",
      "Специализированная вентиляция для работы с лазерным оборудованием",
      "Проектирование малых операционных для пластической хирургии",
      "Интерьерные решения, формирующие доверие и лояльность клиентов",
    ],
  },
  {
    title: "Медицинские лаборатории",
    subtitle: "Диагностические и исследовательские лаборатории",
    image: specLaboratory,
    description:
      "Проектируем лаборатории с соблюдением строгих требований биобезопасности — от клинико-диагностических до бактериологических и ПЦР-лабораторий. Учитываем логистику биоматериалов и специфику аналитического оборудования.",
    features: [
      "Проектирование «чистых» и «грязных» зон с исключением перекрёстного загрязнения",
      "Системы приточно-вытяжной вентиляции с HEPA-фильтрацией",
      "Инженерное обеспечение: деионизированная вода, газоснабжение, UPS",
      "Соответствие СанПиН 3.3686-21 и требованиям Роспотребнадзора",
    ],
  },
];

const SpecializationsSection = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Специализации
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground max-w-4xl mb-4">
            Проектируем медицинские объекты любой сложности
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Глубокая экспертиза в нормативной базе и технологиях позволяет нам работать с самыми требовательными направлениями медицины.
          </p>
        </motion.div>

        <div className="space-y-20">
          {specializations.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-2 block">
                  {spec.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                  {spec.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {spec.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {spec.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openCallback}
                  className="inline-block bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Обсудить проект
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
