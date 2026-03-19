import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/services", label: "Услуги" },
  { to: "/about", label: "О компании" },
  { to: "/documents", label: "Документация" },
];

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-display font-bold text-lg tracking-tight text-foreground">
          МедПроект
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => window.scrollTo({ top: 0 })}
              className={`font-mono text-[11px] tracking-widest uppercase transition-colors ${
                location.pathname.startsWith(link.to)
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={isHome ? "#contact" : "/#contact"} onClick={(e) => { if (isHome) { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}} className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Контакты
          </a>
          <a
            href="tel:+79182633627"
            className="border border-border text-foreground px-5 py-2 rounded-xl font-display text-[11px] font-medium uppercase tracking-widest hover:bg-secondary transition-colors"
          >
            +7 (918) 263-36-27
          </a>
          <a
            href="tel:+79182633627"
            className="bg-accent text-accent-foreground px-6 py-2 rounded-xl font-display text-[11px] font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Подать заявку
          </a>
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
            <nav className="flex flex-col px-6 py-10 gap-6">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }} className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  {link.label}
                </Link>
              ))}
              <a href={isHome ? "#contact" : "/#contact"} onClick={() => setMenuOpen(false)} className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                Контакты
              </a>
              <a
                href="tel:+79182633627"
                onClick={() => setMenuOpen(false)}
                className="border border-border text-foreground px-6 py-3 rounded-xl font-display text-xs font-medium uppercase tracking-widest text-center hover:bg-secondary transition-colors"
              >
                +7 (918) 263-36-27
              </a>
              <a
                href="tel:+79182633627"
                onClick={() => setMenuOpen(false)}
                className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-display text-xs font-semibold uppercase tracking-widest text-center hover:opacity-90 transition-opacity"
              >
                Подать заявку
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderNav;
