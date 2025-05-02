import React from 'react';

const solutions = [
  {
    number: '01',
    title: 'Web Development',
    desc: 'Build robust, scalable, and high-performing web applications tailored to your business needs.',
  },
  {
    number: '02',
    title: 'Website Design',
    desc: 'Create visually stunning and user-friendly website designs that engage and convert visitors.',
  },
  {
    number: '03',
    title: 'SEO Optimization',
    desc: 'Enhance your online visibility and drive organic traffic with expert SEO strategies.',
  },
  {
    number: '04',
    title: 'Mobile Application',
    desc: 'Deliver seamless mobile experiences with custom mobile app development for iOS and Android.',
  },
  {
    number: '05',
    title: 'Legacy App Modernization',
    desc: 'Upgrade and modernize outdated applications to improve performance, security, and compatibility.',
  },
  {
    number: '06',
    title: 'E-commerce Solutions',
    desc: 'Launch and grow your online store with scalable, secure, and feature-rich e-commerce platforms.',
  },
];

const BusinessSolutions = () => {
  return (
    <section className="w-full bg-[#f7fcfa] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="h-10 flex flex-col items-center justify-end mb-2">
            <div className="w-1 h-6 bg-befoundOrange mb-1"></div>
            <div className="w-12 h-1 bg-befoundOrange"></div>
          </div>
          <span className="text-befoundOrange font-semibold text-lg mb-2 tracking-wide">WHAT WE PROVIDE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-newsreader text-beFoundPurple text-center mb-4">Our Transformative Business Solutions</h2>
          <p className="text-gray-500 text-center max-w-2xl">
            beFound delivers tailored strategies that drive efficiency, enable data-driven decisions, and enhance customer experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <div
              key={sol.number}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start transition-shadow duration-200 hover:shadow-lg min-h-[180px]"
            >
              <div className="flex items-center mb-2">
                <span className="text-befoundOrange font-bold text-xl mr-2">{sol.number}</span>
                <div className="h-1 w-6 bg-befoundOrange mr-2"></div>
                <span className="text-lg font-bold text-[#1a3365]">{sol.title}</span>
              </div>
              <div className="pl-12">
                <p className="text-gray-600 text-base font-normal leading-relaxed">{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions; 