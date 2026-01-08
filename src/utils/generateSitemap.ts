import { blogPosts } from '../data/blogPosts';
import { caseStudies } from '../data/caseStudies';

export const generateSitemap = () => {
  const baseUrl = 'https://befound.dev';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/projects', priority: '0.8', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/real-estate', priority: '0.9', changefreq: 'weekly' },
    { url: '/industries/dental', priority: '0.9', changefreq: 'weekly' },
    { url: '/industries/restaurant', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'daily' },
    { url: '/case-studies', priority: '0.8', changefreq: 'weekly' },
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
  ];

  const blogUrls = blogPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    priority: post.featured ? '0.8' : '0.7',
    changefreq: 'monthly',
    lastmod: post.modifiedDate || post.publishedDate,
  }));

  const caseStudyUrls = caseStudies.map((study) => ({
    url: `/case-studies/${study.slug}`,
    priority: study.featured ? '0.8' : '0.7',
    changefreq: 'monthly',
    lastmod: study.publishedDate,
  }));

  const allUrls = [
    ...staticPages.map((page) => ({ ...page, lastmod: currentDate })),
    ...blogUrls,
    ...caseStudyUrls,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${baseUrl}${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
};


