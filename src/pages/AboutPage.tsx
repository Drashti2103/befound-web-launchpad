import React, { useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import moreImg from '/public/images/more.png';
import bottomLeftImg from '/public/images/about/bottomLeft.png';
import leftTopImg from '/public/images/about/leftTop.png';
import teamCollaborationImg from '/public/images/about/team-collab.jpg';
import designProcessImg from '/public/images/about/design-process.jpg';
import creativeWorkImg from '/public/images/about/creative-work.jpg';
import DualCTA from '../components/common/DualCTA';
import { SEO } from '../components/common/SEO';

const AboutPage = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-image');
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = imagesRef.current?.querySelectorAll('.story-image') || [];
    images.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About beFound',
    description: 'Learn about beFound\'s mission to deliver exceptional software solutions and user-centric designs that help businesses stand out.',
    url: 'https://befound.com/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'beFound',
      description: 'A software solutions company dedicated to helping businesses establish a strong online presence through innovative design and development.',
      foundingDate: '2025',
      founder: {
        '@type': 'Person',
        name: 'beFound CEO',
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us - beFound Story & Mission"
        description="Discover beFound's journey from a freelance passion to a leading software solutions company. Innovation, quality, and excellence drive us."
        keywords="about beFound, software company story, our mission, company values, innovation, user-centric design, software development team"
        canonicalUrl="https://befound.com/about"
        structuredData={aboutPageSchema}
      />
      <Navbar />
      
      <div className="pt-24 pb-32">
        {/* Hero Story Section */}
        <div className="container mx-auto px-4 md:px-6 mb-20">
          {/* Content wrapper with relative positioning */}
          <div className="relative w-[88%] sm:w-[92%] max-w-3xl mx-auto">
            {/* Decorative images */}
            {/* Top right image */}
            <div className="absolute -top-8 -right-6 z-10 hidden lg:block">
              <div className="relative w-40 sm:w-56 h-32 sm:h-44">
                <img
                  src={designProcessImg}
                  alt="beFound team collaborating on user-centric design process and wireframing"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Middle right image */}
            <div className="absolute top-1/3 -right-24 sm:-right-48 z-20 hidden lg:block">
              <div className="relative w-40 sm:w-56 h-56 sm:h-72">
                <img
                  src={creativeWorkImg}
                  alt="Creative software development workspace with modern tools and technology"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Bottom right image */}
            <div className="absolute -bottom-16 -right-20 sm:-right-36 z-30 hidden lg:block">
              <div className="relative w-36 sm:w-48 h-36 sm:h-48">
                <img
                  src={teamCollaborationImg}
                  alt="beFound software development team collaborating on innovative solutions"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Left side images */}
            <div className="absolute -top-16 -left-20 sm:-left-32 z-20 hidden lg:block">
              <div className="relative w-36 sm:w-48 h-48 sm:h-64">
                <img
                  src={leftTopImg}
                  alt="Design thinking and strategic planning session at beFound"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Bottom left image */}
            <div className="absolute -bottom-12 -left-24 sm:-left-36 z-10 hidden lg:block">
              <div className="relative w-32 sm:w-44 h-32 sm:h-44">
                <img
                  src={bottomLeftImg}
                  alt="Creative software development process showcasing innovation and excellence"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Main content container */}
            <div className="relative rounded-2xl shadow-2xl p-4 sm:p-8 md:p-12" style={{ backgroundColor: '#310d66' }}>
              {/* Content */}
              <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white font-newsreader">About beFound</h1>
                <div className="mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L1 21h22L12 2zm0 3.45l8.22 14.14H3.78L12 5.45z" />
                  </svg>
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-newsreader" style={{ color: '#fca311' }}>
                  Our Story
                </h1>
              </div>

              <div className="space-y-4 sm:space-y-6 text-white leading-relaxed text-justify px-2 sm:px-8">
                <p className="text-base sm:text-lg">
                  At a pivotal moment in my life, I stood at a crossroads, wrestling with a choice that many face: follow the conventional path of a traditional job or transform my passion for design—my modest freelance side hustle—into something greater. The market was crowded, the noise overwhelming, yet I saw an opportunity to carve out a space where my skills could truly shine. I realized that my strength lay not just in creating visually stunning designs, but in crafting user experiences that resonate, connect, and make a lasting impact.
                </p>
                
                <p className="text-base sm:text-lg">
                  This clarity sparked a fire within me. I didn't just want to blend into the chaos of the marketplace—I wanted to stand out, to be found. My mission became clear: to deliver exceptional work that speaks for itself, to build trust with every client, and to create solutions that elevate their vision. This wasn't just about design; it was about purpose, connection, and making a difference.
                </p>

                <p className="text-base sm:text-lg">
                  From that moment of conviction, <span style={{ color: '#fca311' }}>beFound</span> was born. What started as a personal journey to channel my creative energy into meaningful work grew into a vision to lead with excellence. As the CEO of <span style={{ color: '#fca311' }}>beFound</span>, I'm driven by a commitment to empower businesses with user-centric designs and unforgettable experiences. Our story isn't just about standing out—it's about helping our clients do the same, ensuring their brands are seen, felt, and remembered.
                </p>

                <p className="text-lg sm:text-xl font-medium text-justify font-newsreader" style={{ color: '#fca311' }}>
                  "At beFound, we believe that exceptional work is the key to being discovered. Let us help you tell your story, create your impact, and be found."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="container mx-auto px-4 md:px-6 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-newsreader font-bold mb-4" style={{ color: '#310d66' }}>
                Our Values
              </h2>
              <div className="w-24 h-1 bg-befoundOrange mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              {/* Innovation Value Card */}
              <div className="group bg-white rounded-xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0" style={{ backgroundColor: '#310d66' }}></div>
                <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white">
                    <svg className="w-6 h-6 text-purple-600 group-hover:text-[#310d66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-newsreader font-semibold text-center mb-2 group-hover:text-white">Innovation</h3>
                  <p className="text-gray-600 text-center group-hover:text-white">We're always exploring new technologies and approaches to deliver cutting-edge solutions.</p>
                </div>
              </div>

              {/* Quality Value Card */}
              <div className="group bg-white rounded-xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0" style={{ backgroundColor: '#310d66' }}></div>
                <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white">
                    <svg className="w-6 h-6 text-purple-600 group-hover:text-[#310d66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-newsreader font-semibold text-center mb-2 group-hover:text-white">Quality</h3>
                  <p className="text-gray-600 text-center group-hover:text-white">Every line of code and design element is crafted with attention to detail.</p>
                </div>
              </div>

              {/* Collaboration Value Card */}
              <div className="group bg-white rounded-xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0" style={{ backgroundColor: '#310d66' }}></div>
                <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white">
                    <svg className="w-6 h-6 text-purple-600 group-hover:text-[#310d66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-newsreader font-semibold text-center mb-2 group-hover:text-white">Collaboration</h3>
                  <p className="text-gray-600 text-center group-hover:text-white">We believe in working closely with clients and incorporating feedback.</p>
                </div>
              </div>

              {/* Integrity Value Card */}
              <div className="group bg-white rounded-xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0" style={{ backgroundColor: '#310d66' }}></div>
                <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white">
                    <svg className="w-6 h-6 text-purple-600 group-hover:text-[#310d66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-newsreader font-semibold text-center mb-2 group-hover:text-white">Integrity</h3>
                  <p className="text-gray-600 text-center group-hover:text-white">We operate with transparency and strong ethical principles.</p>
                </div>
              </div>

              {/* Excellence Value Card */}
              <div className="group bg-white rounded-xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0" style={{ backgroundColor: '#310d66' }}></div>
                <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white">
                    <svg className="w-6 h-6 text-purple-600 group-hover:text-[#310d66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-newsreader font-semibold text-center mb-2 group-hover:text-white">Excellence</h3>
                  <p className="text-gray-600 text-center group-hover:text-white">We strive for excellence in every project we undertake.</p>
                </div>
              </div>

              {/* Growth Value Card */}
              <div className="group bg-white rounded-xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0" style={{ backgroundColor: '#310d66' }}></div>
                <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white">
                    <svg className="w-6 h-6 text-purple-600 group-hover:text-[#310d66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-newsreader font-semibold text-center mb-2 group-hover:text-white">Growth</h3>
                  <p className="text-gray-600 text-center group-hover:text-white">Continuous learning and improvement drive our success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="w-full bg-gradient-to-r from-purple-50 to-transparent mt-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative max-w-6xl mx-auto">
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-8 md:p-12">
                {/* Left side - Image */}
                <div className="relative flex justify-center md:justify-start">
                  <img
                    src={moreImg}
                    alt="beFound team collaboration bringing innovative software solutions to businesses worldwide"
                    className="w-3/4 h-3/4 object-cover rounded-2xl shadow-xl"
                  />
                </div>

                {/* Right side - Content */}
                <div className="relative z-10 space-y-6 md:pl-8">
                  <div className="space-y-4">
                    <h2 className="text-lg md:text-3xl font-newsreader font-bold" style={{ color: '#310d66' }}>
                      Our Mission
                    </h2>
                    <div className="w-20 h-1 bg-befoundOrange"></div>
                  </div>

                  <p className="text-lg text-gray-700 font-newsreader leading-relaxed">
                    At beFound, we're dedicated to helping businesses establish a strong online presence through innovative software solutions and exceptional design. We believe that every business deserves to be found online, and we're here to make that happen.
                  </p>

                  {/* Mission points */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg text-gray-700 font-newsreader">Innovation in every pixel we craft</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg text-gray-700 font-newsreader">User-centric design approach</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg text-gray-700 font-newsreader">Results that speak for themselves</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Process Section */}
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-newsreader font-bold mb-4" style={{ color: '#310d66' }}>
                How We Work
              </h2>
              <div className="w-24 h-1 bg-befoundOrange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven process ensures we deliver exceptional results that help your business stand out in the digital landscape.
              </p>
            </div>

            {/* Timeline Container */}
            <div className="max-w-6xl mx-auto px-4">
              {/* Timeline Steps */}
              <div className="relative">
                {/* Dotted Connection Lines */}
                <div className="hidden lg:block absolute top-8 left-[15%] right-[15%] h-0.5">
                  <div className="w-full h-full border-t-2 border-dashed border-gray-300"></div>
                </div>

                {/* Timeline Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Step 1 */}
                  <div className="relative flex flex-col items-center group">
                    {/* Circle with Number */}
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-befoundOrange flex items-center justify-center mb-4 relative z-10 transition-all duration-300 ease-in-out group-hover:bg-befoundOrange">
                      <span className="text-xl font-bold transition-colors duration-300 group-hover:text-white" style={{ color: '#310d66' }}>01</span>
                    </div>
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-newsreader font-semibold mb-2" style={{ color: '#310d66' }}>
                        Discovery
                      </h3>
                      <p className="text-gray-600">
                        Understanding your goals
                      </p>
                    </div>
                    {/* Hover Content Box */}
                    <div className="absolute top-36 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-white rounded-xl p-6 shadow-lg border border-befoundOrange w-64 z-20">
                      <p className="text-gray-600">
                        We dive deep into understanding your business goals, target audience, and unique challenges to create tailored solutions.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex flex-col items-center group">
                    {/* Circle with Number */}
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-befoundOrange flex items-center justify-center mb-4 relative z-10 transition-all duration-300 ease-in-out group-hover:bg-befoundOrange">
                      <span className="text-xl font-bold transition-colors duration-300 group-hover:text-white" style={{ color: '#310d66' }}>02</span>
                    </div>
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-newsreader font-semibold mb-2" style={{ color: '#310d66' }}>
                        Strategy
                      </h3>
                      <p className="text-gray-600">
                        Planning your success
                      </p>
                    </div>
                    {/* Hover Content Box */}
                    <div className="absolute top-36 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-white rounded-xl p-6 shadow-lg border border-befoundOrange w-64 z-20">
                      <p className="text-gray-600">
                        We craft a tailored strategy that aligns with your objectives and maximizes your online presence through innovative solutions.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex flex-col items-center group">
                    {/* Circle with Number */}
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-befoundOrange flex items-center justify-center mb-4 relative z-10 transition-all duration-300 ease-in-out group-hover:bg-befoundOrange">
                      <span className="text-xl font-bold transition-colors duration-300 group-hover:text-white" style={{ color: '#310d66' }}>03</span>
                    </div>
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-newsreader font-semibold mb-2" style={{ color: '#310d66' }}>
                        Creation
                      </h3>
                      <p className="text-gray-600">
                        Bringing ideas to life
                      </p>
                    </div>
                    {/* Hover Content Box */}
                    <div className="absolute top-36 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-white rounded-xl p-6 shadow-lg border border-befoundOrange w-64 z-20">
                      <p className="text-gray-600">
                        Our team brings your vision to life with cutting-edge design and development solutions that set you apart from the competition.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative flex flex-col items-center group">
                    {/* Circle with Number */}
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-befoundOrange flex items-center justify-center mb-4 relative z-10 transition-all duration-300 ease-in-out group-hover:bg-befoundOrange">
                      <span className="text-xl font-bold transition-colors duration-300 group-hover:text-white" style={{ color: '#310d66' }}>04</span>
                    </div>
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-newsreader font-semibold mb-2" style={{ color: '#310d66' }}>
                        Launch
                      </h3>
                      <p className="text-gray-600">
                        Delivering excellence
                      </p>
                    </div>
                    {/* Hover Content Box */}
                    <div className="absolute top-36 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-white rounded-xl p-6 shadow-lg border border-befoundOrange w-64 z-20">
                      <p className="text-gray-600">
                        We ensure a smooth launch and provide ongoing support to help your business thrive online and achieve lasting success.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Progress Animation */}
                <div className="hidden lg:block absolute top-8 left-[15%] right-[15%] h-0.5 z-0">
                  <div className="h-full bg-befoundOrange transition-all duration-1000 ease-out" 
                    style={{ width: '0%' }}
                    id="timeline-progress"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DualCTA
        title="Ready to Build Something Amazing Together?"
        description="Let's discuss how beFound can help transform your vision into reality with cutting-edge software solutions."
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;
