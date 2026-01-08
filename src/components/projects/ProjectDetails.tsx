import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ScrollToTop from '../layout/ScrollToTop';
import { SEO, getBreadcrumbSchema } from '../common/SEO';

const projects = [
  {
    id: 1,
    title: 'The White Seed',
    category: 'E-commerce',
    description: 'Vitamin water e-commerce platform with comprehensive product management, payment integration, and enhanced home page sections.',
    tags: ['WordPress', 'E-commerce', 'Payment Integration', 'Product Management', 'WooCommerce'],
    features: [
      'Product details page with comprehensive information',
      'Last 4 sections added to home page',
      'Payment integration for seamless transactions',
      'Responsive design for all devices',
      'Product catalog management'
    ],
    images: [
      '/images/theWhiteSeed.png',
    ],
    liveUrl: 'https://thewhiteseed.com/',
    challenge: 'Create a modern e-commerce platform for vitamin water products with integrated payment processing and enhanced user experience.',
    solution: 'Developed a WordPress-based platform with WooCommerce integration, comprehensive product pages, and enhanced home page sections for better user engagement.'
  },
  {
    id: 2,
    title: 'Weston Family Dental Florida',
    category: 'Healthcare',
    description: 'Complete dental practice website with comprehensive appointment booking system, form integrations, and service management.',
    tags: ['WordPress', 'Appointment System', 'Form Integration', 'Healthcare', 'Responsive Design', 'Patient Portal'],
    features: [
      'Complete website design and development',
      'Appointment booking system',
      'Form integrations for patient inquiries',
      'Service catalog and pricing',
      'Patient resources and forms',
      'Responsive design for all devices'
    ],
    images: [
      '/images/westonDentalFlorida.png',
    ],
    liveUrl: 'https://westonfamilydentalflorida.com/',
    challenge: 'Build a comprehensive dental practice website with appointment scheduling, patient forms, and service information management.',
    solution: 'Developed a complete WordPress-based solution with custom appointment booking, form integrations, and comprehensive service management system.'
  },
  {
    id: 3,
    title: 'Kiazen Interiors',
    category: 'Interior Design',
    description: 'Professional interior design company website showcasing portfolio, services, and design expertise.',
    tags: ['React', 'Interior Design', 'Portfolio', 'Professional Design'],
    features: [
      'Interior design portfolio showcase',
      'Service offerings display',
      'Design expertise presentation',
      'Professional company branding',
      'Responsive design'
    ],
    images: [
      '/images/kiinterior.png',
    ],
    liveUrl: 'https://www.kiazeninteriors.com',
    challenge: 'Create a professional interior design company website that effectively showcases design portfolio and services.',
    solution: 'Developed a modern React-based website with clean design, portfolio presentation, and professional company branding.'
  },
  {
    id: 4,
    title: 'Patrick Kalenzi',
    category: 'Author Website',
    description: 'Professional author website showcasing literary works and personal brand.',
    tags: ['Wix', 'Author Platform', 'Content Management', 'Personal Branding'],
    features: [
      'Author portfolio and biography',
      'Book showcase and descriptions',
      'Contact and booking information',
      'Responsive design',
      'Content management system'
    ],
    images: [
      '/images/PatrickKalenzi.png',
    ],
    liveUrl: 'https://www.patrickkalenzi.com/',
    challenge: 'Create a professional author website that effectively showcases literary works and personal brand.',
    solution: 'Developed a modern Wix-based platform with clean design, content management, and professional presentation of author works.'
  },
  {
    id: 5,
    title: '3 Tigers',
    category: 'Business',
    description: 'Professional business website with modern design and comprehensive business information.',
    tags: ['React', 'Business Website', 'Professional Design'],
    features: [
      'Professional business website',
      'Company information and services',
      'Modern responsive design',
      'Business portfolio showcase'
    ],
    images: [
      '/images/3tigers.png',
    ],
    liveUrl: 'https://www.3tigers.co.nz',
    challenge: 'Develop a professional business website that effectively communicates company services and information.',
    solution: 'Created a modern React-based business website with clean design and comprehensive business information architecture.'
  },
  {
    id: 6,
    title: 'Serve Smart',
    category: 'Business',
    description: 'Professional business website with modern design and comprehensive business information.',
    tags: ['React', 'Business Website', 'Professional Design'],
    features: [
      'Professional business website',
      'Company information and services',
      'Modern responsive design',
      'Business portfolio showcase'
    ],
    images: [
      '/images/servesmart.png',
    ],
    liveUrl: 'https://servesmart.co.nz/',
    challenge: 'Develop a professional business website that effectively communicates company services and information.',
    solution: 'Created a modern React-based business website with clean design and comprehensive business information architecture.'
  },
  {
    id: 7,
    title: 'United International',
    category: 'Business',
    description: 'Corporate business website with modern design and comprehensive business information for international operations.',
    tags: ['WordPress', 'Business Website', 'Corporate Design', 'Information Architecture', 'International Business'],
    features: [
      'Corporate business information',
      'Service portfolio',
      'Company overview and mission',
      'Contact information',
      'Responsive business design'
    ],
    images: [
      '/images/unitedinternational.png',
    ],
    liveUrl: 'https://unitedintls.com/',
    challenge: 'Develop a professional corporate website that effectively communicates business services and international presence.',
    solution: 'Created a modern WordPress-based business website with clean corporate design and comprehensive business information architecture.'
  },
  {
    id: 8,
    title: 'Tears Run Dry',
    category: 'Business',
    description: 'Professional website for Tears Run Dry company with modern design and comprehensive business information.',
    tags: ['React', 'Business Website', 'Professional Design'],
    features: [
      'Professional business website',
      'Company information and services',
      'Modern responsive design',
      'Business portfolio showcase'
    ],
    images: [
      '/images/tearsrundry.png',
    ],
    liveUrl: 'https://tearsrundry.com/',
    challenge: 'Develop a professional business website that effectively communicates company services and information.',
    solution: 'Created a modern React-based business website with clean design and comprehensive business information architecture.'
  },
  {
    id: 9,
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
  },
  {
    id: 10,
    title: 'Suril Udeshi',
    category: 'Personal Portfolio',
    description: 'Professional personal portfolio website showcasing skills, projects, and professional experience with modern design.',
    tags: ['React', 'Portfolio', 'Personal Branding', 'Modern Design'],
    features: [
      'Personal portfolio showcase',
      'Skills and experience display',
      'Project portfolio',
      'Modern responsive design',
      'Professional branding'
    ],
    images: [
      '/images/restaurant.png',
    ],
    liveUrl: 'https://suriludeshi.vercel.app/',
    challenge: 'Create a professional personal portfolio website that effectively showcases skills, projects, and professional experience.',
    solution: 'Developed a modern React-based portfolio website with clean design, responsive layout, and professional presentation of personal brand and work.'
  },
  {
    id: 11,
    title: 'Deep Mutual Funds',
    category: 'Finance',
    description: 'Financial services platform for mutual fund investments and portfolio management with modern interface.',
    tags: ['React', 'Finance', 'Investment Platform', 'Portfolio Management', 'Vercel', 'Financial Services'],
    features: [
      'Mutual fund investment platform',
      'Portfolio management tools',
      'Financial information display',
      'Investment guidance',
      'Responsive financial interface'
    ],
    images: [
      '/images/deepmutualfunds.png',
    ],
    liveUrl: 'https://www.deepinvestment.co/',
    challenge: 'Build a comprehensive financial platform for mutual fund investments with user-friendly portfolio management.',
    solution: 'Developed a React-based financial platform with modern design, portfolio management tools, and comprehensive investment information.'
  },
  // {
  //   id: 12,
  //   title: 'NW9 Digital',
  //   category: 'Digital Agency',
  //   description: 'Comprehensive digital solutions including web development, ERP solutions, SEO optimization, and recruitment services for business growth.',
  //   tags: ['React', 'Web Development', 'ERP Solutions', 'SEO', 'Recruitment Services'],
  //   features: [
  //     'Custom website development',
  //     'ERP system solutions',
  //     'SEO optimization services',
  //     'Recruitment services',
  //     'Responsive design'
  //   ],
  //   images: [
  //     '/images/nw9.png',
  //   ],
  //   liveUrl: 'https://nw9.digital/',
  //   challenge: 'Create a comprehensive digital agency platform that showcases multiple service offerings including web development, ERP solutions, SEO, and recruitment.',
  //   solution: 'Developed a modern React-based website highlighting NW9 Digital\'s expertise in web development, ERP solutions, SEO optimization, and recruitment services with a professional design.'
  // },
  {
    id: 12,
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
      id: 13,
    title: 'Crazy Virality',
    category: 'Digital Marketing',
    description: 'Digital marketing and viral content creation platform with innovative tools and strategies.',
    tags: ['React', 'Digital Marketing', 'Content Creation'],
    features: [
      'Digital marketing platform',
      'Viral content creation tools',
      'Marketing strategy implementation',
      'Responsive marketing interface'
    ],
    images: [
      '/images/crazyvirality.png',
    ],
    liveUrl: '#',
    challenge: 'Create a digital marketing platform that helps businesses create viral content and implement effective marketing strategies.',
    solution: 'Developed a React-based marketing platform with innovative tools for content creation and marketing strategy implementation.'
  },
  {
    id: 14,
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
    liveUrl: 'http://www.makesensemedia.in/',
    challenge: 'Showcase digital marketing services with optimal performance.',
    solution: 'Clean, modern design with smooth animations and responsive layouts.'
  },
  {
    id: 15,
    title: 'Dr. Uppiliappan Gopalan',
    category: 'Personal Portfolio',
    description: 'Professional portfolio website for Dr. Uppiliappan Gopalan showcasing thought leadership, achievements, media features, and professional accomplishments.',
    tags: ['React', 'Portfolio', 'Personal Branding', 'Professional Design', 'Thought Leadership'],
    features: [
      'Professional portfolio showcase',
      'Media features and achievements',
      'Thought leadership content',
      'Blog and insights section',
      'Contact and engagement features',
      'Responsive design'
    ],
    images: [
      '/images/doctorgopallan.png',
    ],
    liveUrl: 'https://gopalansir.vercel.app/',
    challenge: 'Create a professional portfolio website that effectively showcases thought leadership, achievements, and media recognition.',
    solution: 'Developed a modern React-based portfolio website with clean design, comprehensive achievement showcase, and professional presentation of thought leadership work.'
  },
  {
    id: 16,
    title: 'Muse & Masterpiece',
    category: 'Art & Design',
    description: 'Art studio website showcasing murals, sculptures, and creative masterpieces by Deepak Bhadoriya, featuring timeless artistic works.',
    tags: ['React', 'Art Portfolio', 'Creative Design', 'Visual Arts', 'Art Showcase'],
    features: [
      'Artwork gallery and portfolio',
      'Mural and sculpture showcases',
      'Studio information and about section',
      'Achievements and recognition',
      'Contact and inquiry features',
      'Responsive artistic design'
    ],
    images: [
      '/images/musemasterpiece.png',
    ],
    liveUrl: 'https://muse-and-masterpiece.vercel.app/',
    challenge: 'Create an elegant art studio website that effectively showcases murals, sculptures, and creative masterpieces with a timeless aesthetic.',
    solution: 'Developed a modern React-based art portfolio website with sophisticated design, comprehensive artwork showcase, and elegant presentation of creative works.'
  },
  {
    id: 17,
    title: 'Blue Escape Holidays',
    category: 'Travel',
    description: 'Luxury travel agency website offering exclusive travel experiences, bespoke holiday packages, and premium travel services.',
    tags: ['React', 'Travel', 'Luxury Travel', 'Responsive Design', 'Travel Agency'],
    features: [
      'Luxury travel package showcase',
      'Destination highlights',
      'Enquiry and booking system',
      'Travel experience gallery',
      'Responsive travel interface',
      'Premium design aesthetic'
    ],
    images: [
      '/images/blueescape.png',
    ],
    liveUrl: 'https://www.blueescapeholidays.com/',
    challenge: 'Create a luxury travel agency website that effectively showcases exclusive travel experiences and bespoke holiday packages.',
    solution: 'Developed a modern React-based travel website with premium design, comprehensive travel package presentation, and elegant user experience for luxury travelers.'
  },
  {
    id: 18,
    title: 'NW9 Digital',
    category: 'Digital Agency',
    description: 'Comprehensive digital solutions including web development, ERP solutions, SEO optimization, and recruitment services for business growth.',
    tags: ['React', 'Web Development', 'ERP Solutions', 'SEO', 'Recruitment Services'],
    features: [
      'Custom website development',
      'ERP system solutions',
      'SEO optimization services',
      'Recruitment services',
      'Responsive design'
    ],
    images: [
      '/images/nw9.png',
    ],
    liveUrl: 'https://nw9.digital/',
    challenge: 'Create a comprehensive digital agency platform that showcases multiple service offerings including web development, ERP solutions, SEO, and recruitment.',
    solution: 'Developed a modern React-based website highlighting NW9 Digital\'s expertise in web development, ERP solutions, SEO optimization, and recruitment services with a professional design.'
  },
  {
    id: 19,
    title: 'NW9.in',
    category: 'Digital Agency',
    description: 'Digital solutions platform offering web development, marketing, and business automation services.',
    tags: ['React', 'Web Development', 'Digital Marketing', 'Business Automation'],
    features: [
      'Web development services',
      'Digital marketing solutions',
      'Business automation tools',
      'Responsive design',
      'Professional branding'
    ],
    images: [
      '/images/nw9digital2.png',
    ],
    liveUrl: '#',
    challenge: 'Develop a digital solutions platform that effectively showcases web development, marketing, and business automation services.',
    solution: 'Created a modern React-based platform with clean design, comprehensive service presentation, and professional branding for digital agency services.'
  }
];

