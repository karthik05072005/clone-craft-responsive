import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import SupportedBrandsSection from "@/components/SupportedBrandsSection";
import ProcessSection from "@/components/ProcessSection";
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
      <HowItWorksSection />
      <ServicesSection />
      <SupportedBrandsSection />
      <ProcessSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;