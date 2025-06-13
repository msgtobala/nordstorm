import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
        {/* Main Footer Content - Single Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mb-[140px]">
          {/* Left Section - Logo, Description, Social Icons */}
          <div className="lg:flex-shrink-0">
            {/* Logo */}
            <div className="mb-[26px]">
              <img 
                src="/src/assets/images/logo.png" 
                alt="Nordstrom" 
                className="w-[264px] h-[33px]"
              />
            </div>
            
            {/* Description */}
            <p className="text-[#5C5F6A] text-sm leading-relaxed mb-[42px] max-w-xs">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - All Columns in One Row */}
          <div className="flex flex-col sm:flex-row sm:gap-16 lg:gap-20 xl:gap-24 gap-8">
            {/* Support Column */}
            <div className="">
              <h3 className="text-[#878A92] font-regular text-[14px] mb-4 uppercase tracking-wide mb-[54px]">
                SUPPORT
              </h3>
              <ul className="space-y-6">
                <li>
                  <a href="#" className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="">
              <h3 className="text-[#878A92] font-regular text-[14px] mb-4 uppercase tracking-wide mb-[54px]">
                COMPANY
              </h3>
              <ul className="space-y-6">
                <li>
                  <a href="#" className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Shop Column */}
            <div className="">
              <h3 className="text-[#878A92] font-regular text-[14px] mb-4 uppercase tracking-wide mb-[54px]">
                SHOP
              </h3>
              <ul className="space-y-6">
                <li>
                  <a href="#" className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm">
                    Checkout
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm">
                    Cart
                  </a>
                </li>
              </ul>
            </div>

            {/* Accepted Payments Column */}
            <div className="">
              <h3 className="text-[#878A92] font-regular text-[14px] mb-4 uppercase tracking-wide mb-[54px]">
                ACCEPTED PAYMENTS
              </h3>
              <div className="flex items-center space-x-2">
                <img 
                  src="/src/assets/images/footer/Mastercard.png" 
                  alt="Mastercard" 
                  className="h-6 w-auto"
                  style={{ filter: 'grayscale(100%)' }}
                />
                <img 
                  src="/src/assets/images/footer/Vector.png" 
                  alt="American Express" 
                  className="h-4 w-auto"
                  style={{ filter: 'grayscale(100%)' }}
                />
                <img 
                  src="/src/assets/images/footer/Visa.png" 
                  alt="Visa" 
                  className="h-6 w-auto"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright with border top */}
        <div 
          className="text-center pt-9"
          style={{ 
            borderTop: '1.33px solid #F6F6F6'
          }}
        >
          <p className="text-[#5C5F6A] text-sm">
            © 2025 Nordstorm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;