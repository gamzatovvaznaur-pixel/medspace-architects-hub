import { motion } from "framer-motion";
import { useState } from "react";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ phone: "+7", description: "" });
  const { openCallback } = useCallbackDialog();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Заявка с сайта МедПроект");
    const body = encodeURIComponent(
      `Телефон: ${formData.phone}\n\nОписание проекта: ${formData.description}`
    );
    window.location.href = `mailto:aznaur2107@mail.ru?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 dark-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Контакты
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Запросить консультацию
            </h2>
            <p className="text-white/50 leading-relaxed max-w-md">
              Оставьте заявку — мы свяжемся с вами в течение одного рабочего дня для обсуждения вашего проекта.
            </p>

            <div className="mt-12 space-y-4">
              <a href="tel:+79182633627" className="flex items-center gap-3 group">
                <span className="font-mono text-[10px] tracking-widest text-accent w-16">TEL</span>
                <span className="text-white group-hover:text-accent transition-colors">+7 (918) 263-36-27</span>
              </a>
              <a href="mailto:med-project@bk.ru" className="flex items-center gap-3 group">
                <span className="font-mono text-[10px] tracking-widest text-accent w-16">EMAIL</span>
                <span className="text-white group-hover:text-accent transition-colors">med-project@bk.ru</span>
              </a>
            </div>

            <button
              onClick={openCallback}
              className="inline-block mt-8 bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Заказать звонок
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.15 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center border border-white/10 p-12 rounded-2xl">
                <div className="text-center">
                  <span className="font-mono text-[10px] tracking-widest text-accent block mb-4">ОТПРАВЛЕНО</span>
                  <p className="text-xl font-display font-medium text-white">Заявка отправлена</p>
                  <p className="text-white/50 mt-2">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-white/50 mb-2 block">
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-white/10 bg-white/5 px-4 py-3 rounded-xl text-white font-body focus:outline-none focus:border-accent transition-colors"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-white/50 mb-2 block">
                    Описание проекта
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full border border-white/10 bg-white/5 px-4 py-3 rounded-xl text-white font-body focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Тип объекта, площадь, особые требования..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
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
