import { useState } from "react";
import { motion } from "framer-motion";
import ConsentCheckbox from "./ConsentCheckbox";

const FORMSPREE_URL = "https://formspree.io/f/mdapgwjz";

interface InlineCallbackFormProps {
  title?: string;
  description?: string;
  subject?: string;
  variant?: "card" | "accent" | "compact";
  id?: string;
}

const InlineCallbackForm = ({
  title = "Получить консультацию",
  description = "Оставьте номер — перезвоним в течение рабочего дня и бесплатно разберём ваш проект.",
  subject = "Заявка с сайта МедПроект",
  variant = "card",
  id = "inline-callback",
}: InlineCallbackFormProps) => {
  const [phone, setPhone] = useState("+7");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, name, _subject: subject }),
      });
      setSubmitted(true);
    } catch {
      alert("Ошибка отправки. Попробуйте позже.");
    } finally {
      setSending(false);
    }
  };

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-card border border-border rounded-2xl p-6 md:p-8"
      >
        {submitted ? (
          <div className="text-center py-4">
            <p className="text-lg font-display font-medium text-foreground">Заявка отправлена</p>
            <p className="text-muted-foreground mt-1 text-sm">Мы перезвоним вам в ближайшее время.</p>
          </div>
        ) : (
          <div>
            <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-1">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground mb-4">{description}</p>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 items-end">
              <div className="flex-1 w-full">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-border bg-background px-4 py-2.5 rounded-xl text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Имя"
                />
              </div>
              <div className="flex-1 w-full">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full border border-border bg-background px-4 py-2.5 rounded-xl text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Телефон"
                />
              </div>
              <button
                type="submit"
                disabled={sending || !consent}
                className="w-full md:w-auto bg-accent text-accent-foreground px-6 py-2.5 rounded-xl font-display text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {sending ? "..." : "Перезвоните"}
              </button>
            </form>
            <div className="mt-3">
              <ConsentCheckbox id={`${id}-consent`} variant="light" checked={consent} onChange={setConsent} />
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  const wrapperClass =
    variant === "accent"
      ? "bg-accent/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10"
      : "bg-card border border-border rounded-2xl p-8 md:p-10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={wrapperClass}
    >
      {submitted ? (
        <div className="text-center py-6">
          <span className="font-mono text-[10px] tracking-widest text-accent block mb-3">ОТПРАВЛЕНО</span>
          <p className="text-xl font-display font-medium text-foreground">Заявка отправлена</p>
          <p className="text-muted-foreground mt-2">Мы перезвоним вам в ближайшее время.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3 block">
              Обратная связь
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
                Имя
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-border bg-background px-4 py-3 rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="Как к вам обращаться"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
                Телефон
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={handlePhoneChange}
                className="w-full border border-border bg-background px-4 py-3 rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="+7 (XXX) XXX-XX-XX"
              />
            </div>
            <ConsentCheckbox id={`${id}-consent`} variant="light" checked={consent} onChange={setConsent} />
            <button
              type="submit"
              disabled={sending || !consent}
              className="w-full bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {sending ? "Отправка..." : "Перезвоните мне"}
            </button>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default InlineCallbackForm;
