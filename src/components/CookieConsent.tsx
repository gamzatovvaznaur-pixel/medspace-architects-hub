import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const STORAGE_KEY = "medproject_pdn_consent_v1";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch { /* noop */ }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-[90]"
          role="dialog"
          aria-live="polite"
          aria-label="Уведомление об обработке персональных данных"
        >
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex-1 text-sm text-foreground/80 leading-relaxed">
              <p>
                Мы используем cookie и обрабатываем персональные данные (IP-адрес, метрики посещений) для корректной работы сайта и аналитики.
                Продолжая пользоваться сайтом, вы соглашаетесь с{" "}
                <Link to="/privacy" className="underline text-accent hover:opacity-80">
                  Политикой обработки персональных данных
                </Link>
                {" "}в соответствии с 152-ФЗ.
              </p>
            </div>
            <button
              onClick={accept}
              className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-display text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity shrink-0"
            >
              Принимаю
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
