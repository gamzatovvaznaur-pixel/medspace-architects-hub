import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  ShieldCheck,
  ClipboardList,
  Building2,
  FileCheck2,
  Sparkles,
  Ruler,
} from "lucide-react";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";
import HeaderNav from "@/components/HeaderNav";
import heroImg from "@/assets/hero-blueprint.jpg";

const FORMSPREE_URL = "https://formspree.io/f/xykllrgn";
const PHONE_DISPLAY = "+7 (918) 263-36-27";
const PHONE_HREF = "tel:+79182633627";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const journey = [
  {
    icon: Phone,
    code: "01",
    title: "Бесплатная консультация",
    text: "Обсудим вашу идею, формат клиники и помещение. Подскажем, что реально согласовать с Роспотребнадзором, а что лучше переработать.",
  },
  {
    icon: Ruler,
    code: "02",
    title: "Выезд на объект и обмер",
    text: "Наш специалист приезжает на помещение, делает точные обмеры и фиксирует все инженерные особенности. Без этого корректный проект невозможен.",
  },
  {
    icon: ClipboardList,
    code: "03",
    title: "Эскиз и согласование планировки",
    text: "Готовим расстановку кабинетов с учётом норм СанПиН и СП. Вносим правки до тех пор, пока вам не понравится результат.",
  },
  {
    icon: Building2,
    code: "04",
    title: "Проектная и рабочая документация",
    text: "Разрабатываем все разделы: архитектура, ОВиК, электрика, водоснабжение, технология. Документация — в формате, который принимает Роспотребнадзор.",
  },
  {
    icon: FileCheck2,
    code: "05",
    title: "Сопровождение получения СЭЗ",
    text: "Подаём документы, отвечаем на вопросы инспектора, корректируем замечания. Доводим вас до санитарно-эпидемиологического заключения.",
  },
];

const stats2025 = [
  { value: "17", label: "стоматологий" },
  { value: "9", label: "многопрофильных клиник" },
  { value: "4", label: "клиники косметологии" },
  { value: "5", label: "медицинских лабораторий" },
  { value: "3", label: "МРТ-кабинета" },
];

const guarantees = [
  "Все нормы СанПиН 2.1.3678-20, СП 158.13330 и приказа № 1097н учтены в проекте",
  "Документация принимается Роспотребнадзором — иначе дорабатываем за свой счёт",
  "Прозрачные сроки и фиксированная стоимость в договоре",
  "Профильные специалисты с опытом в медицинском проектировании от 7 лет",
];

const questions = [
  {
    question: "Какой тип медицинского учреждения вы планируете?",
    options: [
      "Стоматологическая клиника",
      "Многопрофильная клиника",
      "Косметологический центр",
      "Лаборатория / диагностика",
      "Другое",
    ],
  },
  {
    question: "Какова примерная площадь помещения?",
    options: [
      "До 100 м²",
      "100–300 м²",
      "300–600 м²",
      "600–1000 м²",
      "Более 1000 м²",
    ],
  },
  {
    question: "На каком этапе сейчас ваш проект?",
    options: [
      "Только идея, нужна консультация",
      "Есть помещение, нужен проект",
      "Есть проект, нужна доработка",
      "Нужна помощь с СЭЗ Роспотребнадзора",
    ],
  },
  {
    question: "Когда планируете начать?",
    options: [
      "В ближайший месяц",
      "В течение 3 месяцев",
      "В течение полугода",
      "Пока изучаю вопрос",
    ],
  },
];

