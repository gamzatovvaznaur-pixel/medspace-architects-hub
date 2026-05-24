import { motion } from "framer-motion";
import HeaderNav from "@/components/HeaderNav";
import HeroSimpleSection from "@/components/HeroSimpleSection";
import StatsSection from "@/components/StatsSection";
import FullCycleSection from "@/components/FullCycleSection";
import InlineCallbackForm from "@/components/InlineCallbackForm";
import NormsSection from "@/components/NormsSection";
import HomeCasesSection from "@/components/HomeCasesSection";
import QuizSection from "@/components/QuizSection";
import LicensingCompanionSection from "@/components/LicensingCompanionSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <HeroSimpleSection />
      <StatsSection />
      <FullCycleSection />
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <InlineCallbackForm
            title="Обсудить проект"
            description="Расскажем, какие документы нужны под вашу задачу, и рассчитаем сроки бесплатно."
            subject="Главная — заявка (перед нормативной базой)"
            variant="compact"
            id="home-mid-callback"
          />
        </div>
      </section>
      <NormsSection />
      <QuizSection />
      <HomeCasesSection />
      <section className="py-24 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-10"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 block">
              Видео
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight mb-6">
              Посмотрите, как мы работаем
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Короткий ролик о нашем подходе к проектированию медицинских объектов: от замера до лицензии.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-border aspect-video"
          >
            <iframe
              src="https://rutube.ru/play/embed/418da6ecdccdca1f9fd441672a15bfea"
              title="Видео о компании"
              allow="clipboard-write; autoplay"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>
      <LicensingCompanionSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
