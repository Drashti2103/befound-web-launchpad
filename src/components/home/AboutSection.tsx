
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="h-1 w-20 bg-befoundOrange mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            {/* Timeline based on CodePen design */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
              {/* Timeline stem */}
              <div className="h-full w-1 bg-befoundOrange absolute left-0 sm:left-16 top-0"></div>
              
              {/* Timeline node */}
              <div className="flex flex-col sm:flex-row items-start mb-6 group">
                <div className="absolute left-0 sm:left-16 w-8 h-8 bg-befoundOrange rounded-full transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="pt-6 sm:pl-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Beginnings</h3>
                  <p className="text-gray-700">
                    Founded in 2025, beFound began with a clear mission: to offer a modern, user-focused approach to web design—one that blends creativity with professionalism.
                  </p>
                </div>
              </div>
              
              {/* Timeline node */}
              <div className="flex flex-col sm:flex-row items-start mb-6 group">
                <div className="absolute left-0 sm:left-16 w-8 h-8 bg-befoundOrange rounded-full transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="pt-6 sm:pl-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Growth</h3>
                  <p className="text-gray-700">
                    From day one, the goal has been to help businesses of all sizes stand out online with clean, effective, and beautifully built websites.
                  </p>
                </div>
              </div>
              
              {/* Timeline node */}
              <div className="flex flex-col sm:flex-row items-start group">
                <div className="absolute left-0 sm:left-16 w-8 h-8 bg-befoundOrange rounded-full transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="pt-6 sm:pl-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission Today</h3>
                  <p className="text-gray-700">
                    Today, we continue our mission by delivering innovative software solutions that help businesses succeed in an increasingly digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-700 mb-6">
                At beFound, we believe that great software is about more than just code. It's about understanding your business goals and creating solutions that help you achieve them.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of experienced developers, designers, and strategists work closely with you to understand your unique challenges and create tailored solutions that drive real results.
              </p>
              <p className="text-gray-700">
                Whether you're looking to launch a new website, develop a custom application, or optimize your online presence, we're here to help you be found by the right audience at the right time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
