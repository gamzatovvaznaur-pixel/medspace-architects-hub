import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

const symptoms = [
  "Нашли помещение, но не уверены, подойдёт ли оно под клинику по СанПиН",
  "Уже получили отказ Роспотребнадзора и не понимаете, что переделывать",
  "Подрядчик «нарисовал планировку», но СЭЗ всё равно не выдают",
  "Открываете первую клинику и боитесь упустить что-то критичное",
  "Расширяетесь — нужна лицензия на новые виды медпомощи",
  "Ремонт идёт, а проекта под нормы до сих пор нет",
  "Цена и сроки у других подрядчиков «плавают» — не понимаете, чему верить",
];

const SymptomsChecklist = () => {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const { openCallback } = useCallbackDialog();

  const toggle = (i: number) => {
    const next = new Set(checked);
    next.has(i) ? next.delete(i) : next.add(i);
    setChecked(next);
  };

  const count = checked.size;

  return (
    <section className="py-20 px-6 md:px-12 bg-[hsl(var(--surface))]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-10 max-w-2xl"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Не уверены, нужно ли вам это
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
            Отметьте то, что про вас
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Если хотя бы один пункт совпадает — медицинский проект вам нужен. Расскажем, как решается именно ваша ситуация.
          </p>
        </motion.div>

        <div className="grid gap-3 mb-10">
          {symptoms.map((s, i) => {
            const active = checked.has(i);
            return (
              <motion.button
                key={i}
                type="button"
                onClick={() => toggle(i)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.04 }}
                className={`flex items-start gap-4 text-left p-5 rounded-2xl border transition-all ${
                  active
                    ? "border-accent bg-accent/5"
                    : "border-border bg-background hover:border-foreground/30"
                }`}
              >
                <span
                  className={`shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                    active ? "bg-accent border-accent" : "border-border"
                  }`}
                >
                  {active && <Check className="w-4 h-4 text-accent-foreground" />}
                </span>
                <span className="text-foreground leading-snug">{s}</span>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <button
            onClick={openCallback}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            {count > 0 ? `Да, это про меня (${count}) — разобраться` : "Да, это про меня — разобраться"}
          </button>
          <span className="text-sm text-muted-foreground">
            Бесплатный разбор вашей ситуации · 15 минут
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SymptomsChecklist;
