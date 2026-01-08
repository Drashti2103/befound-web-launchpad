import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import ContactSection from '../components/home/ContactSection';
import { SEO, getLocalBusinessSchema } from '../components/common/SEO';

const ContactPage = () => {
  const localBusinessSchema = getLocalBusinessSchema();

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact beFound',
    description: 'Get in touch with beFound for professional software solutions, web development, and digital services.',
    url: 'https://befound.com/contact',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact Us - Get Your Free Consultation"
        description="Ready to transform your vision? Contact beFound for web development, mobile apps, and custom software solutions. Free consultation available."
        keywords="contact software company, web development consultation, get quote, software solutions contact, beFound contact, free consultation"
        canonicalUrl="https://befound.com/contact"
        structuredData={[contactPageSchema, localBusinessSchema]}
      />
      <Navbar />
      
      <main className="flex-grow">
        <div className="pt-24 pb-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-befoundPurple font-newsreader text-center">Contact Us</h1>
              <div className="h-1 w-24 bg-befoundOrange rounded-full mb-6"></div>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
              Ready to transform your vision into reality? We're here to help. Fill out the form below or use our contact information to get in touch with our team of experts.
            </p>
          </div>
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
