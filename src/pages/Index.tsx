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
        title="Silver Bear Photo Tours | Guided Wildlife Photography Tours in Canada"
        description="Guided, small-group wildlife photography tours across Canada — photograph polar bears in Churchill, moose in Algonquin Park, loons and more with expert guide Erik Bertelsen."
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
