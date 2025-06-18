import React, { useState } from 'react';
import ThreeDModel from './ThreeDModel';
import goldVariant from '../assets/images/hero/variants/gold.png';
import trackImage from '../assets/images/3d-section/track.png';

interface ColorOption {
  id: string;
  name: string;
  color: string;
  image: string;
}

const NewThreeDSection: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('black');

  const colorOptions: ColorOption[] = [
    {
      id: 'black',
      name: 'Black',
      color: '#1A1A1A',
      image: goldVariant,
    },
    {
      id: 'brown',
      name: 'Brown',
      color: '#8B4513',
      image: goldVariant,
    },
    {
      id: 'burgundy',
      name: 'Burgundy',
      color: '#800020',
      image: goldVariant,
    },
    {
      id: 'gray',
      name: 'Gray',
      color: '#6B7280',
      image: goldVariant,
    }
  ];

//   const selectedColorOption = colorOptions.find(option => option.id === selectedColor) || colorOptions[0];

  return (
    <section 
      className="py-8 md:py-12 lg:py-16 xl:py-20"
      style={{
        background: 'linear-gradient(1.55deg, rgba(235, 234, 227, 0.48) -10.93%, rgba(255, 255, 255, 0.8) 115.51%)'
      }}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
        
        {/* Header with Title and Action Buttons */}
        <div className="flex items-center justify-between mb-8 lg:mb-12">
          <h1 className="text-[#0E1422] font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Alpha 3
          </h1>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[#5C5F6A] hover:text-[#0E1422] transition-colors">
              <span className="material-icons-outlined text-lg">download</span>
              <span className="text-sm font-regular hidden sm:inline">Download Instructions</span>
            </button>
            
            <button className="flex items-center gap-2 text-[#5C5F6A] hover:text-[#0E1422] transition-colors">
              <span className="material-icons-outlined text-lg">live_tv</span>
              <span className="text-sm font-regular hidden sm:inline">Video</span>
            </button>
            
            <button className="w-12 h-12 rounded-xl border border-[#E0E0E0] bg-white flex items-center justify-center text-[#5C5F6A] hover:text-[#0E1422] hover:border-[#0E1422] transition-colors">
              <span className="material-icons-outlined text-lg">straighten</span>
            </button>
            
            <button className="w-12 h-12 rounded-xl border border-[#E0E0E0] bg-white flex items-center justify-center text-[#5C5F6A] hover:text-[#0E1422] hover:border-[#0E1422] transition-colors">
              <span className="material-icons-outlined text-lg">photo_camera</span>
            </button>
          </div>
        </div>

        {/* 3D Model Container - Centered */}
        <div className="flex justify-center mb-8">
          <div
            className="relative w-full flex justify-center items-center"
            style={{
              maxWidth: '520px',
              minHeight: '600px',
              width: '100%',
              height: 'auto',
              // background: 'linear-gradient(1.55deg, rgba(235, 234, 227, 0.48) -10.93%, rgba(255, 255, 255, 0.8) 115.51%)'
            }}
          >
            <ThreeDModel className="w-full h-full" />
          </div>
        </div>

        {/* Track Image - Centered and Bigger, Closer to model */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl lg:max-w-3xl">
            <img
              src={trackImage}
              alt="360° rotation track"
              className="w-full h-auto object-contain relative -top-[20px]"
              style={{ minHeight: '60px' }}
            /> 
          </div>
        </div>

        {/* Bottom Section - Colors and Buy Button */}
        <div className="flex items-end justify-between">
          {/* Colors Section - Proper Structure */}
          <div className="flex flex-col gap-3">
            {/* Colors Text */}
            <span className="text-[#878A92] font-regular text-sm">
              Colours
            </span>
            
            {/* White Container with Color Dots */}
            <div className="bg-white rounded-full px-4 py-3 shadow-sm">
              <div className="flex items-center gap-3">
                {colorOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedColor(option.id)}
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                      selectedColor === option.id
                        ? 'border-[#0E1422] scale-110'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: option.color }}
                    aria-label={`Select ${option.name} color`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Buy Now Button with Gradient */}
          <button 
            className="text-white px-8 py-3 font-medium hover:opacity-90 transition-opacity rounded text-sm"
            style={{
              background: 'linear-gradient(7.89deg, #05080D -18.2%, #474C57 160.3%)'
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewThreeDSection;