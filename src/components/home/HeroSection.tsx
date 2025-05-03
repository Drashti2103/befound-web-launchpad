import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Register Swiper custom elements
register();

const HeroSection = () => {
  const swiperElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Initialize Swiper
    const swiperParams = {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      modules: [EffectCoverflow, Pagination, Keyboard, Mousewheel],
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
      },
      keyboard: {
        enabled: true
      },
      mousewheel: {
        thresholdDelta: 70
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 1
        },
        1024: {
          slidesPerView: 2
        },
        1560: {
          slidesPerView: 3
        }
      }
    };
    
    // Initialize Swiper after component mount
    const swiperInstance = new Swiper('.swiper', swiperParams);
    
    return () => {
      // Cleanup on unmount
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, []);

  return (
    <main className="relative w-[calc(min(90rem,90%))] mx-auto min-h-screen flex flex-col md:flex-row items-center gap-12 py-[min(20vh,3rem)]">
      <div className="md:w-1/2">
        <span className="uppercase tracking-wider text-base text-[#717171]">SOFTWARE SOLUTIONS</span>
        <h1 className="capitalize tracking-wide font-newsreader font-black text-[clamp(3.4375rem,3.25rem+0.75vw,4rem)]">
          <span className="text-befoundOrange">be</span>
          <span className="text-befoundPurple font-newsreader font-bold">Found</span>
        </h1>
        <h2 className="text-lg text-gray-600 mt-2">Be Seen - Be Heard - Be Found</h2>
        <hr className="block bg-befoundOrange h-1 w-25 border-none my-7" />
        <p className="leading-relaxed">
          Innovative software solutions that empower businesses to reach their full potential in the digital landscape. Our expertise transforms your vision into reality with modern, scalable technology.
        </p>
        <a href="#contact" className="inline-block uppercase text-[#717171] font-medium bg-white rounded-full transition-all duration-300 border-2 border-[#c2c2c2] mt-9 py-1.5 pl-4 pr-4 hover:border-befoundOrange hover:text-befoundOrange">
          GET STARTED
        </a>
      </div>
      
      <div className="swiper w-full md:w-3/5 pt-12">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide--one rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="relative z-20">
              <h2 className="text-white font-newsreader font-normal text-[1.4rem] leading-tight mb-1.5 pl-6 uppercase">
                Web Development
              </h2>
              <p className="text-[#dadada] font-newsreader font-light px-6 mb-8 leading-relaxed text-xs line-clamp-4">
                Custom web applications built with modern technologies. Our expert developers create scalable, secure, and high-performance solutions that drive your business forward.
              </p>
            </div>
          </div>
          
          <div className="swiper-slide swiper-slide--two rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="relative z-20">
              <h2 className="text-white font-newsreader font-normal text-[1.4rem] leading-tight mb-1.5 pl-6 uppercase">
                Web Design
              </h2>
              <p className="text-[#dadada] font-newsreader font-light px-6 mb-8 leading-relaxed text-xs line-clamp-4">
                Stunning, user-centric designs that captivate your audience. We create beautiful, responsive websites that reflect your brand and deliver exceptional user experiences.
              </p>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--three rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="relative z-20">
              <h2 className="text-white font-newsreader font-normal text-[1.4rem] leading-tight mb-1.5 pl-6 uppercase">
                Mobile Apps
              </h2>
              <p className="text-[#dadada] font-newsreader font-light px-6 mb-8 leading-relaxed text-xs line-clamp-4">
                Native and cross-platform mobile applications that engage users. We develop intuitive, feature-rich apps that work seamlessly across iOS and Android platforms.
              </p>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--four rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="relative z-20">
              <h2 className="text-white font-newsreader font-normal text-[1.4rem] leading-tight mb-1.5 pl-6 uppercase">
                AI Chatbots
              </h2>
              <p className="text-[#dadada] font-newsreader font-light px-6 mb-8 leading-relaxed text-xs line-clamp-4">
                Intelligent chatbots that enhance customer engagement. Our AI-powered solutions provide 24/7 support, automate responses, and deliver personalized user experiences.
              </p>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--five rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="relative z-20">
              <h2 className="text-white font-newsreader font-normal text-[1.4rem] leading-tight mb-1.5 pl-6 uppercase">
                SEO Optimization
              </h2>
              <p className="text-[#dadada] font-newsreader font-light px-6 mb-8 leading-relaxed text-xs line-clamp-4">
                Strategic SEO solutions that boost your online visibility. We optimize your website to rank higher in search results and attract more organic traffic.
              </p>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--six rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="relative z-20">
              <h2 className="text-white font-newsreader font-normal text-[1.4rem] leading-tight mb-1.5 pl-6 uppercase">
                E-commerce Solutions
              </h2>
              <p className="text-[#dadada] font-newsreader font-light px-6 mb-8 leading-relaxed text-xs line-clamp-4">
                Complete e-commerce platforms that drive sales. We build secure, scalable online stores with seamless payment integration and inventory management.
              </p>
            </div>
          </div>
        </div>
        
        <div className="swiper-pagination"></div>
      </div>
      
      <img 
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=140&w=1050&height=709 0" 
        alt="Technology background" 
        className="fixed top-[-4rem] left-[-8rem] z-[-1] opacity-0 md:opacity-10"
      />
      <img 
        src="https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=800&height=750" 
        alt="Circuit board" 
        className="fixed bottom-[-2rem] right-[-1rem] z-[-1] w-[9.84375rem] opacity-0 md:opacity-10"
      />
    </main>
  );
};

export default HeroSection;
