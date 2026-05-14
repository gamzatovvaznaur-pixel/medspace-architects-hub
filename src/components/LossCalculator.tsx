import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

const formatRub = (n: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(n);

const LossCalculator = () => {
  const { openCallback } = useCallbackDialog();
  const [months, setMonths] = useState(3);
  const [revenuePerMonth, setRevenuePerMonth] = useState(1500000);

  const lostRevenue = useMemo(() => months * revenuePerMonth, [months, revenuePerMonth]);
  const lostPatients = useMemo(() => months * 220, [months]);

  return (
    <section className="py-20 px-6 md:px-12 dark-section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-10 max-w-2xl"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
            Считаем вместе
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white leading-tight">
            Сколько стоит «подумать ещё месяц»
          </h2>
          <p className="text-white/60 mt-4 leading-relaxed">
            Каждый месяц без СЭЗ — это месяц без выручки. Подвиньте слайдеры, чтобы увидеть свою ситуацию.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <label className="font-mono text-[10px] tracking-widest uppercase text-white/50 mb-3 block">
                Откладываете на (мес.)
              </label>
              <input
                type="range"
                min={1}
                max={12}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full accent-[hsl(var(--accent))]"
              />
              <div className="flex justify-between text-xs text-white/40 mt-2">
                <span>1</span>
                <span className="text-2xl font-display font-bold text-white">{months}</span>
                <span>12</span>
              </div>
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest uppercase text-white/50 mb-3 block">
                Планируемая выручка клиники в мес.
              </label>
              <input
                type="range"
                min={500000}
                max={10000000}
                step={100000}
                value={revenuePerMonth}
                onChange={(e) => setRevenuePerMonth(Number(e.target.value))}
                className="w-full accent-[hsl(var(--accent))]"
              />
              <div className="flex justify-between text-xs text-white/40 mt-2">
                <span>0,5 млн ₽</span>
                <span className="text-2xl font-display font-bold text-white">
                  {formatRub(revenuePerMonth)} ₽
                </span>
                <span>10 млн ₽</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6">
              <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-2">
                Упущенная выручка
              </div>
              <div className="font-display font-bold text-3xl md:text-4xl text-white">
                {formatRub(lostRevenue)} ₽
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="font-mono text-[10px] tracking-widest uppercase text-white/50 mb-2">
                Не пришедших пациентов
              </div>
              <div className="font-display font-bold text-3xl md:text-4xl text-white">
                ~{lostPatients}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={openCallback}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Получить бесплатную стратегию
            </button>
            <span className="text-sm text-white/50">
              15 минут · покажем минимальный шаг под вашу ситуацию
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LossCalculator;
