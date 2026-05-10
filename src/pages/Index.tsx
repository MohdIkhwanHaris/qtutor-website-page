import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import TutorsSection from "@/components/landing/TutorsSection";
import JourneySection from "@/components/landing/JourneySection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PricingSection />
      <TestimonialsSection />

      {/* Temp hide the Tutor section */}
      {/*<TutorsSection />*/}
      <JourneySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
