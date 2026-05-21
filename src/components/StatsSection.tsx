import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const stats2025 = [
  { value: "17", label: "стоматологий" },
  { value: "9", label: "многопрофильных клиник" },
  { value: "4", label: "клиники косметологии" },
  { value: "5", label: "медицинских лабораторий" },
  { value: "3", label: "МРТ-кабинета" },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-12 max-w-3xl"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Итоги 2025 года
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
            За 2025 год мы спроектировали
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats2025.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.06 }}
              className="bg-background p-8 flex flex-col gap-2"
            >
              <span className="font-display font-bold text-5xl md:text-6xl text-foreground tracking-tight">
                {s.value}
              </span>
              <span className="text-sm text-muted-foreground leading-snug">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
