import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    tags: ['Next.js', 'Python', 'OpenAI', 'Flask', 'TailwindCSS', 'TypeScript'],
    features: [
      'AI image generation',
      'Customizable menu building',
    ],
    images: [
      '/images/dishsnap.png',
    ],
    liveUrl: 'https://dishsnap.vercel.app/',
    challenge: 'Affordable solution for small businesses to generate food photography.',
    solution: 'Used OpenAI for image generation and an intuitive interface for customization.'
  },
  {
    id: 2,
    title: 'Make Media Sense',
    category: 'Frontend',
    description: 'A modern marketing agency website with dynamic content.',
    tags: ['React', 'SAAS', 'Framer Motion', 'Recharts'],
    features: [
      'Responsive design',
      'Interactive charts',
    ],
    images: [
      '/images/makemediasense.png',
    ],
    liveUrl: 'https://media-make-sense-vamc.vercel.app/',
    challenge: 'Showcase digital marketing services with optimal performance.',
    solution: 'Clean, modern design with smooth animations and responsive layouts.'
  },
  {
    id: 3,
    title: 'Astralis AI',
    category: 'Full Stack',
    description: 'We are committed to helping you grow emotionally. Our AI companion provides insights and support to help you understand and manage your feelings.',
    tags: ['React', 'Python', 'OpenAI', 'Flask', 'TailwindCSS', 'TypeScript'],
    features: [
      'AI chatbot',
      'AI notes keeper',
      'AI emotional companion',
      'emotional intelligence',
    ],
    images: [
      '/images/astralis.png',
    ],
    liveUrl: 'https://astralis-notes.vercel.app/',
    challenge: 'Create an AI companion that can help users understand and manage their emotions.',
    solution: 'Used OpenAI for the chatbot and notes keeper, and a user-friendly interface for the emotional companion.'
  },
  {
    id: 4,
    title: 'Tears Run Dry',
    category: 'Full Stack',
    description: '•	Engineered a personal full-stack blog and portfolio platform focused on emotional expression and storytelling through minimalist, poetic content. ',
    tags: ['React', 'supabase', 'Vercel Deployment', 'customAPI', 'TailwindCSS', 'Serverless Function', 'resend'],
    features: [
      'Emotional expression',
      'Storytelling',
    ],
    images: [
      '/images/tearsrundry.png',
    ],
    liveUrl: 'https://tearsrundry.com/',
    challenge: 'Create a platform for users to express their emotions and share their stories.',
    solution: 'Used supabase for the database and vercel for the deployment.'
  },
  {
    id: 5,
    title: 'Premmani Gobal LLP',
    category: 'Wordpress',
    description: 'Worked with WordPress and Elementor to make non-disruptive live changes, ensuring brand consistency and seamless user navigation.',
    tags: ['Wordpress', 'Elementor', 'Custom CSS', 'Custom PHP', 'Custom JS'],
    features: [
      'Wordpress',
      'Elementor',
      'Custom CSS',
      'Custom PHP',
      'Custom JS',
    ],
    images: [
      '/images/premmanigobal.png',
    ],
    liveUrl: 'https://premmanigloballlp.com/',
    challenge: 'Create a platform for users to express their emotions and share their stories.',
    solution: 'Used supabase for the database and vercel for the deployment.'
  },
  {
    id: 6,
    title: 'Crazy Virality',
    category: 'Full Stack',
    description: '•	Engineered a personal full-stack blog and portfolio platform focused on emotional expression and storytelling through minimalist, and SEO friendlycontent. ',
    tags: ['React', 'supabase', 'Vercel Deployment', 'customAPI', 'TailwindCSS', 'Serverless Function', 'resend'],
    features: [
      'SEO friendly',
      'Emotional expression',
      'Storytelling',
      'Minimalist',
    ],
    images: [
      '/images/crazyvirality.png',
    ],
    liveUrl: 'https://crazy-virality.vercel.app/',
    challenge: 'Create a platform for users to express their emotions and share their stories.',
    solution: 'Used supabase for the database and vercel for the deployment.'
  },
  {
    id: 7,
    title: 'Cafe Castle',
    category: 'Restaurant',
    description: 'A medieval-themed café website with menu and booking.',
    tags: ['React', 'TailwindCSS', 'Next.js', 'Framer Motion'],
    features: [
      'Interactive menu display',
      'Table booking system',
    ],
    images: [
      '/images/cafecastle.png',
    ],
    liveUrl: 'https://cafe-castle.vercel.app/',
    challenge: 'Combine medieval aesthetics with modern functionality and easy navigation.',
    solution: 'Immersive themed design with smooth transitions and a user-friendly booking system.'
  }
];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === Number(projectId));

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-befoundPurple mb-4">Project Not Found</h1>
            <Button 
              onClick={() => navigate('/projects')}
              className="bg-befoundPurple hover:bg-befoundOrange text-white"
            >
              Back to Projects
            </Button>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <Button
            onClick={() => navigate('/projects')}
            className="mb-8 bg-befoundPurple hover:bg-befoundOrange text-white"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Button>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold text-befoundPurple mb-4">{project.title}</h1>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-befoundPurple mb-3">Category</h2>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-befoundPurple mb-3">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-befoundPurple mb-3">Key Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 bg-befoundPurple rounded-full inline-block"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-befoundPurple mb-3">Challenge</h2>
                  <p className="text-gray-700">{project.challenge}</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-befoundPurple mb-3">Solution</h2>
                  <p className="text-gray-700">{project.solution}</p>
                </div>

                {project.liveUrl && (
                  <Button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="bg-befoundPurple hover:bg-befoundOrange text-white"
                  >
                    Visit Live Site
                  </Button>
                )}
              </div>

              <div className="md:w-1/2">
                <div className="grid grid-cols-1 gap-6">
                  {project.images.map((image, i) => (
                    <div key={i} className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProjectDetails; 