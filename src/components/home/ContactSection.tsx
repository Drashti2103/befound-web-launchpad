import React from 'react';

const ContactSection = () => {
  return (
    <section className="relative w-full py-4 md:py-12 bg-gradient-to-r from-befoundPurple via-[#1a0a2a] to-black overflow-hidden">
      {/* Dotted SVGs for corners */}
      <svg className="absolute left-0 top-0 w-64 h-64 opacity-30" viewBox="0 0 200 200" fill="none">
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#fff" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots)" />
      </svg>
      <svg className="absolute right-0 bottom-0 w-64 h-64 opacity-30" viewBox="0 0 200 200" fill="none">
        <defs>
          <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#fff" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots2)" />
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-extrabold text-white mb-6 leading-tight">Develop App that Engages Users, & Better Results</h2>
        <p className="text-white text-lg md:text-xl mb-8 font-medium">
          Drive better conversions, ROI and user engagement through our application development consulting services.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-befoundPurple font-semibold px-8 py-2 rounded-full shadow hover:bg-befoundOrange hover:text-white transition-colors duration-300 text-base md:text-lg"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
