import { useState } from 'react';
import { SEO, getOrganizationSchema, getBreadcrumbSchema } from '../../components/common/SEO';
import { BlogCard } from '../../components/blog/BlogCard';
import { blogPosts, BlogPost, getFeaturedPosts } from '../../data/blogPosts';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ScrollToTop from '../../components/layout/ScrollToTop';
import CTASection from '../../components/home/CTASection';

export const BlogListing = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogPost['category'] | 'all'>('all');

  const categories: Array<{ value: BlogPost['category'] | 'all'; label: string; count: number }> = [
    { value: 'all', label: 'All Posts', count: blogPosts.length },
    {
      value: 'real-estate',
      label: 'Real Estate',
      count: blogPosts.filter((p) => p.category === 'real-estate').length,
    },
    { value: 'dental', label: 'Dental', count: blogPosts.filter((p) => p.category === 'dental').length },
    {
      value: 'restaurant',
      label: 'Restaurant',
      count: blogPosts.filter((p) => p.category === 'restaurant').length,
    },
    {
      value: 'technology',
      label: 'Technology',
      count: blogPosts.filter((p) => p.category === 'technology').length,
    },
    { value: 'general', label: 'General', count: blogPosts.filter((p) => p.category === 'general').length },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    return selectedCategory === 'all' || post.category === selectedCategory;
  });

  const featuredPosts = getFeaturedPosts();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://befound.com/' },
    { name: 'Blog', url: 'https://befound.com/blog' },
  ]);

  const organizationSchema = getOrganizationSchema();

  return (
    <div className="min-h-screen">
      <SEO
        title="Blog - Web Development Insights & Industry Guides"
        description="Expert insights on real estate website development, dental web design, restaurant digital solutions, and modern web development trends. Learn from beFound's team of professionals."
        keywords="web development blog, real estate website tips, dental web design guide, restaurant website development, SEO tips, web design trends"
        canonicalUrl="https://befound.com/blog"
        structuredData={[breadcrumbSchema, organizationSchema]}
      />
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="text-white py-12 sm:py-16 md:py-20 mt-20" style={{ backgroundColor: '#1f0b38' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">beFound Blog</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 px-4">
              Expert insights on web development, digital marketing, and industry-specific solutions
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className={
                  selectedCategory === category.value
                    ? 'bg-befoundOrange hover:bg-befoundOrange/90'
                    : ''
                }
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
            <p className="text-befoundOrange text-sm font-medium uppercase">Blog List</p>
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              {selectedCategory === 'all'
                ? 'Explore Our Latest Insights'
                : `${categories.find((c) => c.value === selectedCategory)?.label} Articles`}
            </h2>
            <p className="text-gray-600 text-xl">
              Expert insights on web development, digital marketing, and industry-specific solutions.
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
              <Button
                onClick={() => setSelectedCategory('all')}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};
