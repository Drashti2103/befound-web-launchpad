import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] text-black pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand/Description/Social */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-500 max-w-xs text-sm sm:text-base">
              Creating modern, sleek and professional digital experiences with a touch of pastel elegance.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-befoundOrange transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-befoundOrange transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-befoundOrange transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          {/* Sitemap */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Sitemap</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="/" className="text-gray-500 hover:text-befoundOrange transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-befoundOrange transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-befoundOrange transition-colors duration-200">Services</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-befoundOrange transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="/privacy-policy" className="text-gray-500 hover:text-befoundOrange transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-gray-500 hover:text-befoundOrange transition-colors duration-200">Terms & Conditions</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-500">
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8zm0-4a4 4 0 100-8 4 4 0 000 8z" /><circle cx="12" cy="13" r="2" fill="currentColor" /></svg>
                <span className="flex-1">Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V19a2 2 0 01-2 2A18 18 0 013 5a2 2 0 012-2h2.09a2 2 0 012 1.72c.13.81.36 1.6.7 2.34a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0122 16.92z" /></svg>
                <span className="flex-1">+91 9016611872</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                <a href="mailto:info@befound.com" className="flex-1 hover:text-befoundOrange transition-colors duration-200">info@befound.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-500 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} beFound. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
