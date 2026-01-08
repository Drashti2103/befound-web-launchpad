import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  articleData?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  structuredData?: object | object[];
}

export const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  articleData,
  structuredData,
}: SEOProps) => {
  const siteUrl = 'https://befound.com'; // Update with actual domain
  const fullTitle = `${title} | beFound - Software Solutions Company`;
  const fullCanonicalUrl = canonicalUrl || `${siteUrl}${window.location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="beFound" />

      {/* Article specific tags */}
      {ogType === 'article' && articleData && (
        <>
          {articleData.publishedTime && (
            <meta property="article:published_time" content={articleData.publishedTime} />
          )}
          {articleData.modifiedTime && (
            <meta property="article:modified_time" content={articleData.modifiedTime} />
          )}
          {articleData.author && (
            <meta property="article:author" content={articleData.author} />
          )}
          {articleData.section && (
            <meta property="article:section" content={articleData.section} />
          )}
          {articleData.tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:site" content="@befound" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}
    </Helmet>
  );
};

// Helper function to create Organization schema
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'beFound',
  alternateName: 'beFound Software Solutions',
  url: 'https://befound.com',
  logo: 'https://befound.com/logo.png',
  description: 'Innovative software solutions that empower businesses to reach their full potential in the digital landscape',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9016611872',
    contactType: 'customer service',
    email: 'info@befound.com',
    availableLanguage: ['English'],
  },
  sameAs: [
    // Add social media URLs when available
  ],
  foundingDate: '2025',
  slogan: 'Be Seen - Be Heard - Be Found',
});

// Helper function to create Service schema
export const getServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  price?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  provider: {
    '@type': 'Organization',
    name: 'beFound',
  },
  description: service.description,
  url: service.url,
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  ...(service.price && {
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD',
    },
  }),
});

// Helper function to create Article schema
export const getArticleSchema = (article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    '@type': 'Person',
    name: article.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'beFound',
    logo: {
      '@type': 'ImageObject',
      url: 'https://befound.com/logo.png',
    },
  },
  url: article.url,
});

// Helper function to create Breadcrumb schema
export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Helper function to create FAQ schema
export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Helper function to create LocalBusiness schema
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'beFound',
  image: 'https://befound.com/logo.png',
  '@id': 'https://befound.com',
  url: 'https://befound.com',
  telephone: '+91-9016611872',
  priceRange: '$180 - $550+',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0225,
    longitude: 72.5714,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    // Add social media URLs
  ],
});
