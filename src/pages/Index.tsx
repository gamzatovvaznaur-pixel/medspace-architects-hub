import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import SymptomsChecklist from "@/components/SymptomsChecklist";
import RiskReductionSection from "@/components/RiskReductionSection";
import LossCalculator from "@/components/LossCalculator";
import ProcessRoadmap from "@/components/ProcessRoadmap";
import StatsSection from "@/components/StatsSection";
import CasesSection from "@/components/CasesSection";
import HonestRefuseSection from "@/components/HonestRefuseSection";
import ProcrastinationSection from "@/components/ProcrastinationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingHelpWidget from "@/components/FloatingHelpWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <HeroSection />
      <SymptomsChecklist />
      <RiskReductionSection />
      <LossCalculator />
      <ProcessRoadmap />
      <StatsSection />
      <div id="cases">
        <CasesSection />
      </div>
      <HonestRefuseSection />
      <ProcrastinationSection />
      <ContactSection />
      <FooterSection />
      <FloatingHelpWidget />
    </div>
  );
};

export default Index;
