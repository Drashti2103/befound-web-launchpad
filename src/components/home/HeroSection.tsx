
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
    <main className="relative w-[calc(min(90rem,90%))] mx-auto min-h-screen gap-12 py-[min(20vh,3rem)]">
      <div className="md:w-1/2">
        <span className="uppercase tracking-wider text-base text-[#717171]">SOFTWARE SOLUTIONS</span>
        <h1 className="capitalize tracking-wide font-newsreader font-black text-[clamp(3.4375rem,3.25rem+0.75vw,4rem)] bg-gradient-to-br from-befoundOrange to-befoundPurple bg-clip-text text-transparent">
          <span className="text-befoundOrange">be</span>
          <span className="font-newsreader font-bold">Found</span>
        </h1>
        <hr className="block bg-befoundOrange h-1 w-25 border-none my-7" />
        <p className="leading-relaxed">
          Innovative software solutions that empower businesses to reach their full potential in the digital landscape. Our expertise transforms your vision into reality with modern, scalable technology.
        </p>
        <a href="#contact" className="inline-block uppercase text-[#717171] font-medium bg-white rounded-full transition-all duration-300 border-2 border-[#c2c2c2] mt-9 py-2.5 px-7.5 hover:border-befoundOrange hover:text-befoundOrange">
          GET STARTED
        </a>
      </div>
      
      <div className="swiper w-full pt-12 md:w-1/2">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide--one">
            <div>
              <h2 className="text-white font-newsreader font-normal text-[1.4rem] leading-tight mb-2.5 pl-6 uppercase">
                Web Development
              </h2>
              <p className="text-[#dadada] font-newsreader font-light px-6 leading-relaxed text-xs line-clamp-4">
                Custom web applications designed to elevate your business. Our development team creates responsive, user-friendly websites that drive results and provide exceptional user experiences.
              </p>
              <a href="#contact" className="mx-6 mb-14 mt-5 py-1.5 px-7.5 text-sm font-medium bg-white rounded-full transition-all duration-300 hover:text-befoundOrange">
                explore
              </a>
            </div>
          </div>
          
          <div className="swiper-slide swiper-slide--two">
            <div>
              <h2 className="text-white font-newsreader font-normal text-[1.4rem] leading-tight mb-2.5 pl-6 uppercase">
                Mobile Apps
              </h2>
              <p className="text-[#dadada] font-newsreader font-light px-6 leading-relaxed text-xs line-clamp-4">
                Reach your customers wherever they are with powerful, intuitive mobile applications. We develop cross-platform solutions that work seamlessly across iOS and Android devices.
              </p>
              <a href="#contact" className="mx-6 mb-14 mt-5 py-1.5 px-7.5 text-sm font-medium bg-white rounded-full transition-all duration-300 hover:text-befoundOrange">
                explore
              </a>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--three">
            <div>
              <h2 className="text-white font-newsreader font-normal text-[1.4rem] leading-tight mb-2.5 pl-6 uppercase">
                AI Solutions
              </h2>
              <p className="text-[#dadada] font-newsreader font-light px-6 leading-relaxed text-xs line-clamp-4">
                Harness the power of artificial intelligence to transform your business processes. Our AI solutions help you automate tasks, gain insights from data, and create more personalized user experiences.
              </p>
              <a href="#contact" className="mx-6 mb-14 mt-5 py-1.5 px-7.5 text-sm font-medium bg-white rounded-full transition-all duration-300 hover:text-befoundOrange">
                explore
              </a>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--four">
            <div>
              <h2 className="text-white font-newsreader font-normal text-[1.4rem] leading-tight mb-2.5 pl-6 uppercase">
                Cloud Services
              </h2>
              <p className="text-[#dadada] font-newsreader font-light px-6 leading-relaxed text-xs line-clamp-4">
                Scale your business with secure, reliable cloud infrastructure. Our team designs and implements cloud solutions that optimize performance, enhance security, and reduce operational costs.
              </p>
              <a href="#contact" className="mx-6 mb-14 mt-5 py-1.5 px-7.5 text-sm font-medium bg-white rounded-full transition-all duration-300 hover:text-befoundOrange">
                explore
              </a>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--five">
            <div>
              <h2 className="text-white font-newsreader font-normal text-[1.4rem] leading-tight mb-2.5 pl-6 uppercase">
                Digital Marketing
              </h2>
              <p className="text-[#dadada] font-newsreader font-light px-6 leading-relaxed text-xs line-clamp-4">
                Increase your online visibility and reach your target audience. Our digital marketing strategies help you connect with customers, build brand awareness, and drive measurable business growth.
              </p>
              <a href="#contact" className="mx-6 mb-14 mt-5 py-1.5 px-7.5 text-sm font-medium bg-white rounded-full transition-all duration-300 hover:text-befoundOrange">
                explore
              </a>
            </div>
          </div>
        </div>
        
        {/* Add Pagination */}
        <div className="swiper-pagination"></div>
      </div>
      
      <img 
        src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png" 
        alt="" 
        className="fixed top-[-4rem] left-[-12rem] z-[-1] opacity-0 md:opacity-10"
      />
      <img 
        src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" 
        alt="" 
        className="fixed bottom-[-2rem] right-[-3rem] z-[-1] w-[9.375rem] opacity-0 md:opacity-10"
      />
    </main>
  );
};

export default HeroSection;
