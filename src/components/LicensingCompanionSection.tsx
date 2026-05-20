import { motion } from "framer-motion";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const promises = [
  {
    title: "Объясняем простыми словами",
    text: "Без терминов, ребусов и сложных формулировок. Если что-то непонятно — расскажем ещё раз, нарисуем схему, покажем на чертеже.",
  },
  {
    title: "Идём с вами до лицензии",
    text: "Не сдаём проект и не исчезаем. Готовим документы для СЭЗ, отвечаем на замечания, помогаем подать заявление в Росздравнадзор.",
  },
  {
    title: "Говорим, когда не стоит",
    text: "Если помещение не подходит под лицензию — скажем сразу. Если выбранная концепция не окупится — обсудим. Честность дороже одного контракта.",
  },
  {
    title: "Отвечаем на ваши звонки",
    text: "У вас будет один человек, который ведёт ваш проект. Не диспетчер, не чат-бот, не «вам перезвонят». Прямой контакт с инженером.",
  },
];

const LicensingCompanionSection = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <section className="py-24 px-6 md:px-12 dark-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Наш подход
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Вы получаете не проект, а спутника в лицензировании
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              Большинство клиентов приходят к нам после неудачного опыта: предыдущий проектировщик сделал чертежи и пропал, а человек остался один на один с Роспотребнадзором, замечаниями и переделками.
            </p>
            <p className="text-white/65 text-lg leading-relaxed mb-10">
              Мы работаем иначе. С первого звонка и до момента, когда вы принимаете первого пациента — на вашей стороне.
            </p>
            <button
              onClick={openCallback}
              className="bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Поговорить с инженером
            </button>
          </motion.div>

          <div className="space-y-4">
            {promises.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.08 }}
                className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]"
              >
                <h3 className="font-display font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensingCompanionSection;
