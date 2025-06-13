import React from 'react';

const SalesBanner: React.FC = () => {
  return (
    <div className="bg-black text-white py-1.5 sm:py-2 px-4">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x flex items-center justify-center text-center">
        <p className="text-xs sm:text-sm lg:text-base font-regular">
          Get 25% OFF on your first order.{' '}
          <button className="underline hover:no-underline font-medium transition-all duration-200">
            Learn More
          </button>
        </p>
      </div>
    </div>
  );
};

export default SalesBanner;