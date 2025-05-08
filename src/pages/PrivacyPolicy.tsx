import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-['Newsreader'] font-bold text-befoundPurple mb-4">Privacy Policy</h1>
            <div className="w-24 h-1 bg-befoundOrange mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform transition-all duration-300 hover:shadow-2xl">
            <div className="space-y-10">
              <section className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-befoundOrange mr-2">01.</span>
                  Information We Collect
                </h2>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly to us, including but not limited to:
                </p>
                <ul className="list-none space-y-3">
                  {['Name and contact information', 'Company details', 'Project requirements and specifications', 'Communication preferences'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-befoundOrange rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-befoundOrange mr-2">02.</span>
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-none space-y-3">
                  {['Provide and maintain our services', 'Process your requests and inquiries', 'Send you updates and marketing communications', 'Improve our services and user experience'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-befoundOrange rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-befoundOrange mr-2">03.</span>
                  Information Sharing
                </h2>
                <p className="text-gray-600">
                  We do not sell or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-none space-y-3 mt-4">
                  {['Service providers who assist in our operations', 'Professional advisors and consultants', 'Law enforcement when required by law'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-befoundOrange rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-befoundOrange mr-2">04.</span>
                  Data Security
                </h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-befoundOrange mr-2">05.</span>
                  Your Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-none space-y-3">
                  {['Access your personal information', 'Correct inaccurate data', 'Request deletion of your data', 'Object to processing of your data', 'Withdraw consent at any time'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-befoundOrange rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-befoundOrange mr-2">06.</span>
                  Contact Us
                </h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-befoundOrange transition-colors duration-300">
                  <div className="space-y-3">
                    <p className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-befoundOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      info@befound.com
                    </p>
                    <p className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-befoundOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 9016611872
                    </p>
                    <p className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-befoundOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>
              </section>

              <section className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-befoundOrange mr-2">07.</span>
                  Updates to This Policy
                </h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg inline-block">
                  <p className="text-gray-500 text-sm">
                    Last Updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy; 