import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutPreviewSection from "@/components/AboutPreviewSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import CasesSection from "@/components/CasesSection";
import VideoShowcase from "@/components/VideoShowcase";
import LogisticsSection from "@/components/LogisticsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import CTABanner from "@/components/CTABanner";
import QuizSection from "@/components/QuizSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <QuizSection />
      <AboutPreviewSection />
      <CTABanner />
      <SpecializationsSection />
      <CTABanner />
      <div id="cases">
        <CasesSection />
      </div>
      <VideoShowcase />
      <CTABanner />
      <div id="logistics">
        <LogisticsSection />
      </div>
      <CTABanner />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
