import React from 'react';

// Import image
import bannerImage from '../assets/images/banner/image-3.png';

const DesignBanner: React.FC = () => {
  return (
    <section className="w-full">
      {/* Main Container */}
      <div
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[700px] overflow-hidden flex"
        style={{ backgroundColor: 'rgb(47, 49, 52)' }}
      >
        {/* Left Side - Solid Background with Text Content */}
        <div
          className="w-1/2 flex items-center justify-start pl-8 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-24"
          style={{ backgroundColor: '#2F3134', flex: '3' }}
        >
          <div className="max-w-md">
            {/* Tag */}
            <div className="mb-6">
              <span
                className="text-white text-sm font-regular"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  paddingTop: '8px',
                  paddingRight: '16px',
                  paddingBottom: '8px',
                  paddingLeft: '16px',
                }}
              >
                Crafted for Effortless Elegance
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-white font-medium text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl mb-6 leading-tight">
              Timeless Form. Confident Function.
            </h2>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
              A carry-on that complements every journey, blending precision
              design, elevated styling, and the signature versatility TUMI is
              known for.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 relative" style={{ flex: '3' }}>
          <img
            src={bannerImage}
            alt="Woman with TUMI suitcase - Dual Access, Maximum Efficiency"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation Dots - Outside/Below the Image */}
      <div className="w-full py-6 sm:py-8 md:py-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              {/* Active dot - longer bar */}
              <div className="w-8 h-1 bg-[#0E1422] rounded-full"></div>
              {/* Inactive dots - small circles */}
              <div className="w-1 h-1 bg-[#0E1422]/30 rounded-full"></div>
              <div className="w-1 h-1 bg-[#0E1422]/30 rounded-full"></div>
              <div className="w-1 h-1 bg-[#0E1422]/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignBanner;
