import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const faqs = [
  {
    q: "Сколько это будет стоить?",
    a: "Стоимость зависит от площади и видов медпомощи. Базовый проект для стоматологии до 100 м² — от 250 000 ₽. Точная цена закрепляется в договоре после бесплатного аудита, в процессе не меняется.",
  },
  {
    q: "Сколько по срокам?",
    a: "Полный проект — 20–35 дней. Согласование в Роспотребнадзоре — ещё 15–30 дней. То есть СЭЗ обычно за 60–90 дней с момента старта.",
  },
  {
    q: "Какие гарантии?",
    a: "Если СЭЗ не выдают из-за ошибок в нашем проекте — переделываем за свой счёт. Условия фиксируем в договоре, а не на словах.",
  },
];

const FloatingHelpWidget = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const { openCallback } = useCallbackDialog();

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Остались вопросы"
        className="fixed bottom-5 right-5 z-50 bg-accent text-accent-foreground rounded-full shadow-2xl px-5 py-3.5 flex items-center gap-2 hover:opacity-90 transition-opacity md:bottom-8 md:right-8"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        <span className="font-display text-sm font-semibold hidden sm:inline">
          {open ? "Закрыть" : "Остались сомнения?"}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-5 md:bottom-28 md:right-8 z-50 w-[calc(100vw-2.5rem)] max-w-sm bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="dark-section p-5">
              <p className="font-display font-semibold text-white">Задайте вопрос</p>
              <p className="text-white/60 text-xs mt-1">
                Топ-3 страха клиентов — отвечаем сразу
              </p>
            </div>
            <div className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
              {faqs.map((f, i) => (
                <div key={i} className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="w-full text-left p-4 hover:bg-secondary transition-colors flex items-center justify-between gap-2"
                  >
                    <span className="font-display font-medium text-foreground text-sm">
                      {f.q}
                    </span>
                    <span className="text-accent text-lg leading-none">{active === i ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  openCallback();
                }}
                className="w-full bg-accent text-accent-foreground px-5 py-3 rounded-xl font-display text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity mt-2"
              >
                Спросить лично — перезвоните мне
              </button>
              <p className="text-[11px] text-muted-foreground text-center">
                Бесплатно · без обязательств
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingHelpWidget;
