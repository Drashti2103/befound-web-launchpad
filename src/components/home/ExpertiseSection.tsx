import { useState } from 'react';
import { Server, Layout, Smartphone, Power, Bot, BarChart2 } from 'lucide-react';

export default function ExpertiseSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const platforms = [
    { icon: <Smartphone className="text-white" size={32} />, name: 'Salesforce' },
    { icon: <div className="text-white font-bold">365</div>, name: 'Dynamic 365' },
    { icon: <div className="text-white font-bold">W</div>, name: 'WordPress' },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="black" fillOpacity="0.6"/>
          <path d="M8 10V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10L12 7L16 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      name: 'Shopify'
    },
  ];

  const serviceCards = [
    {
      id: 1,
      icon: <Smartphone className="text-befoundOrange" size={24} />,
      title: 'Mobile',
      description: 'Seamless mobile solutions connecting businesses and customers anytime, anywhere',
    },
    {
      id: 2,
      icon: <Server className="text-befoundOrange" size={24} />,
      title: 'Back End',
      description: 'SQL, Supabase, Firebase, and more integrations to support your business needs.',
    },
    {
      id: 3,
      icon: <Layout className="text-befoundOrange" size={24} />,
      title: 'Front End',
      description: 'MEAN, MERN, and more used to build scalable, secure, and high-performing applications',
    },
    {
      id: 4,
      icon: <Bot className="text-befoundOrange" size={24} />,
      title: 'AI Integrations',
      description: 'Integrate advanced AI solutions to automate, optimize, and enhance your business processes.',
    },
    {
      id: 5,
      icon: <BarChart2 className="text-befoundOrange" size={24} />,
      title: 'SEO',
      description: 'Boost your online presence and visibility with expert SEO strategies and implementation.',
    },
    {
      id: 6,
      icon: <Power className="text-befoundOrange" size={24} />,
      title: 'Power Platform',
      description: 'Experience the transformational capabilities of the Power Platform and thrive on the digital landscape, driving efficiency and growth',
    },
  ];

  return (
    <div className="w-full bg-[#f1f3f6] overflow-hidden">
      {/* Main Section with Hero Image and Title on Right */}
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex flex-col lg:flex-row">
          {/* Background Image - Taking 2/3 of the container on desktop */}
          <div className="w-full lg:w-2/3 h-96 relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-befoundPurple/40 to-befoundOrange/10 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
              alt="Laptop with analytics dashboard"
              className="w-full h-full object-cover"
            />

            {/* Platform Icons Overlay */}
            {/* <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-8 max-w-lg">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center shadow-md mb-2">
                      {platform.icon}
                    </div>
                    <span className="text-white font-medium text-sm">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Title Section - Taking 1/3 of the container and aligned to right */}
          <div className="w-full lg:w-1/3 pt-8 lg:pt-20 lg:pl-12">
            <div className="flex items-start mb-2">
              <div className="h-1 w-8 bg-befoundOrange mr-2 mt-3"></div>
              <span className="text-befoundOrange font-semibold tracking-wider">EXPERTISE</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 font-newsreader text-beFoundPurple mb-4">Our Area of Expertise</h2>
            <p className="text-gray-600">
              We leverage cutting-edge technologies for efficiency, productivity, and growth opportunities.
            </p>
          </div>
        </div>

        {/* Cards Row - Positioned to overlap the image by 15% */}
        <div className="relative -mt-16 z-30">
          {/* Horizontal scrollable container for cards */}
          <div className="flex overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex gap-6">
              {serviceCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white p-6 rounded shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 flex-shrink-0 w-64"
                  style={{ transitionProperty: 'box-shadow, transform' }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{card.title}</h3>
                  <div className="h-0.5 w-12 bg-befoundOrange mb-4"></div>
                  <p className="text-gray-600 text-sm">{card.description}</p>

                  {/* Hover Effect - Multi-shade circles in bottom right corner */}
                  <div className={`pointer-events-none absolute -bottom-20 -right-20 transition-all duration-300 ${
                    hoveredCard === card.id ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-8 translate-y-8 opacity-0'
                  }`}>
                    <div className="absolute w-40 h-40 rounded-full bg-befoundOrange/10" style={{zIndex:1}}></div>
                    <div className="absolute w-32 h-32 rounded-full bg-befoundOrange/30 right-4 bottom-4" style={{zIndex:2}}></div>
                    <div className="absolute w-24 h-24 rounded-full bg-befoundOrange/60 right-8 bottom-8" style={{zIndex:3}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS to hide scrollbar but maintain scroll functionality */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
} 