import { useState } from 'react';
import { SEO, getOrganizationSchema, getBreadcrumbSchema } from '../../components/common/SEO';
import { CaseStudyCard } from '../../components/caseStudies/CaseStudyCard';
import { caseStudies, CaseStudy, getFeaturedCaseStudies } from '../../data/caseStudies';
import { Button } from '../../components/ui/button';
import { Briefcase, TrendingUp, Award } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ScrollToTop from '../../components/layout/ScrollToTop';
import CTASection from '../../components/home/CTASection';

export const CaseStudyListing = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<CaseStudy['industry'] | 'all'>('all');

  const industries: Array<{ value: CaseStudy['industry'] | 'all'; label: string; count: number }> = [
    { value: 'all', label: 'All Industries', count: caseStudies.length },
    {
      value: 'real-estate',
      label: 'Real Estate',
      count: caseStudies.filter((s) => s.industry === 'real-estate').length,
    },
    { value: 'dental', label: 'Dental', count: caseStudies.filter((s) => s.industry === 'dental').length },
    {
      value: 'restaurant',
      label: 'Restaurant',
      count: caseStudies.filter((s) => s.industry === 'restaurant').length,
    },
    { value: 'agency', label: 'Agencies', count: caseStudies.filter((s) => s.industry === 'agency').length },
    { value: 'general', label: 'General', count: caseStudies.filter((s) => s.industry === 'general').length },
  ];

  const filteredCaseStudies = caseStudies.filter((study) => {
    return selectedIndustry === 'all' || study.industry === selectedIndustry;
  });

  const featuredCaseStudies = getFeaturedCaseStudies();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://befound.com/' },
    { name: 'Case Studies', url: 'https://befound.com/case-studies' },
  ]);

  const organizationSchema = getOrganizationSchema();

  return (
    <div className="min-h-screen">
      <SEO
        title="Case Studies - Real Results from Real Clients"
        description="Explore beFound's portfolio of successful web development projects. Real estate, dental, restaurant, and business solutions that drive measurable results. See how we helped clients achieve 300% lead growth and more."
        keywords="web development case studies, real estate website success stories, dental website portfolio, restaurant web design examples, digital transformation case studies"
        canonicalUrl="https://befound.com/case-studies"
        structuredData={[breadcrumbSchema, organizationSchema]}
      />
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="text-white py-12 sm:py-16 md:py-20 mt-20" style={{ backgroundColor: '#1f0b38' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <Award className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-befoundOrange" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Success Stories</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 px-4">
              Real results from real clients. See how we've transformed businesses across multiple industries
              with custom web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-befoundOrange/10 to-befoundPurple/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-befoundOrange" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-befoundPurple mb-1">15+</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-befoundOrange" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-befoundPurple mb-1">300%</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Avg. Lead Increase</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-befoundOrange" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-befoundPurple mb-1">100%</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-befoundOrange" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-befoundPurple mb-1">5</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-gray-50 border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <Button
                key={industry.value}
                variant={selectedIndustry === industry.value ? 'default' : 'outline'}
                onClick={() => setSelectedIndustry(industry.value)}
                className={
                  selectedIndustry === industry.value
                    ? 'bg-befoundOrange hover:bg-befoundOrange/90'
                    : ''
                }
              >
                {industry.label} ({industry.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {selectedIndustry === 'all' && featuredCaseStudies.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Featured Case Studies</h2>
              <p className="text-gray-600">Our most impactful projects with exceptional results</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {featuredCaseStudies.slice(0, 2).map((study) => (
                <CaseStudyCard key={study.id} caseStudy={study} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {selectedIndustry === 'all'
                ? 'All Case Studies'
                : `${industries.find((i) => i.value === selectedIndustry)?.label} Case Studies`}
            </h2>
            <p className="text-gray-600">
              {filteredCaseStudies.length} case {filteredCaseStudies.length !== 1 ? 'studies' : 'study'} found
            </p>
          </div>

          {filteredCaseStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredCaseStudies.map((study) => (
                <CaseStudyCard key={study.id} caseStudy={study} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No case studies found matching your criteria.</p>
              <Button
                onClick={() => setSelectedIndustry('all')}
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
