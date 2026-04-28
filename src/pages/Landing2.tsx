import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  ShieldCheck,
  FileSignature,
  Ruler,
  ClipboardCheck,
  Copy,
  Check,
  Wallet,
  Clock,
} from "lucide-react";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";
import HeaderNav from "@/components/HeaderNav";
import CasesSection from "@/components/CasesSection";
import heroImg from "@/assets/hero-blueprint.jpg";

const FORMSPREE_QUIZ = "https://formspree.io/f/xykllrgn";
const FORMSPREE_CONTACT = "https://formspree.io/f/xlgaaqrw";
const PHONE_DISPLAY = "+7 (918) 263-36-27";
const PHONE_RAW = "+79182633627";
const PHONE_HREF = "tel:+79182633627";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const stages = [
  {
    icon: FileSignature,
    code: "01",
    title: "Заявка и договор",
    text: "Бесплатная консультация, обсуждение задачи, фиксация сроков и стоимости в договоре. Прозрачные условия без скрытых доплат.",
  },
  {
    icon: Ruler,
    code: "02",
    title: "Обмер помещения",
    text: "Выезд специалиста на объект: точные обмеры, фиксация инженерных особенностей, фотофиксация. Без этого корректный проект невозможен.",
  },
  {
    icon: ClipboardCheck,
    code: "03",
    title: "Проектирование",
    text: "Разработка всех разделов: архитектура, ОВиК, электрика, водоснабжение, технология. Документация — в формате, который принимает Роспотребнадзор.",
  },
  {
    icon: CheckCircle2,
    code: "04",
    title: "Сдача проекта",
    text: "Передаём готовый комплект документации, согласовываем правки и сопровождаем при необходимости вплоть до получения СЭЗ.",
  },
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
    options: ["До 100 м²", "100–300 м²", "300–600 м²", "600–1000 м²", "Более 1000 м²"],
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
    options: ["В ближайший месяц", "В течение 3 месяцев", "В течение полугода", "Пока изучаю вопрос"],
  },
];

// Мини-форма обратной связи (используется дважды)
const ContactForm = ({ subjectTag }: { subjectTag: string }) => {
  const [phone, setPhone] = useState("+7");
  const [description, setDescription] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch(FORMSPREE_CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          description,
          source: "Landing /landing2",
          _subject: `Лендинг 2 — ${subjectTag} — МедПроект`,
        }),
      });
      setSubmitted(true);
    } catch {
      alert("Ошибка отправки. Попробуйте позже.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-border rounded-2xl p-8 text-center bg-secondary/40">
        <span className="font-mono text-[10px] tracking-widest text-accent block mb-3">ОТПРАВЛЕНО</span>
        <p className="text-xl font-display font-medium text-foreground">Заявка отправлена</p>
        <p className="text-muted-foreground mt-2">Свяжемся с вами в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-border rounded-2xl p-6 md:p-8 bg-secondary/40">
      <div>
        <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
          Номер телефона
        </label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => {
            let v = e.target.value;
            if (!v.startsWith("+7")) v = "+7" + v.replace(/^\+?7?/, "");
            setPhone(v);
          }}
          className="w-full border border-border bg-background px-4 py-3 rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors"
          placeholder="+7 (XXX) XXX-XX-XX"
        />
      </div>
      <div>
        <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
          Кратко о проекте (необязательно)
        </label>
        <textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-border bg-background px-4 py-3 rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Тип объекта, площадь, особые требования..."
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {sending ? "Отправка..." : "Отправить заявку"}
      </button>
      <p className="text-[10px] text-muted-foreground/70 leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="#/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
          политикой обработки персональных данных
        </a>
        .
      </p>
    </form>
  );
};

