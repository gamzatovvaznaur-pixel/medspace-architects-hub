import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/mqeyvkdj";

interface CallbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CallbackDialog = ({ open, onOpenChange }: CallbackDialogProps) => {
  const [phone, setPhone] = useState("+7");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith("+7")) {
      value = "+7" + value.replace(/^\+?7?/, "");
    }
    setPhone(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, _subject: "Обратный звонок — МедПроект" }),
      });
      setSubmitted(true);
    } catch {
      alert("Ошибка отправки. Попробуйте позже.");
    } finally {
      setSending(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setPhone("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-card border border-border rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <span className="font-mono text-[10px] tracking-widest text-accent block mb-4">ОТПРАВЛЕНО</span>
                <p className="text-xl font-display font-medium text-foreground">Заявка отправлена</p>
                <p className="text-muted-foreground mt-2 mb-6">Мы перезвоним вам в ближайшее время.</p>
                <button
                  onClick={handleClose}
                  className="bg-accent text-accent-foreground px-8 py-3 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  Обратный звонок
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Оставьте номер — мы перезвоним в течение рабочего дня.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
                      Номер телефона
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      className="w-full border border-border bg-background px-4 py-3 rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="+7 (XXX) XXX-XX-XX"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {sending ? "Отправка..." : "Перезвоните мне"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CallbackDialog;
