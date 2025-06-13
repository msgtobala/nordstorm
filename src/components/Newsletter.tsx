import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section 
      className="py-16 lg:py-20"
      style={{
        background: 'linear-gradient(7.89deg, #05080D -18.2%, #474C57 160.3%)'
      }}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* Left Content - 50% */}
          <div className="flex-1 lg:w-1/2">
            <h2 
              className="text-white font-medium mb-4"
              style={{ fontSize: '32px' }}
            >
              Join Our Newsletter
            </h2>
            <p 
              className="font-regular"
              style={{ 
                color: '#878A92',
                fontSize: '14px'
              }}
            >
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>

          {/* Right Content - Newsletter Form - 50% */}
          <div className="flex-1 lg:w-1/2 flex justify-start">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full sm:w-auto lg:w-[420px] px-4 py-3 bg-transparent focus:outline-none focus:ring-0 transition-colors"
                  style={{
                    border: '1.33px solid #E6E7E8',
                    borderRadius: '8px',
                    color: '#878A92',
                    minWidth: '280px'
                  }}
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-white hover:bg-gray-100 transition-colors whitespace-nowrap flex-shrink-0"
                style={{ 
                  borderRadius: '8px',
                  color: '#0E1422',
                  fontWeight: '500'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;