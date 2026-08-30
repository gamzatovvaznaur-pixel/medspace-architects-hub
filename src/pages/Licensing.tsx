import { motion } from "framer-motion";
import {
  Shield,
  FileCheck,
  CheckCircle2,
  Building2,
  AlertTriangle,
  Clock,
  FileText,
  Stethoscope,
  Ruler,
  Wind,
  Droplets,
  Zap,
  HelpCircle,
} from "lucide-react";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import InlineCallbackForm from "@/components/InlineCallbackForm";
import SEO from "@/components/SEO";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const steps = [
  {
    title: "Аудит помещения и предпроектное обследование",
    text: "Выезжаем на объект, замеряем площади и высоты, проверяем инженерные сети, оцениваем соответствие СанПиН 2.1.3678-20 и СП 158.13330.2014. На выходе — письменное заключение: что подходит, что нужно изменить, какие работы предстоят и сколько это займёт времени.",
    duration: "3–7 дней",
  },
  {
    title: "Технологическое задание и концепция",
    text: "Согласовываем перечень медицинских услуг, состав кабинетов, потоки пациентов и персонала, расстановку оборудования. На этом этапе закладываются все ключевые решения, от которых зависит, дадут СЭЗ или нет.",
    duration: "5–10 дней",
  },
  {
    title: "Проектная документация",
    text: "Готовим полный комплект разделов: архитектурные решения (АР), водоснабжение и канализация (ВК), отопление и вентиляция (ОВ), электроснабжение (ЭО), технология медицинских процессов, разделы по медицинским газам и слаботочным системам. Согласовываем с вами каждое решение.",
    duration: "20–40 дней",
  },
  {
    title: "Подача документов на СЭЗ",
    text: "Формируем пакет для Роспотребнадзора, сопровождаем подачу, отвечаем на запросы и замечания эксперта. Все правки и доработки на этом этапе — за наш счёт.",
    duration: "20–25 рабочих дней",
  },
  {
    title: "Получение санитарно-эпидемиологического заключения",
    text: "Получаем СЭЗ на ваш юридический адрес. С этим документом вы готовы подавать заявление на медицинскую лицензию на фактический адрес.",
    duration: "включено в этап 4",
  },
  {
    title: "Сопровождение лицензирования в Росздравнадзоре, Министерстве и Департаменте здравоохранения",
    text: "Помогаем собрать кадровые и правоустанавливающие документы, подать заявление, пройти выездную или документарную проверку. Доводим до момента, когда вы принимаете первого пациента.",
    duration: "до 15 рабочих дней",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Гарантия получения СЭЗ",
    text: "Закреплено в договоре. Если Роспотребнадзор отказал по причинам, связанным с проектом, — переделываем бесплатно и доводим до положительного заключения.",
  },
  {
    icon: FileCheck,
    title: "Фиксированная стоимость",
    text: "Цена в договоре не меняется. Все правки и доработки на этапе согласования с экспертизой включены в стоимость работ.",
  },
  {
    icon: CheckCircle2,
    title: "Полное сопровождение",
    text: "Ведём проект от первого выезда на объект до момента, когда клиника принимает первого пациента. Один инженер ведёт ваш проект от начала до конца.",
  },
  {
    icon: Building2,
    title: "9 лет опыта, 38 клиник",
    text: "Все наши проекты прошли экспертизу и получили лицензии. По запросу покажем кейсы, чертежи и контакты заказчиков — можно позвонить и спросить напрямую.",
  },
];

const requirements = [
  {
    icon: Ruler,
    title: "Площади и высоты",
    text: "Минимальные площади кабинетов по СанПиН: терапевт — от 12 м², стоматолог — от 14 м², хирург — от 18 м². Высота потолков — не менее 2,6 м, для рентген-кабинетов и операционных — от 3 м.",
  },
  {
    icon: Wind,
    title: "Вентиляция",
    text: "Приточно-вытяжная с механическим побуждением. Для операционных, перевязочных, стерилизационных и рентген-кабинетов — отдельные изолированные системы с фильтрацией.",
  },
  {
    icon: Droplets,
    title: "Водоснабжение и канализация",
    text: "Горячая и холодная вода в каждом кабинете, где принимают пациентов. Раковины с локтевым или сенсорным смесителем. Отдельная канализация для медицинских отходов класса Б и В.",
  },
  {
    icon: Zap,
    title: "Электроснабжение",
    text: "Первая категория надёжности для операционных и реанимаций. УЗО, заземление, резервное питание для критичного оборудования. Освещённость по СП 52.13330.2016.",
  },
  {
    icon: Stethoscope,
    title: "Технология процессов",
    text: "Разделение чистых и грязных потоков, отдельные зоны для пациентов и персонала, помещения для обработки инструмента, хранения отходов, гардеробные для сотрудников.",
  },
  {
    icon: FileText,
    title: "Документы на помещение",
    text: "Право собственности или долгосрочная аренда (от 5 лет), технический паспорт БТИ, согласие собственника на размещение медицинской деятельности.",
  },
];

