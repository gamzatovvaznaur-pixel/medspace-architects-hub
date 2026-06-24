import { motion } from "framer-motion";
import HeaderNav from "@/components/HeaderNav";
import HeroSimpleSection from "@/components/HeroSimpleSection";
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
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex gap-4 items-start">
              <span className="text-accent font-display text-2xl leading-none mt-1">→</span>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Только клиники от 400 м²</h3>
                <p className="text-foreground/60">Меньшие объекты не берём — проект требует той же экспертизы, а сроки не позволяют делать это экономично.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-accent font-display text-2xl leading-none mt-1">→</span>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">От 1 500 000 ₽ за проект</h3>
                <p className="text-foreground/60">Если нужен дешёвый проект — это не к нам. Мы работаем качественно, с гарантией прохождения СЭЗ и лицензирования.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-accent font-display text-2xl leading-none mt-1">→</span>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Не участвуем в тендерах</h3>
                <p className="text-foreground/60">Просьбы о тендерном участии не принимаем. Мы сами выбираем клиентов и работаем напрямую.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-accent font-display text-2xl leading-none mt-1">→</span>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Доводим до конца</h3>
                <p className="text-foreground/60">Если взялись — сопровождаем от замера помещения до получения медицинской лицензии. Без передачи на аутсорс.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
