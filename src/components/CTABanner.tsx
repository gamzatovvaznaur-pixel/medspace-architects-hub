import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const CTABanner = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="bg-foreground rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-background mb-3">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-background/60 max-w-lg leading-relaxed">
              Свяжитесь с нами для бесплатной консультации. Мы ответим в течение одного рабочего дня.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/#contact"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity text-center"
            >
              Оставить заявку
            </Link>
            <a
              href="tel:+79182633627"
              className="border border-background/20 text-background px-8 py-3.5 rounded-xl font-display text-sm font-medium hover:bg-background/10 transition-colors text-center"
            >
              Позвонить
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
