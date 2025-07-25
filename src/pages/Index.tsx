import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProcessSection from "@/components/ProcessSection";
import SupportedBrandsSection from "@/components/SupportedBrandsSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <ProcessSection />
      <SupportedBrandsSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;