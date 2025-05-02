
import React from 'react';

type SectorItemProps = {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

const SectorItem = ({ title, icon, className = "" }: SectorItemProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden group ${className}`}>
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <div className="absolute inset-0 bg-befoundPurple bg-opacity-50 flex items-center justify-center text-white group-hover:bg-opacity-70 transition-all">
          <div className="text-center p-6">
            <div className="mb-3">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const FocusSectorsSection = () => {
  return (
    <section id="focus-sectors" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Focus Sectors</h2>
          <div className="h-1 w-20 bg-befoundOrange mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-befoundPurple mb-4">Industries We Serve</h3>
              <p className="text-gray-600 mb-6">
                beFound serves a diverse range of industries, leveraging our expertise to provide customized solutions that address industry-specific challenges.
              </p>
              <p className="text-gray-600 mb-6">
                We understand that each industry has unique requirements and challenges. Our team stays up-to-date on industry trends and regulations to deliver solutions that keep you competitive.
              </p>
              <a 
                href="#contact" 
                className="inline-block px-6 py-2 bg-befoundOrange text-white font-medium rounded-md hover:bg-orange-500 transition-colors"
              >
                Discuss Your Industry Needs
              </a>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <SectorItem 
                title="Healthcare" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                } 
              />
              
              <SectorItem 
                title="Education" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                } 
              />
              
              <SectorItem 
                title="Finance" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                } 
              />
              
              <SectorItem 
                title="Retail" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                } 
              />
              
              <SectorItem 
                title="Manufacturing" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                } 
              />
              
              <SectorItem 
                title="Real Estate" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                } 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusSectorsSection;
