import React from 'react';

const sectorData = [
  {
    title: (
      <>
        Businesses <br /> (Real Estate, Food Industry, Shops, etc)
      </>
    ),
    desc: 'From real estate, food industry, shops, and more, we empower businesses to thrive in the digital age with tailored solutions.',
    img: 'https://plus.unsplash.com/premium_photo-1726783279226-13907b4d5543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8',
    circleClass: 'bottom-0 right-0',
    circleClip: 'circle(calc(6.25rem + 7.5vw) at 100% 100%)',
    overlayClip: 'circle(calc(6.25rem + 7.5vw) at 100% 100%)',
    overlayClipHover: 'circle(110vw at 100% 100%)',
    prpl: 'lg:pr-64 sm:pr-48',
  },
  {
    title: 'Legacy',
    desc: 'Modernize and future-proof your legacy systems with our expert digital transformation services.',
    img: 'https://plus.unsplash.com/premium_photo-1698084059484-021206e1c62a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGxlZ2FsfGVufDB8fDB8fHww',
    circleClass: 'bottom-0 left-0',
    circleClip: 'circle(calc(6.25rem + 7.5vw) at 0% 100%)',
    overlayClip: 'circle(calc(6.25rem + 7.5vw) at 0% 100%)',
    overlayClipHover: 'circle(110vw at 0% 100%)',
    prpl: 'lg:pl-64 sm:pl-48',
  },
  {
    title: 'Education',
    desc: 'Empowering educational institutions with innovative technology for better learning outcomes.',
    img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    circleClass: 'top-0 right-0',
    circleClip: 'circle(calc(6.25rem + 7.5vw) at 100% 0%)',
    overlayClip: 'circle(calc(6.25rem + 7.5vw) at 100% 0%)',
    overlayClipHover: 'circle(110vw at 100% 0%)',
    prpl: 'lg:pr-44 sm:pr-24',
  },
  {
    title: 'Finance',
    desc: 'Secure, scalable, and innovative solutions for the financial sector to drive growth and compliance.',
    img: 'https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8',
    circleClass: 'top-0 left-0',
    circleClip: 'circle(calc(6.25rem + 7.5vw) at 0% 0%)',
    overlayClip: 'circle(calc(6.25rem + 7.5vw) at 0% 0%)',
    overlayClipHover: 'circle(110vw at 0% 0%)',
    prpl: 'lg:pl-64 sm:pl-48',
  },
];

const FocusSectorsSection = () => {
  return (
    <section className="min-h-screen bg-befoundPurple text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-befoundOrange text-lg max-w-lg mx-auto mb-2 capitalize flex items-center justify-center">
        sectors we serve in
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-befoundOrange ml-3 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug font-['Playfair_Display',serif]">Sectors Built Specifically for your Business</h1>
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {sectorData.map((sector, idx) => (
          <div
            key={idx}
            className="card group relative rounded-2xl overflow-hidden min-h-[340px] h-[340px] w-full flex flex-col justify-center bg-[#4f378b] transition-colors duration-500 shadow-lg"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {/* Orange fill animation overlay (background only) */}
            <div
              className="card-overlay absolute inset-0 z-10 pointer-events-none transition-all duration-700"
              style={{
                backgroundColor: '#fca311',
                clipPath: sector.overlayClip,
              }}
            />
            <style>{`
              .card:hover .card-overlay {
                clip-path: ${sector.overlayClipHover} !important;
                transition: clip-path 0.7s cubic-bezier(0.4,0,0.2,1);
              }
              .card .content p {
                transition: color 0.8s;
              }
              .card:hover .content h2, .card:hover .content p {
                color: #fff !important;
              }
            `}</style>
            {/* Circle image background (always above overlay) */}
            <div
              className={`circle absolute w-full h-full z-20 ${sector.circleClass}`}
              style={{
                background: `url('${sector.img}') no-repeat 50% 50% / cover`,
                clipPath: sector.circleClip,
              }}
            />
            {/* Card content */}
            <div className={`content relative z-30 ${sector.prpl} p-10 transition-colors duration-500`}> 
              <h2 className="capitalize mb-4 text-2xl xl:text-3xl font-['Playfair_Display',serif] text-white group-hover:text-befoundOrange transition-colors duration-500">{sector.title}</h2>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-500">{sector.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusSectorsSection;
