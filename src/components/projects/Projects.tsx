import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ScrollToTop from '../layout/ScrollToTop';

const projects = [
  {
    id: 1,
    title: 'Dishsnap',
    category: 'Full Stack',
    description: 'AI-powered food photography generator for restaurants.',
    tags: ['React', 'Python', 'OpenAI', 'Flask', 'TailwindCSS', 'TypeScript'],
    image: '/images/dishsnap.png',
    link: '/projects/1'
  },
  {
    id: 2,
    title: 'Make Media Sense',
    category: 'Frontend',
    description: 'A modern marketing agency website with dynamic content.',
    tags: ['React', 'SASS', 'Framer Motion', 'Recharts'],
    image: '/images/makemediasense.png',
    link: '/projects/2'
  },
  {
    id: 3,
    title: 'Astralis AI',
    category: 'Full Stack',
    description: 'We are committed to helping you grow emotionally. Our AI companion provides insights and support to help you understand and manage your feelings.',
    tags: ['React', 'Python', 'OpenAI', 'Flask', 'TailwindCSS', 'TypeScript'],
    image: '/images/astralis.png',
    link: '/projects/3'
  },
  {
    id: 4,
    title: 'Tears Run Dry',
    category: 'Full Stack',
    description: '•	Engineered a personal full-stack blog and portfolio platform focused on emotional expression and storytelling through minimalist, poetic content. ',
    tags: ['React', 'supabase', 'Vercel Deployment', 'customAPI', 'TailwindCSS', 'Serverless Function', 'resend'],
    image: '/images/tearsrundry.png',
    link: '/projects/4'
  },
  {
    id: 5,
    title: 'Premmani Gobal LLP',
    category: 'Wordpress',
    description: 'Worked with WordPress and Elementor to make non-disruptive live changes, ensuring brand consistency and seamless user navigation.',
    tags: ['Wordpress', 'Elementor', 'Custom CSS', 'Custom PHP', 'Custom JS'],
    image: '/images/premmaniglobal.png',
    link: '/projects/5'
  },
  {
    id: 6,
    title: 'Crazy Virality',
    category: 'Full Stack',
    description: '•	Engineered a personal full-stack blog and portfolio platform focused on emotional expression and storytelling through minimalist, and SEO friendlycontent. ',
    tags: ['React', 'supabase', 'Vercel Deployment', 'customAPI', 'TailwindCSS', 'Serverless Function', 'resend'],
    image: '/images/crazyvirality.png',
    link: '/projects/6'
  }
 
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <Button
            onClick={() => navigate('/')}
            className="mb-8 bg-befoundPurple hover:bg-befoundOrange text-white"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>

          <h1 className="text-4xl font-bold text-befoundPurple mb-2 text-center">Our Projects</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Explore our portfolio of successful projects and see how we've helped businesses achieve their goals through innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-befoundPurple mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    onClick={() => navigate(project.link)}
                    className="w-full bg-befoundPurple hover:bg-befoundOrange text-white mt-auto"
                  >
                    View Project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Projects; 