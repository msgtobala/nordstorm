import React from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const DesignInnovation: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Large Valetta Tote',
      price: '$475.00',
      image: '/src/assets/images/innovation/tote.png'
    },
    {
      id: '2',
      name: 'Celina Backpack',
      price: '$475.00',
      image: '/src/assets/images/innovation/backpack.png'
    },
    {
      id: '3',
      name: 'Teghan Crossbody',
      price: '$295.00',
      image: '/src/assets/images/innovation/crossbody.png'
    },
    {
      id: '4',
      name: 'Tyler Crossbody Bag',
      price: '$295.00',
      image: '/src/assets/images/innovation/bag.png'
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
        {/* Section Title */}
        <h2 className="text-[#0E1422] font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 md:mb-8 lg:mb-12">
          TUMI Design Innovation
        </h2>

        {/* Main Flex Container */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          {/* Left Side - Hero Image */}
          <div className="flex-1 lg:flex-[1.2] xl:flex-[1.3]">
            <div className="relative w-full max-w-[944px] h-[808px]">
              <img
                src="/src/assets/images/innovation/family.png"
                alt="TUMI Design Innovation"
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows - Hidden on mobile */}
              <button className="">
                <span className="material-icons-outlined text-[#CECECE] text-xl">arrow_back_ios</span>
              </button>
              
              <button className="">
                <span className="material-icons-outlined text-[#CECECE] text-xl">arrow_forward_ios</span>
              </button>
            </div>
          </div>

          {/* Right Side - Product Grid */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default DesignInnovation;