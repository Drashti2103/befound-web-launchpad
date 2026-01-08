export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: 'real-estate' | 'dental' | 'restaurant' | 'general' | 'agency';
  excerpt: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  technologies: string[];
  image: string;
  galleryImages: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  projectDuration: string;
  projectUrl?: string;
  publishedDate: string;
  featured: boolean;
  seoKeywords: string[];
}

export const caseStudies: CaseStudy[] = [
  // DENTAL CASE STUDIES
  {
    id: 'weston-family-dental-florida',
    slug: 'weston-family-dental-florida',
    title: 'Weston Family Dental Generates 12 New Patients in 30 Days',
    client: 'Weston Family Dental Florida',
    industry: 'dental',
    excerpt: 'Targeted Google Ads and website optimization help Dr. Pratik Patel\'s family dental practice in Weston, FL, attract qualified local patients and convert them into booked appointments.',
    challenge: `Before the engagement, Weston Family Dental had an informative website and active practice but lacked a consistent digital acquisition system for new patients in Weston and nearby areas. The site was getting impressions in Google, but click-through rate was relatively low compared to the number of keywords the practice was appearing for, indicating room for improvement in SEO and search visibility.

Key issues included:

- Limited visibility for high-intent local keywords like "dentist in Weston," "family dentist Weston FL," and "Invisalign Weston," despite the site showcasing these services.
- Under-optimized on-page SEO for top-performing URLs such as dental bridges, gum disease treatments, Invisalign vs traditional braces, implant-supported dentures, and patient forms, which already had impressions and rankings but could drive more clicks and calls with better metadata and CTAs.
- No unified measurement of how many calls or appointment requests were generated from Google Ads vs organic search, making it difficult for Dr Patel to see marketing ROI clearly.

At the same time, there was strong competition from other local dental brands targeting similar patients and neighborhoods, meaning Weston Family Dental needed a more compelling, data-driven online presence to stay top of mind.`,
    solution: `The strategy focused on aligning the practice's strengths—comprehensive family and cosmetic dentistry, friendly care, and Dr Patel's strong local reputation—with a performance-focused web and ads setup.

**Website & On-Page SEO Optimization**
- Refreshed key service pages (dental bridges, gum disease treatments, Invisalign vs braces, implant-supported dentures, family dentistry, and patient forms) with stronger page titles, meta descriptions, and internal links that highlighted location ("Weston, FL") and high-intent dental terms.
- Improved page structure using clear headings, benefit-focused copy, and more visible calls-to-action (phone number, appointment links, patient forms), making it easier for visitors to contact the practice quickly.

**Local SEO & Conversion Foundations**
- Ensured consistent NAP (name, address, phone) usage across the site and key contact pages, reinforcing local relevance for Weston and surrounding communities.
- Connected analytics, call tracking, and form tracking so that every phone call and online appointment request from campaigns could be attributed to the correct traffic source.

**High-Intent Google Ads Campaigns**
- Built focused Google Ads search campaigns around local, high-intent queries such as "dentist near me," "family dentist Weston," "Invisalign Weston FL," and treatment-specific searches aligned with the practice's strongest services.
- Directed all ad traffic to optimized pages and landing experiences with clear CTAs, tightly matching ad copy to user intent to improve relevance and reduce wasted spend.

**Continuous Optimization During the First Month**
- Monitored search terms, bids, and ad extensions daily to pause irrelevant queries and double down on the keywords that generated calls and form leads.
- Used early performance data (impressions, click-through rate, average position, and conversion events) to refine targeting and ad creatives for better cost-per-conversion over the month.`,
    results: [
      '12 new patient conversions in first 30 days from paid campaigns',
      'Growth in total search impressions with over 18K impressions',
      'Over 1,000 keywords the site was appearing for in search results',
      'Key treatment pages ranking on page one or significantly improved positions',
      'Pages for dental bridges, gum disease treatments, Invisalign, and implant-supported dentures emerged as "winning posts"',
      'Transparent and measurable marketing process for Dr. Pratik Patel',
    ],
    metrics: [
      {
        label: 'New Patients',
        value: '12',
        description: 'In first 30 days',
      },
      {
        label: 'Search Impressions',
        value: '18K+',
        description: 'Monthly visibility',
      },
      {
        label: 'Ranking Keywords',
        value: '1,000+',
        description: 'Search appearance',
      },
      {
        label: 'Campaign Duration',
        value: '1 Month',
        description: 'Initial optimization period',
      },
    ],
    technologies: [
      'Google Ads',
      'Google Analytics',
      'Call Tracking',
      'Form Tracking',
      'Local SEO',
      'Schema Markup',
    ],
    image: '/case-studies/westondental4.png',
    galleryImages: [
      '/case-studies/westondental1.png',
      '/case-studies/westondental2.png',
    ],
    testimonial: {
      quote: 'The combination of a clearer website experience, stronger local SEO, and a tightly targeted ad strategy helped us attract more families and cosmetic dentistry patients from Weston and nearby communities, building a sustainable pipeline of new patients.',
      author: 'Dr. Pratik Patel',
      position: 'D.M.D., Owner',
      company: 'Weston Family Dental Florida',
    },
    projectDuration: '1 month',
    projectUrl: 'https://westonfamilydentalflorida.com',
    publishedDate: '2026-01-01',
    featured: true,
    seoKeywords: [
      'dental website development USA',
      'dentist website design Weston FL',
      'dental practice Google Ads',
      'dentist SEO Weston',
      'family dentist digital marketing',
      'Invisalign marketing Weston FL',
    ],
  },
   // GENERAL/TRAVEL CASE STUDIES
   {
    id: 'blue-escape-holidays-travel-platform',
    slug: 'blue-escape-holidays-travel-platform',
    title: 'Blue Escape Holidays: Premium Travel Platform Showcasing Full-Stack Excellence',
    client: 'Blue Escape Holidays',
    industry: 'general',
    excerpt: 'Experience-first travel website with cinematic UX and high-performance architecture, demonstrating best-in-class tourism web development for USA market.',
    challenge: `The new Blue Escape Holidays platform was planned as both a flagship travel brand website and a showcase of premium full-stack web development for the tours and travels industry. The approach needed to combine brand storytelling, UX research, front-end performance, and scalable architecture suitable for USA-facing campaigns.

Key requirements included:

- Create an experience-first information architecture for luxury travel
- Design modern UI/UX that communicates luxury and trust
- Build high-performance full-stack platform optimized for Core Web Vitals
- Position for USA market while serving global travelers
- Showcase capabilities for future travel tech clients
- Enable clear conversion paths from inspiration to enquiry`,
    solution: `beFound developed a comprehensive travel platform demonstrating modern web development excellence:

**Experience-First Information Architecture**
- Structured site around clear travel categories: luxury holidays, family trips, romantic getaways, adventure tours, international escapes, curated experiences, and bespoke packages
- Created dedicated Experiences pages with destination highlights, themes, travel styles, and strong CTAs
- Intuitive navigation paths from homepage to enquiry matching modern USA travel customer browsing patterns

**Modern UI and UX for Travel**
- Minimal, cinematic interface with full-width hero imagery
- Clean typography and smooth scrolling
- Luxury and trust-focused design for online travel research
- Clear enquiry and contact touchpoints across all pages
- Multiple conversion points for quotes and trip planning

**Full-Stack Development & Performance**
- Modern full-stack architecture optimized for speed and Core Web Vitals
- High desktop performance scores in PageSpeed Insights
- Strong accessibility, best practices, and SEO indicators
- Scalable foundation ready for dynamic tour listings, availability calendars, user accounts, payment gateways, and booking logic

**SEO & USA-Focused Positioning**
- Optimized titles, meta descriptions, headings, and content for luxury travel keywords
- Targeted bespoke holiday packages, international tours, and premium travel website development
- Positioned as premium Indian travel brand serving global travelers
- Portfolio showcase for USA agencies and tour operators seeking custom travel portals`,
    results: [
      'Visually rich, performance-optimized travel site with green-zone desktop scores',
      'Strong accessibility, best practices, and SEO scores across all metrics',
      'Experience-driven navigation showcasing luxury escapes and curated experiences',
      'Clear conversion paths making it easy for users to discover trips and submit enquiries',
      'Benchmark-quality example for USA travel agencies, tour operators, DMCs, and OTAs',
      'Scalable platform ready for booking engine integration and advanced features',
    ],
    metrics: [
      {
        label: 'Performance Score',
        value: '99',
        description: 'PageSpeed desktop metrics',
      },
      {
        label: 'Experience Categories',
        value: '7+',
        description: 'Travel journey types',
      },
      {
        label: 'UX Approach',
        value: 'Cinematic',
        description: 'Modern luxury design',
      },
      {
        label: 'Target Market',
        value: 'Global',
        description: 'USA & international',
      },
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'SEO Optimization',
      'Core Web Vitals',
      'Performance Optimization',
    ],
    image: '/case-studies/blueescape1.png',
    galleryImages: [
      '/case-studies/blueescape2.png',
      '/case-studies/blueescape1.png'
    ],
    testimonial: {
      quote: 'beFound delivered a world-class travel platform that positions us as a premium brand while showcasing what modern travel website development should look like. The combination of stunning design, fast performance, and clear user journeys has elevated our digital presence.',
      author: 'Travel Director',
      position: 'Founder',
      company: 'Blue Escape Holidays',
    },
    projectDuration: '12 weeks',
    projectUrl: 'https://blueescapeholidays.com',
    publishedDate: '2025-12-15',
    featured: true,
    seoKeywords: [
      'travel website development',
      'luxury travel web design',
      'tours and travels website',
      'full-stack travel portal',
      'tourism website development USA',
      'booking engine integration',
    ],
  },
  // general case studies
  // REAL ESTATE & PROPERTY SERVICES CASE STUDIES
{
  id: 'kiazen-interiors-real-estate-digital-showcase',
  slug: 'kiazen-interiors-real-estate-digital-showcase',
  title: 'High-Performance Interior Design Website Elevates Real Estate Presence',
  client: 'Kiazen Interiors',
  industry: 'real-estate',
  excerpt:
    'How a high-end interior design and property services website with exceptional performance scores became a powerful digital showroom for real estate-inspired spaces and premium clients.',
  challenge: `Kiazen Interiors is a design-focused studio that transforms residential and commercial spaces into refined, timeless environments, positioning itself as a premium partner for interior design and property enhancement.[web:61][web:70] The brand needed a digital presence that could sit confidently alongside real estate developers, architects, and high-end property services firms, while clearly communicating its craftsmanship and aesthetic direction.

Before the redesign, the online experience did not fully reflect the studio’s modern, architectural visual language or the value it brought to real estate projects, landlords, and homeowners. Key issues included:

- A lack of a cohesive digital narrative for premium interior design, home remodeling, and property styling services, which made it harder to connect with higher-value real estate clients in competitive markets.[web:61][web:73]
- Limited focus on performance and Core Web Vitals, which are increasingly important for both user experience and basic search visibility in property and interiors niches.
- No single, refined “hero” experience to showcase signature projects, mood, and design philosophy in a way that mirrors high-end real estate and architecture brands.
- Minimal SEO structure and metadata, which restricted discoverability for foundational queries such as “interior designer”, “home remodel”, “interior design studio”, and “property interiors” in the target regions.[web:67][web:73]
- A need for a design and development approach that treats the site like a digital brochure for real estate and interior projects, with room to grow into a more content-rich platform later without sacrificing performance.

Kiazen Interiors wanted a design- and development-centric solution: an ultra-smooth, visually minimalist website with outstanding performance, essential SEO, and a layout that instantly communicates premium interior and property services to prospective clients.`,
  solution: `beFound designed and developed a fast, modern, and architecture-inspired website that positions Kiazen Interiors as a premium partner for real estate, interior design, and property renovation projects.[web:61][web:73] The build focused on performance, visual storytelling, and basic SEO foundations that support future growth.

**Minimal, Architecture-Led UI Design**
- Crafted a clean, gallery-style homepage featuring the core message “Transforming spaces into timeless experiences,” aligning the brand with high-end real estate and interior architecture studios.[web:61]
- Used strong negative space, soft typography, and cinematic imagery to make each project feel like a high-value property listing or interior feature spread.
- Structured the layout so hero sections, service highlights, and selected portfolio items act like a curated digital showroom for residential and commercial spaces, appealing to property developers, homeowners, and real estate investors.

**Experience-Driven UX for Property & Interiors**
- Organised content around clear journeys: learn about the studio, explore services, review selected projects, and get in touch for consultations or project enquiries.[web:61][web:73]
- Simplified navigation and page structure so visitors can quickly understand key offerings—interior design, remodels, space planning, and styling—without friction.
- Ensured the contact and enquiry paths are always accessible, turning the site into a streamlined lead-generation touchpoint for interior-focused real estate projects.

**High-Performance Front-End Engineering**
- Engineered the website to achieve exceptional PageSpeed scores, including near-perfect performance and strong best-practice and SEO indicators on desktop, demonstrating the studio’s commitment to speed and technical excellence.[file:59]
- Implemented lightweight, component-based front-end architecture with optimised assets, lazy loading, and responsive layouts to keep experiences smooth across devices.
- Balanced rich visuals with strict performance budgets so the site feels premium while loading almost instantly, a key differentiator for design and property brands.

**Basic SEO & Real-Estate-Friendly Structure**
- Added structured headings, descriptive copy, and clean URL patterns to support foundational SEO around interior design, home and office remodels, and property interiors.[web:61][web:73]
- Wrote concise, keyword-informed page titles and meta descriptions focused on “interior design studio”, “home & office remodel”, and “interior design for real estate and property services,” laying groundwork without a heavy content strategy.
- Created a flexible content structure so future case studies, project galleries, and blog posts about interiors, real estate styling, and renovations can be added without refactoring the core system.

**Technology Stack for Visual Brands**
- Used a modern front-end stack (e.g., React/Next.js with TypeScript and Tailwind-style utility classes) to support component reuse, rapid iteration, and long-term maintainability.
- Prepared the codebase for future integrations such as contact forms connected to CRMs, analytics events, and lead-tracking for real-estate-focused campaigns.`,
  results: [
    'Ultra-fast website with desktop performance scores in the high 90s, paired with strong best-practice and SEO indicators, showcasing technical excellence for a visual brand.[file:59]',
    'A minimalist, real-estate-ready digital showroom that positions Kiazen Interiors as a premium partner for property developers, homeowners, and commercial clients seeking high-end interiors.[web:61][web:73]',
    'Clear, distraction-free UX that guides visitors from brand story to services and contact, improving the likelihood that qualified leads will enquire about interior and property projects.',
    'A scalable design and development foundation ready for future content, case studies, and SEO growth without compromising load speed or visual quality.',
    'A portfolio-worthy example of real-estate and interior-design web development that can attract new website design and development leads for similar property and interiors brands.'
  ],
  metrics: [
    {
      label: 'Desktop Performance',
      value: '99',
      description: 'PageSpeed Insights performance score on desktop for the main experience page.[file:59]'
    },
    {
      label: 'Best Practices',
      value: '96',
      description: 'High adherence to modern web standards and performance best practices.[file:59]'
    },
    {
      label: 'SEO Score',
      value: '100',
      description: 'PageSpeed SEO indicator reflecting strong basic technical SEO and structure.[file:59]'
    },
    {
      label: 'Experience Focus',
      value: 'Design-Led',
      description: 'Website crafted as a digital showroom for interior and real estate projects rather than a content-heavy portal.[web:61]'
    }
  ],
  technologies: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Responsive Web Design',
    'Core Web Vitals Optimization',
    'On-page SEO Basics'
  ],
  image: '/case-studies/kaizen3.png',
  galleryImages: [
    '/case-studies/kaizen1.png',
    '/case-studies/kaizen2.png'
  ],
  testimonial: {
    quote:
      'Our new website finally mirrors the quality of our interior projects. The experience is incredibly fast and refined, and clients frequently mention how easy it is to understand our work.',
    author: 'Kiazen Interiors Team',
    position: 'Principal Designers',
    company: 'Kiazen Interiors'
  },
  projectDuration: '6 weeks',
  publishedDate: '2025-12-20',
  featured: true,
  seoKeywords: [
    'interior design website development',
    'real estate and property services web design',
    'high performance interior design website',
    'Core Web Vitals optimised real estate site',
    'interior designer website design and development',
    'property showcase website development',
    'fast SEO-friendly interior design website',
    'modern real estate web development',
    'responsive interior design portfolio site',
    'minimalist architecture website design'
  ]
},
//restaurant case studies
{
  id: '3-tigers-restaurant-website-auckland',
  slug: '3-tigers-restaurant-website-auckland',
  title: '3 Tigers Thai Restaurant Wins With High-Converting Website Design',
  client: '3 Tigers Thai Restaurant & Bar',
  industry: 'restaurant',
  excerpt:
    'How a modern restaurant website design for 3 Tigers in Ponsonby, Auckland turned more hungry visitors into table bookings and takeaway orders with a fast, mobile-first experience.',
  challenge: `3 Tigers Thai Restaurant & Bar in Ponsonby, Auckland is known for its authentic Thai cuisine, colourful ambience, and friendly service, attracting locals and visitors looking for a memorable dining experience. However, their digital presence did not match the in-restaurant experience or support their growth goals for reservations and online orders.

Before the redesign, the restaurant faced several website and UX challenges:

- A basic online presence that did not fully reflect the energetic brand, bar atmosphere, or premium Thai dining experience in Ponsonby.
- Limited focus on user experience for people browsing on mobile while searching “Thai restaurant Ponsonby”, “Thai restaurant Auckland”, or “best Thai food near me”.
- Difficult navigation for users who wanted to quickly see the food menu, view opening hours, find the address, or call the restaurant.
- No clear, conversion-focused paths for key actions like booking a table, viewing the banquet menu, or ordering takeaway online.
- Inconsistent visual hierarchy, making it harder to highlight signature dishes, reviews, and the unique ambiance that sets 3 Tigers apart.
- A need for a website that could be used as a strong digital brand asset for listings on platforms like First Table, Quandoo, and other restaurant discovery sites, while still keeping the primary experience on their own domain.

The owners wanted a modern restaurant website design and development solution focused on branding, UX, and conversions—without a separate SEO retainer—so they could stand out among Auckland restaurants and better serve customers who discover them online.`,
  solution: `beFound delivered a design-led, development-centric restaurant website project built to showcase 3 Tigers as one of the best Thai restaurants in Auckland while driving bookings and enquiries from day one.

**Brand-First Restaurant Web Design**
- Crafted a bold, colour-rich UI inspired by Bangkok street-food energy and Ponsonby nightlife, aligning digital design with the in-restaurant experience.
- Used large hero sections, high-quality food imagery, and strong typography to make the site feel like a premium Thai restaurant, cafe, and bar destination in central Auckland.
- Highlighted reputation cues such as “Best choice for restaurant, cafe, bar & more” and social proof from reviews and partner platforms to increase trust for new visitors.

**UX-Centred Information Architecture**
- Structured the site around clear restaurant user journeys: discover the story, browse menus, book a table, contact the restaurant, and explore specials or banquets.
- Simplified navigation so key actions like “Menu”, “Banquet”, “Takeaway”, and “Contact” are always one or two clicks away, reducing friction for hungry users on mobile.
- Designed responsive layouts that keep address, opening hours, phone number, and contact links prominent for diners searching “Thai restaurant in Grey Lynn / Ponsonby, Auckland”.

**Menu & Experience Visualisation**
- Built dedicated menu pages for takeaway, banquet, and in-house dining that are easy to skim on phones, helping users quickly spot favourites like curries, noodles, and small plates.
- Added visual hierarchy for categories (starters, mains, vegetarian, chef specials, drinks) so the menu feels like an extension of the physical restaurant experience.
- Created space for rich descriptions and pricing so the website can support both dine-in and takeaway decision-making without overwhelming the user.

**Conversion-Focused Restaurant Flows**
- Integrated clear calls-to-action for table bookings, phone reservations, and third-party ordering/booking partners such as First Table, Quandoo, or other platforms the restaurant uses.
- Optimised the contact page with a clean map, address, phone number, and email, making it easy for guests to get directions or call directly from mobile.
- Ensured all primary CTAs—Book Now, Call Now, View Menu, Order Takeaway—are visually consistent and strategically placed across the site.

**Performance-Optimised Frontend Development**
- Developed the restaurant website using a modern, lightweight front-end stack focused on fast load times and smooth interactions, ideal for users on mobile networks.
- Implemented best practices for images, caching, and responsive components to maintain strong performance and usability without compromising on design richness.
- Built the codebase to be easily extendable, so future enhancements like online ordering, loyalty programmes, or table-management integrations can be added without a full rebuild.

**Restaurant Marketing & Lead-Ready Foundation**
- Structured pages and components so the site can easily support future digital marketing campaigns, social media promotions, and Google Ads aimed at “restaurant website design”, “restaurant web development”, and “Thai restaurant Ponsonby bookings”.
- Positioned the project as a showcase example for restaurant owners in Auckland, New Zealand and international leads (especially in the USA, UK, and Australia) who are searching for full-stack restaurant website design, bar website development, and online menu/booking UX solutions.`,
  results: [
    'Modern restaurant website that visually matches the 3 Tigers Thai Restaurant & Bar experience in Ponsonby, Auckland.',
    'Mobile-first UX that makes it easier for diners to find the menu, call the restaurant, and get directions within a few taps.',
    'Clear pathways for bookings and enquiries, supporting higher conversion rates from social media, listings, and word-of-mouth traffic.',
    'Stronger digital brand presence that can be leveraged in restaurant directories and partner platforms to attract new customers.',
    'Future-ready front-end architecture prepared for integrations like online ordering, reservation widgets, loyalty systems, and marketing tracking.'
  ],
  metrics: [
    {
      label: 'Primary Focus',
      value: 'Design & UX',
      description: 'Conversion-focused restaurant website design and development for 3 Tigers in Ponsonby, Auckland.'
    },
    {
      label: 'Mobile Experience',
      value: 'Optimised',
      description: 'Navigation, menus, and CTAs tailored for diners browsing on mobile devices.'
    },
    {
      label: 'Conversion Paths',
      value: 'Book • Call • Order',
      description: 'Multiple clear actions for reservations, takeaway, and enquiries across the site.'
    },
    {
      label: 'Scalability',
      value: 'Future-Ready',
      description: 'Frontend built to support future SEO, online ordering, and marketing integrations.'
    }
  ],
  technologies: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Responsive Web Design',
    'Restaurant Menu Components',
    'Booking & CTA Integration Ready'
  ],
  image: '/case-studies/3tigers1.png',
  galleryImages: [
    '/case-studies/3tigers2.png',
    '/case-studies/3tigers1.png'
  ],
  testimonial: {
    quote:
      'The new website finally captures what 3 Tigers feels like in real life. Guests can see our menu, find us on Ponsonby Road, and book or call in seconds.',
    author: '3 Tigers Management Team',
    position: 'Owners',
    company: '3 Tigers Thai Restaurant & Bar, Ponsonby, Auckland'
  },
  projectDuration: '6 weeks',
  projectUrl: 'https://3tigers.co.nz',
  publishedDate: '2025-12-10',
  featured: true,
  seoKeywords: [
    'restaurant website design Auckland',
    'restaurant website development New Zealand',
    'Thai restaurant website design',
    'Ponsonby restaurant web design',
    'Auckland restaurant web development',
    'bar and restaurant website design',
    'online menu website development',
    'restaurant UX and UI design',
    'full-stack restaurant website services',
    'booking-focused restaurant website',
    'responsive restaurant website design',
    'best restaurant website design agency'
  ]
},
// DESIGN & CUSTOM THEME CASE STUDIES
{
  id: 'muse-and-masterpiece-custom-theme-art-gallery',
  slug: 'muse-and-masterpiece-custom-theme-art-gallery',
  title: 'Custom Art Gallery Theme Brings Timeless Masterpieces Online',
  client: 'Muse & Masterpiece Studio',
  industry: 'general',
  excerpt:
    'How a fully custom theme and high-performance art gallery website helped Muse & Masterpiece present murals, sculptures, and site-specific art as a premium digital experience.',
  challenge: `Muse & Masterpiece Studio is an Indian art studio specialising in murals, sculptures, and site-specific artworks that bring heritage-inspired stories into contemporary spaces.[web:77][web:90] The brand needed a website that could function as a timeless digital gallery, showcasing artworks as “timeless masterpieces” while making it effortless for collectors, architects, interior designers, and brands to enquire and commission new work.[web:77]

Their previous online presence did not fully express the experience of walking through a curated gallery space and lacked the visual drama required for a high-end art and decor brand. Core challenges included:

- Off-the-shelf themes and generic layouts that could not convey the studio’s distinct identity, narrative tone, or luxury positioning in the art and interiors market.
- Limited control over how artworks, collections, and site-specific installations were presented, especially on mobile screens where most visitors browse and discover new artists.[web:77][web:90]
- No custom interaction design or storytelling flow to guide visitors from hero artwork to collections, about story, and enquiry—critical for higher-ticket commissions.
- Missing or inconsistent technical foundations for performance, accessibility, and basic SEO, making it harder for search engines and social platforms to surface the brand.
- A need for a design-and-development-centric solution rather than an SEO-heavy content strategy: a custom theme that could be used as a flagship example of bespoke art gallery web design and custom front-end engineering.`,

  solution: `beFound designed and built a fully custom front-end theme and gallery experience for Muse & Masterpiece, focused on immersive storytelling, strong brand presence, and best-practice performance.[web:77]

**Bespoke Art Gallery Visual System**
- Created a dark, cinematic interface with gold accents and high-contrast typography to echo the feeling of a physical gallery with spot-lit artworks and premium framing.[web:77]
- Designed a typography system and layout grid that let hero pieces dominate the screen while supporting detailed captions, collection titles, and artist statements.
- Used layered imagery, subtle motion, and considered spacing to frame each work as a “timeless masterpiece,” aligning digital perception with the studio’s positioning.

**Custom Theme & Interaction Design**
- Built a custom theme from scratch instead of relying on generic templates, giving complete control over page composition, animation timing, and responsive breakpoints.
- Designed flexible content sections for hero banners, featured collections, project galleries, and story segments so the studio can curate exhibits, series, and campaigns over time.[web:77]
- Implemented micro-interactions—hover states, smooth scrolling, and carefully tuned transitions—that enhance perceived quality without distracting from the art itself.

**Gallery & Collection Experience**
- Structured the site around core journeys: explore hero collection, browse artworks and installations, understand the studio’s philosophy, and contact for commissions or collaborations.[web:77][web:90]
- Built responsive gallery layouts that adapt elegantly from large desktop screens to narrow mobile viewports, ensuring artworks always feel centred and respected.
- Added clear enquiry pathways from artwork and collection views so interested visitors can move from inspiration to action with minimal friction.

**Performance-First Front-End Engineering**
- Optimised assets, loading strategies, and code-splitting to achieve strong PageSpeed scores: high-90s performance on desktop and solid scores on mobile, with 100/100 ratings in Best Practices and SEO.[file:75][file:76]
- Used responsive images, lazy loading, and efficient animations so the experience remains smooth even on slower devices and networks.
- Followed accessibility best practices (e.g., colour contrast, focus states, semantic structure), reflected in excellent accessibility scores, broadening the site’s reach.[file:75][file:76]

**Basic SEO & Shareability**
- Implemented foundational SEO: descriptive meta titles and descriptions, structured headings, alt text for key visuals, and clean URLs for core pages.[web:77]
- Ensured that hero sections, copy, and metadata highlight important discovery terms such as “art studio,” “murals,” “sculptures,” “custom art installations,” and “heritage-inspired art,” supporting organic and social discovery without a heavy blog layer.[web:77][web:90]
- Configured Open Graph and social sharing defaults so shared links on platforms like Instagram, WhatsApp, and email display rich previews that match the brand aesthetic.`,

  results: [
    'High-impact custom theme that differentiates Muse & Masterpiece from template-based portfolio sites and positions the studio as a premium art and installation partner.[web:77]',
    'Strong performance profile with mobile scores around the high 70s for performance and 98+ for accessibility, and desktop scores in the mid-90s with 100/100 for Best Practices and SEO.[file:75][file:76]',
    'Immersive gallery and storytelling flow that guides visitors from hero artworks to collections, brand narrative, and commission enquiries, improving lead quality for custom projects.[web:77][web:90]',
    'Flexible, future-ready codebase that can scale into a richer commerce or catalogue experience without sacrificing speed or visual consistency.',
    'Portfolio-grade example of custom theme design and front-end development for art galleries, studios, and creative brands seeking high-conversion, high-performance websites.'
  ],

  metrics: [
    {
      label: 'Desktop Performance',
      value: '96',
      description: 'PageSpeed Insights desktop performance score for the main experience page.[file:76]'
    },
    {
      label: 'Mobile Accessibility',
      value: '98',
      description: 'Mobile accessibility score, reflecting strong adherence to inclusive design principles.[file:75]'
    },
    {
      label: 'Best Practices & SEO',
      value: '100 / 100',
      description: 'Perfect PageSpeed scores for Best Practices and SEO on both mobile and desktop.[file:75][file:76]'
    },
    {
      label: 'Theme Type',
      value: 'Fully Custom',
      description: 'Bespoke design system and theme tailored specifically for Muse & Masterpiece’s art gallery brand.[web:77]'
    }
  ],

  technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Responsive Web Design',
    'Core Web Vitals Optimization',
    'On-page SEO Basics'
  ],

  image: '/case-studies/musemasterpiece5.png',
  galleryImages: [
    '/case-studies/musemasterpiece2.png',
    '/case-studies/musemasterpiece3.png',
    '/case-studies/musemasterpiece1.png'
  ],

  testimonial: {
    quote:
      'Our website now feels like a real gallery—dark, dramatic, and unforgettable. Collectors and collaborators immediately understand the kind of work we do and how seriously we take our craft.',
    author: 'Muse & Masterpiece Studio',
    position: 'Founding Artist Team',
    company: 'Muse & Masterpiece'
  },
  projectUrl: 'https://www.museandmasterpiece.in/',
  projectDuration: '7 weeks',
  publishedDate: '2026-01-05',
  featured: true,
  seoKeywords: [
    'custom theme development for art gallery',
    'Next.js art portfolio website',
    'high performance creative studio website',
    'bespoke WordPress alternative theme',
    'design-focused front-end development',
    'Core Web Vitals optimised custom theme',
    'art studio website design and development',
    'murals and sculptures portfolio site',
    'custom gallery UX and UI design',
    'SEO-friendly custom art website'
  ]
},
  // AGENCY & MARKETING CASE STUDIES
  {
    id: 'crazy-virality-content-marketing-platform',
    slug: 'crazy-virality-content-marketing-platform',
    title: 'Content-Heavy Marketing Agency Site Achieves 99 Performance Score',
    client: 'Crazy Virality',
    industry: 'agency',
    excerpt: 'How a content-rich digital marketing agency website with hundreds of pages maintains exceptional performance, SEO, and user experience through expert optimization.',
    challenge: `Crazy Virality is a full-service digital marketing agency offering expertise across SEO, content marketing, social media, PPC, web design, and more. As the agency grew, so did their content library—with comprehensive service pages, detailed guides, case studies, blog posts, and resource sections spanning hundreds of URLs.

The challenge was building a content-heavy website that could:

- Support a massive content architecture with multiple service categories, location pages, industry-specific offerings, and educational resources without sacrificing performance.
- Maintain fast load times and excellent Core Web Vitals despite heavy text content, embedded media, forms, and third-party integrations (analytics, chat widgets, marketing pixels).
- Achieve strong SEO rankings for competitive digital marketing keywords while ensuring every page was crawlable, indexable, and optimized for search engines.
- Provide an intuitive user experience that helps visitors navigate complex service offerings, find relevant case studies, and convert into qualified leads.
- Scale efficiently as new content, services, and landing pages are added regularly for campaigns, SEO initiatives, and client showcases.

Many content-heavy sites struggle with performance degradation, poor mobile experiences, and technical SEO issues as they scale. Crazy Virality needed a technical foundation that proved content volume and performance excellence are not mutually exclusive.`,
    solution: `beFound engineered a high-performance, content-centric platform for Crazy Virality that demonstrates best-in-class optimization for large-scale marketing websites.

**Performance-First Architecture**
- Implemented advanced code splitting and lazy loading to ensure only necessary resources load on each page, keeping initial load times minimal despite hundreds of pages.
- Optimized all images with next-gen formats (WebP/AVIF), responsive sizing, and lazy loading to reduce bandwidth usage without compromising visual quality.
- Utilized efficient caching strategies, CDN distribution, and asset compression to achieve sub-2-second load times across the entire site.
- Built with performance budgets and monitoring to ensure new content additions don't degrade speed metrics.

**Scalable Content Management System**
- Developed a flexible, component-based architecture that supports diverse content types: service pages, case studies, blog posts, resource guides, landing pages, and location-specific content.
- Created reusable content modules and templates that maintain consistency while allowing for customization across different page types and campaigns.
- Implemented smart pagination, infinite scroll, and content filtering systems that handle large article libraries without overwhelming users or search engines.

**Technical SEO Excellence**
- Structured site architecture with clear hierarchies, logical URL patterns, and comprehensive internal linking to maximize crawl efficiency and page authority distribution.
- Implemented schema markup across all page types (Organization, Service, Article, BreadcrumbList, FAQPage) to enhance search visibility and rich snippet eligibility.
- Optimized meta titles, descriptions, and headers for hundreds of pages targeting competitive digital marketing and agency keywords.
- Built XML sitemaps, robots.txt optimization, and canonical tag management to guide search engine crawlers through the extensive content library.

**User Experience & Conversion Optimization**
- Designed intuitive mega-navigation and search functionality to help visitors quickly find relevant services, case studies, and resources.
- Created clear conversion paths with strategically placed CTAs, contact forms, and consultation booking options throughout the content experience.
- Ensured mobile-first responsive design so content remains readable and actionable across all device sizes.
- Implemented breadcrumb navigation and related content suggestions to reduce bounce rates and increase time on site.

**Content Delivery & Analytics**
- Integrated advanced analytics tracking to measure content performance, user journeys, and conversion attribution across the complex funnel.
- Set up A/B testing infrastructure for landing pages and CTA variations to continuously optimize conversion rates.
- Connected marketing automation and CRM systems to capture and nurture leads generated through content engagement.`,
    results: [
      'Achieved PageSpeed Insights desktop performance score of 99 despite content-heavy architecture',
      'Maintained strong mobile performance scores while serving hundreds of optimized pages',
      'Excellent SEO metrics with 100/100 technical SEO score, supporting rankings for competitive digital marketing keywords',
      'Seamless user experience that handles complex service navigation and content discovery without overwhelming visitors',
      'Scalable platform that accommodates continuous content growth and campaign landing pages without performance degradation',
      'Showcase example demonstrating that content volume and technical excellence can coexist with proper optimization',
    ],
    metrics: [
      {
        label: 'Performance Score',
        value: '99',
        description: 'PageSpeed Insights desktop performance despite content-heavy architecture',
      },
      {
        label: 'SEO Score',
        value: '100',
        description: 'Perfect technical SEO implementation across all pages',
      },
      {
        label: 'Content Scale',
        value: '100+',
        description: 'Pages optimized for performance and search visibility',
      },
      {
        label: 'Load Time',
        value: '<2s',
        description: 'Average page load time across site despite content volume',
      },
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Content Management System',
      'Image Optimization',
      'Code Splitting & Lazy Loading',
      'Schema Markup',
      'Technical SEO',
      'Core Web Vitals Optimization',
      'Analytics & Conversion Tracking',
    ],
    image: '/case-studies/crazy1.png',
    galleryImages: [
      '/case-studies/crazy2.png',
      '/case-studies/crazy1.png'
    ],
    testimonial: {
      quote: 'Our website needed to showcase our expertise across multiple services while maintaining the speed and performance we promise our clients. The technical implementation proves that content-rich sites can still deliver exceptional user experiences.',
      author: 'Crazy Virality Team',
      position: 'Digital Marketing Agency',
      company: 'Crazy Virality',
    },
    projectDuration: '10 weeks',
    projectUrl: 'https://www.crazyvirality.com',
    publishedDate: '2026-01-07',
    featured: true,
    seoKeywords: [
      'digital marketing agency website development',
      'high-performance content-heavy website',
      'SEO-optimized marketing agency site',
      'scalable agency website architecture',
      'content marketing platform development',
      'performance-optimized marketing site',
      'agency portfolio website design',
      'technical SEO implementation',
      'Core Web Vitals optimization for content sites',
      'marketing agency web development',
    ],
  },
];

// Helper functions
export const getFeaturedCaseStudies = () => caseStudies.filter((study) => study.featured);

export const getCaseStudiesByIndustry = (industry: CaseStudy['industry']) =>
  caseStudies.filter((study) => study.industry === industry);

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);

export const getRelatedCaseStudies = (currentStudy: CaseStudy, limit = 2) => {
  return caseStudies
    .filter((study) => study.id !== currentStudy.id && study.industry === currentStudy.industry)
    .slice(0, limit);
};
