interface DiagonalSplitImageProps {
  image1: string;
  image2: string;
  alt: string;
  className?: string;
}

const DiagonalSplitImage = ({ image1, image2, alt, className = "" }: DiagonalSplitImageProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Left image (top-left triangle) */}
      <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}>
        <img
          src={image1}
          alt={`${alt} - waterfowl`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Right image (bottom-right triangle) */}
      <div className="absolute inset-0" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}>
        <img
          src={image2}
          alt={`${alt} - swans`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Diagonal line separator */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom right, transparent calc(50% - 1px), hsl(var(--background)) calc(50% - 1px), hsl(var(--background)) calc(50% + 1px), transparent calc(50% + 1px))",
        }}
      />
    </div>
  );
};

export default DiagonalSplitImage;
