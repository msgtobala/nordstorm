import React from 'react';

// Import all images and videos
import closureImage from '../assets/images/details/closure.png';
import pose2Image from '../assets/images/details/pose-2.png';
import pose3Video from '../assets/images/details/pose-3.mp4';
import poseImage from '../assets/images/details/pose.png';
import interiorFeaturesImage from '../assets/images/details/interior-features.png';
import exteriorFeaturesImage from '../assets/images/details/exterior-features.png';
import goldImage from '../assets/images/details/gold.png';

const DetailsAndCare: React.FC = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
        {/* Section Title */}
        <h2 className="text-[#0E1422] font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12">
          Details & care
        </h2>

        {/* Main Grid - Adjusted proportions: 65% left, 35% right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* LEFT SIDE - Takes 8 columns (66.7%) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Top Left - Closure Card (Spans 2 columns on larger screens) */}
            <div 
              className="sm:col-span-2 rounded-lg pt-6 px-6 lg:pt-8 lg:px-8 flex items-center gap-6 lg:gap-8"
              style={{
                background: 'linear-gradient(232.39deg, rgba(255, 245, 235, 0.7) 9.93%, rgba(252, 217, 187, 0.7) 79.87%)',
                minHeight: '280px'
              }}
            >
              {/* Left - Closure Suitcase Image */}
              <div className="flex-shrink-0 w-1/2 self-end">
                <img
                  src={closureImage}
                  alt="Black Alpha 3 suitcase with TSA lock and closure details"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Right - Content */}
              <div className="flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span 
                    className="text-[#4B4B4B] text-sm font-regular backdrop-blur-sm"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '6px',
                      paddingTop: '6px',
                      paddingRight: '16px',
                      paddingBottom: '6px',
                      paddingLeft: '16px'
                    }}
                  >
                    Quick Access
                  </span>
                  <span 
                    className="text-[#4B4B4B] text-sm font-regular backdrop-blur-sm"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '6px',
                      paddingTop: '6px',
                      paddingRight: '16px',
                      paddingBottom: '6px',
                      paddingLeft: '16px'
                    }}
                  >
                    Total Safety
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#0E1422] font-medium text-xl lg:text-2xl mb-3">
                  Closure
                </h3>

                {/* Description */}
                <p className="text-[#5C5F6A] text-sm lg:text-base leading-relaxed">
                  An integrated TSA-approved lock provides extra security for both compartments. A front-lid zip-around entry allows you to access belongings on the go.
                </p>
              </div>
            </div>

            {/* Bottom Left - Changed to pose-2.png - Full height */}
            <div className="bg-[#F5F1ED] rounded-lg overflow-hidden h-full min-h-[280px]">
              <img
                src={pose2Image}
                alt="Gold suitcase lifestyle"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right - Changed to pose-3.mp4 - Full height */}
            <div className="bg-[#F8F9FA] rounded-lg overflow-hidden h-full min-h-[280px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={pose3Video} type="video/mp4" />
                {/* Fallback image */}
                <img
                  src={poseImage}
                  alt="Person with brown suitcase"
                  className="w-full h-full object-cover"
                />
              </video>
            </div>

            {/* Bottom Full Width - Interior Features Card */}
            <div 
              className="sm:col-span-2 rounded-lg p-6 lg:p-8 flex items-center gap-6 lg:gap-8"
              style={{
                background: 'linear-gradient(146.54deg, rgba(255, 242, 225, 0.7) 6.83%, rgba(244, 217, 183, 0.7) 84.28%)',
                minHeight: '280px'
              }}
            >
              {/* Left - Interior Image */}
              <div className="flex-shrink-0 w-1/2">
                <img
                  src={interiorFeaturesImage}
                  alt="Interior features - organized compartments"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Right - Content */}
              <div className="flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span 
                    className="text-[#4B4B4B] text-sm font-regular backdrop-blur-sm"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '6px',
                      paddingTop: '6px',
                      paddingRight: '16px',
                      paddingBottom: '6px',
                      paddingLeft: '16px'
                    }}
                  >
                    Smart Packing
                  </span>
                  <span 
                    className="text-[#4B4B4B] text-sm font-regular backdrop-blur-sm"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '6px',
                      paddingTop: '6px',
                      paddingRight: '16px',
                      paddingBottom: '6px',
                      paddingLeft: '16px'
                    }}
                  >
                    Organized
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#0E1422] font-medium text-xl lg:text-2xl mb-3">
                  Interior features
                </h3>

                {/* Description */}
                <p className="text-[#5C5F6A] text-sm lg:text-base leading-relaxed">
                  A removable garment bag with hanging loop fits one suit or dress. A zip divider, three zip pockets, and a mesh pocket keep items organized and accessible.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Takes 4 columns (33.3%) with equal height distribution */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
            
            {/* Top Right - Exterior Features Card - 50% height */}
            <div 
              className="rounded-lg overflow-hidden flex flex-col flex-1"
              style={{
                background: 'linear-gradient(170.42deg, rgba(255, 238, 230, 0.7) 6.02%, rgba(255, 212, 191, 0.7) 70.05%)'
              }}
            >
              {/* Content Section with Padding */}
              <div className="p-6 lg:p-8 pb-4 lg:pb-6 flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span 
                    className="text-[#4B4B4B] text-sm font-regular backdrop-blur-sm"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '6px',
                      paddingTop: '6px',
                      paddingRight: '16px',
                      paddingBottom: '6px',
                      paddingLeft: '16px'
                    }}
                  >
                    Effortless Mobility
                  </span>
                  <span 
                    className="text-[#4B4B4B] text-sm font-regular backdrop-blur-sm"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '6px',
                      paddingTop: '6px',
                      paddingRight: '16px',
                      paddingBottom: '6px',
                      paddingLeft: '16px'
                    }}
                  >
                    Charge Seamlessly
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#0E1422] font-medium text-xl lg:text-2xl mb-3">
                  Exterior features
                </h3>

                {/* Description */}
                <p className="text-[#5C5F6A] text-sm lg:text-base leading-relaxed">
                  Smooth wheels and sturdy handles ensure easy travel. Durable, impact-resistant build with USB port for on-the-go charging (power bank not included).
                </p>
              </div>

              {/* Feature Image - No padding, extends to edges, moved up */}
              <div className="mt-auto -mb-2">
                <img
                  src={exteriorFeaturesImage}
                  alt="Suitcase with phone charging via USB cable"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Bottom Right - Special Features Dark Card - 50% height */}
            <div 
              className="rounded-lg overflow-hidden flex flex-col flex-1"
              style={{
                backgroundColor: '#1F1D1C'
              }}
            >
              {/* Content Section with Padding */}
              <div className="p-6 lg:p-8 pb-4 lg:pb-6 flex-1">
                {/* Tags - White chips with semi-transparent background */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span 
                    className="text-white text-sm font-regular backdrop-blur-sm"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      paddingTop: '6px',
                      paddingRight: '16px',
                      paddingBottom: '6px',
                      paddingLeft: '16px'
                    }}
                  >
                    Effortless Mobility
                  </span>
                  <span 
                    className="text-white text-sm font-regular backdrop-blur-sm"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      paddingTop: '6px',
                      paddingRight: '16px',
                      paddingBottom: '6px',
                      paddingLeft: '16px'
                    }}
                  >
                    Charge Seamlessly
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-medium text-xl lg:text-2xl mb-3">
                  Special features
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                  Includes TUMI Tracer® for bag recovery and X-Brace 45® handle system with durable, impact-resistant aluminum.
                </p>
              </div>

              {/* Special Features Image - No padding, extends to edges */}
              <div className="mt-auto">
                <img
                  src={goldImage}
                  alt="Gold Alpha 3 suitcase showcasing special features"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsAndCare;