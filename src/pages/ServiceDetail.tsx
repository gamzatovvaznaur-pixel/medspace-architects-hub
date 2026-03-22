import { useParams, Link, Navigate } from "react-router-dom";
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

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const servicesData: Record<string, {
  code: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  highlight?: string;
}> = {
  design: {
    code: "SRV-01",
    title: "Проектирование с учётом специфики медицины",
    image: serviceDesignImg,
    description: "Мы проектируем медицинские учреждения любой сложности — от районных поликлиник до высокотехнологичных хирургических центров.",
    details: [
      "Полный комплект проектной и рабочей документации в соответствии с СанПиН, СП и техническими регламентами",
      "Технологическое проектирование: медицинские газы, вентиляция чистых помещений, экранирование рентгеновских кабинетов",
      "Интерьерные решения, адаптированные под медицинские стандарты гигиены и эргономики",
      "BIM-моделирование для координации всех инженерных систем до начала строительства",
    ],
  },
  supervision: {
    code: "SRV-02",
    title: "Авторский надзор при строительстве",
    image: serviceSupervisionImg,
    description: "Наши специалисты контролируют каждый этап строительства, обеспечивая точное соответствие проектным решениям.",
    details: [
      "Регулярные выезды на площадку с проверкой скрытых работ",
      "Оперативное решение технических вопросов без остановки строительства",
      "Ведение журнала авторского надзора с фиксацией всех изменений",
      "Контроль применяемых материалов на соответствие спецификациям проекта",
    ],
  },
  equipment: {
    code: "SRV-03",
    title: "Поставка оборудования из Китая",
    image: serviceEquipmentImg,
    highlight: "Стоимость на 30–50% ниже европейских аналогов при полной сертификации для РФ.",
    description: "Мы работаем напрямую с ведущими китайскими производителями медицинского оборудования.",
    details: [
      "Прямые контракты с фабриками — без посредников",
      "Полная сертификация для российского рынка",
      "Инспекция качества на производстве перед отгрузкой",
      "Логистика «под ключ» с таможенным оформлением и страхованием",
    ],
  },
  furniture: {
    code: "SRV-04",
    title: "Поставка медицинской мебели из Китая",
    image: serviceFurnitureImg,
    highlight: "Индивидуальное производство мебели под ваш проект без наценок дистрибьюторов.",
    description: "Медицинская и специализированная мебель от проверенных фабрик Китая.",
    details: [
      "Медицинские кушетки, операционные столы, лабораторная мебель",
      "Мебель для палат, ресепшн, зон ожидания",
      "Материалы, устойчивые к дезинфекции",
      "Гарантия и сервисное обслуживание на территории РФ",
    ],
  },
  approval: {
    code: "SRV-05",
    title: "Согласование документации в ГАСН",
    image: serviceApprovalImg,
    description: "Берём на себя весь процесс прохождения государственной экспертизы.",
    details: [
      "Подготовка и подача документации в органы экспертизы и ГАСН",
      "Оперативное устранение замечаний экспертов",
      "Получение разрешений на строительство и ввод в эксплуатацию",
      "Сопровождение при взаимодействии с Роспотребнадзором и пожарной инспекцией",
    ],
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : undefined;
  const { openCallback } = useCallbackDialog();

  if (!service) return <Navigate to="/services" replace />;

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <div className="pt-24 pb-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-foreground transition-colors">Услуги</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
        </div>
      </div>

      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            className="relative aspect-[21/9] overflow-hidden rounded-2xl"
          >
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-mono text-xs tracking-widest text-white/70 mb-2 block">{service.code}</span>
              <h1 className="text-3xl md:text-5xl font-semibold text-white max-w-3xl">{service.title}</h1>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.15 }}
            className="lg:col-span-2"
          >
            {service.highlight && (
              <div className="bg-accent/10 border-l-4 border-accent px-6 py-5 mb-8 rounded-xl">
                <p className="text-foreground font-display font-medium leading-relaxed">{service.highlight}</p>
              </div>
            )}
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{service.description}</p>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-6">Что входит в услугу</h2>
            <ul className="space-y-4">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.25 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 sticky top-24">
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">Обсудить проект?</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">Оставьте заявку — мы свяжемся в течение одного рабочего дня.</p>
              <button
                onClick={openCallback}
                className="block w-full text-center bg-accent text-accent-foreground px-6 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity mb-4"
              >
                Заказать звонок
              </button>
              <a
                href="tel:+79182633627"
                className="block w-full text-center border border-border text-foreground px-6 py-3.5 rounded-xl font-display text-sm font-medium hover:bg-secondary transition-colors"
              >
                +7 (918) 263-36-27
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
      <FooterSection />
    </div>
  );
};

export default ServiceDetailPage;
