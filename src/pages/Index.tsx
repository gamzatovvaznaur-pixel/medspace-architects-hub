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
      <LicensingCompanionSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
