import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

import bearSnowstorm from "@/assets/slider/bear-snowstorm.jpg";
import youngBearRock from "@/assets/slider/young-bear-rock.jpg";
import arcticFoxSunset from "@/assets/slider/arctic-fox-sunset.jpg";
import arcticHare from "@/assets/slider/arctic-hare.jpg";
import blueBird from "@/assets/slider/blue-bird.jpg";
import femaleMerganser from "@/assets/slider/female-merganser.png";
import foxKit from "@/assets/slider/fox-kit.jpg";
import highKeyLoon from "@/assets/slider/high-key-loon.png";
import longTailLiftoff from "@/assets/slider/long-tail-liftoff.jpg";
import loonAuroraWater from "@/assets/slider/loon-aurora-water.png";

const sliderImages = [
  bearSnowstorm,
  youngBearRock,
  arcticFoxSunset,
  arcticHare,
  blueBird,
  femaleMerganser,
  foxKit,
  highKeyLoon,
  longTailLiftoff,
  loonAuroraWater,
];

const ImageSliderSection = () => {
  return (
    <section className="py-16 bg-background">
      <ImageAutoSlider images={sliderImages} />
    </section>
  );
};

export default ImageSliderSection;
