import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LogisticsSection from "@/components/LogisticsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import CTABanner from "@/components/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <CTABanner />
      <div id="logistics">
        <LogisticsSection />
      </div>
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
