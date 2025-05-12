import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '180+',
      description: 'Perfect for small businesses and startups looking to establish their online presence.',
      features: [
        'Responsive Website Development',
        'Basic SEO Optimization',
        'Contact Form Integration',
        'Social Media Integration',
        'Basic Analytics Setup',
        '1 Month Free Support',
        'Standard Hosting Setup'
      ],
      buttonText: 'Contact Us',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '300+',
      description: 'Ideal for growing businesses that need advanced features and functionality.',
      features: [
        'Everything in Basic, plus:',
        'Custom Web Application Development',
        'Advanced SEO Strategy',
        'E-commerce Integration',
        'Mobile App Development',
        'UI/UX Design Services',
        '3 Months Free Support',
        'Performance Optimization',
        'Advanced Analytics Setup'
      ],
      buttonText: 'Contact Us',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '550+',
      description: 'Comprehensive solutions for large businesses requiring complex, scalable systems.',
      features: [
        'Everything in Professional, plus:',
        'Custom Software Development',
        'Shopify Application Development',
        'Enterprise E-commerce Solutions',
        'Advanced Security Features',
        'API Integration',
        'Cloud Infrastructure Setup',
        '6 Months Free Support',
        'Priority Support 24/7',
        'Dedicated Project Manager'
      ],
      buttonText: 'Contact Us',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="min-h-screen bg-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-newsreader text-center mb-4 text-befoundPurple">Choose Your Plan</h1>
            <p className="text-center text-muted-foreground mb-12">Select the perfect plan for your needs</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="bg-card rounded-lg p-8 border border-border hover:border-befoundOrange transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-newsreader text-befoundOrange mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="text-center mb-8">
                    <span className="text-4xl font-bold text-befoundOrange">${plan.price}</span>
                    {/* <span className="text-muted-foreground">/month</span> */}
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <svg className="w-5 h-5 text-befoundOrange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <strong className="text-foreground">{feature}</strong>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 px-6 bg-befoundOrange text-white rounded-md hover:bg-befoundPurple transition-colors duration-300">
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Pricing; 