import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-r from-befoundPurple via-[#1a0a2a] to-black overflow-hidden mt-8">
      {/* Dotted SVGs for corners */}
      <svg className="absolute left-0 top-0 w-32 md:w-64 h-32 md:h-64 opacity-30" viewBox="0 0 200 200" fill="none">
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#fff" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots)" />
      </svg>
      <svg className="absolute right-0 bottom-0 w-32 md:w-64 h-32 md:h-64 opacity-30" viewBox="0 0 200 200" fill="none">
        <defs>
          <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#fff" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots2)" />
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6 font-newsreader leading-tight">
          Develop App that Engages Users, & Better Results
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium px-4 sm:px-8">
          Drive better conversions, ROI and user engagement through our application development consulting services.
        </p>
        <button
          onClick={handleContactClick}
          className="inline-block bg-white text-befoundPurple font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow hover:bg-befoundOrange hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg"
        >
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default CTASection; 