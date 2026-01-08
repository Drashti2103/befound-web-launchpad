import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Card className={`pt-0 shadow-none hover:shadow-lg transition-shadow duration-300 ${featured ? 'md:col-span-2' : ''}`}>
      <CardContent className="px-0">
        <img
          src={post.image}
          alt={post.title}
          className={`w-full rounded-t-xl object-cover ${featured ? 'aspect-video h-80' : 'aspect-video h-60'}`}
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop';
          }}
        />
      </CardContent>
      <CardHeader className="mb-2 gap-3">
        <CardTitle className={featured ? 'text-2xl' : 'text-xl'}>
          <Link to={`/blog/${post.slug}`} className="hover:text-befoundOrange transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="group rounded-lg text-base has-[>svg]:px-6" size="lg" asChild>
          <Link to={`/blog/${post.slug}`}>
            Read More
            <ArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
