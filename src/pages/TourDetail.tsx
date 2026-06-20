import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Clock, Users, Mountain, Camera, ChevronRight, DollarSign, Check, X, CreditCard, HelpCircle } from "lucide-react";
import { tours } from "@/data/tours";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import DiagonalSplitImage from "@/components/DiagonalSplitImage";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

import loonHighKey2 from "@/assets/loon/high-key-loon-2.png";
import loonMist from "@/assets/loon/loon-in-mist.jpg";
import loonChickGreen from "@/assets/loon/loon-chick-green.png";
import loonAurora2 from "@/assets/loon/loon-aurora-water-2.png";
import loonChickGreen2 from "@/assets/loon/loon-chick-green-2.png";

import algCalfCow from "@/assets/algonquin/calf-looking-at-cow.png";
import algCow from "@/assets/algonquin/cow.jpg";
import algEagle from "@/assets/algonquin/eagle-perched.png";
import algMerganser from "@/assets/algonquin/female-merganser-2.png";
import algBull from "@/assets/algonquin/fav-bull-shot.jpg";
import algLoon from "@/assets/algonquin/loon-in-aurora-water-3.png";
import algOtter from "@/assets/algonquin/river-otter-look-back.png";
import algDucks from "@/assets/algonquin/ring-neck-duck-pair.png";
import algWolf from "@/assets/algonquin/wolf-on-rock-2.png";
import algMoose from "@/assets/algonquin/moose-sipping.png";
import algBabyBeaver from "@/assets/algonquin/baby-beaver.png";

import pbFoxSunset from "@/assets/polar-bear/arctic-fox-sunset-2.jpg";
import pbHareSnow from "@/assets/polar-bear/arctic-hare-snow.jpg";
import pbHareCape from "@/assets/polar-bear/arctic-hare-cape.jpg";
import pbErmineWide from "@/assets/polar-bear/ermine-wide.jpg";
import pbErmine1 from "@/assets/polar-bear/ermine-1.jpg";
import pbMomCubStorm from "@/assets/polar-bear/mom-cub-snowstorm-2.jpg";
import pbMaleSunset from "@/assets/polar-bear/male-sunset.jpg";
import pbMotherCubSleep from "@/assets/polar-bear/mother-cub-sleeping-2.jpg";
import pbMotherCubs from "@/assets/polar-bear/mother-cubs.jpg";
import pbMotherCubsLight from "@/assets/polar-bear/mother-cubs-light-2.jpg";
import pbRedFoxSunset2 from "@/assets/polar-bear/red-fox-sunset-2.jpg";
import pbRedFox from "@/assets/polar-bear/red-fox.jpg";
import pbYoungBearRock from "@/assets/polar-bear/young-bear-rock-2.jpg";
import pbBearsFighting from "@/assets/polar-bear/bears-fighting.jpg";
import pbBearYellowGrass from "@/assets/polar-bear/bear-yellow-grass.jpg";
import pbBearFrostyGrass from "@/assets/polar-bear/bear-frosty-grass.jpg";
import pbPtarmigan from "@/assets/polar-bear/ptarmigan-close.jpg";

import wfBlueBird from "@/assets/waterfowl/blue-bird-perched-2.jpg";
import wfTern from "@/assets/waterfowl/common-tern.jpg";
import wfTernWater from "@/assets/waterfowl/common-tern-water.jpg";
import wfLongTail from "@/assets/waterfowl/long-tail-flight.jpg";
import wfSwanWarm from "@/assets/waterfowl/swan-warm-light.png";
import wfSwanSilhouette from "@/assets/waterfowl/swan-silhouette-2.jpg";
import wfSwanCygnets from "@/assets/waterfowl/swan-cygnets.jpg";
import wfSwanCalm from "@/assets/waterfowl/swan-calm-water.jpg";
import wfLowRider from "@/assets/waterfowl/low-rider-swan.jpg";
import wfBeaver from "@/assets/waterfowl/beaver.jpg";

const loonSliderImages = [loonChickGreen, loonHighKey2, loonAurora2, loonMist, loonChickGreen2];
const algonquinSliderImages = [algWolf, algLoon, algBabyBeaver, algCow, algMerganser, algMoose, algDucks, algEagle, algOtter, algBull, algCalfCow];
const polarBearSliderImages = [pbErmine1, pbBearYellowGrass, pbMotherCubs, pbFoxSunset, pbHareSnow, pbMaleSunset, pbPtarmigan, pbRedFox, pbMomCubStorm, pbYoungBearRock, pbMotherCubsLight, pbBearsFighting, pbHareCape, pbMotherCubSleep, pbErmineWide, pbBearFrostyGrass, pbRedFoxSunset2];
const
