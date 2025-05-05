import React from "react";
import more from "../../public/more.png";
import { useNavigate } from 'react-router-dom';

const WhyChooseUsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-16 flex justify-center items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 px-4 md:px-0">
        {/* Left: Overlapping Images & Badges */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-full md:w-1/2">
        <img
                src="/images/more.png"
                alt="Globally Available Services"
                className="w-[80%] h-[85%] object-cover"
              />
        </div>
        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <span className="uppercase tracking-wider text-base text-[#717171] mb-2">Why Choose Us</span>
          <h2 className="font-newsreader font-black text-3xl md:text-4xl mb-4 text-befoundPurple">Your Trusted Digital Partner</h2>
          <p className="text-gray-600 mb-6">
            We deliver innovative, reliable, and scalable solutions tailored to your business needs. Our team is dedicated to helping you achieve your goals with a client-first approach and cutting-edge technology.
          </p>
          <ul className="mb-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 bg-befoundOrange rounded-full inline-block"></span>
              <span><b>Expert Team:</b> Skilled professionals with deep industry knowledge.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 bg-befoundPurple rounded-full inline-block"></span>
              <span><b>Cutting-Edge Tech:</b> We leverage the latest tools and trends.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 bg-befoundOrange rounded-full inline-block"></span>
              <span><b>Client-First Approach:</b> Your goals are our top priority.</span>
            </li>
          </ul>
          <button
            onClick={() => navigate('/contact')}
            className="inline-block bg-befoundOrange text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-befoundPurple transition-colors duration-300"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
