import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Muse & Masterpiece',
    description: 'Art studio website showcasing murals, sculptures, and creative masterpieces by Deepak Bhadoriya.',
    bullets: [
      'Artwork gallery and portfolio',
      'Mural and sculpture showcases',
      'Studio information and about section',
      'Responsive artistic design'
    ],
    images: [
      '/images/musemasterpiece.png',
    ],
    link: '/projects/16',
    tags: ['React', 'Art Portfolio', 'Creative Design', 'Visual Arts']
  },
  {
    id: 2,
    number: '02',
    title: 'Kiazen Interiors',
    description: 'Professional interior design company website showcasing portfolio, services, and design expertise.',
    bullets: [
      'Interior design portfolio showcase',
      'Service offerings display',
      'Design expertise presentation',
      'Professional company branding'
    ],
    images: [
      '/images/kiinterior.png',
    ],
    link: '/projects/3',
    tags: ['React', 'Interior Design', 'Portfolio', 'Professional Design']
  },
  {
    id: 3,
    number: '03',
    title: 'Weston Family Dental Florida',
    description: 'Complete dental practice website with appointment booking system, form integrations, and comprehensive service management.',
    bullets: [
      'Complete website design and development',
      'Appointment booking system',
      'Form integrations for patient inquiries',
      'Responsive design for all devices'
    ],
    images: [
      '/images/westonDentalFlorida.png',
    ],
    link: '/projects/2',
    tags: ['WordPress', 'Appointment System', 'Healthcare', 'Responsive Design']
  }
];

const BestOfWorkSection = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const prevIdx = (current - 1 + projects.length) % projects.length;
  const nextIdx = (current + 1) % projects.length;

  const prevProject = () => setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextProject = () => setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const prevProjectObj = projects[prevIdx];
  const project = projects[current];
  const nextProjectObj = projects[nextIdx];

  const handleReadMore = (link: string) => {
    navigate(link);
  };

  return (
    <section className="w-full bg-[#f8fafc] py-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <span className="text-befoundOrange font-semibold tracking-wider mb-2 text-center">OUR FINEST ACHIEVEMENTS</span>
        <h2 className="text-4xl md:text-5xl font-newsreader font-bold text-befoundPurple text-center mb-4">Best of Our Work</h2>
        <p className="text-gray-600 text-center max-w-2xl mb-8">
          With a track record of successful projects and satisfied clients, we strive for excellence in every endeavour.
        </p>
        <Button 
          className="mb-12 bg-befoundPurple hover:bg-befoundOrange text-white font-semibold px-8 py-3 rounded-full shadow transition-colors duration-300"
          onClick={() => navigate('/projects')}
        >
          View All Portfolio
        </Button>

        {/* Card Stack Carousel */}
        <div className="relative w-full flex justify-center items-center min-h-[600px] md:min-h-[500px] mb-16">
          {/* Previous Card (peek effect left) */}
          <div
            className="absolute left-0 top-8 z-0 transition-all duration-300 hidden md:flex justify-start"
            style={{ width: '60%', maxWidth: 400, opacity: 0.5, pointerEvents: 'none' }}
            aria-hidden="true"
          >
            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 md:p-8 w-full border border-gray-200 select-none">
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
                    alt={`${prevProjectObj.title} website project screenshot ${idx + 1} - beFound portfolio`}
                    className="w-20 h-32 object-cover rounded-xl border border-gray-100 shadow"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Next Card (peek effect right) */}
          <div
            className="absolute right-0 top-8 z-0 transition-all duration-300 hidden md:flex justify-end"
            style={{ width: '60%', maxWidth: 400, opacity: 0.5, pointerEvents: 'none' }}
            aria-hidden="true"
          >
            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 md:p-8 w-full border border-gray-200 select-none">
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
                    alt={`${nextProjectObj.title} website project screenshot ${idx + 1} - beFound portfolio`}
                    className="w-20 h-32 object-cover rounded-xl border border-gray-100 shadow"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Current Card */}
          <div className="relative z-10 transition-all duration-300 mx-auto w-full" style={{ maxWidth: 700 }}>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                {/* Text Content */}
                <div className="flex-1 min-w-0 mb-8 md:mb-0 md:pr-8">
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleReadMore(project.link)}
                    className="text-befoundOrange font-semibold hover:underline text-sm inline-block"
                  >
                    Read More
                  </button>
                </div>

                {/* Images */}
                <div className="w-full md:w-auto flex justify-center md:justify-end items-center">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} - beFound web development project showcase featuring modern design and functionality`}
                    className="w-full md:w-64 h-40 object-cover rounded-xl border border-gray-100 shadow-lg"
                    style={{ maxWidth: '100%' }}
                  />
                </div>
              </div>

              {/* Navigation Arrows - Inside card at bottom */}
              <div className="flex justify-center md:justify-start gap-3 mt-8">
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