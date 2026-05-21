import HeaderNav from "@/components/HeaderNav";
import HeroSimpleSection from "@/components/HeroSimpleSection";
import StatsSection from "@/components/StatsSection";
import FullCycleSection from "@/components/FullCycleSection";
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
      <NormsSection />
      <HomeCasesSection />
      <LicensingCompanionSection />
      <QuizSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
