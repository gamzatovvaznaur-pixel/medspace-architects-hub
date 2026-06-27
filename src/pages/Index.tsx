import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeaderNav from "@/components/HeaderNav";
import HeroSimpleSection from "@/components/HeroSimpleSection";
import LicensingCompanionSection from "@/components/LicensingCompanionSection";
import ProcessRoadmap from "@/components/ProcessRoadmap";
import HomeCasesSection from "@/components/HomeCasesSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import InlineCallbackForm from "@/components/InlineCallbackForm";
import SEO from "@/components/SEO";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const deliverables = [
  { code: "01", title: "Архитектурно-планировочное проектирование", desc: "Функциональное зонирование, планировки помещений, расстановка оборудования с учётом нормативных требований." },
  { code: "02", title: "Проектирование инженерных систем", desc: "Вентиляция, электроснабжение, водоснабжение, канализация, слаботочные системы — всё в комплекте рабочей документации." },
  { code: "03", title: "Рабочая документация", desc: "Полный комплект чертежей для строительно-монтажных работ с детализацией всех инженерных узлов и отделки." },
  { code: "04", title: "Авторский надзор на стройке", desc: "Регулярные выезды на объект, контроль соответствия выполненных работ проектной документации." },
  { code: "05", title: "Технический надзор за качеством", desc: "Проверка материалов, технологий монтажа и соблюдения сметной документации подрядчиком." },
  { code: "06", title: "Комплексное ведение проекта", desc: "Ваш проект ведёт один инженер с прямым контактом от замера до ввода объекта в эксплуатацию." },
];

const whyUs = [
  { value: "12+", label: "лет в проектировании медицинских объектов" },
  { value: "100%", label: "объектов доведены до медицинской лицензии" },
  { value: "от 400", label: "м² — минимальная площадь, с которой работаем" },
  { value: "0", label: "тендеров и субподряда — работаем напрямую" },
];

const problems = [
  {
    pain: "Проектировщик сделал чертежи — и пропал",
    solution: "Идём с вами до момента, когда клиника принимает первого пациента. Отвечаем за результат, а не за «сданный комплект».",
  },
  {
    pain: "Помещение не проходит по СанПиН",
    solution: "Проводим аудит до договора. Если помещение не подходит под лицензию — скажем сразу, до того как вы вложите деньги в ремонт.",
  },
  {
    pain: "Бесконечные замечания Роспотребнадзора",
    solution: "Проектируем сразу под действующие нормы и берём согласование на себя. Замечания закрываем мы, а не вы.",
  },
  {
    pain: "Стройка идёт не по проекту",
    solution: "Авторский надзор: выезжаем на объект, контролируем инженерные узлы, корректируем подрядчика на месте.",
  },
];

