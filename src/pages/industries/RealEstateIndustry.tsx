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
import {
  Building2,
  MapPin,
  TrendingUp,
  Smartphone,
  Search,
  Camera,
  Database,
  Shield,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Star,
} from 'lucide-react';

export const RealEstateIndustry = () => {
  const blogPosts = getPostsByCategory('real-estate');
  const caseStudies = getCaseStudiesByIndustry('real-estate');

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Custom Real Estate Websites',
      description:
        'Stunning, high-converting websites tailored to your real estate brand. Showcase properties with advanced search, filters, and interactive maps.',
      features: ['IDX/MLS Integration', 'Advanced Property Search', 'Virtual Tours', 'Mobile Responsive'],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Real Estate CRM Development',
      description:
        'Powerful CRM systems to manage leads, track client interactions, and automate follow-ups. Never miss an opportunity.',
      features: ['Lead Management', 'Automated Follow-ups', 'Client Portal', 'Deal Pipeline'],
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Property Portal Development',
      description:
        'Complete property listing platforms with thousands of listings, agent management, and advanced search capabilities.',
      features: ['Multi-Agent Support', 'Property Management', 'Analytics Dashboard', 'API Integrations'],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Apps for Real Estate',
      description:
        'Native iOS and Android apps for property searching on-the-go. Push notifications for new listings and price changes.',
      features: ['Property Alerts', 'Saved Searches', 'Offline Access', 'AR Property Views'],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO for Real Estate',
      description:
        'Dominate local search results and attract qualified buyers. Our SEO strategies put you on page 1 for high-intent keywords.',
      features: ['Local SEO', 'Content Marketing', 'Link Building', 'Technical SEO'],
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Virtual Tour Integration',
      description:
        '360-degree virtual tours, video walkthroughs, and drone footage integration. Let buyers explore properties remotely.',
      features: ['360° Tours', 'Video Integration', 'Drone Footage', 'Floor Plans'],
    },
  ];

  const features = [
    'IDX/MLS Integration for real-time listings',
    'Advanced property search with 20+ filters',
    'Interactive map-based property discovery',
    'Lead capture forms optimized for conversion',
    'Agent/broker management systems',
    'Automated email marketing campaigns',
    'Property valuation tools (AVMs)',
    'Neighborhood and school data integration',
    'Document management and e-signatures',
    'Mobile-first responsive design',
    'Schema markup for better SEO',
    'Performance optimization (sub-2-second loads)',
  ];

  const stats = [
    { value: '300%', label: 'Average Lead Increase', icon: <TrendingUp /> },
    { value: '<2s', label: 'Page Load Time', icon: <Clock /> },
    { value: '50+', label: 'Real Estate Clients', icon: <Users /> },
    { value: '24/7', label: 'Lead Generation', icon: <Shield /> },
  ];

  const faqs = [
    {
      question: 'What is IDX/MLS integration and why do I need it?',
      answer:
        'IDX (Internet Data Exchange) and MLS (Multiple Listing Service) integration automatically syncs property listings from your MLS to your website in real-time. This eliminates manual updates, ensures data accuracy, and provides visitors with the most current property information. It is essential for real estate websites to display comprehensive, up-to-date listings.',
    },
    {
      question: 'How long does real estate website development take?',
      answer:
        'A basic real estate website typically takes 6-8 weeks, while more complex portal development with advanced features can take 10-16 weeks. Timeline depends on features like MLS integration complexity, custom CRM requirements, and design customization needs. We provide detailed project timelines during consultation.',
    },
    {
      question: 'What is the cost of custom real estate website development?',
      answer:
        'Real estate website costs range from $8,000 for basic agent websites to $50,000+ for comprehensive portals with CRM, agent management, and advanced integrations. Investment depends on features, integrations, design complexity, and ongoing support needs. Most clients see ROI within 3-6 months through increased leads.',
    },
    {
      question: 'Can you integrate with my existing real estate tools?',
      answer:
        'Yes! We integrate with popular real estate platforms including Zillow, Realtor.com, various MLS systems, CRM tools (Salesforce, HubSpot), transaction management software, e-signature platforms (DocuSign), and marketing automation tools. We will assess your current tech stack and create seamless integrations.',
    },
    {
      question: 'How do you optimize real estate websites for mobile?',
      answer:
        'We use mobile-first design principles, ensuring perfect functionality on all devices. This includes touch-optimized property search, fast image loading, click-to-call buttons, mobile-friendly forms, and GPS-based property location features. With 70%+ of property searches happening on mobile, mobile optimization is critical.',
    },
    {
      question: 'What makes a real estate website generate more leads?',
      answer:
        'High-converting real estate websites combine stunning visual design, fast performance, prominent CTAs (call-to-action), easy property search, virtual tours, neighborhood information, agent credibility signals, and optimized contact forms. We also implement lead nurturing through saved searches, property alerts, and automated follow-ups.',
    },
  ];

  const testimonials = [
    {
      quote:
        'beFound transformed our digital presence completely. The new website generates quality leads 24/7 and our agents spend more time closing deals than managing listings.',
      author: 'Michael Richardson',
      position: 'Managing Broker',
      company: 'Premier Properties California',
      rating: 5,
    },
    {
      quote:
        'The platform they built handles 500+ properties effortlessly. Revenue is up 28% and our team efficiency has dramatically improved.',
      author: 'Jessica Martinez',
      position: 'CEO',
      company: 'Sunshine Rentals Florida',
      rating: 5,
    },
  ];

  const seoKeywords = [
    'real estate website development USA',
    'real estate web design company USA',
    'real estate digital solutions USA',
    'real estate software development company',
    'custom real estate website USA',
    'real estate web development agency',
    'real estate technology solutions USA',
    'real estate portal development',
    'property listing website development',
    'real estate CRM development USA',
  ].join(', ');

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://befound.com/' },
    { name: 'Industries', url: 'https://befound.com/industries' },
    { name: 'Real Estate', url: 'https://befound.com/industries/real-estate' },
  ]);

  const serviceSchema = getServiceSchema({
    name: 'Real Estate Website Development USA',
    description:
      'Professional real estate website development, property portal creation, and CRM solutions for real estate agents, brokers, and property management companies in the USA.',
    url: 'https://befound.com/industries/real-estate',
    price: '8000',
  });

  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <SEO
        title="Real Estate Website Development USA | Custom Property Websites"
        description="Professional real estate website development company specializing in custom real estate websites, property portals, MLS integration, and CRM solutions. Drive 300% more leads with our proven real estate digital solutions."
        keywords={seoKeywords}
        canonicalUrl="https://befound.com/industries/real-estate"
        structuredData={[breadcrumbSchema, serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-befoundPurple via-befoundPurple/90 to-befoundOrange/80 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Real Estate Website Development USA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Real Estate Business with Custom Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Drive 300% more leads with professional real estate websites, property portals, and CRM systems
              built for the US market
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-befoundOrange hover:bg-befoundOrange/90 text-white">
                  Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-befoundOrange">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-befoundPurple mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Estate Technology Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-600">
              From custom websites to comprehensive property portals, we build digital solutions that help
              real estate professionals succeed in competitive markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-befoundOrange/20 to-befoundPurple/20 rounded-lg flex items-center justify-center text-befoundOrange mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Powerful Features for Real Estate Websites
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-befoundOrange flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {caseStudies.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Estate Success Stories</h2>
              <p className="text-xl text-gray-600">
                See how we've helped real estate businesses transform their digital presence
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-befoundPurple to-befoundPurple/90 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Real Estate Professionals Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Estate Insights & Guides</h2>
              <p className="text-xl text-gray-600">
                Expert advice on real estate website development and digital marketing
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  View All Articles <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-befoundOrange to-befoundOrange/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Get a free consultation and discover how custom real estate website development can drive more
            leads, close more deals, and grow your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-befoundOrange hover:bg-gray-100">
                Schedule Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
