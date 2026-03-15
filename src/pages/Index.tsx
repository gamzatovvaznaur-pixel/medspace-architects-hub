import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceDetailSections from "@/components/ServiceDetailSections";
import LogisticsSection from "@/components/LogisticsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <ServiceDetailSections />
      <div id="logistics">
        <LogisticsSection />
      </div>
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
