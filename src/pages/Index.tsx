import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import FocusSectorsSection from '../components/home/FocusSectorsSection';
import ContactSection from '../components/home/ContactSection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import ExpertiseSection from '../components/home/ExpertiseSection';
import BusinessSection from '../components/home/BusinessSolutions';
import BestOfWorkSection from '../components/home/BestOfWorkSection';
import CTASection from '../components/home/CTASection';
import { SEO, getOrganizationSchema, getLocalBusinessSchema } from '../components/common/SEO';

const Index = () => {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <div className="min-h-screen">
      <SEO
        title="beFound - Software Solutions Company | Web Development USA"
        description="Professional web development, mobile apps, and digital solutions. Serving real estate, dental, and restaurant industries across the USA."
        keywords="software solutions, web development USA, mobile app development, custom software, e-commerce development, UI/UX design, Shopify development, SEO optimization"
        canonicalUrl="https://befound.com/"
        structuredData={[organizationSchema, localBusinessSchema]}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <BusinessSection />
      <FocusSectorsSection />
      <ExpertiseSection />
      <div className="flex flex-col space-y-0">
        <BestOfWorkSection />
        <CTASection />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
