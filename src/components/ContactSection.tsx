import { motion } from "framer-motion";
import { useState } from "react";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-[12vh] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4 block">
              Контакт
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
              Запросить техническую консультацию
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md text-pretty">
              Оставьте заявку — мы свяжемся с вами в течение одного рабочего дня для обсуждения вашего проекта.
            </p>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-widest text-primary w-16">TEL</span>
                <span className="text-foreground">+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-widest text-primary w-16">EMAIL</span>
                <span className="text-foreground">info@medproject.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-widest text-primary w-16">ADDR</span>
                <span className="text-foreground">Москва, Россия</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.15 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center border border-border p-12">
                <div className="text-center">
                  <span className="font-mono text-[10px] tracking-widest text-primary block mb-4">
                    RECEIVED
                  </span>
                  <p className="text-xl font-display font-medium text-foreground">
                    Заявка отправлена
                  </p>
                  <p className="text-muted-foreground mt-2">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
                    Имя
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-border bg-surface px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                    placeholder="Иванов Иван Иванович"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
                    Организация
                  </label>
                  <input
                    type="text"
                    className="w-full border border-border bg-surface px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                    placeholder="Название учреждения"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-border bg-surface px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
                    Описание проекта
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-border bg-surface px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Тип объекта, площадь, особые требования..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-10 py-4 font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
