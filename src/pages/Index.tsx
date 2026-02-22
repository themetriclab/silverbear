import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageSliderSection from "@/components/ImageSliderSection";
import IntroSection from "@/components/IntroSection";
import ToursSection from "@/components/ToursSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ImageSliderSection />
      <IntroSection />
      <ToursSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
