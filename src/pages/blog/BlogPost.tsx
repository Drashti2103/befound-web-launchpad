import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO, getArticleSchema, getBreadcrumbSchema } from '../../components/common/SEO';
import { BlogCard } from '../../components/blog/BlogCard';
import { getPostBySlug, getRelatedPosts } from '../../data/blogPosts';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ScrollToTop from '../../components/layout/ScrollToTop';

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post);

  const shareUrl = `https://befound.com/blog/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    email: `mailto:?subject=${shareTitle}&body=Check out this article: ${shareUrl}`,
  };

  const categoryColors = {
    'real-estate': 'bg-blue-100 text-blue-800',
    dental: 'bg-green-100 text-green-800',
    restaurant: 'bg-orange-100 text-orange-800',
    general: 'bg-gray-100 text-gray-800',
    technology: 'bg-purple-100 text-purple-800',
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://befound.com/' },
    { name: 'Blog', url: 'https://befound.com/blog' },
    { name: post.title, url: `https://befound.com/blog/${post.slug}` },
  ]);

  const articleSchema = getArticleSchema({
    headline: post.title,
    description: post.excerpt,
    image: `https://befound.com${post.image}`,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate || post.publishedDate,
    author: post.author,
    url: `https://befound.com/blog/${post.slug}`,
  });

  return (
    <div className="min-h-screen">
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.seoKeywords.join(', ')}
        canonicalUrl={`https://befound.com/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
        articleData={{
          publishedTime: post.publishedDate,
          modifiedTime: post.modifiedDate,
          author: post.author,
          section: post.category,
          tags: post.tags,
        }}
        structuredData={[breadcrumbSchema, articleSchema]}
      />
      <Navbar />
      <ScrollToTop />

      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 md:h-96 bg-gray-900 mt-20">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-80"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Back Button Overlay */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 hover:text-befoundOrange transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Back to Blog"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 -mt-16 sm:-mt-24 md:-mt-32 relative z-10 max-w-4xl">
        <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 md:p-12">
          {/* Category Badge */}
          <Badge className={`mb-4 ${categoryColors[post.category]}`}>
            {post.category.replace('-', ' ').toUpperCase()}
          </Badge>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b">
            <span className="text-gray-600 font-semibold flex items-center gap-2">
              <Share2 className="w-5 h-5" />
              Share:
            </span>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 text-white flex items-center justify-center transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={shareLinks.email}
              className="w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
              aria-label="Share via Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-semibold">{post.excerpt}</p>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {(() => {
              const lines = post.content.split('\n');
              const elements: JSX.Element[] = [];
              let listItems: string[] = [];
              let listStartIndex = -1;

              const flushList = (currentIndex: number) => {
                if (listItems.length > 0) {
                  elements.push(
                    <ul key={`list-${listStartIndex}`} className="list-disc list-inside mb-6 space-y-2 ml-4">
                      {listItems.map((item, idx) => {
                        // Parse bold text in list items
                        const parts = item.split(/(\*\*.*?\*\*)/g);
                        return (
                          <li key={idx} className="text-gray-700 leading-relaxed">
                            {parts.map((part, i) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
                              }
                              return part;
                            })}
                          </li>
                        );
                      })}
                    </ul>
                  );
                  listItems = [];
                  listStartIndex = -1;
                }
              };

              const renderTextWithBold = (text: string, key: string | number) => {
                const parts = text.split(/(\*\*.*?\*\*)/g);
                return parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={`${key}-${i}`} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                });
              };

              lines.forEach((line, index) => {
                const trimmed = line.trim();

                // Handle H2 headings with background
                if (trimmed.startsWith('## ')) {
                  flushList(index);
                  const text = trimmed.replace('## ', '');
                  elements.push(
                    <div key={index} className="bg-gradient-to-r from-befoundPurple/5 to-befoundOrange/5 -mx-8 md:-mx-12 px-8 md:px-12 py-6 mt-12 mb-6">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {text}
                      </h2>
                    </div>
                  );
                  return;
                }

                // Handle H3 headings
                if (trimmed.startsWith('### ')) {
                  flushList(index);
                  const text = trimmed.replace('### ', '');
                  elements.push(
                    <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                      {text}
                    </h3>
                  );
                  return;
                }

                // Handle list items
                if (trimmed.startsWith('- ')) {
                  if (listStartIndex === -1) {
                    listStartIndex = index;
                  }
                  listItems.push(trimmed.substring(2));
                  return;
                }

                // If not a list item and we have pending list items, flush them
                if (listItems.length > 0) {
                  flushList(index);
                }

                // Handle paragraphs with bold text
                if (trimmed && !trimmed.startsWith('#')) {
                  // Check if paragraph starts with bold
                  if (trimmed.startsWith('**')) {
                    elements.push(
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed text-lg">
                        {renderTextWithBold(trimmed, index)}
                      </p>
                    );
                  } else {
                    elements.push(
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                        {renderTextWithBold(trimmed, index)}
                      </p>
                    );
                  }
                  return;
                }
              });

              // Flush any remaining list items
              flushList(lines.length);

              return elements;
            })()}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-semibold mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-gradient-to-br from-befoundPurple/10 to-befoundOrange/10 rounded-lg p-8 my-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-befoundOrange to-befoundPurple flex items-center justify-center text-white text-2xl font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold">Written by {post.author}</h3>
              <p className="text-gray-600">beFound Team</p>
            </div>
          </div>
          <p className="text-gray-700">
            Our team of expert developers, designers, and digital strategists share insights on web
            development, digital marketing, and industry-specific solutions to help businesses thrive online.
          </p>
        </div>

        {/* CTA Section */}
      </article>

      <div className="relative bg-gradient-to-r from-befoundPurple via-[#1a0a2a] to-black overflow-hidden py-16 md:py-24">
          {/* Dotted SVGs for corners */}
          <svg className="absolute left-0 top-0 w-32 md:w-64 h-32 md:h-64 opacity-30" viewBox="0 0 200 200" fill="none">
            <defs>
              <pattern id="dots-blog" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#fff" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#dots-blog)" />
          </svg>
          <svg className="absolute right-0 bottom-0 w-32 md:w-64 h-32 md:h-64 opacity-30" viewBox="0 0 200 200" fill="none">
            <defs>
              <pattern id="dots2-blog" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#fff" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#dots2-blog)" />
          </svg>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-newsreader">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get expert web development and digital solutions tailored to your business needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://calendly.com/thebefoundcompany/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-befoundPurple hover:bg-befoundOrange hover:text-white transition-colors duration-300">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
