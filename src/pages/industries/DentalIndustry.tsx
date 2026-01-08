import { SEO, getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '../../components/common/SEO';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { BlogCard } from '../../components/blog/BlogCard';
import { CaseStudyCard } from '../../components/caseStudies/CaseStudyCard';
import { getPostsByCategory } from '../../data/blogPosts';
import { getCaseStudiesByIndustry } from '../../data/caseStudies';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ScrollToTop from '../../components/layout/ScrollToTop';
import ExpandCards from '../../components/ui/expand-cards';
import {
  Calendar,
  Users,
  Shield,
  Search,
  Database,
  Video,
  Clock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Star,
  UserCheck,
} from 'lucide-react';

export const DentalIndustry = () => {
  const blogPosts = getPostsByCategory('dental');
  const caseStudies = getCaseStudiesByIndustry('dental');

  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Online Appointment Booking',
      description:
        'Seamless 24/7 online booking system that integrates with your practice management software. Reduce no-shows with automated reminders and confirmations.',
      features: ['Real-time Availability', 'Automated Reminders', 'Calendar Sync', 'Mobile Booking'],
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Patient Portals',
      description:
        'Secure patient portals for accessing records, treatment plans, and billing. Improve patient engagement and reduce administrative workload.',
      features: ['Medical Records Access', 'Treatment History', 'Online Payments', 'Forms & Consent'],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'HIPAA Compliance',
      description:
        'Enterprise-grade security with full HIPAA compliance. Protect sensitive patient data with encryption, secure messaging, and audit trails.',
      features: ['Data Encryption', 'Secure Messaging', 'Audit Logs', 'Compliance Reporting'],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Dental SEO',
      description:
        'Dominate local search results and attract new patients. Our dental SEO strategies put you on page 1 for high-intent keywords in your area.',
      features: ['Local SEO', 'Google My Business', 'Content Marketing', 'Review Management'],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Practice Management Integration',
      description:
        'Seamless integration with leading dental practice management systems like Dentrix, Eaglesoft, and Open Dental. Streamline your workflow.',
      features: ['PMS Integration', 'Data Synchronization', 'Automated Updates', 'API Connectivity'],
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Teledentistry Features',
      description:
        'Virtual consultation capabilities for initial assessments and follow-ups. Expand your reach and provide convenient care options.',
      features: ['Video Consultations', 'Secure Chat', 'Digital Prescriptions', 'Insurance Verification'],
    },
  ];

  const features = [
    'HIPAA-compliant patient data management',
    'Online appointment scheduling with SMS reminders',
    'Secure patient portal with document sharing',
    'Integration with practice management software',
    'Before/after photo galleries',
    'Insurance verification and claims processing',
    'Teledentistry video consultation platform',
    'Automated appointment reminders and follow-ups',
    'Mobile-first responsive design',
    'Local SEO optimization for patient acquisition',
    'Online payment processing and billing',
    'Performance optimization for fast loading',
  ];

  const stats = [
    { value: '250%', label: 'Patient Inquiry Increase', icon: <TrendingUp /> },
    { value: '<2s', label: 'Page Load Time', icon: <Clock /> },
    { value: '40+', label: 'Dental Practices', icon: <Users /> },
    { value: '100%', label: 'HIPAA Compliant', icon: <Shield /> },
  ];

  const faqs = [
    {
      question: 'How does online appointment booking benefit my dental practice?',
      answer:
        'Online booking provides 24/7 availability for patients to schedule appointments, reducing phone call volume and administrative burden. It integrates with your practice management system, shows real-time availability, sends automated reminders to reduce no-shows, and improves patient satisfaction by offering convenience. Studies show practices with online booking see 30-40% more appointments and significantly fewer no-shows.',
    },
    {
      question: 'Is your dental website development HIPAA compliant?',
      answer:
        'Yes, absolutely. All our dental websites are built with HIPAA compliance at the core. We implement enterprise-grade encryption, secure data storage, encrypted messaging, secure patient portals, audit logging, and proper Business Associate Agreements (BAA). We ensure patient data is protected according to federal regulations and conduct regular security audits.',
    },
    {
      question: 'Can you integrate with my existing practice management software?',
      answer:
        'Yes! We integrate with all major dental practice management systems including Dentrix, Eaglesoft, Open Dental, Curve, Denticon, and others. This ensures seamless data synchronization between your website, patient portal, online booking, and practice management system, eliminating duplicate data entry and keeping everything in sync.',
    },
    {
      question: 'How does dental SEO help me attract more patients?',
      answer:
        'Dental SEO targets local patients actively searching for dental services in your area. We optimize for keywords like "dentist near me," "emergency dental care," and specific procedures. This includes Google My Business optimization, local citations, review management, content marketing, and technical SEO. Most practices see significant increases in organic traffic and new patient inquiries within 3-6 months.',
    },
    {
      question: 'What is the cost of custom dental website development?',
      answer:
        'Dental website costs range from $6,000 for basic practice websites to $25,000+ for comprehensive solutions with patient portals, online booking, teledentistry, and advanced integrations. Investment depends on features, design complexity, integrations with practice management systems, and ongoing support needs. Most practices see ROI within 2-4 months through increased patient acquisition.',
    },
    {
      question: 'How long does dental website development take?',
      answer:
        'A standard dental practice website typically takes 4-6 weeks, while more complex solutions with patient portals, online booking, and practice management integration can take 8-12 weeks. Timeline depends on features, content preparation, integration complexity, and customization requirements. We provide detailed project timelines during consultation and keep you updated throughout development.',
    },
  ];

  const testimonials = [
    {
      quote:
        'beFound completely transformed our online presence. The patient portal and online booking have reduced our administrative workload by 40% while increasing new patient appointments.',
      author: 'Dr. Sarah Johnson',
      position: 'DDS',
      company: 'Smile Bright Dental Care',
      rating: 5,
    },
    {
      quote:
        'The HIPAA-compliant platform they built is exactly what we needed. Patient satisfaction is up, and we are ranking #1 for local dental searches.',
      author: 'Dr. Michael Chen',
      position: 'DMD, FAGD',
      company: 'Pacific Coast Dentistry',
      rating: 5,
    },
  ];

  const seoKeywords = [
    'dental website development USA',
    'dentist website design company USA',
    'dental clinic web development',
    'dental digital solutions USA',
    'dental practice website development',
    'dental web design agency USA',
    'custom dental website USA',
    'dentist SEO friendly website',
    'dental marketing website development',
    'dentist online presence services',
  ].join(', ');

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://befound.com/' },
    { name: 'Industries', url: 'https://befound.com/industries' },
    { name: 'Dental', url: 'https://befound.com/industries/dental' },
  ]);

  const serviceSchema = getServiceSchema({
    name: 'Dental Website Development USA',
    description:
      'Professional dental website development, patient portal creation, and practice management solutions for dental practices in the USA. HIPAA-compliant websites with online booking and patient engagement features.',
    url: 'https://befound.com/industries/dental',
    price: '6000',
  });

  const faqSchema = getFAQSchema(faqs);

  const serviceItems = [
    {
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop',
      title: 'Online Appointment Booking',
      description: 'Seamless 24/7 online booking system that integrates with your practice management software. Reduce no-shows with automated reminders and confirmations.',
    },
    {
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      title: 'Patient Portals',
      description: 'Secure patient portals for accessing records, treatment plans, and billing. Improve patient engagement and reduce administrative workload.',
    },
    {
      image: 'https://images.unsplash.com/photo-1609840114031-3c981b782dfe?w=800&h=600&fit=crop',
      title: 'HIPAA Compliance',
      description: 'Enterprise-grade security with full HIPAA compliance. Protect sensitive patient data with encryption, secure messaging, and audit trails.',
    },
    {
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop',
      title: 'Dental SEO',
      description: 'Dominate local search results and attract new patients. Our dental SEO strategies put you on page 1 for high-intent keywords in your area.',
    },
    {
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      title: 'Practice Management Integration',
      description: 'Seamless integration with leading dental practice management systems like Dentrix, Eaglesoft, and Open Dental. Streamline your workflow.',
    },
    {
      image: 'https://images.unsplash.com/photo-1609840114031-3c981b782dfe?w=800&h=600&fit=crop',
      title: 'Teledentistry Features',
      description: 'Virtual consultation capabilities for initial assessments and follow-ups. Expand your reach and provide convenient care options.',
    },
    {
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop&auto=format',
      title: 'Treatment Plan Presentation',
      description: 'Interactive treatment plan tools with 3D imaging, cost estimates, and financing options to help patients understand and accept treatment.',
    },
    {
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&auto=format',
      title: 'Review Management System',
      description: 'Automated review collection, response management, and reputation monitoring to build trust and attract new patients through social proof.',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Dental Website Development USA | Dentist Web Design Company"
        description="Professional dental website development company specializing in HIPAA-compliant dental websites, patient portals, online booking, and dental practice management solutions. Drive 250% more patient inquiries with our proven dental digital solutions."
        keywords={seoKeywords}
        canonicalUrl="https://befound.com/industries/dental"
        structuredData={[breadcrumbSchema, serviceSchema, faqSchema]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-befoundPurple via-befoundPurple/95 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-befoundPurple/50 to-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-befoundOrange/20 text-befoundOrange border-befoundOrange/30 text-sm px-4 py-1.5">
              Dental Website Development USA
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Transform Your Dental Practice with Custom Digital Solutions
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Drive 250% more patient inquiries with HIPAA-compliant dental websites, patient portals, and online booking systems built for the US market
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://calendly.com/thebefoundcompany/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-befoundOrange hover:bg-befoundOrange/90 text-white text-base px-8 py-6">
                  Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white border-white/30 text-base px-8 py-6"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-befoundOrange">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-befoundPurple mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Expand Cards */}
      <section className="py-0 bg-white">
        <ExpandCards 
          services={serviceItems} 
          defaultExpanded={3}
          title="Dental Technology Solutions That Drive Results"
          subtitle="Comprehensive digital solutions built for dental practices"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-befoundPurple px-4">
                Powerful Features for Dental Websites
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Everything you need to attract patients, streamline operations, and grow your dental practice
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 bg-white p-4 md:p-5 rounded-xl border border-gray-100 hover:border-befoundOrange/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-befoundOrange" />
                  </div>
                  <span className="text-sm md:text-base text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {caseStudies.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-befoundPurple px-4">Dental Practice Success Stories</h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                See how we've helped dental practices transform their digital presence
              </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-befoundPurple to-befoundPurple/90 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center px-4">
            What Dental Professionals Say
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-befoundOrange text-befoundOrange" />
                    ))}
                  </div>
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-white/80">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center px-4">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {blogPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">Dental Insights & Guides</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
                Expert advice on dental website development and digital marketing
              </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-8 md:mt-12">
              <Link to="/blog">
                <Button variant="outline" size="lg" className="text-sm md:text-base">
                  View All Articles <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-r from-befoundPurple via-[#1a0a2a] to-black overflow-hidden mt-8">
        {/* Dotted SVGs for corners */}
        <svg className="absolute left-0 top-0 w-32 md:w-64 h-32 md:h-64 opacity-30" viewBox="0 0 200 200" fill="none">
          <defs>
            <pattern id="dots-dental" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#fff" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dots-dental)" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-32 md:w-64 h-32 md:h-64 opacity-30" viewBox="0 0 200 200" fill="none">
          <defs>
            <pattern id="dots2-dental" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#fff" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dots2-dental)" />
        </svg>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6 font-newsreader leading-tight">
            Ready to Transform Your Dental Practice?
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium px-4 sm:px-8">
            Get a free consultation and discover how custom dental website development can attract more patients, improve practice efficiency, and grow your business.
          </p>
          <a 
            href="https://calendly.com/thebefoundcompany/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-befoundPurple font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow hover:bg-befoundOrange hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};
