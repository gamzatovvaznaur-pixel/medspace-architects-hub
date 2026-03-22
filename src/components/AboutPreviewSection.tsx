import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const AboutPreviewSection = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <section className="py-24 px-6 md:px-12 dark-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">О компании</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              Надёжный партнёр в проектировании медицинских объектов
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              МедПроект — проектное бюро, специализирующееся на создании технологически сложных медицинских учреждений. От районных поликлиник до высокотехнологичных хирургических центров.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-block border border-white/20 text-white px-8 py-3.5 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-white/10 transition-colors text-center"
              >
                Подробнее
              </Link>
              <button
                onClick={openCallback}
                className="inline-block bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity text-center"
              >
                Связаться с нами
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.15 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "Множество", label: "реализованных проектов" },
              { value: "Десятки", label: "городов России и СНГ" },
              { value: "Полный цикл", label: "проектирования и поставок" },
              { value: "Значительная", label: "экономия на оборудовании" },
            ].map((stat, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-6">
                <span className="text-2xl font-display font-bold text-accent">{stat.value}</span>
                <p className="text-sm text-white/50 mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
