import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
    >
      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-[#310d66] bg-opacity-85"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Side - Text */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 text-white">
          <h3 className="text-4xl md:text-5xl font-semibold mb-4 font-newsreader">Let's discuss</h3>
          <h2 className="text-3xl md:text-4xl font-light mb-8">your vision is our mission</h2>
          <p className="text-lg opacity-90 max-w-lg">
            Escape the clutter and chaos–unleash your productivity with our innovative solutions. 
            Let's work together to bring your ideas to life.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-[60%] max-w-2xl w-full">
          <div className="bg-white rounded-md shadow-xl p-8">
            <h4 className="text-2xl font-semibold text-befoundPurple mb-6">Get Started</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-befoundPurple focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-befoundPurple focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-befoundPurple focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-befoundPurple focus:border-transparent resize-none"
                ></textarea>
              </div>

              <div className="text-sm text-gray-600">
                By contacting us, you acknowledge our{' '}
                <a href="/privacy-policy" className="text-befoundPurple hover:underline">Privacy Policy</a>
              </div>

              <Button 
                type="submit"
                className="w-full bg-befoundPurple hover:bg-befoundOrange text-white font-semibold py-3 rounded-md transition-colors duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