const Landing = () => {
  const { openCallback } = useCallbackDialog();

  // SEO + noindex (страница только по прямой ссылке)
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Проект клиники под СЭЗ Роспотребнадзора | МедПроект";

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    const desc = document.createElement("meta");
    desc.name = "description";
    desc.content =
      "Проектирование медицинских клиник под получение санитарно-эпидемиологического заключения Роспотребнадзора. От эскиза до лицензии.";
    document.head.appendChild(desc);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(meta);
      document.head.removeChild(desc);
    };
  }, []);

  // Quiz state
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [phone, setPhone] = useState("+7");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = questions.length + 1;
  const progress = started ? ((step + 1) / totalSteps) * 100 : 0;
  const isPhoneStep = step === questions.length;
  const canProceed = !isPhoneStep && answers[step] !== undefined;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith("+7")) {
      value = "+7" + value.replace(/^\+?7?/, "");
    }
    setPhone(value);
  };

  const handleSubmitQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("source", "Landing /landing");
      formData.append(
        "_subject",
        "Лендинг — заявка с квиза — МедПроект",
      );
      questions.forEach((q, i) => {
        formData.append(`question_${i + 1}`, q.question);
        formData.append(`answer_${i + 1}`, answers[i] || "—");
      });
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      alert("Ошибка отправки. Попробуйте позже или позвоните нам.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 overflow-hidden dark-section">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,10%)] via-[hsl(220,15%,10%)/80%] to-transparent" />

        <div className="relative max-w-7xl mx-auto w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="font-mono text-xs tracking-widest uppercase text-accent mb-6 inline-flex items-center gap-2"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Проект под СЭЗ Роспотребнадзора
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white max-w-5xl mb-6 leading-[1.05] tracking-tight"
          >
            От идеи до лицензии: проект клиники, который пройдёт Роспотребнадзор
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.35 }}
            className="text-lg md:text-xl text-white/65 max-w-2xl mb-10 leading-relaxed"
          >
            Разрабатываем проектную документацию для медицинских учреждений с учётом всех санитарных норм. Сопровождаем до получения санитарно-эпидемиологического заключения.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={openCallback}
              className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Получить консультацию
            </button>
            <a
              href="#quiz"
              className="border border-white/20 text-white px-10 py-4 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-white/10 transition-colors text-center"
            >
              Рассчитать стоимость
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10"
          >
            {[
              { v: "СанПиН 2.1.3678-20", l: "проектируем строго по нормам" },
              { v: "СЭЗ под ключ", l: "доводим до заключения Роспотребнадзора" },
              { v: "От 7 лет опыта", l: "только медицинские объекты" },
            ].map((s, i) => (
              <div
                key={i}
                className={`py-8 ${i > 0 ? "md:border-l border-t md:border-t-0 border-white/10 md:pl-8" : ""}`}
              >
                <span className="text-xl md:text-2xl font-display font-bold text-white">
                  {s.v}
                </span>
                <p className="text-sm text-white/50 mt-1">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY: что значит «проект под СЭЗ» */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Что вы получаете
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6 leading-tight">
              Готовый комплект документации, с которым клиника получает разрешение работать
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Мы создаём проект медицинского учреждения, который соответствует требованиям Роспотребнадзора. На его основе вы получаете санитарно-эпидемиологическое заключение — документ, без которого клинику нельзя лицензировать и открыть.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.05 }}
                className="flex gap-3 p-5 rounded-2xl bg-secondary/60 border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{g}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={openCallback}
              className="bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Обсудить мой объект
            </button>
          </div>
        </div>
      </section>

      {/* JOURNEY: путь клиента */}
      <section className="py-20 px-6 md:px-12 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-14"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Путь от идеи до клиники
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground max-w-3xl leading-tight">
              5 этапов — и у вас на руках проект, готовый к подаче в Роспотребнадзор
            </h2>
          </motion.div>

          <div className="space-y-4">
            {journey.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.06 }}
                className="group flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-2xl bg-background border border-border hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-5 md:w-72 shrink-0">
                  <span className="font-mono text-xs tracking-widest text-accent">{s.code}</span>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={openCallback}
              className="bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Начать с консультации
            </button>
            <p className="text-xs text-muted-foreground mt-3">
              Бесплатно. Ответим в течение рабочего дня.
            </p>
          </div>
        </div>
      </section>

      {/* STATS 2025 — что мы спроектировали за год */}
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
              Итоги 2025 года
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
              За 2025 год мы спроектировали
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Каждый объект — с полным комплектом документации под санитарно-эпидемиологическое заключение Роспотребнадзора.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {stats2025.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.06 }}
                className="bg-background p-8 flex flex-col gap-2"
              >
                <span className="font-display font-bold text-5xl md:text-6xl text-foreground tracking-tight">
                  {s.value}
                </span>
                <span className="text-sm text-muted-foreground leading-snug">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA — тёмный баннер */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="dark-section rounded-3xl p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <Sparkles className="w-6 h-6 text-accent mb-4" />
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3 leading-tight">
                Не уверены, какой проект нужен именно вам?
              </h2>
              <p className="text-white/65 leading-relaxed">
                Расскажите про объект — подскажем, какие разделы документации потребуются, сколько это займёт и каких затрат ждать. Без воды и обязательств.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={openCallback}
                className="bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Заказать звонок
              </button>
              <a
                href={PHONE_HREF}
                className="border border-white/20 text-white px-8 py-3.5 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-white/10 transition-colors text-center"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUIZ — встроенный, без перехода */}
      <section id="quiz" className="py-20 px-6 md:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="dark-section rounded-3xl p-8 md:p-12"
          >
            {!started && !submitted && (
              <div className="text-center">
                <span className="font-mono text-[10px] tracking-widest text-accent mb-4 block">
                  РАСЧЁТ ЗА 1 МИНУТУ
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
                  Узнайте предварительную стоимость проекта
                </h2>
                <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
                  4 коротких вопроса — и мы подготовим индивидуальную оценку для вашего объекта.
                </p>
                <button
                  onClick={() => setStarted(true)}
                  className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  Начать <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {started && !submitted && (
              <>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[10px] tracking-widest text-accent">
                      {isPhoneStep
                        ? "ПОСЛЕДНИЙ ШАГ"
                        : `ВОПРОС ${step + 1} ИЗ ${questions.length}`}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-white/40">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!isPhoneStep ? (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-6">
                        {questions[step].question}
                      </h3>
                      <div className="space-y-3">
                        {questions[step].options.map((option) => (
                          <button
                            key={option}
                            onClick={() =>
                              setAnswers((p) => ({ ...p, [step]: option }))
                            }
                            className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                              answers[step] === option
                                ? "border-accent bg-accent/10 text-white"
                                : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="phone"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-3">
                        Оставьте номер — пришлём расчёт
                      </h3>
                      <p className="text-white/60 mb-6 text-sm">
                        Мы свяжемся в течение рабочего дня.
                      </p>
                      <form onSubmit={handleSubmitQuiz} className="space-y-4">
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="+7 (XXX) XXX-XX-XX"
                          className="w-full border border-white/20 bg-white/5 px-5 py-4 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                        />
                        <button
                          type="submit"
                          disabled={sending}
                          className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                          {sending ? "Отправка..." : "Получить расчёт"}
                        </button>
                        <p className="text-[10px] text-white/40 leading-relaxed">
                          Нажимая кнопку, вы соглашаетесь с{" "}
                          <a
                            href="#/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white/70"
                          >
                            политикой обработки персональных данных
                          </a>
                          .
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="text-white/40 hover:text-white transition-colors disabled:opacity-0 inline-flex items-center gap-1 text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Назад
                  </button>
                  {!isPhoneStep && (
                    <button
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canProceed}
                      className="text-accent hover:text-accent/80 transition-colors disabled:opacity-30 inline-flex items-center gap-1 text-sm font-medium"
                    >
                      Далее
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </>
            )}

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={transition}
                className="text-center py-6"
              >
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-display font-semibold text-white mb-2">
                  Заявка принята
                </h3>
                <p className="text-white/60 max-w-md mx-auto">
                  Мы подготовим расчёт и свяжемся с вами в ближайшее время.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-5 leading-tight">
              Сделайте первый шаг к открытию клиники
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Оставьте заявку — обсудим ваш объект и подготовим персональное предложение.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={openCallback}
                className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Заказать звонок
              </button>
              <a
                href={PHONE_HREF}
                className="border border-border text-foreground px-10 py-4 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-secondary transition-colors text-center"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Минимальный футер */}
      <footer className="border-t border-border py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            © МедПроект — Проектирование медицинских учреждений
          </span>
          <a
            href="#/privacy"
            className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Политика конфиденциальности
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
