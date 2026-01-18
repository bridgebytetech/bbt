import Link from 'next/link';
import { 
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
  Tag
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';

// Static blog data
const blogPosts: Record<string, any> = {
  'building-scalable-saas-applications': {
    title: 'Building Scalable SaaS Applications: A Complete Guide',
    excerpt: 'Learn the best practices for building SaaS applications that can scale to millions of users.',
    category: 'Development',
    author: 'Bridge Byte Team',
    date: 'Jan 15, 2025',
    readTime: '12 min read',
    content: `
      <h2>Introduction</h2>
      <p>Building a SaaS application that can scale to millions of users requires careful planning and the right architectural decisions from day one. In this comprehensive guide, we'll walk through the key considerations and best practices.</p>
      
      <h2>1. Choose the Right Architecture</h2>
      <p>The foundation of any scalable SaaS application is its architecture. Consider these approaches:</p>
      <ul>
        <li><strong>Microservices:</strong> Break your application into smaller, independent services</li>
        <li><strong>Multi-tenancy:</strong> Design for multiple customers sharing the same infrastructure</li>
        <li><strong>Event-driven:</strong> Use message queues for async processing</li>
      </ul>
      
      <h2>2. Database Design</h2>
      <p>Your database strategy is critical for scalability. Key considerations include:</p>
      <ul>
        <li>Choosing between SQL and NoSQL based on your use case</li>
        <li>Implementing proper indexing strategies</li>
        <li>Planning for data partitioning and sharding</li>
        <li>Setting up read replicas for heavy read workloads</li>
      </ul>
      
      <h2>3. Caching Strategies</h2>
      <p>Implement caching at multiple levels to reduce database load and improve response times:</p>
      <ul>
        <li>Application-level caching with Redis</li>
        <li>CDN for static assets</li>
        <li>Database query caching</li>
      </ul>
      
      <h2>4. Security Best Practices</h2>
      <p>Security should never be an afterthought. Implement these from the start:</p>
      <ul>
        <li>OAuth 2.0 and JWT for authentication</li>
        <li>Role-based access control (RBAC)</li>
        <li>Data encryption at rest and in transit</li>
        <li>Regular security audits</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building a scalable SaaS application is a journey, not a destination. Start with solid foundations, make data-driven decisions, and continuously iterate based on real-world usage patterns.</p>
    `,
    tags: ['SaaS', 'Architecture', 'Scalability', 'Backend'],
  },
  'flutter-future-mobile-development': {
    title: 'Why Flutter is the Future of Mobile Development',
    excerpt: 'Explore why Flutter has become the go-to framework for cross-platform mobile development.',
    category: 'Technology',
    author: 'Bridge Byte Team',
    date: 'Jan 12, 2025',
    readTime: '8 min read',
    content: `
      <h2>The Rise of Flutter</h2>
      <p>Flutter has rapidly become one of the most popular frameworks for mobile app development. Created by Google, it allows developers to build natively compiled applications for mobile, web, and desktop from a single codebase.</p>
      
      <h2>Why Choose Flutter?</h2>
      <ul>
        <li><strong>Single Codebase:</strong> Write once, deploy everywhere</li>
        <li><strong>Hot Reload:</strong> See changes instantly during development</li>
        <li><strong>Beautiful UI:</strong> Rich set of customizable widgets</li>
        <li><strong>Native Performance:</strong> Compiled to native ARM code</li>
      </ul>
      
      <h2>Our Experience with Flutter</h2>
      <p>At Bridge Byte Tech, we've been using Flutter for our mobile applications and have seen significant improvements in development speed and code quality.</p>
      
      <h2>Conclusion</h2>
      <p>Flutter represents the future of cross-platform development, and we're excited to continue building amazing apps with it.</p>
    `,
    tags: ['Flutter', 'Mobile', 'Cross-Platform', 'Dart'],
  },
};

const relatedPosts = [
  {
    title: 'Spring Boot vs Node.js: Choosing the Right Backend',
    category: 'Development',
    date: 'Jan 10, 2025',
    slug: 'spring-boot-vs-nodejs',
  },
  {
    title: 'Getting Started with Kubernetes for Beginners',
    category: 'Tutorials',
    date: 'Jan 5, 2025',
    slug: 'kubernetes-beginners-guide',
  },
  {
    title: 'UI/UX Best Practices for SaaS Products',
    category: 'Design',
    date: 'Jan 3, 2025',
    slug: 'uiux-best-practices-saas',
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug] || {
    title: 'Blog Post Not Found',
    excerpt: 'This blog post could not be found.',
    category: 'General',
    author: 'Bridge Byte Team',
    date: 'Jan 1, 2025',
    readTime: '5 min read',
    content: '<p>The blog post you are looking for does not exist.</p>',
    tags: [],
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        
        <div className="container-custom relative">
          <FadeIn>
            <Link 
              href="/insights" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </FadeIn>

          <div className="max-w-3xl">
            <FadeIn delay={100}>
              <span className="text-sm font-medium text-cyan-500 mb-4 block">
                {post.category}
              </span>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-lg text-gray-400 mb-8">
                {post.excerpt}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <FadeIn>
                <article 
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:text-white prose-headings:font-semibold
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-p:text-gray-400 prose-p:leading-relaxed
                    prose-li:text-gray-400
                    prose-strong:text-white
                    prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline
                    prose-ul:my-4 prose-li:my-1"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </FadeIn>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <FadeIn delay={100}>
                  <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-wrap items-center gap-3">
                      <Tag className="w-4 h-4 text-gray-500" />
                      {post.tags.map((tag: string) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-sm bg-gray-900 text-gray-400 rounded-full border border-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}

              {/* Share */}
              <FadeIn delay={200}>
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm">Share:</span>
                    <div className="flex items-center gap-2">
                      <button className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition-colors">
                        <Facebook className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition-colors">
                        <LinkIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <FadeIn>
                <div className="sticky top-24">
                  <h3 className="text-lg font-semibold text-white mb-6">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost, i) => (
                      <Link 
                        key={i}
                        href={`/insights/${relatedPost.slug}`}
                        className="block p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
                      >
                        <span className="text-xs text-cyan-500 mb-1 block">{relatedPost.category}</span>
                        <h4 className="text-sm font-medium text-white line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h4>
                        <span className="text-xs text-gray-500">{relatedPost.date}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding mb-16 lg:mb-24 border-t border-gray-800/50">
        <div className="container-custom">
          <FadeIn>
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Want to Work With Us?
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                We'd love to help you build your next project. Get in touch and let's discuss your ideas.
              </p>
              <Link 
                href="/get-proposal" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-600 transition-all duration-300 hover:scale-105"
              >
                Get a Proposal
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

// Generate static paths for known blog posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}