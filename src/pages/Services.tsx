import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import CTABanner from "@/components/CTABanner";
import serviceDesignImg from "@/assets/service-design.jpg";
import serviceSupervisionImg from "@/assets/service-supervision.jpg";
import serviceEquipmentImg from "@/assets/service-equipment.jpg";
import serviceFurnitureImg from "@/assets/service-furniture.jpg";
import serviceApprovalImg from "@/assets/service-approval.jpg";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const services = [
  {
    slug: "design",
    code: "SRV-01",
    title: "Проектирование медицинских учреждений",
    summary: "Полный комплект проектной и рабочей документации с учётом специфики медицинской отрасли. СанПиН, BIM, инженерные системы.",
    image: serviceDesignImg,
  },
  {
    slug: "supervision",
    code: "SRV-02",
    title: "Авторский надзор при строительстве",
    summary: "Контроль каждого этапа строительства, обеспечивающий точное соответствие проектным решениям и санитарным нормам.",
    image: serviceSupervisionImg,
  },
  {
    slug: "equipment",
    code: "SRV-03",
    title: "Поставка оборудования из Китая",
    summary: "Прямые контракты с фабриками без посредников. Стоимость на 30–50% ниже европейских аналогов при полной сертификации.",
    image: serviceEquipmentImg,
  },
  {
    slug: "furniture",
    code: "SRV-04",
    title: "Поставка медицинской мебели из Китая",
    summary: "Индивидуальное производство мебели под ваш проект — точные размеры, конфигурации, устойчивые к дезинфекции материалы.",
    image: serviceFurnitureImg,
  },
  {
    slug: "approval",
    code: "SRV-05",
    title: "Согласование документации в ГАСН",
    summary: "Полное сопровождение при прохождении государственной экспертизы, получение разрешений на строительство и ввод в эксплуатацию.",
    image: serviceApprovalImg,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4 block">
              Наши услуги
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground max-w-4xl mb-6">
              Полный цикл — от концепции до ввода в эксплуатацию
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Мы закрываем все этапы создания медицинского учреждения: проектирование, надзор, поставки и согласование.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: i * 0.08 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-clinical-lg transition-shadow duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="font-mono text-[10px] tracking-widest text-primary mb-2 block">
                    {service.code}
                  </span>
                  <h2 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-primary font-display text-sm font-medium">
                    Подробнее
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
      <FooterSection />
    </div>
  );
};

export default ServicesPage;
