import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from '../ui/toast';
import { Calendar, Mail, Phone, MessageSquare, X } from 'lucide-react';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface DualCTAProps {
  title?: string;
  description?: string;
  showIcons?: boolean;
  variant?: 'default' | 'compact';
}

const DualCTA: React.FC<DualCTAProps> = ({
  title = "Ready to Transform Your Business?",
  description = "Get expert consultation and turn your vision into reality. Choose your preferred way to connect with us.",
  showIcons = true,
  variant = 'default'
}) => {
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

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-r from-befoundPurple via-[#1a0a2a] to-black overflow-hidden">
      {/* Dotted SVGs for corners */}
      <svg className="absolute left-0 top-0 w-32 md:w-64 h-32 md:h-64 opacity-30" viewBox="0 0 200 200" fill="none">
        <defs>
          <pattern id="dots-dual-cta" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#fff" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots-dual-cta)" />
      </svg>
      <svg className="absolute right-0 bottom-0 w-32 md:w-64 h-32 md:h-64 opacity-30" viewBox="0 0 200 200" fill="none">
        <defs>
          <pattern id="dots2-dual-cta" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#fff" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots2-dual-cta)" />
      </svg>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 font-newsreader leading-tight">
            {title}
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            {description}
          </p>
        </div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Option 1: Schedule Consultation (Calendly) */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:border-befoundOrange transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col h-full">
              {showIcons && (
                <div className="w-16 h-16 bg-befoundOrange rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center">Schedule a Consultation</h3>
              <p className="text-white/80 text-sm md:text-base mb-6 text-center flex-grow">
                Book a free 30-minute consultation with our experts. Pick a time that works for you.
              </p>
              <a
                href="https://calendly.com/thebefoundcompany/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  className="w-full bg-befoundOrange hover:bg-befoundOrange/90 text-white font-semibold py-3 rounded-full text-sm md:text-base transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </a>
            </div>
          </div>

          {/* Option 2: Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:border-befoundOrange transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col h-full">
              {showIcons && (
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MessageSquare className="w-8 h-8 text-befoundPurple" />
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center">Send Us a Message</h3>
              <p className="text-white/80 text-sm md:text-base mb-6 text-center flex-grow">
                Fill out our contact form and we'll respond within 24 hours with a personalized solution.
              </p>
              <Button
                onClick={() => setShowContactForm(true)}
                className="w-full bg-white hover:bg-white/90 text-befoundPurple font-semibold py-3 rounded-full text-sm md:text-base transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us Now
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-white/70 text-sm md:text-base mb-4">Or reach us directly:</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="mailto:info@befound.dev" className="flex items-center gap-2 text-white/90 hover:text-befoundOrange transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm md:text-base">info@befound.dev</span>
            </a>
            <a href="tel:+919016611872" className="flex items-center gap-2 text-white/90 hover:text-befoundOrange transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm md:text-base">+91 9016611872</span>
            </a>
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
    </section>
  );
};

export default DualCTA;
