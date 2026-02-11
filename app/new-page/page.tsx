import Navigation from "@/components/new-page/Navigation";
import HeroSection from "@/components/new-page/HeroSection";
import ServicesSection from "@/components/new-page/ServicesSection";
import TestimonialsSection from "@/components/new-page/TestimonialsSection";
import CtaSection from "@/components/new-page/CtaSection";
import FooterSection from "@/components/new-page/FooterSection";

export default function NewPage() {
  return (
    <div className="new-page">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
      {/*<FooterSection />*/}
    </div>
  );
}