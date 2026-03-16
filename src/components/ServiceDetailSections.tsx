import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import serviceDesignImg from "@/assets/service-design.jpg";
import serviceSupervisionImg from "@/assets/service-supervision.jpg";
import serviceEquipmentImg from "@/assets/service-equipment.jpg";
import serviceFurnitureImg from "@/assets/service-furniture.jpg";
import serviceApprovalImg from "@/assets/service-approval.jpg";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

interface ServiceBlockProps {
  code: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
  highlight?: string;
  id?: string;
}

const ServiceBlock = ({
  code,
  title,
  description,
  details,
  image,
  imageAlt,
  reversed = false,
  highlight,
  id,
}: ServiceBlockProps) => (
  <section id={id} className="py-[10vh] px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          reversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={transition}
          className="lg:[direction:ltr] overflow-hidden"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <span className="font-mono text-[10px] tracking-widest text-primary">
                {code}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.15 }}
          className="lg:[direction:ltr]"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4 block">
            {code}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-[1.1]">
            {title}
          </h2>

          {highlight && (
            <div className="bg-primary/10 border-l-4 border-primary px-5 py-4 mb-6 rounded-xl">
              <p className="text-foreground font-display font-medium text-sm leading-relaxed">
                {highlight}
              </p>
            </div>
          )}

          <p className="text-muted-foreground leading-relaxed text-pretty mb-8 text-lg">
            {description}
          </p>

          <ul className="space-y-3 mb-8">
            {details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">
                  {detail}
                </span>
              </li>
            ))}
          </ul>

          <Link
            to="/#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Обсудить проект
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServiceDetailSections = () => {
  return (
    <>
      <ServiceBlock
        id="service-design"
        code="SRV-01"
        title="Проектирование с учётом специфики медицины"
        image={serviceDesignImg}
        imageAlt="Архитектурный проект медицинского центра"
        description="Мы проектируем медицинские учреждения любой сложности — от районных поликлиник до высокотехнологичных хирургических центров. Каждый проект учитывает специфические требования медицинской отрасли: потоки пациентов, зонирование чистых помещений, размещение тяжёлого оборудования."
        details={[
          "Полный комплект проектной и рабочей документации в соответствии с СанПиН, СП и техническими регламентами",
          "Технологическое проектирование: медицинские газы, вентиляция чистых помещений, экранирование рентгеновских кабинетов",
          "Интерьерные решения, адаптированные под медицинские стандарты гигиены и эргономики",
          "BIM-моделирование для координации всех инженерных систем до начала строительства",
        ]}
      />

      <div className="border-t border-border mx-6 md:mx-12" />

      <ServiceBlock
        id="service-supervision"
        code="SRV-02"
        title="Авторский надзор при строительстве"
        image={serviceSupervisionImg}
        imageAlt="Авторский надзор на строительной площадке"
        reversed
        description="Наши специалисты контролируют каждый этап строительства, обеспечивая точное соответствие проектным решениям. Это критически важно для медицинских объектов, где отклонения от проекта могут привести к несоответствию санитарным нормам."
        details={[
          "Регулярные выезды на площадку с проверкой скрытых работ и узловых соединений",
          "Оперативное решение технических вопросов без остановки строительства",
          "Ведение журнала авторского надзора с фиксацией всех изменений",
          "Контроль применяемых материалов на соответствие спецификациям проекта",
        ]}
      />

      <div className="border-t border-border mx-6 md:mx-12" />

      <ServiceBlock
        id="service-equipment"
        code="SRV-03"
        title="Поставка оборудования из Китая"
        image={serviceEquipmentImg}
        imageAlt="Медицинское оборудование на складе"
        highlight="Стоимость оборудования от китайских производителей на 30–50% ниже европейских аналогов при сопоставимом качестве и полной сертификации для РФ."
        description="Мы работаем напрямую с ведущими китайскими производителями медицинского оборудования. Прямые контракты без посредников позволяют существенно сократить бюджет проекта без компромиссов в качестве."
        details={[
          "Прямые контракты с фабриками в Шэньчжэне, Шанхае и Гуанчжоу — без посредников",
          "Полная сертификация для российского рынка: РУ, декларации соответствия, ТУ",
          "Инспекция качества на производстве перед отгрузкой — наши специалисты на месте",
          "Логистика «под ключ»: море, авиа, ж/д — с таможенным оформлением и страхованием",
        ]}
      />

      <div className="border-t border-border mx-6 md:mx-12" />

      <ServiceBlock
        id="service-furniture"
        code="SRV-04"
        title="Поставка медицинской мебели из Китая"
        image={serviceFurnitureImg}
        imageAlt="Медицинская мебель в клинике"
        reversed
        highlight="Индивидуальное производство мебели под ваш проект — точные размеры, цвета и конфигурации без наценок дистрибьюторов."
        description="Медицинская и специализированная мебель от проверенных фабрик Китая. Мы организуем весь процесс от подбора моделей до монтажа на объекте, включая кастомизацию под планировки вашего проекта."
        details={[
          "Медицинские кушетки, операционные столы, лабораторная мебель, шкафы для медикаментов",
          "Мебель для палат, ресепшн, зон ожидания — единый стиль под дизайн-проект",
          "Материалы, устойчивые к дезинфекции и соответствующие санитарным нормам",
          "Гарантия от производителя и сервисное обслуживание на территории РФ",
        ]}
      />

      <div className="border-t border-border mx-6 md:mx-12" />

      <ServiceBlock
        id="service-approval"
        code="SRV-05"
        title="Согласование документации в ГАСН"
        image={serviceApprovalImg}
        imageAlt="Согласование проектной документации"
        description="Берём на себя весь процесс прохождения государственной экспертизы и согласования в органах архитектурно-строительного надзора."
        details={[
          "Подготовка и подача документации в органы экспертизы и ГАСН",
          "Оперативное устранение замечаний экспертов — без затягивания сроков",
          "Получение разрешений на строительство и ввод объекта в эксплуатацию",
          "Сопровождение при взаимодействии с Роспотребнадзором и пожарной инспекцией",
        ]}
      />
    </>
  );
};

export default ServiceDetailSections;