const includes = [
  "Выезд инженера на объект и предпроектное обследование",
  "Технологическое задание со схемой расстановки оборудования",
  "Архитектурные решения (АР) с планами, разрезами, экспликацией",
  "Раздел водоснабжения и канализации (ВК)",
  "Раздел отопления и вентиляции (ОВ) с расчётом воздухообмена",
  "Раздел электроснабжения (ЭО) и слаботочных систем",
  "Технологический раздел с обоснованием потоков и зонирования",
  "Раздел медицинских газов (при необходимости)",
  "Пояснительная записка и спецификации оборудования",
  "Согласование проекта в Роспотребнадзоре, получение СЭЗ",
  "Сопровождение получения лицензии в Росздравнадзоре, Министерстве и Департаменте здравоохранения",
  "Отработка замечаний экспертизы за счёт исполнителя",
];

const risks = [
  {
    title: "Отказ в СЭЗ из-за ошибок в проекте",
    text: "Самая частая причина — некорректный расчёт воздухообмена, несоблюдение потоков или площадей. Потеря 2–4 месяцев и стоимости переделок.",
  },
  {
    title: "Запуск работ без проекта",
    text: "Сделанный ремонт приходится переделывать: переносить стены, перекладывать вентиляцию, менять расположение раковин. Дешевле один раз спроектировать.",
  },
  {
    title: "Проектировщик без медицинского профиля",
    text: "Общестроительный проектировщик не знает специфики СанПиН для медицины. Документы либо не принимают, либо тянут согласование месяцами.",
  },
  {
    title: "Аренда помещения, не подходящего под лицензию",
    text: "Подвал без естественного света, низкие потолки, отсутствие вентиляционных шахт — лицензию на такое помещение не получить никогда. Проверяем до подписания договора аренды.",
  },
];

const faq = [
  {
    q: "Сколько времени занимает весь процесс от договора до лицензии?",
    a: "В среднем 2,5–4 месяца. Проектирование — 1–1,5 месяца, согласование СЭЗ — 20–25 рабочих дней, лицензирование — до 15 рабочих дней. Если помещение требует серьёзных переделок, добавляется время на стройку.",
  },
  {
    q: "Что делать, если я ещё не выбрал помещение?",
    a: "Это лучший момент, чтобы нам позвонить. Выедем с вами на просмотр, проверим помещение по чек-листу СанПиН и скажем, можно ли получить на него лицензию. Услуга бесплатная, если потом заключаем договор на проект.",
  },
  {
    q: "Можно ли получить лицензию на жилое помещение или цоколь?",
    a: "На жилое — нет, нужен перевод в нежилой фонд. На цокольный этаж — можно для большинства профилей, кроме стационаров, рентгена и некоторых хирургических услуг. Проверяем индивидуально.",
  },
  {
    q: "Что входит в гарантию получения СЭЗ?",
    a: "Если Роспотребнадзор выдаст отказ по причинам, связанным с проектной документацией, мы за свой счёт вносим все правки и сопровождаем повторную подачу до получения положительного заключения. Гарантия фиксируется в договоре.",
  },
  {
    q: "Работаете ли вы в регионах?",
    a: "Да, проектируем по всей России. Выезд инженера на объект — в стоимости договора для любого региона. Согласование с местными отделениями Роспотребнадзора берём на себя.",
  },
  {
    q: "Можно ли разбить оплату на этапы?",
    a: "Да, стандартная схема: 30% — на старте, 40% — после согласования проектных решений с вами, 30% — после получения СЭЗ. Возможны другие графики под ваш проект.",
  },
];

