
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            Founded in 2025, beFound began with a clear mission: to offer a modern, user-focused approach to web design—one that blends creativity with professionalism. From day one, the goal has been to help businesses of all sizes stand out online with clean, effective, and beautifully built websites.
          </p>
          
          <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At beFound, we're dedicated to helping businesses establish a strong online presence through innovative software solutions and exceptional design. We believe that every business deserves to be found online, and we're here to make that happen.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Jane Doe</h3>
                <p className="text-gray-500 mb-4">Founder & CEO</p>
                <p className="text-gray-700">
                  Jane has over 15 years of experience in software development and has led projects for Fortune 500 companies.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">John Smith</h3>
                <p className="text-gray-500 mb-4">CTO</p>
                <p className="text-gray-700">
                  John is a tech innovator with expertise in emerging technologies and a passion for creating intuitive user experiences.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Emily Johnson</h3>
                <p className="text-gray-500 mb-4">Design Director</p>
                <p className="text-gray-700">
                  Emily brings creative vision and strategic insight to every project, ensuring beautiful and functional designs.
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-700">
                We never compromise on quality. Every line of code and design element is crafted with attention to detail and a commitment to excellence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We're always exploring new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-700">
                We believe the best results come from working closely with our clients, understanding their needs, and incorporating their feedback.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-700">
                We operate with transparency, honesty, and a strong ethical framework in all our business dealings.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;
