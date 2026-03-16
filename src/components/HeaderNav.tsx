import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link to="/" className="font-display font-bold text-lg tracking-tight text-foreground">
          МедПроект
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/services" className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Услуги
          </Link>
          <a href="/#logistics" className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Логистика
          </a>
          <a href="/#contact" className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Контакт
          </a>
          <Link
            to="/#contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-display text-[11px] font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Консультация
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Меню"
        >
          <span className={`block w-5 h-px bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              <Link to="/services" onClick={() => setMenuOpen(false)} className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Услуги</Link>
              <a href="/#logistics" onClick={() => setMenuOpen(false)} className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Логистика</a>
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Контакт</a>
              <Link
                to="/#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-display text-xs font-semibold uppercase tracking-widest text-center hover:opacity-90 transition-opacity"
              >
                Консультация
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderNav;