const Licensing = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Лицензирование медицинской деятельности под ключ — СЭЗ и лицензия Росздравнадзора"
        description="Полное сопровождение лицензирования клиники: СЭЗ за 20–25 рабочих дней, лицензия Росздравнадзора до 15 рабочих дней. Гарантия получения зафиксирована в договоре."
        path="/licensing"
        keywords="лицензирование медицинской деятельности, СЭЗ, медицинская лицензия, Росздравнадзор, Роспотребнадзор, СанПиН 2.1.3678-20, лицензия клиники под ключ"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Лицензирование медицинских учреждений",
            provider: { "@type": "Organization", name: "МедПроект" },
            areaServed: { "@type": "Country", name: "Russia" },
            description:
              "Получение СЭЗ Роспотребнадзора и медицинской лицензии Росздравнадзора под ключ с гарантией.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <HeaderNav />

      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Лицензирование медицинской деятельности
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
              Лицензируем клиники под ключ с гарантией получения СЭЗ
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
              Берём на себя весь путь: от первого выезда на объект до момента, когда вы принимаете первого пациента. Проектируем по СанПиН 2.1.3678-20, согласовываем с Роспотребнадзором, сопровождаем в Росздравнадзоре.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Гарантия получения санитарно-эпидемиологического заключения зафиксирована в договоре. Если откажут по нашей вине — переделываем за свой счёт.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={openCallback}
                className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Обсудить ваш проект
              </button>
              <a
                href="#process"
                className="border border-border px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:bg-secondary transition-colors text-center"
              >
                Как мы работаем
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <RecommendationsSection className="bg-card" />

      <section className="py-20 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-12 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Что входит в гарантию
            </h2>
            <p className="text-muted-foreground text-lg">
              Четыре обязательства, под которыми мы готовы подписаться в договоре.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.08 }}
                className="border border-border bg-background rounded-2xl p-8 flex gap-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <g.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{g.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{g.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-12 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Как проходит лицензирование
            </h2>
            <p className="text-muted-foreground text-lg">
              Шесть этапов от первого звонка до приёма пациентов. Сроки указаны ориентировочно — для каждого объекта считаем индивидуально.
            </p>
          </motion.div>

          <div className="space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.06 }}
                className="border border-border rounded-2xl p-8 flex gap-6"
              >
                <div className="shrink-0 font-display font-bold text-3xl text-accent w-12">
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-foreground text-xl">{s.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                      <Clock className="w-4 h-4" />
                      {s.duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-12 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Требования к помещению под медицинскую лицензию
            </h2>
            <p className="text-muted-foreground text-lg">
              Шесть ключевых параметров, по которым Роспотребнадзор оценивает помещение. Если хотя бы один не выполнен — лицензию не получить.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requirements.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.06 }}
                className="border border-border bg-background rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <InlineCallbackForm
            id="licensing-callback-mid"
            title="Проверим ваше помещение бесплатно"
            description="Оставьте номер — перезвоним, зададим несколько вопросов и сразу скажем, реально ли получить лицензию по вашему адресу."
            subject="Заявка на проверку помещения"
          />
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-12 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Что входит в работы по договору
            </h2>
            <p className="text-muted-foreground text-lg">
              Полный список разделов и услуг. Ничего «дополнительно» в процессе не возникает — всё указано в договоре с первого дня.
            </p>
          </motion.div>

          <div className="bg-background border border-border rounded-2xl p-8 md:p-10">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-12 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Чем рискуют клиники без правильного проекта
            </h2>
            <p className="text-muted-foreground text-lg">
              Четыре сценария, с которыми к нам приходят после неудачного опыта. Каждый стоит от 500 тысяч рублей и нескольких месяцев простоя.
            </p>
          </motion.div>

          <div className="space-y-4">
            {risks.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.06 }}
                className="border border-border rounded-2xl p-6 md:p-8 flex gap-5"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{r.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-12 max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Частые вопросы про лицензирование
            </h2>
            <p className="text-muted-foreground text-lg">
              Если вашего вопроса здесь нет — позвоните, разберём вашу ситуацию по телефону.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="bg-background border border-border rounded-2xl px-6 md:px-8">
            {faq.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-b last:border-b-0">
                <AccordionTrigger className="text-left font-display font-semibold text-foreground text-base md:text-lg py-6 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <InlineCallbackForm
            id="licensing-callback-final"
            title="Готовы обсудить ваш проект"
            description="Расскажите про помещение и планируемые услуги — за один звонок дадим оценку сроков, бюджета и шансов на положительное заключение СЭЗ."
            subject="Заявка на лицензирование клиники"
          />
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Licensing;
