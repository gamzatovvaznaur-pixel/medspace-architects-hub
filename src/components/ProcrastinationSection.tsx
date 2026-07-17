import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Clock } from "lucide-react";
import ConsentCheckbox from "./ConsentCheckbox";
import { submitLead } from "@/lib/submitLead";

const transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

const regrets = [
  "«Потеряли полгода — переделывали проект после отказа Роспотребнадзора»",
  "«Подписали договор без фикс. цены — итог в 1,8 раза дороже сметы»",
  "«Заказали оборудование до проекта — половина не встала по нормам»",
  "«Открытие сдвинулось на сезон — упустили запуск под высокий спрос»",
];

const ProcrastinationSection = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSending(true);
    try {
      await submitLead({
        formId: "mdapgwjz",
        subject: "Чек-лист: 3 ошибки при выборе подрядчика — заявка",
        source: "ProcrastinationSection",
        data: { email },
      });
      setSent(true);
    } catch {
      alert("Ошибка отправки. Попробуйте позже.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Что говорят клиенты
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight mb-6">
            Почему жалеют, что не начали раньше
          </h2>
          <ul className="space-y-3">
            {regrets.map((r, i) => (
              <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
          className="dark-section rounded-3xl p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
              <Download className="w-5 h-5 text-accent" />
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              Бесплатный чек-лист
            </span>
          </div>
          <h3 className="text-2xl font-display font-semibold text-white mb-3">
            3 ошибки при выборе подрядчика по медицинскому проекту
          </h3>
          <p className="text-white/60 mb-6 leading-relaxed">
            PDF на 1 странице. Поможет проверить любого подрядчика — не только нас. Без спама.
          </p>

          {sent ? (
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-white font-display font-semibold mb-1">Готово</p>
              <p className="text-white/60 text-sm">Чек-лист придёт на {email} в течение нескольких минут.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="вашemail@example.com"
                className="w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent"
              />
              <ConsentCheckbox
                id="lead-magnet-consent"
                variant="dark"
                checked={consent}
                onChange={setConsent}
              />
              <button
                type="submit"
                disabled={sending || !consent}
                className="w-full bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {sending ? "Отправка..." : "Получить чек-лист"}
              </button>
              <p className="text-xs text-white/40 text-center">Без спама · отписаться можно в любой момент</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcrastinationSection;
