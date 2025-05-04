import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';

const ServiceCard = ({ title, description, icon, color }: { title: string, description: string, icon: React.ReactNode, color: string }) => {
  return (
    <div className={`group relative flex justify-center items-center h-[350px] w-[300px] bg-white transition-all duration-500 ease-in-out shadow-lg`}
         style={{ '--clr': color } as React.CSSProperties}>
      {/* Card borders */}
      <div className="absolute -z-10 -inset-[10px_50px] border-t-4 border-b-4 transition-all duration-500 ease-in-out group-hover:inset-[-10px_40px] group-hover:skew-y-0 skew-y-[15deg]"
           style={{ borderColor: color }} />
      <div className="absolute -z-10 inset-[60px_-10px] border-l-4 border-r-4 transition-all duration-500 ease-in-out group-hover:inset-[40px_-10px] group-hover:skew-x-0 skew-x-[15deg]"
           style={{ borderColor: color }} />
      
      {/* Card content */}
      <div className="relative flex flex-col justify-center items-center gap-8 text-center p-5 h-full w-full overflow-hidden">
        {/* Icon */}
        <div
          className={`h-20 w-20 flex justify-center items-center text-5xl transition-all duration-500 ease-in-out
            bg-white group-hover:bg-[var(--clr)]
            text-[var(--clr)] group-hover:text-white
            rounded-sm
            shadow-[0_0_0_4px_#fff,0_0_0_6px_var(--clr)]
            group-hover:shadow-[0_0_0_4px_#fff,0_0_0_300px_var(--clr)]`}
        >
          {React.cloneElement(icon as React.ReactElement, {
            className: "h-8 w-8 transition-colors duration-500",
            stroke: "currentColor",
          })}
        </div>
        
        {/* Content */}
        <div className="flex flex-col justify-center items-center gap-2.5">
          <h3 className="text-2xl font-medium text-gray-800 transition-colors duration-500 ease-in-out group-hover:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 transition-colors duration-500 ease-in-out group-hover:text-white">
            {description}
          </p>
        </div>
        
        {/* Button */}
        <a href="#" className="relative inline-flex px-4 py-2 font-medium no-underline mt-2.5 transition-all duration-500 ease-in-out
                             group-hover:text-[var(--clr)] group-hover:bg-white"
           style={{ border: `2px solid ${color}`, color: '#fff', backgroundColor: color }}>
          view Portfolio
        </a>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-2 font-newsreader text-center text-befoundPurple">Our Services</h1>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-befoundOrange rounded-full"></div>
          </div>
          <p className="text-lg text-gray-700 mb-12 text-center">
            At beFound, we offer a comprehensive range of software solutions designed to help your business succeed in the digital landscape. Our services are tailored to meet your specific needs and goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-16 w-full max-w-full mx-auto py-16">
            <ServiceCard
              title="Web Development"
              description="Custom websites and web applications that are responsive, fast, and user-friendly, built with modern technologies."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              color="#7B2CBF"
            />
            
            <ServiceCard
              title="Mobile App Development"
              description="Native and cross-platform mobile applications for iOS and Android that help you reach your customers wherever they are."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
              color="#4ECDC4"
            />
            
            <ServiceCard
              title="UX/UI Design"
              description="User-centered design that enhances user experience and creates intuitive, beautiful interfaces that users love."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
              color="#45B7D1"
            />
            
            <ServiceCard
              title="Custom Software Development"
              description="Tailored software solutions designed to address your specific business challenges and optimize your operations."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
              color="#FFA94D"
            />
            
            <ServiceCard
              title="E-Commerce Solutions"
              description="Comprehensive e-commerce platforms that make selling products and services online seamless and profitable."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              }
              color="#A084E8"
            />
            
            <ServiceCard
              title="Maintenance & Support"
              description="Ongoing technical support, updates, and maintenance to ensure your software remains secure and performs optimally."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              }
              color="#5A189A"
            />
            
            {/* Shopify Sites Card */}
            <ServiceCard
              title="Shopify Sites"
              description="Launch and manage your online store with custom Shopify solutions tailored to your brand."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l1.664 12.142A2 2 0 006.65 21h10.7a2 2 0 001.986-1.858L21 7M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2" />
                </svg>
              }
              color="#7B2CBF"
            />

            {/* SEO Optimization Card */}
            <ServiceCard
              title="SEO Optimization"
              description="Boost your website's visibility and ranking on search engines with our expert SEO strategies."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 4h1a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v7a2 2 0 002 2h1" />
                </svg>
              }
              color="#FF8C42"
            />
          </div>
          
          {/* Our Approach Section */}
          <div className="relative mt-20 px-4 md:px-8 py-16 overflow-hidden min-h-[80vh] w-full bg-[#fcfcfc]">
            {/* Main Content */}
            <div className="relative container mx-auto z-10">
              {/* Heading */}
              <div className="text-center mb-16">
                <div className="relative inline-block">
                  <h2 className="text-4xl font-bold mb-2 font-newsreader text-center text-befoundPurple">
                    Our Approach
                    <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-befoundOrange rounded-full"></div>
          </div>
                  </h2>
                </div>
                <p className="text-[#4A4A4A] max-w-3xl mx-auto text-lg">
                  Every product or service has its unique identity and requires a tailored approach and plan. 
                  Our team follows a concrete and thorough process to ensure success.
                </p>
              </div>

              {/* Process Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Research & Ideation */}
                <div className="group relative border border-[#e6e6e6] p-12 text-center transition-all duration-500 hover:border-transparent
                               before:absolute before:inset-0 before:bg-black/30 before:opacity-0 before:transition-opacity
                               hover:before:opacity-100 before:z-10 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img 
                      src="https://i.ibb.co/mykzQks/services1.jpg" 
                      alt="service background" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-20">
                    <div className="text-befoundOrange mb-5 group-hover:text-white transition-colors duration-500">
                      <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-[#1e2331] mb-4 group-hover:text-white transition-colors duration-500">
                      Research & Ideation
                    </h4>
                    <p className="text-gray-600 mb-4 group-hover:text-white transition-colors duration-500">
                      Before starting a project, we research, choose keywords, and understand USPs and target 
                      audience to create meaningful campaigns with flawless execution.
                    </p>
                  </div>
                </div>

                {/* Design and Development */}
                <div className="group relative border border-[#e6e6e6] p-12 text-center transition-all duration-500 hover:border-transparent
                               before:absolute before:inset-0 before:bg-black/30 before:opacity-0 before:transition-opacity
                               hover:before:opacity-100 before:z-10 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img 
                      src="https://i.ibb.co/mykzQks/services1.jpg" 
                      alt="service background" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-20">
                    <div className="text-befoundOrange mb-5 group-hover:text-white transition-colors duration-500">
                      <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-[#1e2331] mb-4 group-hover:text-white transition-colors duration-500">
                      Design and Development
                    </h4>
                    <p className="text-gray-600 mb-4 group-hover:text-white transition-colors duration-500">
                      Carefully considering the findings of the research and brainstorming session, we design 
                      the product as per the requirement. It goes under a proper and evaluated design process.
                    </p>
                  </div>
                </div>

                {/* Testing and Deployment */}
                <div className="group relative border border-[#e6e6e6] p-12 text-center transition-all duration-500 hover:border-transparent
                               before:absolute before:inset-0 before:bg-black/30 before:opacity-0 before:transition-opacity
                               hover:before:opacity-100 before:z-10 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img 
                      src="https://i.ibb.co/mykzQks/services1.jpg" 
                      alt="service background" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-20">
                    <div className="text-befoundOrange mb-5 group-hover:text-white transition-colors duration-500">
                      <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-[#1e2331] mb-4 group-hover:text-white transition-colors duration-500">
                      Testing and Deployment
                    </h4>
                    <p className="text-gray-600 mb-4 group-hover:text-white transition-colors duration-500">
                      We follow strict quality check protocols to ensure glitch-free products. Once everything 
                      is in place and our client is happy with the outcome, we deploy one final QC before launching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;
