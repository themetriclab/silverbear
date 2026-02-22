import React from 'react';

interface ImageAutoSliderProps {
  images: string[];
  className?: string;
}

export const ImageAutoSlider = ({ images, className = '' }: ImageAutoSliderProps) => {
  const duplicatedImages = [...images, ...images];

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
      <div className={`relative w-full overflow-hidden pointer-events-none ${className}`}>
        <div className="scroll-container relative w-full overflow-hidden">
          <div className="infinite-scroll flex gap-4 w-max pointer-events-auto">
            {duplicatedImages.map((image, index) => (
              <div key={index} className="image-item flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Wildlife photo ${(index % images.length) + 1}`}
                  className="h-64 md:h-80 w-auto object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
