import { motion } from "framer-motion";
import HeaderNav from "@/components/HeaderNav";
import HeroSimpleSection from "@/components/HeroSimpleSection";
import StatsSection from "@/components/StatsSection";
import LicensingCompanionSection from "@/components/LicensingCompanionSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="МедПроект — проектирование клиник от 400 м²"
        description="Проектируем клиники от 400 м². Стоимость от 1 500 000 ₽. Не участвуем в тендерах. Сами выбираем клиентов и доводим до лицензии."
        path="/"
        keywords="проектирование клиник, проект медицинского учреждения, СЭЗ, медицинская лицензия"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "МедПроект",
          url: "https://medspace-architects-hub.lovable.app/",
          description:
            "Проектирование медицинских учреждений от 400 м². Стоимость от 1 500 000 ₽.",
          areaServed: { "@type": "Country", name: "Russia" },
        }}
      />
      <HeaderNav />
      <HeroSimpleSection />

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-2xl"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3 block">
              Экспертиза
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
              Проектируем медицинские учреждения любой сложности
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              { title: "Многопрофильные клиники", desc: "Поликлиники, диагностические центры, интеграция всех направлений в единое пространство" },
              { title: "Стоматологические центры", desc: "От одного кабинета до клиники с хирургическим блоком, цифровым потоком и собственным стерилизационным отделением" },
              { title: "Клиники пластической хирургии", desc: "Операционные блоки, реанимация, палаты дневного стационара — полный цикл эстетической медицины" },
              { title: "МРТ-кабинеты комфорт+", desc: "Электромагнитное и виброэкранирование, расчёт радиационной защиты, получение СЭЗ" },
              { title: "Рентген-кабинеты", desc: "Проектирование под защиту от ионизирующего излучения, согласование с Роспотребнадзором" },
              { title: "Косметологические клиники", desc: "Инъекционные кабинеты, лазерные залы, чистые помещения для малоинвазивных вмешательств" },
              { title: "Офтальмологические центры", desc: "Диагностические комплексы, лазерные операционные, чистые помещения для хирургии зрения" },
              { title: "Медицинские лаборатории", desc: "ПЦР, бактериологические, клинико-диагностические — зоны чистоты, вентиляция, логистика проб" },
              { title: "Стационары и хосписы", desc: "Палатные отделения, реанимационные блоки, операционные с полным инженерным обеспечением" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
                className="bg-background p-7 group hover:bg-secondary/50 transition-colors"
              >
                <span className="font-mono text-[10px] tracking-widest text-accent mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <LicensingCompanionSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
