import React, { useState, useEffect } from 'react';

export interface SliderImage {
  src: string;
  alt: string;
}

interface ImageAutoSliderProps {
  images: Array<string | SliderImage>;
  className?: string;
}

export const ImageAutoSlider = ({ images, className = '' }: ImageAutoSliderProps) => {
  const normalized: SliderImage[] = images.map((img, i) =>
    typeof img === 'string' ? { src: img, alt: `Wildlife photo ${i + 1}` } : img
  );
  const [loadedCount, setLoadedCount] = useState(0);
  const allLoaded = loadedCount >= normalized.length;
  const duplicatedImages = [...normalized, ...normalized];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .infinite-scroll {
          animation: scroll-right 60s linear infinite;
        }
        .infinite-scroll.paused {
          animation-play-state: paused;
        }
        .scroll-container {
          mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }
        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      <div className={`relative w-full overflow-hidden ${className}`}>
        <div className="scroll-container relative w-full overflow-hidden">
          <div className={`infinite-scroll flex gap-4 w-max ${!allLoaded ? 'paused' : ''}`}>
            {duplicatedImages.map((image, index) => (
              <div key={index} className="image-item flex-shrink-0 rounded-lg overflow-hidden" style={{ minWidth: '200px', minHeight: '192px' }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-48 md:h-64 w-auto object-cover rounded-lg"
                  loading={index < normalized.length ? "eager" : "lazy"}
                  decoding="async"
                  onLoad={() => {
                    if (index < normalized.length) {
                      setLoadedCount(prev => prev + 1);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
