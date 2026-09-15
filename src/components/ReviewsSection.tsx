import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const GoogleIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.77 24c0-1.6.28-3.15.76-4.59l-7.98-6.19A23.94 23.94 0 0 0 0 24c0 3.88.93 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

type Review = {
  author: string;
  photo: string;
  profile: string;
  when: string;
  text: string;
};

const reviews: Review[] = [
  {
    author: "Vic Toffan",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjUirS30Bb2uQ1zPdAntCBy4_HPf1eXNTcYyokZkOHUy6nZ6doZrIg=s128-c0x00000000-cc-rp-mo-ba3",
    profile: "https://www.google.com/maps/contrib/109075020222081236390/reviews",
    when: "September 2026",
    text: `I've done several photo tours with Silver Bear Photography and can't recommend Erik enough! I've had the opportunity to do the loon tour, moose tour, waterfowl tour, and the ground-level polar bear tour in Churchill.

Every tour has been incredibly professional, relaxing, and educational. Erik has taught me so much about wildlife photography from understanding what makes a great wildlife photo to properly setting up my camera for the best possible result, including aperture, shutter speed, ISO, composition, angles, and more. He has also gone above and beyond to help me understand Lightroom and improve my editing skills.

Another thing that is extremely important to me is the ethical and respectful approach Silver Bear Photography takes toward wildlife. The animals always come first, and it's clear that Erik has a deep respect for them and their environment.

Erik is incredibly talented, knowledgeable, and genuinely humble. I've learned so much from him and have had some truly unforgettable experiences along the way.

I highly recommend Silver Bear Photography to anyone looking for an amazing wildlife photography experience!`,
  },
  {
    author: "Karin",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjVO58ZCmRLjyHexngSoNYQ-0irBqy7SYZkd-kbyWisHsghlf0Kn=s128-c0x00000000-cc-rp-mo",
    profile: "https://www.google.com/maps/contrib/108869586495353762234/reviews",
    when: "September 2026",
    text: `Our polar bear photography tour with Silver Bear tours an absolutely incredible experience!

They made sure we had amazing ground level photography opportunities while always maintaining a safe and respectful distance from the bears. We learned so much about polar bear behaviour and the importance of conservation.

It was an unforgettable adventure and a privilege to see these magnificent animals in their natural habitat. I would highly recommend this tour to anyone looking for an authentic, responsible, and truly exceptional polar bear photography experience!`,
  },
  {
    author: "Timothy Harlow",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjW9UTULoF_XGx5ptHwTpW4wyxl8tPGaIv3LpZdyfQqdAckev6M=s128-c0x00000000-cc-rp-mo-ba2",
    profile: "https://www.google.com/maps/contrib/106942860869546713654/reviews",
    when: "September 2026",
    text: `Erik Bertelsen is an incredible guide. I was with him for a week on a polar bear photo tour around Churchill, Manitoba last November (2025). I had an absolutely fantastic time. Erik has an uncanny ability to spot not just the bears but other small arctic wildlife too. He found us some beautiful arctic hares to photograph as well as many ptarmigans.

Of course the bears were just too amazing. Erik had us out on the ground among the bears in their world, but always very safely. His knowledge of the bears, their behavior and habitat is quite incredible. Safety is a huge priority with Erik — both our safety and the bears' safety. I was really impressed by how careful Erik was to always make sure we were not interfering with the bears or causing them stress. Honestly, that impressed me as much as his photography skills and his ability to get us in position to get great shots. His ethics are top notch.

There is nothing like being on the ground with the bears. Nothing! Of course we were always at a safe distance while we were out of the vans — about 100 meters. But sometimes the bears weren't cooperative about the hundred meter rule, and Erik would quickly get us back in the van. But just the opportunity to see these incredible animals in their native environment at their level — on the ground in their territory was unbelievable!

Erik's knowledge of the bears' behaviors and his photography skills make for some wonderful photos for us clients. Would I recommend Erik and Silver Bear Photo Tours? Yes! 100%, absolutely! If you are serious about photography and want more than a "canned tourist" experience from a huge buggy 12 feet off the ground, you need to book this trip. You will never forget your experience, and by the end of the tour you will have a new friend in Erik and the others on your tour as well.`,
  },
  {
    author: "Amanda Sutton Tarling",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjW7FJRPAS5qK94z-SAYAW_BmlYYf_8I5Ejt0_ZnJZAS1SbEdfF3=s128-c0x00000000-cc-rp-mo",
    profile: "https://www.google.com/maps/contrib/104156120712019948330/reviews",
    when: "September 2026",
    text: `I traveled with Silver Bear Tours to Churchill in 2026 to photograph Polar Bears. It was an exceptional trip. The guides could not have worked harder to get us in the right place for all of the perfect shots. The Silver Bear Guides have a vast knowledge of the Polar Bears in this area. They know the bear's habits and where the bears are likely to be depending on conditions. I came home with remarkable photos and have booked to return with them in 2028. Silver Bear Tours is run by phenomenal people who truly care about the bears and give their clients the most incredible experience. Thank you Erik, Julia and Michael. You guys are the best!`,
  },
  {
    author: "MJ Haught",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjUpsezn2NCPotpkqsqp2qH9CyYwmst2eTE_44lPeW8DHdp7s5fT=s128-c0x00000000-cc-rp-mo",
    profile: "https://www.google.com/maps/contrib/112568310922211835221/reviews",
    when: "September 2026",
    text: `I did the moose trip with Silver Bear Photo Tours, and ended up with some photos that made (picky) me happy. I live on the Pacific coast, and didn't want to fly all the way to Toronto for two or three days. They were very accommodating, and I had five consecutive shooting days. The park is literally Erik's backyard, so he knew just where we needed to be — and when — to catch moose being moose. The excellent bird photography was an unexpected bonus — plus frogs and a cooperative beaver. Erik's love of the wildlife and sense of humor made for a very enjoyable photo tour.`,
  },
];

const REVIEWS_URL = "https://maps.google.com/?cid=13059153085573553450";

const Stars = () => (
  <div className="flex gap-0.5" aria-label="Rated 5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
    ))}
  </div>
);

const ReviewCard = ({ review, index }: { review: Review; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 320;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.1 }}
      className="flex flex-col p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border">
          <GoogleIcon className="w-5 h-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-muted-foreground text-xs">Google review</p>
          <p className="text-muted-foreground text-xs">{review.when}</p>
        </div>
      </div>

      <div className="mt-4">
        <Stars />
      </div>

      <div
        className={`mt-3 text-sm text-muted-foreground leading-relaxed whitespace-pre-line ${
          expanded
            ? "max-h-64 overflow-y-auto overscroll-contain pr-2"
            : "line-clamp-5 overflow-hidden"
        }`}
      >
        {review.text}
      </div>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 self-start text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </motion.article>
  );
};

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Guests' Experiences
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <GoogleIcon className="w-5 h-5" />
            <Stars />
            <span className="text-muted-foreground text-sm">5.0 on Google</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {reviews.map((review, i) => (
            <ReviewCard key={review.author} review={review} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-primary text-primary font-medium tracking-widest uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
