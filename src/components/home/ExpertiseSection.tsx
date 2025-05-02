
import React from 'react';

type ExpertiseItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ExpertiseItem = ({ title, description, icon }: ExpertiseItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 group">
      <div className="w-16 h-16 rounded-lg bg-befoundOrange text-white flex items-center justify-center flex-shrink-0 group-hover:bg-befoundPurple transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
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
        
        <div className="grid md:grid-cols-2 gap-y-12 gap-x-8 md:gap-x-16 lg:gap-x-24">
          <div className="space-y-12 md:mt-8">
            <ExpertiseItem
              title="Web Development"
              description="Custom websites and web applications that are responsive, fast, and user-friendly, built with modern technologies."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            
            <ExpertiseItem
              title="Mobile App Development"
              description="Native and cross-platform mobile applications for iOS and Android that help you reach your customers wherever they are."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
            />
            
            <ExpertiseItem
              title="UX/UI Design"
              description="User-centered design that enhances user experience and creates intuitive, beautiful interfaces that users love."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
            />
          </div>
          
          <div className="space-y-12">
            <ExpertiseItem
              title="Custom Software Development"
              description="Tailored software solutions designed to address your specific business challenges and optimize your operations."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
            />
            
            <ExpertiseItem
              title="E-Commerce Solutions"
              description="Comprehensive e-commerce platforms that make selling products and services online seamless and profitable."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              }
            />
            
            <ExpertiseItem
              title="Maintenance & Support"
              description="Ongoing technical support, updates, and maintenance to ensure your software remains secure and performs optimally."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
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
    </section>
  );
};

export default ExpertiseSection;
