
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProviderSection from "@/components/ProviderSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ProviderSection />
      <ServicesSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
