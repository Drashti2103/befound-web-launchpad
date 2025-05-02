
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

type ExpertiseItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  readMoreLink?: string;
}

const ExpertiseItem = ({ title, description, icon, readMoreLink = "#" }: ExpertiseItemProps) => {
  return (
    <div className="expertise-item">
      <div className="expertise-icon">
        {icon}
      </div>
      <div className="expertise-content">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={readMoreLink} className="read-more">
          Read More
          <svg className="inline-block ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <div className="h-1 w-20 bg-befoundOrange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in a wide range of software development services to meet your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 lg:gap-x-24">
          <div className="space-y-8">
            <ExpertiseItem
              title="Web App Development"
              description="With expertise in cutting-edge technologies, we deliver robust web development solutions that cater to diverse business needs."
              icon={
                <img 
                  src="public/lovable-uploads/4c6fcf7a-e533-4469-b415-b4f982bb4640.png" 
                  alt="Web Development" 
                  className="w-16 h-16 object-contain"
                />
              }
            />
            
            <ExpertiseItem
              title="Mobile Development"
              description="Tap into our comprehensive mobile application development services, crafting innovative and user-friendly apps for iOS and Android platforms."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#4f3dff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
          
          <div className="space-y-8 mt-8 md:mt-0">
            <ExpertiseItem
              title="UI/UX Design"
              description="Our skilled designers create visually appealing and intuitive user interfaces, focusing on enhancing user experiences and maximizing engagement."
              icon={
                <img 
                  src="public/lovable-uploads/ad4054ae-f577-442b-be7f-6c570e379606.png" 
                  alt="UI/UX Design" 
                  className="w-16 h-16 object-contain"
                />
              }
            />
            
            <ExpertiseItem
              title="Salesforce Development"
              description="Our dedicated quality assurance team delivers excellent software solutions, guaranteeing superior performance and reliability."
              icon={
                <img 
                  src="public/lovable-uploads/f7b1fb25-5b2e-424e-9240-8537479ca9eb.png" 
                  alt="Salesforce Development" 
                  className="w-16 h-16 object-contain"
                />
              }
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-befoundOrange text-white text-lg font-medium rounded-md hover:bg-orange-500 transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .expertise-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          background-color: #f9f9f9;
          padding: 2rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .expertise-item:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: #e0e0e0;
          transform: translateY(-5px);
        }
        
        .expertise-icon {
          padding: 1rem;
          background-color: #f0f0f0;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .expertise-content {
          flex: 1;
        }
        
        .read-more {
          display: inline-flex;
          align-items: center;
          color: #4f3dff;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .read-more:hover {
          color: #7114ef;
        }
        
        .read-more svg {
          transition: transform 0.3s ease;
        }
        
        .read-more:hover svg {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
};

export default ExpertiseSection;
