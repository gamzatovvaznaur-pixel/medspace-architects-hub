import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import CasesSection from "@/components/CasesSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import CTABanner from "@/components/CTABanner";
import QuizSection from "@/components/QuizSection";
import ConsultationBlock from "@/components/ConsultationBlock";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <HeroSection />
      <ConsultationBlock />
      <div id="services">
        <ServicesSection />
      </div>
      <QuizSection />
      <SpecializationsSection />
      <CTABanner />
      <div id="cases">
        <CasesSection />
      </div>
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
