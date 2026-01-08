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
  ShoppingCart,
  Calendar,
  Menu,
  Truck,
  TrendingUp,
  Megaphone,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Star,
  CreditCard,
} from 'lucide-react';

export const RestaurantIndustry = () => {
  const blogPosts = getPostsByCategory('restaurant');
  const caseStudies = getCaseStudiesByIndustry('restaurant');

  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Online Ordering Systems',
      description:
        'Commission-free online ordering platform that integrates seamlessly with your website. Increase revenue by eliminating third-party fees and owning customer data.',
      features: ['Zero Commission', 'Real-time Orders', 'Custom Branding', 'Mobile Optimized'],
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Reservation Management',
      description:
        'Smart table management system with online reservations, waitlist management, and automated confirmations. Reduce no-shows and optimize seating.',
      features: ['Table Management', 'Waitlist System', 'Auto-Reminders', 'Capacity Planning'],
    },
    {
      icon: <Menu className="w-8 h-8" />,
      title: 'Menu Management',
      description:
        'Dynamic digital menu system with easy updates, photo galleries, dietary filters, and real-time availability. Update prices and items instantly across all platforms.',
      features: ['Real-time Updates', 'Photo Galleries', 'Dietary Filters', 'Pricing Controls'],
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'POS Integration',
      description:
        'Seamless integration with leading restaurant POS systems like Square, Toast, Clover, and Lightspeed. Sync orders, inventory, and sales data automatically.',
      features: ['POS Sync', 'Inventory Tracking', 'Sales Reports', 'Multi-location Support'],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Delivery Integration',
      description:
        'Integrate with delivery platforms or build your own delivery system. Manage in-house delivery, third-party services, and pickup orders from one dashboard.',
      features: ['Multi-platform Orders', 'Route Optimization', 'Driver Management', 'Order Tracking'],
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Restaurant Marketing',
      description:
        'Complete digital marketing solutions including local SEO, social media management, email campaigns, and loyalty programs to drive repeat business.',
      features: ['Local SEO', 'Email Marketing', 'Loyalty Programs', 'Social Media'],
    },
  ];

  const features = [
    'Commission-free online ordering platform',
    'Real-time table reservation system',
    'Dynamic menu management with photos',
    'POS system integration (Toast, Square, Clover)',
    'Delivery and pickup order management',
    'Customer loyalty and rewards programs',
    'Email marketing and SMS campaigns',
    'Online payment processing',
    'Mobile-first responsive design',
    'Local SEO optimization for discoverability',
    'Review management and reputation monitoring',
    'Analytics dashboard with sales insights',
  ];

  const stats = [
    { value: '180%', label: 'Online Order Increase', icon: <TrendingUp /> },
    { value: '<2s', label: 'Page Load Time', icon: <Clock /> },
    { value: '60+', label: 'Restaurant Clients', icon: <Users /> },
    { value: '0%', label: 'Commission Fees', icon: <ShoppingCart /> },
  ];

  const faqs = [
    {
      question: 'How does commission-free online ordering benefit my restaurant?',
      answer:
        'Commission-free online ordering eliminates the 15-30% fees charged by third-party platforms like DoorDash and Uber Eats. By building your own ordering system, you keep 100% of revenue, own customer data for marketing, control pricing and promotions, and build direct customer relationships. Most restaurants recoup their investment within 3-6 months and save thousands monthly in commission fees.',
    },
    {
      question: 'Can I still use third-party delivery while having my own system?',
      answer:
        'Absolutely! Our platform integrates with third-party delivery services while also providing your own ordering system. This hybrid approach lets you capture direct orders (saving commission) while maintaining visibility on delivery platforms. Many restaurants see 40-60% of customers switch to direct ordering once they have their own platform, significantly reducing commission expenses.',
    },
    {
      question: 'How does the reservation management system work?',
      answer:
        'Our reservation system provides real-time table availability, online booking with automated confirmations, waitlist management, no-show reduction through reminders, capacity planning and optimization, and integration with your host stand. Customers can book directly from your website or Google, and you manage everything from one dashboard. It reduces phone calls and improves the guest experience.',
    },
    {
      question: 'How easy is it to update my menu and prices?',
      answer:
        'Extremely easy! Our content management system allows you to update menu items, prices, descriptions, photos, and availability in minutes without technical knowledge. Changes reflect instantly across your website, mobile app, and ordering platform. You can schedule menu changes, feature seasonal items, mark items as sold out, and manage pricing for different times or locations all from one dashboard.',
    },
    {
      question: 'Is your restaurant website mobile-optimized?',
      answer:
        'Yes, mobile optimization is our top priority! With 80%+ of restaurant searches happening on mobile devices, we use mobile-first design principles. This includes touch-optimized ordering, one-tap calling and directions, mobile payment integration, optimized photo loading, easy navigation, and fast performance. Customers can browse menus, place orders, and make reservations seamlessly on any device.',
    },
    {
      question: 'What is the cost of restaurant website development?',
      answer:
        'Restaurant website costs range from $5,000 for basic websites with menus and contact info to $20,000+ for comprehensive solutions with online ordering, reservations, POS integration, and marketing automation. Investment depends on features, complexity, integrations, and customization needs. Most restaurants see ROI within 2-4 months through increased orders and eliminated commission fees, with many saving $1,000-5,000 monthly on third-party fees alone.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Switching to our own online ordering system was the best business decision we made. We are saving $4,000 monthly in commission fees and have full control over our customer experience.',
      author: 'Marco Rossi',
      position: 'Owner',
      company: 'Bella Italia Trattoria',
      rating: 5,
    },
    {
      quote:
        'The reservation system and online ordering platform transformed how we operate. No more juggling phone calls, and our online orders tripled in the first 3 months.',
      author: 'Jennifer Lee',
      position: 'General Manager',
      company: 'Spice Garden Asian Fusion',
      rating: 5,
    },
  ];

  const seoKeywords = [
    'restaurant website development',
    'restaurant web design',
    'online ordering website',
    'restaurant digital marketing',
    'food service web development',
    'restaurant SEO',
    'restaurant online ordering system',
    'restaurant reservation system',
    'restaurant POS integration',
    'commission-free restaurant ordering',
  ].join(', ');

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://befound.com/' },
    { name: 'Industries', url: 'https://befound.com/industries' },
    { name: 'Restaurant', url: 'https://befound.com/industries/restaurant' },
  ]);

  const serviceSchema = getServiceSchema({
    name: 'Restaurant Website Development USA',
    description:
      'Professional restaurant website development, commission-free online ordering systems, reservation management, and digital marketing solutions for restaurants, cafes, and food service businesses in the USA.',
    url: 'https://befound.com/industries/restaurant',
    price: '5000',
  });

  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <SEO
        title="Restaurant Website Development | Online Ordering & Reservation Systems"
        description="Professional restaurant website development company specializing in commission-free online ordering, reservation systems, menu management, and restaurant digital marketing. Drive 180% more online orders with our proven restaurant solutions."
        keywords={seoKeywords}
        canonicalUrl="https://befound.com/industries/restaurant"
        structuredData={[breadcrumbSchema, serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-befoundPurple via-befoundPurple/90 to-befoundOrange/80 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Restaurant Website Development USA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Restaurant with Custom Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Drive 180% more online orders with commission-free ordering systems, smart reservations, and
              digital marketing built for the US market
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
              Restaurant Technology Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-600">
              From commission-free ordering to comprehensive reservation systems, we build digital solutions
              that help restaurants succeed in competitive markets.
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
              Powerful Features for Restaurant Websites
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Restaurant Success Stories</h2>
              <p className="text-xl text-gray-600">
                See how we've helped restaurants transform their digital presence
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
            What Restaurant Owners Say
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Restaurant Insights & Guides</h2>
              <p className="text-xl text-gray-600">
                Expert advice on restaurant website development and digital marketing
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
            Ready to Transform Your Restaurant Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Get a free consultation and discover how custom restaurant website development can drive more
            orders, eliminate commission fees, and grow your business.
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
