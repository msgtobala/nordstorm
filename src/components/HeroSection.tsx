import React, { useState } from 'react';

// Import all images
import heroNew1 from '../assets/images/hero/hero-new-1.png';
import heroNew2 from '../assets/images/hero/hero-new-2.png';
import heroNew3 from '../assets/images/hero/hero-new-3.png';
import heroNew4 from '../assets/images/hero/new-hero-4.mp4';
import heroNew6 from '../assets/images/hero/new-hero-6.mp4';
import tumi1 from '../assets/images/hero/you-may-also-like/tumi-1.png';
import tumi2 from '../assets/images/hero/you-may-also-like/tumi-2.png';
import tumi3 from '../assets/images/hero/you-may-also-like/tumi-3.png';
import Black from '../assets/images/hero/variants/black.png';
import Gold from '../assets/images/hero/variants/gold.png';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  image: string;
  isSponsored?: boolean;
}

interface MediaItem {
  src: string;
  type: 'image' | 'video';
  alt: string;
}

const HeroSection: React.FC = () => {
  const productMedia: MediaItem[] = [
    {
      src: heroNew1,
      type: 'image',
      alt: 'Alpha 3 Collection - View 1',
    },
    {
      src: heroNew2,
      type: 'image',
      alt: 'Alpha 3 Collection - View 2',
    },
    {
      src: heroNew3,
      type: 'image',
      alt: 'Alpha 3 Collection - View 3',
    },
    {
      src: heroNew4,
      type: 'video',
      alt: 'Alpha 3 Collection - Video demonstration',
    },
    {
      src: heroNew6,
      type: 'video',
      alt: 'Alpha 3 Collection - View 6',
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Black/ Gold');
  // const [currentMedia, setSelectedMedia] = useState(
  //   productMedia[selectedImageIndex]
  // );

  const colorOptions = [
    {
      name: 'Black',
      image: Black,
    },
    {
      name: 'Gold',
      image: Gold,
    },
  ];

  const youMightAlsoLikeBase: Product[] = [
    {
      id: '1',
      name: 'TUMI',
      brand: 'TUMI',
      price: '$599.00 - $750.00',
      originalPrice: '$750.00',
      image: tumi1,
    },
    {
      id: '2',
      name: 'MAISON de SABRE',
      brand: 'MAISON de SABRE',
      price: '$499.00',
      image: tumi2,
      isSponsored: true,
    },
    {
      id: '3',
      name: 'TUMI',
      brand: 'TUMI',
      price: '$619.00',
      originalPrice: '$775.00',
      image: tumi3,
    },
  ];

  // Create a looped array to fill the space without scrolling
  const youMightAlsoLike = [
    ...youMightAlsoLikeBase,
    ...youMightAlsoLikeBase.map((item) => ({ ...item, id: item.id + '_loop' })),
  ];

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  // useEffect(() => {
  //   setSelectedMedia(productMedia[selectedImageIndex]);
  // }, [selectedImageIndex]);

  const currentMedia = productMedia[selectedImageIndex];
  // console.log(currentMedia.src, selectedImageIndex);

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
        {/* Main Grid: 16 columns - Image Gallery (7) | Product Info (6) | You Might Also Like (3) */}
        <div className="grid grid-cols-1 lg:grid-cols-16 gap-6 lg:gap-8 items-start">
          {/* LEFT: Image Gallery - 7 columns out of 16 */}
          <div className="lg:col-span-7">
            {/* Main Image Container with Fixed Height */}
            <div className="relative mb-4">
              <div
                className="overflow-hidden rounded-lg bg-gray-50"
                style={{ height: '600px' }} // Fixed height to match other columns
              >
                {currentMedia.type === 'video' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    key={currentMedia.src}
                  >
                    <source src={currentMedia.src} type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <span className="text-gray-500">Video not supported</span>
                    </div>
                  </video>
                ) : (
                  <img
                    src={currentMedia.src}
                    alt={currentMedia.alt}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  // setSelectedImageIndex(Math.max(0, selectedImageIndex - 1))
                  setSelectedImageIndex(Math.max(0, selectedImageIndex - 1))
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
                disabled={selectedImageIndex === 0}
              >
                <span className="material-icons-outlined text-gray-600">
                  chevron_left
                </span>
              </button>

              <button
                onClick={() => {
                  setSelectedImageIndex(
                    Math.min(productMedia.length - 1, selectedImageIndex + 1)
                  );
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
                disabled={selectedImageIndex === productMedia.length - 1}
              >
                <span className="material-icons-outlined text-gray-600">
                  chevron_right
                </span>
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 overflow-x-auto">
              {productMedia.map((media, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors relative ${
                    selectedImageIndex === index
                      ? 'border-black'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {media.type === 'video' ? (
                    <>
                      <video muted loop className="w-full h-full object-cover">
                        <source src={media.src} type="video/mp4" />
                      </video>
                      {/* Play icon overlay for video thumbnails */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <span className="material-icons-outlined text-white text-sm">
                          play_arrow
                        </span>
                      </div>
                    </>
                  ) : (
                    <img
                      src={media.src}
                      alt={media.alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* MIDDLE: Product Information - 6 columns out of 16 */}
          <div className="lg:col-span-6">
            {/* Container with Fixed Height to Match Image Gallery */}
            <div
              className="flex flex-col"
              style={{ height: '600px' }} // Fixed height to match image gallery
            >
              {/* Rating and Reviews */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  <span className="material-icons-outlined text-black text-sm">
                    star
                  </span>
                  <span className="text-sm text-gray-600 ml-1">
                    4.2 — 54 Reviews
                  </span>
                </div>
                <button className="ml-auto">
                  <span className="material-icons-outlined text-gray-400 hover:text-red-500 transition-colors">
                    favorite_border
                  </span>
                </button>
              </div>

              {/* Product Title */}
              <h1 className="text-lg md:text-xl font-medium text-black mb-2 leading-tight">
                Alpha 3 Collection 22-Inch International Expandable Wheeled
                Carry-On Bag
              </h1>

              {/* Brand */}
              <p className="text-gray-600 mb-3 text-sm">Tumi</p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-xl font-medium text-black">$875.00</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Engineered for the journey, styled for success — TUMI redefines
                travel with durability, function, and flawless design.
              </p>

              {/* Color Selection */}
              <div className="mb-4 flex justify-between">
                <h3 className="text-sm font-medium text-black mb-2">
                  {selectedColor}
                </h3>
                <div className="flex gap-2">
                  {colorOptions.map((option) => (
                    <button
                      key={option.name}
                      onClick={() => setSelectedColor(option.name)}
                      className={`w-12 h-12 rounded border-2 transition-colors overflow-hidden ${
                        selectedColor === option.name
                          ? 'border-black'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      aria-label={`Select ${option.name} color`}
                    >
                      <img
                        src={option.image}
                        alt={`${option.name} variant`}
                        className="w-full h-full object-cover"
                        style={{ transform: 'scale(0.9)' }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-1.5 hover:bg-gray-50 transition-colors"
                  >
                    <span className="material-icons-outlined text-sm">
                      remove
                    </span>
                  </button>
                  <span className="px-3 py-1.5 text-center min-w-[2rem] text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-1.5 hover:bg-gray-50 transition-colors"
                  >
                    <span className="material-icons-outlined text-sm">add</span>
                  </button>
                </div>

                <button className="flex-1 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors font-medium text-sm">
                  Add to cart
                </button>
              </div>

              {/* Expandable Sections - Flex grow to fill remaining space */}
              <div className="space-y-2 flex-1">
                <details className="border-b border-gray-200 pb-2">
                  <summary className="flex items-center justify-between cursor-pointer py-2">
                    <div className="flex items-center gap-2">
                      <span className="material-icons-outlined text-gray-600 text-base">
                        straighten
                      </span>
                      <span className="font-medium text-sm">SIZE INFO</span>
                    </div>
                    <span className="material-icons-outlined text-gray-600">
                      add
                    </span>
                  </summary>
                </details>

                <details className="border-b border-gray-200 pb-2">
                  <summary className="flex items-center justify-between cursor-pointer py-2">
                    <div className="flex items-center gap-2">
                      <span className="material-icons-outlined text-gray-600 text-base">
                        local_shipping
                      </span>
                      <span className="font-medium text-sm">
                        SHIPPING & RETURNS
                      </span>
                    </div>
                    <span className="material-icons-outlined text-gray-600">
                      add
                    </span>
                  </summary>
                </details>

                <details className="border-b border-gray-200 pb-2">
                  <summary className="flex items-center justify-between cursor-pointer py-2">
                    <div className="flex items-center gap-2">
                      <span className="material-icons-outlined text-gray-600 text-base">
                        card_giftcard
                      </span>
                      <span className="font-medium text-sm">GIFT OPTIONS</span>
                    </div>
                    <span className="material-icons-outlined text-gray-600">
                      add
                    </span>
                  </summary>
                </details>

                <details className="pb-2">
                  <summary className="flex items-center justify-between cursor-pointer py-2">
                    <div className="flex items-center gap-2">
                      <span className="material-icons-outlined text-gray-600 text-base">
                        support_agent
                      </span>
                      <span className="font-medium text-sm">
                        PRODUCT ADVISORY
                      </span>
                    </div>
                    <span className="material-icons-outlined text-gray-600">
                      add
                    </span>
                  </summary>
                </details>
              </div>
            </div>
          </div>

          {/* RIGHT: You Might Also Like - 3 columns out of 16 */}
          <div className="lg:col-span-3">
            {/* Container with Fixed Height to Match Other Columns */}
            <div
              className="flex flex-col"
              style={{ height: '600px' }} // Fixed height to match other columns
            >
              <h3 className="font-medium text-base mb-4 text-center">
                You Might Also Like
              </h3>

              {/* Products Grid - Center aligned content */}
              <div className="flex-1 flex flex-col gap-4 items-center">
                {youMightAlsoLike.slice(0, 3).map((product) => (
                  <div
                    key={product.id}
                    className="group cursor-pointer flex flex-col items-center"
                  >
                    {/* Image Container with Exact Dimensions: 140px width x 160px height */}
                    <div
                      className="relative bg-gray-50 rounded-lg overflow-hidden mb-3"
                      style={{
                        width: '140px',
                        height: '160px',
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        style={{ padding: '0px' }}
                      />
                      {product.isSponsored && (
                        <span className="absolute top-2 left-2 text-xs text-gray-500 bg-white px-2 py-1 rounded">
                          Sponsored
                        </span>
                      )}
                    </div>

                    {/* Product Info - Center aligned */}
                    <div className="text-center">
                      <h4 className="font-medium text-sm mb-1">
                        {product.brand}
                      </h4>
                      <div className="flex items-center justify-center gap-1 flex-wrap">
                        <span className="text-red-500 font-medium text-xs">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through text-xs">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
