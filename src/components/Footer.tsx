import React from 'react';

// Import all footer images
import logo from '../assets/images/logo.png';
// import mastercard from '../assets/images/footer/Mastercard.png';
// import amex from '../assets/images/footer/Vector.png';
// import visa from '../assets/images/footer/Visa.png';

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
              <img src={logo} alt="Nordstrom" className="w-[264px] h-[33px]" />
            </div>

            {/* Description */}
            <p className="text-[#5C5F6A] text-md leading-relaxed mb-[42px] max-w-xs">
              Where fashion feels effortless. <br /> Where service feels
              tailored.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors"
                aria-label="Pinterest"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - All Columns in One Row */}
          <div className="flex flex-col sm:flex-row sm:gap-16 lg:gap-20 xl:gap-24 gap-8">
            {/* Support Column */}
            <div className="">
              <h3 className="text-[#878A92] font-regular text-[14px] mb-4 uppercase tracking-wide mb-[54px]">
                Customer Service
              </h3>
              <ul className="space-y-6">
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Order Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Return Policy & Exchanges
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Price Adjustments
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="">
              <h3 className="text-[#878A92] font-regular text-[14px] mb-4 uppercase tracking-wide mb-[54px]">
                About Us
              </h3>
              <ul className="space-y-6">
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    All Brands
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Corporate Social
                    <br /> Responsibility
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Diversity, Equity,
                    <br /> Inclusion & Belonging
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Get Email Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Nordstrom Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Nordy Podcast
                  </a>
                </li>
              </ul>
            </div>

            {/* Shop Column */}
            <div className="">
              <h3 className="text-[#878A92] font-regular text-[14px] mb-4 uppercase tracking-wide mb-[54px]">
                Stores & Services
              </h3>
              <ul className="space-y-6">
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Find a Store
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Free Style Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Alterations & Tailoring
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    SkinSpirit Clinic Spa
                    <br />
                    Nordstrom
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Nordstrom Restaurants
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Nordstrom Local
                  </a>
                </li>
              </ul>
            </div>

            {/* Accepted Payments Column */}
            <div className="">
              <h3 className="text-[#878A92] font-regular text-[14px] mb-4 uppercase tracking-wide mb-[54px]">
                Nordstrom Card & Rewards
              </h3>
              <ul className="space-y-6">
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    The Nordy Club Rewards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Apply for a Nordstrom Card
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Pay My Bill
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5C5F6A] hover:text-[#0E1422] transition-colors text-sm"
                  >
                    Manage My Nordstrom Card
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright with border top */}
        <div
          className="text-center pt-9"
          style={{
            borderTop: '1.33px solid #F6F6F6',
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
