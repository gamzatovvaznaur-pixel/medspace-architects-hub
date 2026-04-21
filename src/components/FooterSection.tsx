import { Link } from "react-router-dom";
import { useCallbackDialog } from "@/hooks/useCallbackDialog";

const FooterSection = () => {
  const { openCallback } = useCallbackDialog();

  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <footer className="border-t border-border py-16 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" onClick={scrollToTop} className="font-display font-bold text-xl tracking-tight text-foreground">МедПроект</Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-sm leading-relaxed">
              Проектирование медицинских учреждений, авторский надзор и прямые поставки оборудования из Китая.
            </p>
            <button
              onClick={openCallback}
              className="inline-block mt-4 bg-accent text-accent-foreground px-6 py-2.5 rounded-xl font-display text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Заказать звонок
            </button>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><Link to="/about" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">О компании</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Услуги</Link></li>
              <li><Link to="/services/design" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Проектирование</Link></li>
              <li><Link to="/services/equipment" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Оборудование</Link></li>
              <li><Link to="/services/approval" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Согласование</Link></li>
              <li><Link to="/contacts" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li><a href="tel:+79182633627" className="text-sm text-muted-foreground hover:text-foreground transition-colors select-all">+7 (918) 263-36-27</a></li>
              <li><a href="mailto:med-project@bk.ru" className="text-sm text-muted-foreground hover:text-foreground transition-colors select-all">med-project@bk.ru</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} МЕДПРОЕКТ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </span>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              onClick={scrollToTop}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <button onClick={openCallback} className="text-sm text-accent font-display font-medium hover:opacity-80 transition-opacity">
              Запросить консультацию →
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
