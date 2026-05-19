import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import ImageSliderSection from "@/components/ImageSliderSection";
import IntroSection from "@/components/IntroSection";
import ToursSection from "@/components/ToursSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Polar Bear & Moose Photography Tours in Canada | Wildlife Discovered"
        description="Small-group polar bear photography tours in Churchill, Manitoba and moose photography tours in Algonquin Park, Ontario — guided wildlife photography expeditions across Canada with professional photographer Erik Bertelsen."
        path="/"
      />
      <Navbar />
      <HeroSection />
      <IntroSection />
      <ImageSliderSection />
      <ToursSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