// Helper function to generate SEO-friendly keywords and descriptions
const getSEOData = (project: typeof projects[0]) => {
  const baseKeywords = [
    'web development',
    'website development',
    'custom website',
    'web design',
    'responsive design',
    'modern website',
    'professional website',
    'beFound',
    'software solutions',
    'digital solutions'
  ];

  const categoryKeywords: Record<string, string[]> = {
    'E-commerce': [
      'e-commerce website development',
      'online store development',
      'ecommerce platform',
      'WooCommerce development',
      'payment integration',
      'product management system',
      'online shopping website',
      'e-commerce solutions',
      'digital commerce platform'
    ],
    'Healthcare': [
      'healthcare website development',
      'dental website design',
      'medical website development',
      'healthcare digital solutions',
      'patient portal development',
      'appointment booking system',
      'healthcare web design',
      'medical practice website',
      'dental clinic website'
    ],
    'Interior Design': [
      'interior design website',
      'portfolio website development',
      'creative agency website',
      'design portfolio',
      'interior design company website',
      'professional portfolio website'
    ],
    'Author Website': [
      'author website development',
      'personal website design',
      'content management system',
      'author platform',
      'book marketing website',
      'personal branding website'
    ],
    'Restaurant': [
      'restaurant website development',
      'restaurant web design',
      'online menu website',
      'restaurant booking system',
      'food service website',
      'restaurant digital solutions',
      'cafe website development',
      'restaurant online ordering'
    ],
    'Business': [
      'business website development',
      'corporate website design',
      'business web development',
      'company website development',
      'professional business website',
      'corporate web solutions',
      'business digital solutions'
    ],
    'Finance': [
      'financial website development',
      'investment platform development',
      'fintech website design',
      'financial services website',
      'portfolio management system',
      'mutual fund website',
      'financial technology solutions'
    ],
    'Full Stack': [
      'full stack development',
      'AI-powered application',
      'machine learning website',
      'artificial intelligence development',
      'full stack web application',
      'AI integration services'
    ],
    'Digital Marketing': [
      'digital marketing platform',
      'marketing website development',
      'content creation platform',
      'social media marketing tools',
      'digital marketing solutions',
      'marketing automation platform'
    ],
    'Frontend': [
      'frontend development',
      'modern web design',
      'interactive website',
      'dynamic web application',
      'responsive web design',
      'user interface design'
    ],
    'Personal Portfolio': [
      'portfolio website development',
      'personal website design',
      'professional portfolio',
      'personal branding website',
      'portfolio web design',
      'personal website development'
    ],
    'Art & Design': [
      'art portfolio website',
      'creative portfolio development',
      'art gallery website',
      'design portfolio website',
      'artistic website design',
      'creative agency website'
    ],
    'Travel': [
      'travel website development',
      'travel agency website',
      'tour booking website',
      'travel portal development',
      'luxury travel website',
      'travel booking system',
      'holiday booking platform'
    ],
    'Digital Agency': [
      'digital agency website',
      'web development agency',
      'digital marketing agency',
      'ERP solutions development',
      'SEO optimization services',
      'business automation solutions',
      'digital transformation services'
    ]
  };

  const techKeywords = project.tags.map(tag => 
    tag.toLowerCase().includes('react') ? 'React development' :
    tag.toLowerCase().includes('wordpress') ? 'WordPress development' :
    tag.toLowerCase().includes('next.js') ? 'Next.js development' :
    tag.toLowerCase().includes('python') ? 'Python development' :
    tag.toLowerCase().includes('typescript') ? 'TypeScript development' :
    tag.toLowerCase().includes('seo') ? 'SEO optimization' :
    `${tag.toLowerCase()} development`
  );

  const keywords = [
    ...baseKeywords,
    ...(categoryKeywords[project.category] || []),
    ...techKeywords,
    project.title.toLowerCase(),
    `${project.title} website`,
    `${project.category.toLowerCase()} website development`,
    `${project.category.toLowerCase()} web design`
  ].join(', ');

  const description = `${project.title} - Professional ${project.category.toLowerCase()} website development project by beFound. ${project.description} Built with ${project.tags.join(', ')}. Expert ${project.category.toLowerCase()} web design, custom development, responsive design, and modern UI/UX. View our portfolio of successful ${project.category.toLowerCase()} websites and digital solutions.`;

  return { keywords, description };
};

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

  const seoData = getSEOData(project);
  const siteUrl = 'https://befound.com';
  const canonicalUrl = `${siteUrl}/projects/${project.id}`;
  const ogImage = project.images[0] || '/og-image.jpg';

  // Structured data for WebPage
  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${project.title} - ${project.category} Website Development Project`,
    description: seoData.description,
    url: canonicalUrl,
    image: `${siteUrl}${ogImage}`,
    mainEntity: {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      creator: {
        '@type': 'Organization',
        name: 'beFound',
        url: siteUrl
      },
      keywords: seoData.keywords,
      ...(project.liveUrl && {
        url: project.liveUrl
      })
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects',
          item: `${siteUrl}/projects`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: project.title,
          item: canonicalUrl
        }
      ]
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Projects', url: `${siteUrl}/projects` },
    { name: project.title, url: canonicalUrl }
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title={`${project.title} - ${project.category} Website Development | beFound Portfolio`}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        ogType="website"
        structuredData={[webpageSchema, breadcrumbSchema]}
      />
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

          <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold text-befoundPurple mb-4">{project.title} - {project.category} Website Development</h1>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-befoundPurple mb-3">Project Category</h2>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full font-medium">
                    {project.category} Website Development
                  </span>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-befoundPurple mb-3">Technologies & Tools Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    This {project.category.toLowerCase()} website was built using modern web development technologies including {project.tags.slice(0, 3).join(', ')} and more, ensuring optimal performance, SEO optimization, and responsive design.
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-befoundPurple mb-3">Key Features & Functionality</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 bg-befoundPurple rounded-full inline-block flex-shrink-0"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-befoundPurple mb-3">Project Challenge</h2>
                  <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-befoundPurple mb-3">Our Solution</h2>
                  <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-befoundPurple mb-3">About This {project.category} Website Project</h2>
                  <p className="text-gray-700 leading-relaxed">
                    This {project.category.toLowerCase()} website development project showcases beFound's expertise in creating modern, responsive, and SEO-optimized websites. Our team specializes in {project.category.toLowerCase()} web design, custom development, and digital solutions that drive results. This project demonstrates our commitment to delivering high-quality {project.category.toLowerCase()} websites with exceptional user experience and performance.
                  </p>
                </div>

                {project.liveUrl && project.liveUrl !== '#' && (
                  <Button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="bg-befoundPurple hover:bg-befoundOrange text-white"
                  >
                    Visit Live Website
                  </Button>
                )}
              </div>

              <div className="md:w-1/2">
                <div className="grid grid-cols-1 gap-6">
                  {project.images.map((image, i) => (
                    <div key={i} className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={image}
                        alt={`${project.title} ${project.category.toLowerCase()} website screenshot ${i + 1} - ${project.category} web development project by beFound`}
                        title={`${project.title} - ${project.category} Website Development Project`}
                        className="w-full h-auto object-cover"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-befoundPurple mb-2">Looking for Similar {project.category} Website Development?</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    beFound specializes in {project.category.toLowerCase()} website development, custom web design, and digital solutions. We create responsive, SEO-optimized websites that drive results.
                  </p>
                  <a 
                    href="https://calendly.com/thebefoundcompany/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-befoundPurple hover:bg-befoundOrange text-white text-sm w-full">
                      Get Free Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProjectDetails; 