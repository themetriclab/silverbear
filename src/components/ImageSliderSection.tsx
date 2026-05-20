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
import ptarmiganClose from "@/assets/slider/ptarmigan-close.jpg";

const sliderImages = [
  { src: bearSnowstorm, alt: "Polar bear in a Churchill snowstorm" },
  { src: youngBearRock, alt: "Young polar bear resting on a rock" },
  { src: arcticFoxSunset, alt: "Arctic fox silhouetted at sunset" },
  { src: arcticHare, alt: "Arctic hare in tundra snow" },
  { src: blueBird, alt: "Bluebird perched on a branch" },
  { src: femaleMerganser, alt: "Female merganser duck on water" },
  { src: foxKit, alt: "Red fox kit at den entrance" },
  { src: highKeyLoon, alt: "High-key portrait of a common loon" },
  { src: longTailLiftoff, alt: "Long-tailed duck lifting off the water" },
  { src: loonAuroraWater, alt: "Loon on water under the aurora borealis" },
  { src: momCubSnowstorm, alt: "Polar bear mother and cub in a snowstorm" },
  { src: mooseField, alt: "Bull moose standing in an Algonquin field" },
  { src: motherCubSleeping, alt: "Polar bear mother and cub sleeping together" },
  { src: motherCubsLight, alt: "Polar bear mother and cubs in golden light" },
  { src: pineMartin, alt: "Pine marten peering from a tree" },
  { src: redFoxSunset, alt: "Red fox walking at sunset" },
  { src: snowOwlRaven, alt: "Snowy owl and raven in flight" },
  { src: swanSilhouette, alt: "Trumpeter swan silhouette at dawn" },
  { src: wolfRock, alt: "Wolf standing on a rocky outcrop" },
  { src: wolverineSnowy, alt: "Wolverine traversing a snowy hillside" },
  { src: ptarmiganClose, alt: "Close-up of a willow ptarmigan in winter plumage" },
];

const ImageSliderSection = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <ImageAutoSlider images={sliderImages} />
    </section>
  );
};

export default ImageSliderSection;
