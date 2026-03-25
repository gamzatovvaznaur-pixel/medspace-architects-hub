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
  stomatology: {
    code: "MED-01",
    title: "Проектирование стоматологий",
    image: clinicStomatologyImg,
    description: "Проектируем стоматологические клиники любого масштаба — от кабинета на одно кресло до многопрофильного центра с хирургическим блоком.",
    details: [
      "Планировка кабинетов с учётом эргономики работы врача и ассистента",
      "Проектирование рентгенологических зон (КЛКТ, визиограф) с экранированием по СанПиН",
      "Системы водоподготовки и подачи сжатого воздуха для стоматологических установок",
      "Вентиляция и кондиционирование с учётом требований к стерильности",
      "Зуботехническая лаборатория — от литейной до CAD/CAM зоны",
    ],
  },
  multidisciplinary: {
    code: "MED-02",
    title: "Проектирование многопрофильных клиник",
    image: clinicMultidisciplinaryImg,
    description: "Создаём комплексные проекты многопрофильных медицинских центров с интеграцией всех направлений в единое функциональное пространство.",
    details: [
      "Зонирование по направлениям: терапия, хирургия, диагностика, реабилитация",
      "Логистика потоков пациентов, персонала и чистых/грязных материалов",
      "Проектирование общих зон: регистратура, зоны ожидания, аптечный пункт",
      "Интеграция инженерных систем для разных типов помещений",
      "Масштабируемые решения для поэтапного ввода в эксплуатацию",
    ],
  },
  cosmetology: {
    code: "MED-03",
    title: "Проектирование косметологических клиник",
    image: clinicCosmetologyImg,
    description: "Разрабатываем проекты косметологических клиник и центров эстетической медицины с премиальным интерьером и соблюдением всех нормативов.",
    details: [
      "Планировка процедурных кабинетов для инъекционной и аппаратной косметологии",
      "Проектирование операционных для пластической хирургии (при необходимости)",
      "Зоны подготовки и восстановления пациентов",
      "Дизайн-решения премиум-класса: ресепшн, зоны ожидания, VIP-кабинеты",
      "Системы вентиляции для работы с лазерным оборудованием",
    ],
  },
  laboratory: {
    code: "MED-04",
    title: "Проектирование лабораторий и пунктов сдачи анализов",
    image: clinicLaboratoryImg,
    description: "Проектируем лаборатории клинической диагностики и сети пунктов забора биоматериала с соблюдением требований биобезопасности.",
    details: [
      "Зонирование лаборатории по классам чистоты и уровням биобезопасности",
      "Проектирование преаналитической, аналитической и постаналитической зон",
      "Системы вентиляции с HEPA-фильтрацией и контролем давления",
      "Процедурные кабинеты для забора крови и биоматериалов",
      "Логистика транспортировки образцов внутри лаборатории",
    ],
  },
  "procedure-rooms": {
    code: "MED-05",
    title: "Проектирование процедурных кабинетов",
    image: clinicProcedureImg,
    description: "Разрабатываем проекты процедурных кабинетов для различных медицинских манипуляций — от инфузионной терапии до малоинвазивных вмешательств.",
    details: [
      "Планировка с учётом потоков стерильных и нестерильных материалов",
      "Проектирование инженерных сетей: медицинские газы, вакуум, электроснабжение",
      "Оптимальное размещение оборудования для удобства медперсонала",
      "Системы приточно-вытяжной вентиляции по нормам СанПиН",
      "Антимикробные отделочные материалы и покрытия",
    ],
  },
  hospital: {
    code: "MED-06",
    title: "Проектирование стационаров",
    image: clinicHospitalImg,
    description: "Проектируем стационарные отделения и больницы — от палат интенсивной терапии до отделений круглосуточного пребывания.",
    details: [
      "Проектирование палатных отделений с учётом нормативов площади на одну койку",
      "Реанимационные блоки и палаты интенсивной терапии с медицинскими газами",
      "Операционные блоки с зонированием по классам чистоты",
      "Системы вызова персонала и мониторинга пациентов",
      "Логистика питания, стерилизации белья и утилизации медотходов",
    ],
  },
  mri: {
    code: "MED-07",
    title: "Проектирование МРТ-кабинетов",
    image: clinicMriImg,
    highlight: "Специализированное проектирование с учётом электромагнитного экранирования и требований к магнитной безопасности.",
    description: "Разрабатываем проекты кабинетов магнитно-резонансной томографии с полным комплексом инженерных решений.",
    details: [
      "Расчёт и проектирование экранированных помещений (клетка Фарадея)",
      "Фундаменты и виброизоляция под тяжёлое оборудование",
      "Системы охлаждения и отвода гелия для сверхпроводящих магнитов",
      "Планировка управляющей, технической и пациентской зон",
      "Соблюдение зон магнитной безопасности (зоны I–IV по стандарту ACR)",
    ],
  },
  xray: {
    code: "MED-08",
    title: "Проектирование рентген-кабинетов",
    image: clinicXrayImg,
    highlight: "Полный цикл проектирования с расчётом радиационной защиты и получением санитарно-эпидемиологического заключения.",
    description: "Проектируем рентгенодиагностические кабинеты для всех видов исследований — от рентгенографии до КТ и маммографии.",
    details: [
      "Расчёт радиационной защиты стен, пола, потолка и смотрового окна",
      "Подбор свинцовых эквивалентов отделочных материалов",
      "Проектирование пультовой и процедурной зон",
      "Электроснабжение с учётом пиковых нагрузок рентген-аппарата",
      "Подготовка документации для получения СЭЗ Роспотребнадзора",
    ],
  },
  ophthalmology: {
    code: "MED-09",
    title: "Проектирование офтальмологических клиник",
    image: clinicOphthalmologyImg,
    description: "Проектируем офтальмологические клиники и кабинеты — от диагностических центров до лазерных хирургических комплексов.",
    details: [
      "Планировка диагностических кабинетов с затемнёнными зонами для обследований",
      "Проектирование операционных для лазерной коррекции зрения (LASIK, FemtoLASIK)",
      "Кабинеты для микрохирургии глаза с ламинарным потоком воздуха",
      "Оптические мастерские и залы подбора очков и контактных линз",
      "Системы освещения с контролируемой цветовой температурой",
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