const Landing2 = () => {
  const { openCallback } = useCallbackDialog();
  const [copied, setCopied] = useState(false);

  // SEO + noindex
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Проект медицинской клиники под ключ | МедПроект";

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    const desc = document.createElement("meta");
    desc.name = "description";
    desc.content =
      "Создаём проект клиники за 3 этапа: договор, проектирование, сдача. Сопровождение в Роспотребнадзоре, СЭЗ.";
    document.head.appendChild(desc);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(meta);
      document.head.removeChild(desc);
    };
  }, []);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_RAW);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

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

  const handleSubmitQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("source", "Landing /landing2");
      formData.append("_subject", "Лендинг 2 — заявка с квиза — МедПроект");
      questions.forEach((q, i) => {
        formData.append(`question_${i + 1}`, q.question);
        formData.append(`answer_${i + 1}`, answers[i] || "—");
      });
      const res = await fetch(FORMSPREE_QUIZ, {
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

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
            Проект клиники под СЭЗ Роспотребнадзора
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white max-w-5xl mb-6 leading-[1.05] tracking-tight"
          >
            Проект медицинской клиники под ключ — за 3 этапа
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.35 }}
            className="text-lg md:text-xl text-white/65 max-w-2xl mb-10 leading-relaxed"
          >
            Договор → проектирование → сдача. Сопровождаем экспертизу в Роспотребнадзоре и доводим до санитарно-эпидемиологического заключения.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={openCallback}
              className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Получить консультацию
            </button>
            <button
              onClick={() => scrollToId("quiz")}
              className="border border-white/20 text-white px-10 py-4 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Рассчитать стоимость
            </button>
          </motion.div>
        </div>
      </section>

      {/* PHONE BLOCK */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="text-center"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Позвоните нам прямо сейчас
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">
              Ответим на любой вопрос по проекту вашей клиники
            </h2>

            <div className="inline-flex flex-col items-center gap-6 p-8 md:p-12 rounded-3xl border border-border bg-secondary/40 w-full">
              <Phone className="w-10 h-10 text-accent" />
              <a
                href={PHONE_HREF}
                className="font-display font-bold text-foreground hover:text-accent transition-colors text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight select-all break-all"
              >
                {PHONE_DISPLAY}
              </a>
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-xl font-display text-xs font-medium uppercase tracking-widest hover:bg-secondary transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-accent" />
                    Скопировано
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Скопировать номер
                  </>
                )}
              </button>
              <p className="text-sm text-muted-foreground">Пн–Пт: 9:00–19:00 (МСК)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 STAGES */}
      <section className="py-20 px-6 md:px-12 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-14 max-w-3xl"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Как мы работаем
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
              Создадим проект вашей клиники за 3 этапа
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Чёткая последовательность шагов. Вы всегда знаете, что происходит сейчас и что будет дальше.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {stages.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.06 }}
                className="flex gap-5 p-7 rounded-2xl bg-background border border-border hover:border-accent/40 transition-colors"
              >
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-accent">{s.code}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM #1 */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-8 text-center"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Оставить заявку
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
              Расскажите о вашем проекте
            </h2>
            <p className="text-muted-foreground mt-3">
              Перезвоним в течение рабочего дня и обсудим детали.
            </p>
          </motion.div>
          <ContactForm subjectTag="заявка верх" />
        </div>
      </section>

      {/* APPROVAL PROCEDURE */}
      <section className="py-20 px-6 md:px-12 bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Этап 3 — процедура утверждения
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6 leading-tight">
              Сопровождаем экспертизу в Роспотребнадзоре
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Вы подаёте проектную документацию в Роспотребнадзор на санитарно-эпидемиологическую экспертизу. Мы проходим этот путь вместе с вами: отвечаем на замечания инспектора, дорабатываем недочёты, доводим проект до получения СЭЗ.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Подготовка пакета документов под подачу",
              "Сопровождение на экспертизе",
              "Отработка замечаний инспектора",
              "Доработка документации до получения СЭЗ",
            ].map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.05 }}
                className="flex gap-3 p-5 rounded-2xl bg-background border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{g}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={openCallback}
              className="bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Обсудить мой проект
            </button>
          </div>
        </div>
      </section>

      {/* QUIZ */}
      <section className="py-20 px-6 md:px-12 bg-secondary" id="quiz">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="dark-section rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {!started && !submitted && (
              <div className="text-center">
                <span className="font-mono text-[10px] tracking-widest text-accent mb-4 block">КВИЗ</span>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
                  Получите предварительный расчёт стоимости
                </h2>
                <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
                  Ответьте на 4 коротких вопроса — подготовим индивидуальную оценку проекта.
                </p>
                <button
                  onClick={() => setStarted(true)}
                  className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  Начать
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {started && !submitted && (
              <>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[10px] tracking-widest text-accent">
                      {isPhoneStep ? "ПОСЛЕДНИЙ ШАГ" : `ВОПРОС ${step + 1} ИЗ ${questions.length}`}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-white/40">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      initial={{ width: 0 }}
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
                            onClick={() => setAnswers((p) => ({ ...p, [step]: option }))}
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
                        Отлично! Оставьте номер для получения расчёта
                      </h3>
                      <p className="text-white/60 mb-6 text-sm">
                        Мы свяжемся с вами в течение рабочего дня и предоставим предварительную оценку.
                      </p>
                      <form onSubmit={handleSubmitQuiz} className="space-y-4">
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => {
                            let v = e.target.value;
                            if (!v.startsWith("+7")) v = "+7" + v.replace(/^\+?7?/, "");
                            setPhone(v);
                          }}
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
                          <a href="#/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/70">
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
                    onClick={() => step > 0 && setStep((s) => s - 1)}
                    disabled={step === 0}
                    className="text-white/40 hover:text-white transition-colors disabled:opacity-0 inline-flex items-center gap-1 text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Назад
                  </button>
                  {!isPhoneStep && (
                    <button
                      onClick={() => step < questions.length && setStep((s) => s + 1)}
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
                  Спасибо за ваши ответы!
                </h3>
                <p className="text-white/60 max-w-md mx-auto">
                  Мы подготовим предварительный расчёт и свяжемся с вами в ближайшее время.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* PRICE & TERMS */}
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
              Стоимость и сроки
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
              Прозрачные цифры — без сюрпризов
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transition}
              className="p-8 md:p-10 rounded-2xl bg-secondary/60 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Wallet className="w-5 h-5 text-accent" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-3 block">
                Средняя цена проектирования
              </span>
              <div className="flex items-baseline gap-2 mb-3 flex-wrap">
                <span className="text-4xl md:text-5xl font-display font-bold text-foreground">2 000–10 000 ₽</span>
                <span className="text-muted-foreground">/ м²</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Стоимость зависит от площади помещения и специфики медицинского профиля.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-secondary/60 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-3 block">
                Срок выполнения
              </span>
              <div className="flex items-baseline gap-2 mb-3 flex-wrap">
                <span className="text-4xl md:text-5xl font-display font-bold text-foreground">15–90</span>
                <span className="text-muted-foreground">рабочих дней</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Точные сроки фиксируем в договоре после обмера и согласования технического задания.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => scrollToId("quiz")}
              className="bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Рассчитать стоимость моего проекта
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM #2 */}
      <section className="py-20 px-6 md:px-12 bg-secondary/40">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="mb-8 text-center"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Готовы начать?
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
              Оставьте заявку — рассчитаем стоимость и сроки
            </h2>
          </motion.div>
          <ContactForm subjectTag="заявка низ" />
        </div>
      </section>

      {/* CASES */}
      <CasesSection />

      {/* FOOTER MINIMAL */}
      <footer className="py-10 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} МедПроект. Проектирование медицинских учреждений.</span>
          <div className="flex items-center gap-6">
            <a href={PHONE_HREF} className="hover:text-foreground transition-colors">
              {PHONE_DISPLAY}
            </a>
            <a href="#/privacy" className="hover:text-foreground transition-colors">
              Политика
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing2;
