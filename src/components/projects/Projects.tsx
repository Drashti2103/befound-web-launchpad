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
    title: 'The White Seed',
    category: 'E-commerce',
    description: 'Vitamin water e-commerce platform with product details page, last 4 sections on home page, and payment integration.',
    tags: ['WordPress', 'E-commerce', 'Payment Integration', 'Product Management', 'WooCommerce'],
    image: '/images/theWhiteSeed.png',
    link: '/projects/1'
  },
  {
    id: 2,
    title: 'Weston Family Dental Florida',
    category: 'Healthcare',
    description: 'Complete dental practice website with appointment booking system, form integrations, and comprehensive service management.',
    tags: ['WordPress', 'Appointment System', 'Form Integration', 'Healthcare', 'Responsive Design'],
    image: '/images/westonDentalFlorida.png',
    link: '/projects/2'
  },
  {
    id: 3,
    title: 'Kiazen Interiors',
    category: 'Interior Design',
    description: 'Professional interior design company website showcasing portfolio, services, and design expertise.',
    tags: ['React', 'Interior Design', 'Portfolio', 'Professional Design'],
    image: '/images/kiinterior.png',
    link: '/projects/3'
  },
  {
    id: 4,
    title: 'Patrick Kalenzi',
    category: 'Author Website',
    description: 'Professional author website showcasing literary works and personal brand.',
    tags: ['Wix', 'Author Platform', 'Content Management', 'Personal Branding'],
    image: '/images/PatrickKalenzi.png',
    link: '/projects/4'
  },
  {
    id: 5,
    title: '3 Tigers',
    category: 'Restaurant',
    description: 'Modern restaurant website for 3 Tigers Thai Restaurant & Bar with online menu, booking system, and mobile-optimized experience.',
    tags: ['React', 'Restaurant Website', 'Next.js', 'Professional Design'],
    image: '/images/3tigers.png',
    link: '/projects/5'
  },
  {
    id: 6,
    title: 'Serve Smart',
    category: 'Business',
    description: 'Professional business website with modern design and comprehensive business information.',
    tags: ['React', 'Business Website', 'Professional Design'],
    image: '/images/servesmart.png',
    link: '/projects/6'
  },
  {
    id: 7,
    title: 'United International',
    category: 'Business',
    description: 'Corporate business website with modern design and comprehensive business information for international operations.',
    tags: ['WordPress', 'Business Website', 'Corporate Design', 'Information Architecture'],
    image: '/images/unitedinternational.png',
    link: '/projects/7'
  },
  {
    id: 8,
    title: 'Tears Run Dry',
    category: 'Business',
    description: 'Professional website for Tears Run Dry company with modern design and comprehensive business information.',
    tags: ['React', 'Business Website', 'Professional Design'],
    image: '/images/tearsrundry.png',
    link: '/projects/8'
  },
  {
    id: 11,
    title: 'Deep Mutual Funds',
    category: 'Finance',
    description: 'Financial services platform for mutual fund investments and portfolio management.',
    tags: ['React', 'Finance', 'Investment Platform', 'Portfolio Management', 'Vercel'],
    image: '/images/deepmutualfunds.png',
    link: '/projects/11'
  },
  {
    id: 14,
    title: 'Make Media Sense',
    category: 'Frontend',
    description: 'A modern marketing agency website with dynamic content.',
    tags: ['React', 'SASS', 'Framer Motion', 'Recharts'],
    image: '/images/makemediasense.png',
    link: '/projects/14'
  },
  {
    id: 17,
    title: 'Blue Escape Holidays',
    category: 'Travel',
    description: 'Luxury travel agency website offering exclusive travel experiences and bespoke holiday packages.',
    tags: ['React', 'Travel', 'Luxury Travel', 'Responsive Design'],
    image: '/images/blueescape.png',
    link: '/projects/17'
  },
  {
    id: 13,
    title: 'Crazy Virality',
    category: 'Digital Marketing',
    description: 'Digital marketing and viral content creation platform with innovative tools and strategies.',
    tags: ['React', 'Digital Marketing', 'Content Creation'],
    image: '/images/crazyvirality.png',
    link: '/projects/13'
  },
  {
    id: 16,
    title: 'Muse & Masterpiece',
    category: 'Art & Design',
    description: 'Art studio website showcasing murals, sculptures, and creative masterpieces by Deepak Bhadoriya.',
    tags: ['React', 'Art Portfolio', 'Creative Design', 'Visual Arts'],
    image: '/images/musemasterpiece.png',
    link: '/projects/16'
  },
  {
    id: 9,
    title: 'Cafe Castle',
    category: 'Restaurant',
    description: 'A medieval-themed café website with menu and booking.',
    tags: ['React', 'TailwindCSS', 'Next.js', 'Framer Motion'],
    image: '/images/cafecastle.png',
    link: '/projects/9'
  },
  {
    id: 18,
    title: 'NW9 Digital',
    category: 'Digital Agency',
    description: 'Comprehensive digital solutions including web development, ERP solutions, SEO optimization, and recruitment services for business growth.',
    tags: ['React', 'Web Development', 'ERP Solutions', 'SEO', 'Recruitment Services'],
    image: '/images/nw9.png',
    link: '/projects/18'
  },
  {
    id: 19,
    title: 'NW9.in',
    category: 'Digital Agency',
    description: 'Digital solutions platform offering web development, marketing, and business automation services.',
    tags: ['React', 'Web Development', 'Digital Marketing', 'Business Automation'],
    image: '/images/nw9digital2.png',
    link: '/projects/19'
  },
  {
    id: 12,
    title: 'Dishsnap',
    category: 'Full Stack',
    description: 'AI-powered food photography generator for restaurants.',
    tags: ['React', 'Python', 'OpenAI', 'Flask', 'TailwindCSS', 'TypeScript'],
    image: '/images/dishsnap.png',
    link: '/projects/12'
  },
  {
    id: 15,
    title: 'Dr. Uppiliappan Gopalan',
    category: 'Personal Portfolio',
    description: 'Professional portfolio website for Dr. Uppiliappan Gopalan showcasing thought leadership, achievements, and media features.',
    tags: ['React', 'Portfolio', 'Personal Branding', 'Professional Design'],
    image: '/images/doctorgopallan.png',
    link: '/projects/15'
  },
  {
    id: 10,
    title: 'Suril Udeshi',
    category: 'Personal Portfolio',
    description: 'Professional personal portfolio website showcasing skills, projects, and professional experience with modern design.',
    tags: ['React', 'Portfolio', 'Personal Branding', 'Modern Design'],
    image: '/images/restaurant.png',
    link: '/projects/10'
  }
];

const Projects = () => {
  const navigate = useNavigate();

  // Ongoing project IDs: Cafe Castle (9), Suril Udeshi (10), Dishsnap (12), 
  // Dr. Uppiliappan Gopalan (15), NW9 Digital (18), NW9.in (19)
  const ongoingProjectIds = [9, 10, 12, 15, 18, 19];
  
  const completedProjects = projects.filter(project => !ongoingProjectIds.includes(project.id));
  const ongoingProjects = projects.filter(project => ongoingProjectIds.includes(project.id));

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {completedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} website development project by beFound`}
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

          {/* Ongoing Projects Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-befoundPurple mb-8 text-center">Ongoing Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} website development project by beFound`}
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
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Projects; 