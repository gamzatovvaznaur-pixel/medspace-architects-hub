import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, ClipboardList, Sparkles } from "lucide-react";
import ConsentCheckbox from "./ConsentCheckbox";
import { submitLead } from "@/lib/submitLead";

const questions = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    question: "На каком этапе находится ваш проект?",
    options: [
      "Только идея, нужна консультация",
      "Есть помещение, нужен проект",
      "Есть проект, нужна доработка",
      "Нужна помощь с лицензированием",
      "Полный цикл «под ключ»",
    ],
  },
  {
    id: 4,
    question: "Какие услуги вас интересуют?",
    options: [
      "Архитектурное проектирование",
      "Инженерные системы (ОВиК, электрика, ВК)",
      "Технологическое проектирование",
      "Согласование и экспертиза",
      "Комплексное проектирование",
      "Я не знаю",
    ],
  },
  {
    id: 5,
    question: "Когда вы планируете начать?",
    options: [
      "В ближайший месяц",
      "В течение 3 месяцев",
      "В течение полугода",
      "Пока только изучаю вопрос",
    ],
  },
];

const transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

const buildQuizPayload = (answers: Record<number, string>, phone: string) => {
  const quizResults = questions.map((q, i) => `${q.question}: ${answers[i] || "—"}`).join("\n");
  const payload: Record<string, string> = { phone, quiz: quizResults };
  questions.forEach((q, i) => {
    payload[`question_${i + 1}`] = q.question;
    payload[`answer_${i + 1}`] = answers[i] || "—";
  });
  return payload;
};

const QuizSection = () => {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [phone, setPhone] = useState("+7");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const totalSteps = questions.length + 1; // questions + phone step
  const progress = started ? ((currentStep + 1) / totalSteps) * 100 : 0;

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: answer }));
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith("+7")) {
      value = "+7" + value.replace(/^\+?7?/, "");
    }
    setPhone(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert("Необходимо согласие на обработку персональных данных.");
      return;
    }
    setSending(true);

    try {
      await submitLead({
        formId: "xykllrgn",
        subject: "Квиз — расчёт стоимости — МедПроект",
        source: "QuizSection",
        data: buildQuizPayload(answers, phone),
      });
      setSubmitted(true);
    } catch {
      alert("Ошибка отправки. Попробуйте позже.");
    } finally {
      setSending(false);
    }
  };

  const isPhoneStep = currentStep === questions.length;
  const canProceed = !isPhoneStep && answers[currentStep] !== undefined;

  return (
    <section className="py-20 px-6 md:px-12 bg-secondary" id="quiz">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="dark-section rounded-3xl p-8 md:p-12 relative overflow-hidden ring-1 ring-border/80 shadow-2xl shadow-accent/10"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          {!started && !submitted && (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-1.5 rounded-full font-mono text-[10px] tracking-widest uppercase mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Бесплатный расчёт за 1 минуту
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 leading-tight">
                Получите предварительный расчёт стоимости проекта
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-base md:text-lg">
                Ответьте на 5 коротких вопросов о вашей клинике — и мы подготовим индивидуальную оценку проекта и сроки.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setStarted(true)}
                  className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest inline-flex items-center gap-2 cta-pulse"
                >
                  Начать квиз
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <ClipboardList className="w-4 h-4" />
                  5 вопросов · без регистрации
                </span>
              </div>
            </div>
          )}

          {started && !submitted && (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[10px] tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {isPhoneStep ? "ПОСЛЕДНИЙ ШАГ" : `ВОПРОС ${currentStep + 1} ИЗ ${questions.length}`}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden ring-1 ring-border/50">
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
                    key={currentStep}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-6">
                      {questions[currentStep].question}
                    </h3>
                    <div className="space-y-3">
                      {questions[currentStep].options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleAnswer(option)}
                          className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${
                            answers[currentStep] === option
                              ? "border-accent bg-accent/10 text-foreground font-medium"
                              : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                          }`}
                        >
                          {answers[currentStep] === option && (
                            <span className="inline-block w-2 h-2 rounded-full bg-accent mr-3 align-middle" />
                          )}
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
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
                      Отлично! Оставьте номер для получения расчёта
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm">
                      Мы свяжемся с вами в течение рабочего дня и предоставим предварительную оценку.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+7 (XXX) XXX-XX-XX"
                        className="w-full border border-border bg-card px-5 py-4 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                      <ConsentCheckbox
                        id="quiz-consent"
                        variant="dark"
                        checked={consent}
                        onChange={setConsent}
                      />
                      <button
                        type="submit"
                        disabled={sending || !consent}
                        className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {sending ? "Отправка..." : "Получить расчёт"}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="text-white/40 hover:text-white transition-colors disabled:opacity-0 inline-flex items-center gap-1 text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Назад
                </button>
                {!isPhoneStep && (
                  <button
                    onClick={handleNext}
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
  );
};

export default QuizSection;
