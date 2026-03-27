import { motion } from "framer-motion";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const CTABanner = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="dark-section rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-white/60 max-w-lg leading-relaxed">
              Свяжитесь с нами для бесплатной консультации. Мы ответим в течение одного рабочего дня.
            </p>
            <a href="mailto:med-project@bk.ru" className="text-white/80 hover:text-accent transition-colors text-sm mt-2 inline-block select-all">med-project@bk.ru</a>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={openCallback}
              className="bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity text-center"
            >
              Заказать звонок
            </button>
            <button
              onClick={openCallback}
              className="border border-white/20 text-white px-8 py-3.5 rounded-xl font-display text-sm font-medium hover:bg-white/10 transition-colors text-center"
            >
              Оставить заявку
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
