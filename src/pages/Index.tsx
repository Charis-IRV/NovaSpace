import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroVisual from "@/components/HeroVisual";
import IdentificationSection from "@/components/IdentificationSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <HeroVisual />
    <IdentificationSection />
    <ProblemSection />
    <SolutionSection />
    <BeforeAfterSection />
    <BenefitsSection />
    <ProcessSection />
    <DeliverablesSection />
    <PricingSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
