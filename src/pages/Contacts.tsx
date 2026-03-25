import { motion } from "framer-motion";
import { useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import FooterSection from "@/components/FooterSection";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };
const FORMSPREE_URL = "https://formspree.io/f/mqeyvkdj";

const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ phone: "+7", description: "" });
  const { openCallback } = useCallbackDialog();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: formData.phone,
          description: formData.description,
          _subject: "Заявка с сайта МедПроект",
        }),
      });
      setSubmitted(true);
    } catch {
      alert("Ошибка отправки. Попробуйте позже.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 dark-section">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-6 block">
              Контакты
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white max-w-4xl mb-8 leading-[1.05]">
              Свяжитесь с нами
            </h1>
            <p className="text-lg md:text-xl text-white/55 max-w-2xl leading-relaxed">
              МедПроект — проектное бюро, специализирующееся на создании медицинских учреждений любой сложности. Мы всегда на связи и готовы обсудить ваш проект.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <a href="tel:+79182633627" className="border border-white/10 rounded-2xl p-6 group hover:border-accent/40 transition-colors">
              <span className="font-mono text-[10px] tracking-widest text-accent block mb-2">ТЕЛЕФОН</span>
              <span className="text-xl font-display font-semibold text-white group-hover:text-accent transition-colors">+7 (918) 263-36-27</span>
            </a>
            <a href="mailto:med-project@bk.ru" className="border border-white/10 rounded-2xl p-6 group hover:border-accent/40 transition-colors">
              <span className="font-mono text-[10px] tracking-widest text-accent block mb-2">EMAIL</span>
              <span className="text-xl font-display font-semibold text-white group-hover:text-accent transition-colors">med-project@bk.ru</span>
            </a>
            <button onClick={openCallback} className="border border-white/10 rounded-2xl p-6 group hover:border-accent/40 transition-colors text-left">
              <span className="font-mono text-[10px] tracking-widest text-accent block mb-2">ОБРАТНЫЙ ЗВОНОК</span>
              <span className="text-xl font-display font-semibold text-white group-hover:text-accent transition-colors">Заказать звонок →</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* About brief + Form */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">О нас</span>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-6">
              Надёжный партнёр в медицинском проектировании
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                МедПроект оказывает профессиональные услуги по проектированию медицинских учреждений — от районных поликлиник до высокотехнологичных хирургических центров.
              </p>
              <p>
                Мы обеспечиваем полный цикл: разработку проектной документации, авторский надзор при строительстве, прямые поставки оборудования и мебели из Китая, а также согласование документации в ГАСН.
              </p>
              <p>
                В нашем активе — реализованные проекты по всей территории России и стран СНГ. Компания имеет все необходимые допуски и лицензии для работы с медицинскими объектами.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.15 }}
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">
              Оставить заявку
            </h3>
            {submitted ? (
              <div className="flex items-center justify-center border border-border p-12 rounded-2xl">
                <div className="text-center">
                  <span className="font-mono text-[10px] tracking-widest text-accent block mb-4">ОТПРАВЛЕНО</span>
                  <p className="text-xl font-display font-medium text-foreground">Заявка отправлена</p>
                  <p className="text-muted-foreground mt-2">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (!value.startsWith("+7")) value = "+7" + value.replace(/^\+?7?/, "");
                      setFormData({ ...formData, phone: value });
                    }}
                    className="w-full border border-border bg-background px-4 py-3 rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
                    Описание проекта
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Тип объекта, площадь, особые требования..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-accent text-accent-foreground px-10 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {sending ? "Отправка..." : "Отправить заявку"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Contacts;
