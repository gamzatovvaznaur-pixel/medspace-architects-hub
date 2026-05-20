import HeaderNav from "@/components/HeaderNav";
import HeroSimpleSection from "@/components/HeroSimpleSection";
import FullCycleSection from "@/components/FullCycleSection";
import NormsSection from "@/components/NormsSection";
import HomeCasesSection from "@/components/HomeCasesSection";
import LicensingCompanionSection from "@/components/LicensingCompanionSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <HeroSimpleSection />
      <FullCycleSection />
      <NormsSection />
      <HomeCasesSection />
      <LicensingCompanionSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
