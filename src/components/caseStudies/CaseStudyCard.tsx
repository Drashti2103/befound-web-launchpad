import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  const industryColors = {
    'real-estate': 'bg-blue-100 text-blue-800',
    dental: 'bg-green-100 text-green-800',
    restaurant: 'bg-orange-100 text-orange-800',
    general: 'bg-gray-100 text-gray-800',
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop';
          }}
        />
        <Badge className={`absolute top-4 right-4 ${industryColors[caseStudy.industry]}`}>
          {caseStudy.industry.replace('-', ' ').toUpperCase()}
        </Badge>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-grow">
            <p className="text-sm text-gray-600 mb-2">{caseStudy.client}</p>
            <h3 className="font-bold text-xl group-hover:text-befoundOrange transition-colors line-clamp-2">
              {caseStudy.title}
            </h3>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3 mb-4">{caseStudy.excerpt}</p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3">
          {caseStudy.metrics.slice(0, 2).map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-befoundOrange/10 to-befoundPurple/10 p-3 rounded-lg"
            >
              <div className="flex items-center gap-1 text-befoundOrange mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-semibold">{metric.label}</span>
              </div>
              <p className="text-2xl font-bold text-befoundPurple">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {caseStudy.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {caseStudy.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{caseStudy.technologies.length - 4} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="border-t pt-4">
        <Link
          to={`/case-studies/${caseStudy.slug}`}
          className="flex items-center gap-2 text-befoundOrange hover:text-befoundPurple font-semibold transition-colors w-full justify-center py-2"
        >
          View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
};
