import React from 'react';

// Import media files
import showcaseVideo from '../assets/images/banner/showcase.mp4';
import fallbackImage from '../assets/images/banner/image.png';

const ShowcaseBanner: React.FC = () => {
  return (
    <section className="w-full">
      {/* Main Container */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[900px] overflow-hidden flex">
        {/* Left Side - Video */}
        <div className="w-1/2 relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={showcaseVideo} type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <img
              src={fallbackImage}
              alt="TUMI Sustainably Sourced Collection"
              className="w-full h-full object-cover"
            />
          </video>
        </div>

        {/* Right Side - Background with Text Content */}
        <div
          className="w-1/2 flex items-end justify-center relative"
          style={{ backgroundColor: '#998C77' }}
        >
          <div className="max-w-md text-left pb-[192px]">
            {/* Long Decorative Line - extends beyond text width */}
            <div className="relative mb-8">
              <div
                className="h-px bg-white absolute"
                style={{
                  width: '400px',
                  left: '0',
                }}
              ></div>
            </div>

            {/* Main Title */}
            <h2 className="text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-4xl mb-6 leading-tight">
              Ready When You Are
            </h2>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xs">
              Designed for moments in motion — from coffee breaks to gate calls,
              this carry-on moves with ease and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseBanner;
