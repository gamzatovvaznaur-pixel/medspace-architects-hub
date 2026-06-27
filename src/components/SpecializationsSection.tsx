import { motion } from "framer-motion";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const specs = [
  { title: "Стоматологии", desc: "От кабинета до центра с хирургическим блоком" },
  { title: "Косметология", desc: "Инъекционные кабинеты, лазерные залы, операционные" },
  { title: "Многопрофильные клиники", desc: "Поликлиники, диагностические центры, МРТ" },
  { title: "Медицинские лаборатории", desc: "ПЦР, бактериологические, клинико-диагностические" },
  { title: "Офтальмология", desc: "Центры с операционным блоком и чистыми помещениями" },
  { title: "Кабинеты МРТ и КТ", desc: "Радиационная защита, магнитное экранирование" },
];

const SpecializationsSection = () => {
  const { openCallback } = useCallbackDialog();

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-10 max-w-2xl"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3 block">
            Проектирование клиник
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
            Проектируем под вашу специализацию
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {specs.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.04 }}
              className="bg-background p-7 group hover:bg-secondary/50 transition-colors"
            >
              <span className="font-mono text-[10px] tracking-widest text-accent mb-3 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-display font-semibold text-foreground mb-1.5">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <button
            onClick={openCallback}
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Обсудить мой проект
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
