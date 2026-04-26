import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Compass, Home, Phone } from "lucide-react";
import HeaderNav from "@/components/HeaderNav";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const suggestions = [
  { to: "/", label: "Главная", desc: "Полный обзор студии и услуг" },
  { to: "/services", label: "Услуги", desc: "Все направления проектирования" },
  { to: "/about", label: "О студии", desc: "Команда, опыт, подход к работе" },
  { to: "/contacts", label: "Контакты", desc: "Связаться и обсудить проект" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    const prevTitle = document.title;
    document.title = "404 — страница не найдена | МедПроект";
    return () => {
      document.title = prevTitle;
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeaderNav />

      <main className="flex-1 flex items-center px-6 md:px-12 py-24 relative overflow-hidden">
        {/* Decorative grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Accent blob */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — big 404 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-6 inline-flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              Ошибка 404 / страница не найдена
            </span>

            <div className="relative mb-8">
              <h1
                className="text-[8rem] md:text-[12rem] leading-none font-display font-bold tracking-tighter select-none"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--accent)) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                404
              </h1>
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-2 md:top-4 md:right-8 w-20 h-20 md:w-28 md:h-28 rounded-full border border-dashed border-accent/40 flex items-center justify-center"
              >
                <span className="font-mono text-[10px] tracking-widest text-accent/70 -rotate-12">
                  не найдено
                </span>
              </motion.div>
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 leading-tight">
              Кажется, эта страница ещё не спроектирована
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Возможно, ссылка устарела или была введена с ошибкой. Зато мы точно знаем,
              как спроектировать медицинскую клинику под СЭЗ Роспотребнадзора — давайте
              вернёмся к этому.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/"
                className="bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-display text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                На главную
              </Link>
              <button
                onClick={() => window.history.back()}
                className="border border-border text-foreground px-8 py-3.5 rounded-xl font-display text-sm font-medium uppercase tracking-widest hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Назад
              </button>
            </div>
          </motion.div>

          {/* Right — suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.15 }}
            className="space-y-3"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">
              Куда можно перейти
            </span>
            {suggestions.map((s, i) => (
              <motion.div
                key={s.to}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...transition, delay: 0.25 + i * 0.06 }}
              >
                <Link
                  to={s.to}
                  className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-secondary/60 border border-border hover:border-accent/50 hover:bg-secondary transition-all"
                >
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-0.5">
                      {s.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-accent rotate-180 group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              </motion.div>
            ))}

            <motion.a
              href="tel:+79182633627"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transition, delay: 0.55 }}
              className="mt-4 flex items-center gap-3 p-5 rounded-2xl bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              <div>
                <p className="font-display font-semibold">+7 (918) 263-36-27</p>
                <p className="text-xs opacity-70">Позвоните — поможем сразу</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
