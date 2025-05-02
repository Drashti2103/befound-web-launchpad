
import React from 'react';
import { ShieldCheck, Target, LineChart, Laptop } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  iconType: 'shield-check' | 'target' | 'line-chart' | 'laptop';
}

const ServiceCard = ({ title, description, iconType }: ServiceCardProps) => {
  // Select the appropriate icon based on iconType
  const renderIcon = () => {
    switch(iconType) {
      case 'shield-check':
        return <ShieldCheck className="h-10 w-10 text-white group-hover:text-[#7114ef] transition-colors duration-300" />;
      case 'target':
        return <Target className="h-10 w-10 text-white group-hover:text-[#7114ef] transition-colors duration-300" />;
      case 'line-chart':
        return <LineChart className="h-10 w-10 text-white group-hover:text-[#7114ef] transition-colors duration-300" />;
      case 'laptop':
        return <Laptop className="h-10 w-10 text-white group-hover:text-[#7114ef] transition-colors duration-300" />;
      default:
        return <ShieldCheck className="h-10 w-10 text-white group-hover:text-[#7114ef] transition-colors duration-300" />;
    }
  };
  
  return (
    <div className="item--inner group">
      <div className="item--overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="32px" style={{ fill: '#fff' }}>
          <path strokeWidth="0" d="M0 0 C50 100 50 100 100 0 L100 100 0 100"></path>
        </svg>
      </div>
      
      <div className="item--icon">
        {renderIcon()}
      </div>
      
      <h3 className="item--title">{title}</h3>
      <div className="item--description">
        {description}
      </div>
      
      <div className="item--readmore">
        <a href="#" className="btn-text-gr">
          Learn More
          <svg className="w-5 h-5 ml-2 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8l4 4-4 4" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const StepItem = ({ number, title, content, imageUrl }: { number: string, title: string, content: string, imageUrl: string }) => {
  return (
    <div className="ct--item">
      <div className="ct--holder">
        <div className="ct--holder-inner">
          <h5 className="ct--title">{title}</h5>
          <div className="ct--content">{content}</div>
          <div className="ct--button wow fadeInUp">
            <a href="#contact" className="btn btn-circle-text btn-ctext">
              {title === "Send us Message" ? "Send Message" : title === "Discuss With Us" ? "Open a ticket" : "Contact Us"}
            </a>
          </div>
        </div>
      </div>
      <div className="ct--meta">
        <div className="ct--meta-inner">
          <div className="ct--number">{number}</div>
          <div className="ct--icon"><img src={imageUrl} alt={title} className="max-h-24" /></div>
          <div className="ct--arrow">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8l4 4-4 4" />
            </svg>
          </div>
          <div className="ct--line"></div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-20 relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(
        135deg,
        rgba(244, 244, 244, 0.07) 0%,
        rgba(244, 244, 244, 0.07) 12.5%,
        rgba(211, 211, 211, 0.07) 12.5%,
        rgba(211, 211, 211, 0.07) 25%,
        rgba(178, 178, 178, 0.07) 25%,
        rgba(178, 178, 178, 0.07) 37.5%,
        rgba(145, 145, 145, 0.07) 37.5%,
        rgba(145, 145, 145, 0.07) 50%,
        rgba(113, 113, 113, 0.07) 50%,
        rgba(113, 113, 113, 0.07) 62.5%,
        rgba(80, 80, 80, 0.07) 62.5%,
        rgba(80, 80, 80, 0.07) 75%,
        rgba(47, 47, 47, 0.07) 75%,
        rgba(47, 47, 47, 0.07) 87.5%,
        rgba(14, 14, 14, 0.07) 87.5%,
        rgba(14, 14, 14, 0.07) 100%
      ),
      linear-gradient(
        45deg,
        rgba(236, 236, 236, 0.07) 0%,
        rgba(236, 236, 236, 0.07) 12.5%,
        rgba(210, 210, 210, 0.07) 12.5%,
        rgba(210, 210, 210, 0.07) 25%,
        rgba(183, 183, 183, 0.07) 25%,
        rgba(183, 183, 183, 0.07) 37.5%,
        rgba(157, 157, 157, 0.07) 37.5%,
        rgba(157, 157, 157, 0.07) 50%,
        rgba(130, 130, 130, 0.07) 50%,
        rgba(130, 130, 130, 0.07) 62.5%,
        rgba(104, 104, 104, 0.07) 62.5%,
        rgba(104, 104, 104, 0.07) 75%,
        rgba(77, 77, 77, 0.07) 75%,
        rgba(77, 77, 77, 0.07) 87.5%,
        rgba(51, 51, 51, 0.07) 87.5%,
        rgba(51, 51, 51, 0.07) 100%
      ),
      linear-gradient(90deg, #ffffff, #ffffff)`
    }}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="h-1 w-20 bg-befoundOrange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're dedicated to delivering exceptional software solutions that help your business thrive in the digital landscape. Here's why clients choose beFound:
          </p>
        </div>
        
        <div className="row mt-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <ServiceCard 
                title="Cyber Security" 
                description="We know our people are our greatest asset, and we are putting our money where our values are." 
                iconType="shield-check"
              />
            </div>
            
            <div>
              <ServiceCard 
                title="Internet Thinking" 
                description="We're so excited about our new Learning & Development programs where people can grow their skills." 
                iconType="target"
              />
            </div>
            
            <div>
              <ServiceCard 
                title="Digital Marketing" 
                description="From the basics, including health and life insurance, and retirement and savings plans." 
                iconType="line-chart"
              />
            </div>
            
            <div>
              <ServiceCard 
                title="UI/UX Design" 
                description="We're wildly passionate about our purpose, and it has us transforming everything we do." 
                iconType="laptop"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <div className="h-1 w-20 bg-befoundOrange mx-auto mb-6"></div>
          </div>
          
          <div className="ct-steps-layout1">
            <StepItem 
              number="01" 
              title="Send us Message" 
              content="Join us in a replay of this webinar to see how to go from the first line of code to the first message sent in less than 15 minutes, using the form when you go to contact page."
              imageUrl="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h4-step3.png"
            />
            
            <StepItem 
              number="02" 
              title="Discuss With Us" 
              content="When we receive your message. Our support team will check the information and provide you with suitable solutions for our services available on this website."
              imageUrl="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h4-step2.png"
            />
            
            <StepItem 
              number="03" 
              title="Make a Payment!" 
              content="Payment has never been so easy. We use reliable and secure payment services. Your privacy will be best guaranteed. Services are paid for through Payoneer and Paypal."
              imageUrl="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h4-step3.png"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .item--inner {
          text-align: center;
          margin-top: 50px;
          margin-bottom: 80px;
          padding: 75px 24px 44px;
          position: relative;
          z-index: 1;
        }
        
        .item--inner:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 15px;
          box-shadow: 0 0 10px rgba(1, 25, 59, 6%);
          transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
          z-index: -1;
        }
        
        .item--overlay {
          background-image: linear-gradient(to left, #7114ef, #1475f7);
          height: 152px;
          width: 100%;
          position: absolute;
          top: -44px;
          left: 0;
          z-index: -1;
          border-radius: 15px 15px 0 0;
          opacity: 0;
          transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        }
        
        .item--overlay:before {
          content: "";
          z-index: 88;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-position: 50% 100%;
          background-image: url(https://demo.casethemes.net/itfirm/wp-content/themes/itsoft/assets/images/overlay-shape2.png);
          background-size: cover;
        }
        
        .item--icon {
          min-width: 76px;
          width: 76px;
          height: 76px;
          line-height: 76px;
          z-index: 1;
          display: inline-block;
          position: absolute;
          top: -38px;
          left: 0;
          right: 0;
          margin: auto;
          transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        }
        
        .item--icon:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to right, #7114ef, #1475f7);
          border-radius: 25px;
          box-shadow: 0 6px 6px rgba(113, 20, 239, 0.3);
          z-index: -1;
          transform: rotate(45deg);
        }
        
        .item--title {
          font-size: 20px;
          color: #101130;
          padding-bottom: 24px;
          margin-bottom: 25px;
          position: relative;
          transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        }
        
        .item--title:before {
          content: "";
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          height: 4px;
          width: 88px;
          background-image: linear-gradient(to right, #7114ef, #1475f7);
          position: absolute;
          transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        }
        
        .item--description {
          color: #57586d;
          text-align: center;
          line-height: 1.5;
          transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        }
        
        .item--readmore {
          position: absolute;
          bottom: 11px;
          left: 0;
          right: 0;
          z-index: 99;
          opacity: 0;
          transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
          visibility: hidden;
        }
        
        .btn-text-gr {
          color: #101130;
          font-weight: 500;
          transition: color 0.3s;
          display: inline-flex;
          align-items: center;
        }
        
        .btn-text-gr:hover {
          color: #7114ef;
        }
        
        .item--inner:hover:before {
          box-shadow: 0 34px 32px rgba(1, 25, 59, 0.14);
          border-radius: 8px 60px 8px 8px;
          height: calc(100% + 44px);
        }
        
        .item--inner:hover .item--overlay {
          opacity: 1;
        }
        
        .item--inner:hover .item--icon {
          top: -8px;
        }
        
        .item--inner:hover .item--icon:before {
          background: #fff !important;
        }
        
        .item--inner:hover .item--icon svg {
          color: #7114ef !important;
        }
        
        .item--inner:hover .item--title {
          transform: translateY(60px);
        }
        
        .item--inner:hover .item--title:before {
          transform: scaleX(0);
        }
        
        .item--inner:hover .item--description {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .item--inner:hover .item--readmore {
          opacity: 1;
          visibility: visible;
          bottom: 31px;
        }
        
        /* Process Steps Styles */
        .ct-steps-layout1 {
          max-width: 1000px;
          margin: auto;
        }
        
        .ct-steps-layout1 .ct--item {
          margin: 0 -36px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 50px;
        }
        
        .ct-steps-layout1 .ct--item > div {
          width: 50%;
          padding: 0 36px;
        }
        
        .ct-steps-layout1 .ct--holder {
          position: relative;
        }
        
        .ct-steps-layout1 .ct--holder .ct--holder-inner {
          padding-left: 110px;
        }
        
        .ct-steps-layout1 .ct--title {
          margin-bottom: 13px;
          font-size: 30px;
          font-weight: bold;
        }
        
        .ct-steps-layout1 .ct--content {
          color: #555;
          margin-bottom: 20px;
        }
        
        .btn.btn-circle-text {
          background: transparent;
          color: #2e2d2d;
          font-size: 16px;
          padding: 0 14px;
          line-height: 51px;
          border: 1px solid #7114ef;
          border-radius: 25px;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .btn.btn-circle-text:hover {
          background-color: #7114ef;
          color: white;
        }
        
        .ct-steps-layout1 .ct--meta .ct--meta-inner {
          background-color: #f6f8fb;
          border-radius: 30px;
          overflow: hidden;
          display: flex;
          flex-wrap: nowrap;
        }
        
        .ct--meta .ct--number {
          background-color: #4f3dff;
          font-size: 30px;
          font-weight: 700;
          color: #fff;
          min-width: 110px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        
        .ct--meta .ct--number:before {
          content: '';
          border: 60px solid #6a5bfd;
          width: 238px;
          height: 238px;
          position: absolute;
          top: 45px;
          right: -28px;
          border-radius: 100%;
          z-index: -1;
          box-shadow: -11px 0 18px rgba(36, 36, 40, 0.38) inset;
        }
        
        .ct-steps-layout1 .ct--meta .ct--icon {
          flex-grow: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }
        
        .ct--arrow {
          position: absolute;
          top: 50%;
          left: -19px;
          width: 38px;
          height: 38px;
          line-height: 38px;
          text-align: center;
          border-radius: 38px;
          color: #fff;
          background-color: #765dd4;
          box-shadow: 0 11px 18px rgba(79, 61, 255, 0.23);
          font-size: 18px;
          transform: translate(0, -50%);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .ct--meta {
          position: relative;
        }
        
        @media (max-width: 768px) {
          .ct-steps-layout1 .ct--item {
            flex-direction: column;
          }
          
          .ct-steps-layout1 .ct--item > div {
            width: 100%;
            padding: 0 20px;
          }
          
          .ct-steps-layout1 .ct--holder .ct--holder-inner {
            padding-left: 0;
            margin-bottom: 30px;
            text-align: center;
          }
          
          .ct--arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;
