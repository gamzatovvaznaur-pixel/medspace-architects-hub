import { motion } from "framer-motion";
import { Shield, FileCheck, CheckCircle2, Building2 } from "lucide-react";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import InlineCallbackForm from "@/components/InlineCallbackForm";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const steps = [
  {
    title: "Аудит помещения",
    text: "Выезжаем на объект, проверяем соответствие СанПиН и СП. Сразу говорим, что нужно изменить.",
  },
  {
    title: "Проектная документация",
    text: "Готовим полный комплект: АР, ВК, ОВ, ЭО, технологию. Согласовываем с вами каждое решение.",
  },
  {
    title: "Подача в Роспотребнадзор",
    text: "Сопровождаем подачу документов на СЭЗ, отвечаем на замечания, вносим правки за свой счёт.",
  },
  {
    title: "Получение лицензии",
    text: "Помогаем подать заявление в Росздравнадзор и пройти выездную проверку.",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Гарантия получения СЭЗ",
    text: "Закреплено в договоре. Если Роспотребнадзор отказал по нашей вине — переделываем бесплатно и доводим до результата.",
  },
  {
    icon: FileCheck,
    title: "Фиксированная стоимость",
    text: "Цена в договоре не меняется. Все правки и доработки на этапе согласования включены.",
  },
  {
    icon: CheckCircle2,
    title: "Полное сопровождение",
    text: "Ведём проект от первого выезда до момента, когда вы принимаете первого пациента.",
  },
  {
    icon: Building2,
    title: "9 лет опыта, 38 клиник",
    text: "Все наши проекты прошли экспертизу и получили лицензии. Покажем кейсы и контакты заказчиков.",
  },
];

const Licensing = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <div className="min-h-screen bg-background">
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
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Берём на себя весь путь: от аудита помещения до получения медицинской лицензии. Гарантию получения санитарно-эпидемиологического заключения фиксируем в договоре.
            </p>
            <button
              onClick={openCallback}
              className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Обсудить ваш проект
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-12 max-w-2xl"
          >
            Что входит в гарантию
          </motion.h2>

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

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-12 max-w-2xl"
          >
            Как проходит лицензирование
          </motion.h2>

          <div className="space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.08 }}
                className="border border-border rounded-2xl p-8 flex gap-6"
              >
                <div className="shrink-0 font-display font-bold text-3xl text-accent w-12">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-xl">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <InlineCallbackForm
            id="licensing-callback"
            title="Узнать, подходит ли ваше помещение"
            description="Оставьте номер — перезвоним, зададим несколько вопросов и сразу скажем, реально ли получить лицензию по вашему адресу."
            subject="Заявка на лицензирование клиники"
          />
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Licensing;
