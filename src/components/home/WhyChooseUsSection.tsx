
import React from 'react';
import { ShieldCheck, Target, LineChart, Laptop } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  iconType: 'shield-check' | 'target' | 'line-chart' | 'laptop';
}

const ServiceCard = ({ title, description, iconType }: ServiceCardProps) => {
  // Select the appropriate icon based on iconType
  const renderIcon = () => {
    switch(iconType) {
      case 'shield-check':
        return <ShieldCheck className="h-10 w-10 text-white group-hover:text-befoundPurple transition-colors duration-300" />;
      case 'target':
        return <Target className="h-10 w-10 text-white group-hover:text-befoundPurple transition-colors duration-300" />;
      case 'line-chart':
        return <LineChart className="h-10 w-10 text-white group-hover:text-befoundPurple transition-colors duration-300" />;
      case 'laptop':
        return <Laptop className="h-10 w-10 text-white group-hover:text-befoundPurple transition-colors duration-300" />;
      default:
        return <ShieldCheck className="h-10 w-10 text-white group-hover:text-befoundPurple transition-colors duration-300" />;
    }
  };
  
  return (
    <div className="service-card group">
      <div className="service-card-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="32px" style={{ fill: '#fff' }}>
          <path strokeWidth="0" d="M0 0 C50 100 50 100 100 0 L100 100 0 100"></path>
        </svg>
      </div>
      
      <div className="service-card-icon">
        {renderIcon()}
      </div>
      
      <h3 className="service-card-title">{title}</h3>
      <div className="service-card-desc">
        {description}
      </div>
      
      <div className="service-card-readmore">
        <a href="#" className="text-[#101130] hover:text-befoundPurple transition-colors duration-300 inline-flex items-center">
          Learn More
          <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8l4 4-4 4" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const StepItem = ({ number, title, content, imageUrl }: { number: string, title: string, content: string, imageUrl: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-16">
      <div className="w-full md:w-1/2 px-4">
        <div className="bg-white p-6 rounded-lg">
          <h5 className="text-2xl font-bold mb-3">{title}</h5>
          <p className="text-gray-600 mb-5">{content}</p>
          <div className="mb-4">
            <a href="#contact" className="px-6 py-2 border border-befoundPurple text-befoundPurple rounded-full hover:bg-befoundPurple hover:text-white transition-colors duration-300">
              {title === "Send us Message" ? "Send Message" : title === "Discuss With Us" ? "Open a ticket" : "Contact Us"}
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 relative">
        <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
          <div className="text-4xl font-bold text-white bg-befoundPurple w-20 h-20 rounded-full flex items-center justify-center z-10">{number}</div>
          <div className="ml-6">
            <img src={imageUrl} alt={title} className="max-h-24" />
          </div>
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-befoundPurple">
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8l4 4-4 4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'radial-gradient(#000000 1px, transparent 1px), radial-gradient(#000000 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 25px',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="h-1 w-20 bg-befoundOrange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're dedicated to delivering exceptional software solutions that help your business thrive in the digital landscape. Here's why clients choose beFound:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="Cyber Security" 
            description="We know our people are our greatest asset, and we are putting our money where our values are." 
            iconType="shield-check"
          />
          
          <ServiceCard 
            title="Internet Thinking" 
            description="We're so excited about our new Learning & Development programs where people can grow their skills." 
            iconType="target"
          />
          
          <ServiceCard 
            title="Digital Marketing" 
            description="From the basics, including health and life insurance, and retirement and savings plans." 
            iconType="line-chart"
          />
          
          <ServiceCard 
            title="UI/UX Design" 
            description="We're wildly passionate about our purpose, and it has us transforming everything we do." 
            iconType="laptop"
          />
        </div>
        
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <div className="h-1 w-20 bg-befoundOrange mx-auto mb-6"></div>
          </div>
          
          <StepItem 
            number="01" 
            title="Send us Message" 
            content="Join us in a replay of this webinar to see how to go from the first line of code to the first message sent in less than 15 minutes, using the form when you go to contact page."
            imageUrl="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h4-step3.png"
          />
          
          <StepItem 
            number="02" 
            title="Discuss With Us" 
            content="When we receive your message. Our support team will check the information and provide you with suitable solutions for our services available on this website."
            imageUrl="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h4-step2.png"
          />
          
          <StepItem 
            number="03" 
            title="Make a Payment!" 
            content="Payment has never been so easy. We use reliable and secure payment services. Your privacy will be best guaranteed. Services are paid for through Payoneer and Paypal."
            imageUrl="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h4-step3.png"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
