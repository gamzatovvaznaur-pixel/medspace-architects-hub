import { motion } from "framer-motion";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import StatsSection from "@/components/StatsSection";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";
import certNopriz from "@/assets/cert-nopriz.png";
import certIso from "@/assets/cert-iso.png";

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

const facts = [
  {
    title: "Что мы делаем",
    text: "Проектирование медицинских учреждений под ключ: технологические решения, архитектура, инженерные системы, авторский надзор. Полный комплект документации под санитарно-эпидемиологическое заключение Роспотребнадзора.",
  },
  {
    title: "Специализация",
    text: "Только медицинские объекты: стоматологии, многопрофильные клиники, косметология, лаборатории, МРТ/КТ-кабинеты, офтальмология. Работаем с частными инвесторами, сетевыми клиниками и государственными структурами.",
  },
  {
    title: "География",
    text: "Россия и страны СНГ. Используем практику дистанционного проектирования: ведущие специалисты выезжают на объект для изысканий и авторского надзора, основная команда работает из офиса.",
  },
  {
    title: "Подход",
    text: "Поэтапное согласование с заказчиком на основании визуальных и графических вариантов. Выбор материалов и оборудования конкретных производителей с фиксированной ценой и сроками поставки — без сюрпризов в смете.",
  },
];

const certificates = [
  {
    img: certNopriz,
    title: "СРО НОПРИЗ",
    subtitle: "Союз проектных организаций «ПроЭк»",
    meta: "Рег. № П-185-231119468748-3166 · Действует с 06.04.2026",
    desc: "Право подготовки проектной документации для объектов капитального строительства.",
  },
  {
    img: certIso,
    title: "ГОСТ Р ИСО 9001-2015",
    subtitle: "Система менеджмента качества",
    meta: "№ РОСС RU.31381.04ИБИ0/СМК.22417 · Срок до 07.04.2029",
    desc: "Подтверждает соответствие процессов проектирования международным стандартам качества.",
  },
];

const AboutPage = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 dark-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-6 block">
              О компании
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white max-w-5xl mb-8 leading-[1.05]">
              МедПроект — проектное бюро полного цикла
            </h1>
            <p className="text-lg md:text-xl text-white/55 max-w-3xl leading-relaxed">
              Проектируем медицинские учреждения по всей России и СНГ. Лицензии СРО НОПРИЗ и сертификат ИСО 9001-2015 — работаем легально и по стандартам.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { value: "38", label: "проектов за 2025 год" },
              { value: "12+", label: "регионов России и СНГ" },
              { value: "100%", label: "прохождение Роспотребнадзора" },
              { value: "ИСО 9001", label: "сертифицированные процессы" },
            ].map((stat, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-6">
                <span className="text-2xl md:text-3xl font-display font-bold text-accent">{stat.value}</span>
                <p className="text-sm text-white/50 mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facts grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-12 max-w-3xl"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Факты
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Коротко о компании
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {facts.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.06 }}
                className="bg-background p-8 md:p-10"
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3 block">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Certificates */}
      <section className="py-20 px-6 md:px-12 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-12 max-w-3xl"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Лицензии и сертификаты
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Документы, подтверждающие право на работу
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Все необходимые допуски для проектирования медицинских объектов любой сложности — кроме особо опасных и атомной энергетики.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{c.subtitle}</p>
                  <p className="font-mono text-[11px] tracking-wide text-accent mb-4">
                    {c.meta}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 dark-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Начните с бесплатной консультации
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Расскажите нам о вашем проекте — подготовим предварительную оценку сроков и стоимости.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openCallback}
                className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Заказать звонок
              </button>
              <button
                onClick={openCallback}
                className="border border-white/20 text-white px-10 py-4 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Оставить заявку
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AboutPage;
