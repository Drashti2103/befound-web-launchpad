import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    number: '03',
    title: 'Investor Information App',
    description:
      'A client working in the public-oriented transportation field was looking for a unique funding solution for public transportation and municipality projects.',
    bullets: [
      'Integrated support for authentication through Microsoft Active Directory.',
      'Integrated support for video content through the JW player.',
    ],
    images: [
      '/images/more.png', // Placeholder, swap with real images as needed
      '/images/more.png',
    ],
    link: '#',
  },
  {
    number: '04',
    title: 'Smart City Dashboard',
    description:
      'A comprehensive dashboard for city administrators to monitor and manage urban infrastructure and services.',
    bullets: [
      'Real-time analytics and reporting.',
      'Seamless integration with IoT devices.',
    ],
    images: [
      '/images/more.png',
      '/images/more.png',
    ],
    link: '#',
  },
  {
    number: '0  5',
    title: 'Investor Information App',
    description:
      'A client working in the public-oriented transportation field was looking for a unique funding solution for public transportation and municipality projects.',
    bullets: [
      'Integrated support for authentication through Microsoft Active Directory.',
      'Integrated support for video content through the JW player.',
    ],
    images: [
      '/images/more.png', // Placeholder, swap with real images as needed
      '/images/more.png',
    ],
    link: '#',
  }
  // Add more projects as needed
];

const BestOfWorkSection = () => {
  const [current, setCurrent] = useState(0);
  const prevIdx = (current - 1 + projects.length) % projects.length;
  const nextIdx = (current + 1) % projects.length;

  const prevProject = () => setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextProject = () => setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const prevProjectObj = projects[prevIdx];
  const project = projects[current];
  const nextProjectObj = projects[nextIdx];

  return (
    <section className="w-full bg-[#f8fafc] py-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <span className="text-befoundOrange font-semibold tracking-wider mb-2 text-center">OUR FINEST ACHIEVEMENTS</span>
        <h2 className="text-4xl md:text-5xl font-newsreader font-bold text-befoundPurple text-center mb-4">Best of Our Work</h2>
        <p className="text-gray-600 text-center max-w-2xl mb-8">
          With a track record of successful projects and satisfied clients, we strive for excellence in every endeavour, ensuring that our best work becomes a catalyst for our client's success.
        </p>
        <Button className="mb-12 bg-befoundPurple hover:bg-befoundOrange text-white font-semibold px-8 py-3 rounded-full shadow transition-colors duration-300">
          View All Portfolio
        </Button>
        {/* Card Stack Carousel */}
        <div className="relative w-full flex justify-center items-center min-h-[380px]" style={{height: 400}}>
          {/* Previous Card (peek effect left) */}
          <div
            className="absolute left-0 top-8 z-0 transition-all duration-300 flex justify-start"
            style={{ width: '60%', maxWidth: 400, opacity: 0.5, pointerEvents: 'none' }}
            aria-hidden="true"
          >
            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center p-6 md:p-8 w-full border border-gray-200 select-none">
              <div className="flex-1 min-w-0">
                <span className="text-befoundOrange font-bold text-lg">{prevProjectObj.number}</span>
                <h3 className="text-2xl font-bold text-befoundPurple mb-2 mt-1">{prevProjectObj.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{prevProjectObj.description}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-0 md:ml-8">
                {prevProjectObj.images.slice(0, 1).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={prevProjectObj.title + ' screenshot ' + (idx + 1)}
                    className="w-20 h-32 object-cover rounded-xl border border-gray-100 shadow"
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Next Card (peek effect right) */}
          <div
            className="absolute right-0 top-8 z-0 transition-all duration-300 flex justify-end"
            style={{ width: '60%', maxWidth: 400, opacity: 0.5, pointerEvents: 'none' }}
            aria-hidden="true"
          >
            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center p-6 md:p-8 w-full border border-gray-200 select-none">
              <div className="flex-1 min-w-0">
                <span className="text-befoundOrange font-bold text-lg">{nextProjectObj.number}</span>
                <h3 className="text-2xl font-bold text-befoundPurple mb-2 mt-1">{nextProjectObj.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{nextProjectObj.description}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-0 md:ml-8">
                {nextProjectObj.images.slice(0, 1).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={nextProjectObj.title + ' screenshot ' + (idx + 1)}
                    className="w-20 h-32 object-cover rounded-xl border border-gray-100 shadow"
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Current Card */}
          <div className="relative z-10 transition-all duration-300 mx-auto" style={{ width: '100%', maxWidth: 700 }}>
            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center p-8 md:p-12 w-full max-w-3xl transition-all duration-300">
              {/* Text Content */}
              <div className="flex-1 min-w-0 mb-8">
                <span className="text-befoundOrange font-bold text-lg">{project.number}</span>
                <h3 className="text-2xl font-bold text-befoundPurple mb-2 mt-1">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <ul className="mb-4 space-y-2">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 bg-befoundPurple rounded-full inline-block"></span>
                      <span className="text-gray-700 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} className="text-befoundOrange font-semibold hover:underline text-sm  mb-8">Read More</a>
              </div>
              {/* Images */}
              <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-0 md:ml-8">
                {project.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={project.title + ' screenshot ' + (idx + 1)}
                    className="w-32 h-64 object-cover rounded-xl border border-gray-100 shadow"
                  />
                ))}
              </div>
              {/* Navigation Arrows - bottom left inside card */}
              <div className="absolute left-6 bottom-4 flex gap-3 z-20">
                <button
                  onClick={prevProject}
                  className="bg-befoundPurple hover:bg-befoundOrange text-white rounded-full p-3 shadow transition-colors duration-300"
                  aria-label="Previous project"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={nextProject}
                  className="bg-befoundPurple hover:bg-befoundOrange text-white rounded-full p-3 shadow transition-colors duration-300"
                  aria-label="Next project"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestOfWorkSection; 