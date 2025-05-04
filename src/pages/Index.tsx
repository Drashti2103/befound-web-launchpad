import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import FocusSectorsSection from '../components/home/FocusSectorsSection';
import ContactSection from '../components/home/ContactSection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import Expertise from '../components/home/Expertise';
import BusinessSection from '../components/home/BusinessSolutions';
import BestOfWorkSection from '../components/home/BestOfWorkSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <BusinessSection />
      <FocusSectorsSection />
      <Expertise />
      <BestOfWorkSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
