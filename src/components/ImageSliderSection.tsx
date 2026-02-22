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
import momCubSnowstorm from "@/assets/slider/mom-cub-snowstorm.jpg";
import mooseField from "@/assets/slider/moose-field.png";
import motherCubSleeping from "@/assets/slider/mother-cub-sleeping.jpg";
import motherCubsLight from "@/assets/slider/mother-cubs-light.jpg";
import pineMartin from "@/assets/slider/pine-martin.jpg";
import redFoxSunset from "@/assets/slider/red-fox-sunset.jpg";
import snowOwlRaven from "@/assets/slider/snow-owl-raven.jpg";
import swanSilhouette from "@/assets/slider/swan-silhouette.jpg";
import wolfRock from "@/assets/slider/wolf-rock.png";
import wolverineSnowy from "@/assets/slider/wolverine-snowy-hill.jpg";

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
  momCubSnowstorm,
  mooseField,
  motherCubSleeping,
  motherCubsLight,
  pineMartin,
  redFoxSunset,
  snowOwlRaven,
  swanSilhouette,
  wolfRock,
  wolverineSnowy,
];

const ImageSliderSection = () => {
  return (
    <section className="py-16 bg-background">
      <ImageAutoSlider images={sliderImages} />
    </section>
  );
};

export default ImageSliderSection;
