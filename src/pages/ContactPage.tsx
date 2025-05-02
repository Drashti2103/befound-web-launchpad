
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import ContactSection from '../components/home/ContactSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700">
            Ready to get started? We'd love to hear from you. Fill out the form below or use our contact information to get in touch with our team.
          </p>
        </div>
        
        <ContactSection />
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
