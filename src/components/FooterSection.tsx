const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="font-display font-bold text-lg tracking-tight text-foreground">
            МедПроект
          </span>
          <p className="text-sm text-muted-foreground mt-1">
            Проектирование медицинских учреждений
          </p>
        </div>
        <div className="font-mono text-[10px] tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} МЕДПРОЕКТ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
