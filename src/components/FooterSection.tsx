import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-16 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-display font-bold text-xl tracking-tight text-foreground">МедПроект</Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-sm leading-relaxed">
              Проектирование медицинских учреждений, авторский надзор и прямые поставки оборудования из Китая.
            </p>
            <a
              href="tel:+79182633627"
              className="inline-block mt-4 bg-accent text-accent-foreground px-6 py-2.5 rounded-xl font-display text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Позвонить
            </a>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">О компании</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Услуги</Link></li>
              <li><Link to="/services/design" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Проектирование</Link></li>
              <li><Link to="/services/equipment" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Оборудование</Link></li>
              <li><Link to="/services/approval" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Согласование</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li><a href="tel:+79182633627" className="text-sm text-muted-foreground hover:text-foreground transition-colors">+7 (918) 263-36-27</a></li>
              <li><a href="mailto:aznaur2107@mail.ru" className="text-sm text-muted-foreground hover:text-foreground transition-colors">aznaur2107@mail.ru</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} МЕДПРОЕКТ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </span>
          <a href="tel:+79182633627" className="text-sm text-accent font-display font-medium hover:opacity-80 transition-opacity">
            Запросить консультацию →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
