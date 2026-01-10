import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO, getBreadcrumbSchema } from '../../components/common/SEO';
import { CaseStudyCard } from '../../components/caseStudies/CaseStudyCard';
import { getCaseStudyBySlug, getRelatedCaseStudies } from '../../data/caseStudies';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import {
  Calendar,
  Clock,
  Briefcase,
  TrendingUp,
  CheckCircle2,
  Quote,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  Target,
  Lightbulb,
  BarChart3,
  Code,
  ArrowLeft,
  MessageSquare,
  X,
} from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ScrollToTop from '../../components/layout/ScrollToTop';
import { useState } from 'react';
import { Input } from '../../components/ui/input';
import { toast } from '../../components/ui/toast';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : null;
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });

        toast.success("Message sent successfully! We will get back to you soon.");
        setShowContactForm(false);
      } else {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const relatedCaseStudies = getRelatedCaseStudies(caseStudy, 3);

  const shareUrl = `https://befound.com/case-studies/${caseStudy.slug}`;
  const shareTitle = encodeURIComponent(caseStudy.title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    email: `mailto:?subject=${shareTitle}&body=Check out this case study: ${shareUrl}`,
  };

  const industryColors = {
    'real-estate': 'bg-blue-100 text-blue-800',
    dental: 'bg-green-100 text-green-800',
    restaurant: 'bg-orange-100 text-orange-800',
    agency: 'bg-purple-100 text-purple-800',
    general: 'bg-gray-100 text-gray-800',
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://befound.com/' },
    { name: 'Case Studies', url: 'https://befound.com/case-studies' },
    { name: caseStudy.title, url: `https://befound.com/case-studies/${caseStudy.slug}` },
  ]);

  // Case Study structured data
  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.excerpt,
    image: `https://befound.com${caseStudy.image}`,
    datePublished: caseStudy.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'beFound',
    },
    publisher: {
      '@type': 'Organization',
      name: 'beFound',
      logo: {
        '@type': 'ImageObject',
        url: 'https://befound.com/logo.png',
      },
    },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={`${caseStudy.title} - Case Study`}
        description={caseStudy.excerpt}
        keywords={caseStudy.seoKeywords.join(', ')}
        canonicalUrl={`https://befound.com/case-studies/${caseStudy.slug}`}
        ogType="article"
        ogImage={caseStudy.image}
        structuredData={[breadcrumbSchema, caseStudySchema]}
      />
      <Navbar />
      <ScrollToTop />

      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 md:h-96 bg-gray-900 mt-20">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover opacity-80"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Back Button Overlay */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 hover:text-befoundOrange transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Back to Case Studies"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-4 -mt-16 sm:-mt-24 md:-mt-32 relative z-10 max-w-6xl">
        <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 md:p-12">
          {/* Industry Badge */}
          <Badge className={`mb-4 ${industryColors[caseStudy.industry]}`}>
            {caseStudy.industry.replace('-', ' ').toUpperCase()}
          </Badge>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{caseStudy.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span className="font-semibold">{caseStudy.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(caseStudy.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{caseStudy.projectDuration}</span>
            </div>
            {caseStudy.projectUrl && (
              <a
                href={caseStudy.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-befoundOrange hover:text-befoundPurple font-semibold transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Website
              </a>
            )}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b">
            <span className="text-gray-600 font-semibold flex items-center gap-2">
              <Share2 className="w-5 h-5" />
              Share:
            </span>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 text-white flex items-center justify-center transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={shareLinks.email}
              className="w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
              aria-label="Share via Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-semibold">{caseStudy.excerpt}</p>

          {/* Key Metrics */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-befoundOrange" />
              Key Results
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-befoundPurple/10 flex items-center justify-center group-hover:bg-befoundOrange/10 transition-colors duration-300">
                    <BarChart3 className="w-8 h-8 text-befoundPurple group-hover:text-befoundOrange transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{metric.label}</h3>
                  <div className="text-3xl font-bold text-befoundPurple mb-2">{metric.value}</div>
                  {metric.description && <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>}
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Challenge Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-7 h-7 text-befoundOrange" />
              The Challenge
            </h2>
            <div className="prose prose-lg max-w-none">
              {caseStudy.challenge.split('\n').map((paragraph, index) => {
                // Handle headings
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h3 key={index} className="text-2xl font-bold mt-6 mb-4">
                      {paragraph.replace('## ', '')}
                    </h3>
                  );
                }
                // Handle bold text
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="font-bold text-lg mb-3">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                // Handle list items
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-gray-700 mb-2 ml-6">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                // Regular paragraphs
                if (paragraph.trim() && !paragraph.startsWith('#')) {
                  return (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Solution Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Lightbulb className="w-7 h-7 text-befoundOrange" />
              Our Solution
            </h2>
            <div className="prose prose-lg max-w-none">
              {caseStudy.solution.split('\n').map((paragraph, index) => {
                // Handle headings
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h3 key={index} className="text-2xl font-bold mt-6 mb-4">
                      {paragraph.replace('## ', '')}
                    </h3>
                  );
                }
                // Handle bold text (subheadings)
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h4 key={index} className="font-bold text-lg mb-3 text-befoundPurple mt-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h4>
                  );
                }
                // Handle list items
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-gray-700 mb-2 ml-6">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                // Regular paragraphs
                if (paragraph.trim() && !paragraph.startsWith('#')) {
                  return (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Results Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-7 h-7 text-befoundOrange" />
              Measurable Results
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-befoundOrange" />
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.galleryImages.map((image, index) => (
                  <div key={index} className="rounded-lg shadow-md hover:shadow-xl transition-shadow bg-gray-50 overflow-hidden">
                    <img
                      src={image}
                      alt={`${caseStudy.client} project screenshot ${index + 1}`}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <div className="bg-gradient-to-br from-befoundPurple/10 to-befoundOrange/10 rounded-lg p-8 md:p-12 my-12">
            <Quote className="w-12 h-12 text-befoundOrange mb-4" />
            <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 italic">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-befoundOrange to-befoundPurple flex items-center justify-center text-white text-2xl font-bold">
                {caseStudy.testimonial.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-lg">{caseStudy.testimonial.author}</div>
                <div className="text-gray-600">
                  {caseStudy.testimonial.position} at {caseStudy.testimonial.company}
                </div>
              </div>
            </div>
          </div>
        )}

      </article>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-befoundPurple via-[#1a0a2a] to-black overflow-hidden py-16 md:py-24">
        {/* Dotted SVGs for corners */}
        <svg className="absolute left-0 top-0 w-32 md:w-64 h-32 md:h-64 opacity-30" viewBox="0 0 200 200" fill="none">
          <defs>
            <pattern id="dots-case" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#fff" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dots-case)" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-32 md:w-64 h-32 md:h-64 opacity-30" viewBox="0 0 200 200" fill="none">
          <defs>
            <pattern id="dots2-case" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#fff" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dots2-case)" />
        </svg>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-newsreader">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get expert web development solutions that deliver real, measurable results like these.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://calendly.com/thebefoundcompany/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-befoundOrange text-white hover:bg-befoundOrange/90 transition-colors duration-300">
                <Calendar className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
            </a>
            <Button
              size="lg"
              onClick={() => setShowContactForm(true)}
              className="bg-white text-befoundPurple hover:bg-white/90 transition-colors duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Send Us a Message
            </Button>
            <Link to="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 md:p-6 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl font-bold text-befoundPurple">Get in Touch</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close form"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-befoundPurple focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-befoundPurple focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-befoundPurple focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project or requirements"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-befoundPurple focus:border-transparent resize-none"
                ></textarea>
              </div>

              <div className="text-sm text-gray-600">
                By submitting this form, you acknowledge our{' '}
                <a href="/privacy-policy" className="text-befoundPurple hover:underline" target="_blank">Privacy Policy</a>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  variant="outline"
                  className="flex-1 py-3 text-base"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-befoundPurple hover:bg-befoundOrange text-white font-semibold py-3 text-base transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
