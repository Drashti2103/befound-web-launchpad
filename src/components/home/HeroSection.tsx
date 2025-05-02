
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (bgRef.current) {
        // Parallax effect
        bgRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
      if (textRef.current) {
        // Scale and opacity effect
        const scale = Math.max(1 - scrollPosition / 1000, 0.95);
        const opacity = Math.max(1 - scrollPosition / 500, 0);
        textRef.current.style.transform = `scale(${scale})`;
        textRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0c0c0c 0%, #1f1f1f 100%)',
        }}
      >
        {/* Abstract grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            backgroundPosition: '0 0, 25px 25px',
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div 
          ref={textRef}
          className="text-center px-4"
        >
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              <span className="text-befoundOrange">be</span>
              <span className="text-white font-newsreader font-bold">Found</span>
            </h1>
            
            <div className="tag-lines flex flex-col md:flex-row items-center justify-center text-white mb-8 space-y-1 md:space-y-0 md:space-x-4">
              <span>Be Seen</span>
              <span className="hidden md:block">-</span>
              <span>Be Heard</span>
              <span className="hidden md:block">-</span>
              <span>Be Found</span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
              Innovative software solutions that empower businesses to reach their full potential in the digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-befoundOrange text-white text-lg font-medium rounded-md hover:bg-orange-500 transition-colors"
              >
                Get Started
              </a>
              <a 
                href="#about" 
                className="px-8 py-3 border-2 border-white text-white text-lg font-medium rounded-md hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto min-w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,117.3C960,149,1056,203,1152,192C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
