import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import clinicStomatologyImg from "@/assets/clinic-stomatology.jpg";
import clinicMultidisciplinaryImg from "@/assets/clinic-multidisciplinary.jpg";
import clinicCosmetologyImg from "@/assets/clinic-cosmetology.jpg";
import clinicLaboratoryImg from "@/assets/clinic-laboratory.jpg";
import clinicProcedureImg from "@/assets/clinic-procedure.jpg";
import clinicHospitalImg from "@/assets/clinic-hospital.jpg";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const specs = [
  {
    slug: "stomatology",
    code: "MED-01",
    title: "Стоматологии",
    desc: "Проектирование стоматологических клиник — от кабинета на одно кресло до центра с хирургическим блоком.",
    image: clinicStomatologyImg,
  },
  {
    slug: "multidisciplinary",
    code: "MED-02",
    title: "Многопрофильные клиники",
    desc: "Комплексные проекты с интеграцией всех медицинских направлений в единое пространство.",
    image: clinicMultidisciplinaryImg,
  },
  {
    slug: "cosmetology",
    code: "MED-03",
    title: "Косметологические клиники",
    desc: "Центры эстетической медицины с премиальным интерьером и соблюдением нормативов.",
    image: clinicCosmetologyImg,
  },
  {
    slug: "laboratory",
    code: "MED-04",
    title: "Лаборатории и пункты анализов",
    desc: "Лаборатории клинической диагностики и сети пунктов забора биоматериала.",
    image: clinicLaboratoryImg,
  },
  {
    slug: "procedure-rooms",
    code: "MED-05",
    title: "Процедурные кабинеты",
    desc: "Кабинеты для инфузионной терапии, манипуляций и малоинвазивных вмешательств.",
    image: clinicProcedureImg,
  },
  {
    slug: "hospital",
    code: "MED-06",
    title: "Стационары",
    desc: "Палатные отделения, реанимационные блоки и операционные с полным инженерным обеспечением.",
    image: clinicHospitalImg,
  },
];

const SpecializationsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-12 max-w-3xl"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Проектирование клиник
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight">
            Проектируем под вашу специализацию
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.06 }}
            >
              <Link
                to={`/services/${s.slug}`}
                className="group block bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="font-mono text-[10px] tracking-widest text-accent mb-2 block">
                    {s.code}
                  </span>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-accent font-display text-sm font-medium">
                    Подробнее →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
