import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeaderNav from "@/components/HeaderNav";
import HeroSimpleSection from "@/components/HeroSimpleSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import LicensingCompanionSection from "@/components/LicensingCompanionSection";
import ProcessRoadmap from "@/components/ProcessRoadmap";

import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import InlineCallbackForm from "@/components/InlineCallbackForm";
import SEO from "@/components/SEO";
import certNopriz from "@/assets/cert-nopriz.png";
import certIso from "@/assets/cert-iso.png";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const licenses = [
  {
    img: certNopriz,
    title: "СРО НОПРИЗ",
    meta: "Рег. № П-185-231119468748-3166",
    desc: "Право подготовки проектной документации для объектов капитального строительства.",
  },
  {
    img: certIso,
    title: "ГОСТ Р ИСО 9001-2015",
    meta: "№ РОСС RU.31381.04ИБИ0/СМК.22417",
    desc: "Система менеджмента качества процессов проектирования.",
  },
];


const whyUs = [
  { value: "12+", label: "лет в проектировании медицинских объектов" },
  { value: "100%", label: "объектов доведены до медицинской лицензии" },
  { value: "от 400", label: "м² — минимальная площадь, с которой работаем" },
  { value: "0", label: "тендеров и субподряда — работаем напрямую" },
];

const problems = [
  {
    pain: "Не знаете, что вообще можно разместить в помещении",
    solution: "Расскажем, какие кабинеты и направления реально проходят по площади, высоте потолков, водоснабжению и вентиляции — ещё до аренды или покупки.",
  },
  {
    pain: "Не понимаете, как правильно проектировать клинику",
    solution: "Объясним логику зонирования: чистые и грязные потоки, стерилизационная, санпропускник, изоляция кабинетов — на языке, понятном собственнику, а не проектировщику.",
  },
  {
    pain: "Не знаете, какие нормы и СанПиН касаются именно вас",
    solution: "Подбираем нормативную базу под вашу специализацию: стоматология, хирургия, МРТ — у каждой свой набор требований. Покажем, что обязательно, а что — миф.",
  },
  {
    pain: "Не понимаете, что войдёт в проект и какие документы нужны для лицензии",
    solution: "Даём прозрачный состав проекта: разделы, чертежи, СЭЗ, экспертизы. Заранее видно, что вы получите на руки и что предъявите Росздравнадзору.",
  },
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

      {/* 2. СПЕЦИАЛИЗАЦИИ */}
      <SpecializationsSection />

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

      {/* FORM 1 + ЛИЦЕНЗИИ */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <InlineCallbackForm
              id="home-form-1"
              title="Обсудить ваш проект"
              description="Оставьте номер — перезвоним в течение рабочего дня и бесплатно разберём ваше помещение и задачу."
              subject="Заявка с главной — обсудить проект"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3 block">
              Право на работу
            </span>
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-6 leading-snug">
              Наши лицензии и допуски
            </h3>
            <div className="space-y-5">
              {licenses.map((l) => (
                <div key={l.title} className="flex gap-4 items-start">
                  <div className="w-20 h-28 shrink-0 rounded-lg overflow-hidden bg-secondary/40 border border-border">
                    <img src={l.img} alt={l.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-display font-semibold text-foreground leading-tight">
                      {l.title}
                    </h4>
                    <p className="font-mono text-[10px] tracking-wide text-muted-foreground mt-1 break-words">
                      {l.meta}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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
              Что обычно непонятно
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight mb-6">
              Чего собственник не знает до старта проектирования
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              На старте мало кто понимает, что именно можно разместить в помещении, как клинику правильно спроектировать и какие документы потребует лицензирование. Разбираем эти вопросы до договора.
            </p>
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
                  Непонятно клиенту
                </span>
                <h3 className="text-xl font-display font-semibold text-foreground mb-5 leading-snug">
                  {p.pain}
                </h3>
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-2 block">
                  Что делаем мы
                </span>
                <p className="text-muted-foreground leading-relaxed">{p.solution}</p>
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
