import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HelpCircle, ArrowRight } from "lucide-react";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const ConsultationBlock = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <Link
            to="/services/consultation"
            className="group block relative overflow-hidden rounded-2xl border border-accent/30 bg-accent/5 p-8 md:p-12 hover:bg-accent/10 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-2 block">
                  С чего начать
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
                  Я не знаю, что мне нужно
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  Расскажем, какие виды проектирования существуют, из каких этапов состоит процесс и какая документация понадобится именно для вашего проекта. Бесплатная консультация.
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 text-accent font-display text-sm font-medium group-hover:gap-3 transition-all">
                  Разобраться <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationBlock;
