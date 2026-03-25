import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import CTABanner from "@/components/CTABanner";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";
import serviceDesignImg from "@/assets/service-design.jpg";
import serviceSupervisionImg from "@/assets/service-supervision.jpg";
import serviceEquipmentImg from "@/assets/service-equipment.jpg";
import serviceFurnitureImg from "@/assets/service-furniture.jpg";
import serviceApprovalImg from "@/assets/service-approval.jpg";
import clinicStomatologyImg from "@/assets/clinic-stomatology.jpg";
import clinicMultidisciplinaryImg from "@/assets/clinic-multidisciplinary.jpg";
import clinicCosmetologyImg from "@/assets/clinic-cosmetology.jpg";
import clinicLaboratoryImg from "@/assets/clinic-laboratory.jpg";
import clinicProcedureImg from "@/assets/clinic-procedure.jpg";
import clinicHospitalImg from "@/assets/clinic-hospital.jpg";
import clinicMriImg from "@/assets/clinic-mri.jpg";
import clinicXrayImg from "@/assets/clinic-xray.jpg";
import clinicOphthalmologyImg from "@/assets/clinic-ophthalmology.jpg";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const mainServices = [
  { slug: "design", code: "SRV-01", title: "Проектирование медицинских учреждений", summary: "Полный комплект проектной и рабочей документации с учётом специфики медицинской отрасли.", image: serviceDesignImg },
  { slug: "supervision", code: "SRV-02", title: "Авторский надзор при строительстве", summary: "Контроль каждого этапа строительства, обеспечивающий точное соответствие проектным решениям.", image: serviceSupervisionImg },
  { slug: "equipment", code: "SRV-03", title: "Поставка оборудования из Китая", summary: "Прямые контракты без посредников. Стоимость на 30–50% ниже европейских аналогов.", image: serviceEquipmentImg },
  { slug: "furniture", code: "SRV-04", title: "Поставка медицинской мебели из Китая", summary: "Индивидуальное производство мебели под ваш проект — точные размеры и конфигурации.", image: serviceFurnitureImg },
  { slug: "approval", code: "SRV-05", title: "Согласование документации в ГАСН", summary: "Полное сопровождение при прохождении государственной экспертизы и получение разрешений.", image: serviceApprovalImg },
];

const clinicTypes = [
  { slug: "stomatology", code: "MED-01", title: "Стоматологии", summary: "Проектирование стоматологических клиник — от кабинета на одно кресло до центра с хирургическим блоком.", image: clinicStomatologyImg },
  { slug: "multidisciplinary", code: "MED-02", title: "Многопрофильные клиники", summary: "Комплексные проекты с интеграцией всех медицинских направлений в единое пространство.", image: clinicMultidisciplinaryImg },
  { slug: "cosmetology", code: "MED-03", title: "Косметологические клиники", summary: "Центры эстетической медицины с премиальным интерьером и соблюдением нормативов.", image: clinicCosmetologyImg },
  { slug: "laboratory", code: "MED-04", title: "Лаборатории и пункты анализов", summary: "Лаборатории клинической диагностики и сети пунктов забора биоматериала.", image: clinicLaboratoryImg },
  { slug: "procedure-rooms", code: "MED-05", title: "Процедурные кабинеты", summary: "Кабинеты для инфузионной терапии, манипуляций и малоинвазивных вмешательств.", image: clinicProcedureImg },
  { slug: "hospital", code: "MED-06", title: "Стационары", summary: "Палатные отделения, реанимационные блоки и операционные с полным инженерным обеспечением.", image: clinicHospitalImg },
  { slug: "mri", code: "MED-07", title: "МРТ-кабинеты", summary: "Специализированное проектирование с электромагнитным экранированием и виброизоляцией.", image: clinicMriImg },
  { slug: "xray", code: "MED-08", title: "Рентген-кабинеты", summary: "Расчёт радиационной защиты, проектирование пультовой и получение СЭЗ.", image: clinicXrayImg },
  { slug: "ophthalmology", code: "MED-09", title: "Офтальмологические клиники", summary: "Диагностические центры и лазерные хирургические комплексы для коррекции зрения.", image: clinicOphthalmologyImg },
];

const ServiceCard = ({ service, i }: { service: typeof mainServices[0]; i: number }) => (
  <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: i * 0.06 }}>
    <Link
      to={`/services/${service.slug}`}
      className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="p-6">
        <span className="font-mono text-[10px] tracking-widest text-accent mb-2 block">{service.code}</span>
        <h2 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">{service.title}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{service.summary}</p>
        <span className="inline-flex items-center gap-2 mt-4 text-accent font-display text-sm font-medium">Подробнее →</span>
      </div>
    </Link>
  </motion.div>
);

const ServicesPage = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <section className="min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">Наши услуги</span>
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground max-w-4xl mb-6">
              Полный цикл — от концепции до ввода в эксплуатацию
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Мы закрываем все этапы создания медицинского учреждения: проектирование, надзор, поставки и согласование.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main services */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, i) => (
              <ServiceCard key={service.slug} service={service} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Clinic design types */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="mb-12">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">Проектирование клиник</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground max-w-3xl">
              Проектируем под вашу специализацию
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicTypes.map((service, i) => (
              <ServiceCard key={service.slug} service={service} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-lg mb-6">Не нашли нужную услугу? Свяжитесь с нами — мы подберём решение.</p>
          <button
            onClick={openCallback}
            className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Заказать звонок
          </button>
        </div>
      </section>

      <CTABanner />
      <FooterSection />
    </div>
  );
};

export default ServicesPage;