const specializations = [
  { title: "Многопрофильные клиники", desc: "Поликлиники и диагностические центры с интеграцией всех направлений в единое пространство." },
  { title: "Стоматологические центры", desc: "От одного кабинета до клиники с хирургическим блоком и собственной стерилизационной." },
  { title: "Клиники пластической хирургии", desc: "Операционные блоки, реанимация, палаты дневного стационара — полный цикл эстетической медицины." },
  { title: "МРТ-кабинеты комфорт+ и выше", desc: "Электромагнитное и виброэкранирование, расчёт защиты, СЭЗ под конкретную модель томографа." },
  { title: "Косметология и лазерные центры", desc: "Инъекционные кабинеты, лазерные залы, чистые помещения для малоинвазивных вмешательств." },
  { title: "Офтальмологические центры", desc: "Диагностика, лазерная хирургия, операционные с системой чистых помещений." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="МедПроект — проектирование клиник от 400 м²"
        description="Проектируем многопрофильные клиники, стоматологии, клиники пластической хирургии и МРТ-кабинеты. Доводим объект до медицинской лицензии."
        path="/"
        keywords="проектирование клиник, проект медицинского учреждения, СЭЗ, медицинская лицензия, проект стоматологии, МРТ кабинет"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "МедПроект",
          url: "https://medspace-architects-hub.lovable.app/",
          description:
            "Проектирование медицинских учреждений от 400 м². Полное сопровождение до медицинской лицензии.",
          areaServed: { "@type": "Country", name: "Russia" },
        }}
      />
      <HeaderNav />

      {/* 1. HERO */}
      <HeroSimpleSection />

      {/* 2. ЧТО КЛИЕНТ ПОЛУЧАЕТ */}
      <section className="py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="max-w-3xl mb-16"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Что вы получаете
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight">
              Полный комплект для запуска клиники — от чертежа до лицензии
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {deliverables.map((d, i) => (
              <motion.div
                key={d.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.05 }}
                className="bg-background p-8"
              >
                <span className="font-mono text-xs text-accent mb-4 block">{d.code}</span>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3 leading-snug">
                  {d.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ПОЧЕМУ ИМЕННО МЫ */}
      <section className="py-28 px-6 md:px-12 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="max-w-3xl mb-16"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Почему выбирают нас
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight mb-6">
              Узкая специализация и прямая ответственность за результат
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Мы не проектируем офисы и склады. Только медицина — каждый день, на одних и тех же нормах.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {whyUs.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.06 }}
                className="bg-background p-10 flex flex-col gap-3"
              >
                <span className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight">
                  {w.value}
                </span>
                <span className="text-sm text-muted-foreground leading-snug">{w.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM 1 */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <InlineCallbackForm
            id="home-form-1"
            title="Обсудить ваш проект"
            description="Оставьте номер — перезвоним в течение рабочего дня и бесплатно разберём ваше помещение и задачу."
            subject="Заявка с главной — обсудить проект"
          />
        </div>
      </section>

      {/* 4. ПРОБЛЕМЫ, КОТОРЫЕ РЕШАЕМ */}
      <section className="py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="max-w-3xl mb-16"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Что мы закрываем
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight">
              Проблемы, с которыми к нам приходят
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.06 }}
                className="border border-border rounded-2xl p-8 bg-background"
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-3 block">
                  Боль клиента
                </span>
                <h3 className="text-xl font-display font-semibold text-foreground mb-5 leading-snug">
                  {p.pain}
                </h3>
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-2 block">
                  Как решаем
                </span>
                <p className="text-muted-foreground leading-relaxed">{p.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. НА КАКИХ КЛИНИКАХ СПЕЦИАЛИЗИРУЕМСЯ */}
      <section className="py-28 px-6 md:px-12 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="max-w-3xl mb-16"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Специализация
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight mb-6">
              Профили клиник, на которых мы концентрируемся
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Многопрофильные клиники, стоматология, пластическая хирургия и МРТ-кабинеты сегмента комфорт+ и выше.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {specializations.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.05 }}
                className="bg-background p-8"
              >
                <span className="font-mono text-[10px] tracking-widest text-accent mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM 2 */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <InlineCallbackForm
            id="home-form-2"
            variant="accent"
            title="Подходит ли ваше помещение под лицензию?"
            description="Бесплатный экспресс-аудит за один рабочий день. Скажем честно — стоит ли вкладываться в ремонт или искать другое помещение."
            subject="Заявка с главной — аудит помещения"
          />
        </div>
      </section>

      {/* 6. ПРОЦЕСС */}
      <ProcessRoadmap />

      {/* 7. ПРИМЕРЫ РАБОТ */}
      <HomeCasesSection />

      {/* 8. НАШ ПОДХОД (тёмный блок) */}
      <LicensingCompanionSection />

      {/* 9. ДОП ИНФОРМАЦИЯ / СТАТИСТИКА */}
      <StatsSection />

      {/* 10. ДОП ССЫЛКИ */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="max-w-3xl mb-12"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Дополнительно
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
              Полезные материалы и информация
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              { to: "/services", title: "Полный список услуг", desc: "Состав проектной документации, стадии работ, авторский надзор." },
              { to: "/blog", title: "Статьи и кейсы", desc: "Разборы реальных проектов, нормативка и подводные камни лицензирования." },
              { to: "/documents", title: "Нормативные документы", desc: "СанПиН, СП и приказы Минздрава, по которым мы проектируем." },
              { to: "/about", title: "О компании", desc: "Команда, опыт, подход к проектированию медицинских объектов." },
              { to: "/licensing", title: "Лицензирование", desc: "Как устроен путь от СЭЗ до медицинской лицензии Росздравнадзора." },
              { to: "/contacts", title: "Контакты", desc: "Телефон, почта и реквизиты для запроса коммерческого предложения." },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="bg-background p-7 group hover:bg-secondary/60 transition-colors"
              >
                <h3 className="text-base font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {l.title} →
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. КОНТАКТЫ / ФИНАЛЬНАЯ ФОРМА */}
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
