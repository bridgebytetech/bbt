'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  Filter,
  Sparkles,
  BookOpen,
  Code2,
  Cpu,
  Smartphone,
  Globe,
  Layers,
  Terminal
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Development', slug: 'development' },
  { name: 'Design', slug: 'design' },
  { name: 'Technology', slug: 'technology' },
  { name: 'Business', slug: 'business' },
  { name: 'Tutorials', slug: 'tutorials' },
];

const featuredPost = {
  title: 'Building Scalable SaaS Applications: A Complete Guide',
  excerpt: 'Learn the best practices for building SaaS applications that can scale to millions of users. From architecture decisions to deployment strategies.',
  category: 'Development',
  author: 'Bridge Byte Team',
  date: 'Jan 15, 2025',
  readTime: '12 min read',
  slug: 'building-scalable-saas-applications',
  tags: ['SaaS', 'Scalability', 'Architecture'],
  icon: Layers
};

const posts = [
  {
    title: 'Why Flutter is the Future of Mobile Development',
    excerpt: 'Explore why Flutter has become the go-to framework for cross-platform mobile development.',
    category: 'Technology',
    author: 'Bridge Byte Team',
    date: 'Jan 12, 2025',
    readTime: '8 min read',
    slug: 'flutter-future-mobile-development',
    tags: ['Flutter', 'Mobile', 'Cross-Platform'],
    icon: Smartphone
  },
  {
    title: 'Spring Boot vs Node.js: Choosing the Right Backend',
    excerpt: 'A comprehensive comparison of Spring Boot and Node.js for your next backend project.',
    category: 'Development',
    author: 'Bridge Byte Team',
    date: 'Jan 10, 2025',
    readTime: '10 min read',
    slug: 'spring-boot-vs-nodejs',
    tags: ['Backend', 'Spring Boot', 'Node.js'],
    icon: Terminal
  },
  {
    title: 'E-Commerce Trends to Watch in 2025',
    excerpt: 'Stay ahead of the curve with these emerging e-commerce trends and technologies.',
    category: 'Business',
    author: 'Bridge Byte Team',
    date: 'Jan 8, 2025',
    readTime: '6 min read',
    slug: 'ecommerce-trends-2025',
    tags: ['E-Commerce', 'Trends', 'Business'],
    icon: Globe
  },
  {
    title: 'Getting Started with Kubernetes for Beginners',
    excerpt: 'A beginner-friendly guide to understanding and using Kubernetes for container orchestration.',
    category: 'Tutorials',
    author: 'Bridge Byte Team',
    date: 'Jan 5, 2025',
    readTime: '15 min read',
    slug: 'kubernetes-beginners-guide',
    tags: ['Kubernetes', 'DevOps', 'Containers'],
    icon: Code2
  },
  {
    title: 'UI/UX Best Practices for SaaS Products',
    excerpt: 'Design principles that make SaaS products intuitive and user-friendly.',
    category: 'Design',
    author: 'Bridge Byte Team',
    date: 'Jan 3, 2025',
    readTime: '7 min read',
    slug: 'uiux-best-practices-saas',
    tags: ['UI/UX', 'Design', 'SaaS'],
    icon: Sparkles
  },
  {
    title: 'How AI is Transforming Customer Support',
    excerpt: 'Discover how AI-powered chatbots and automation are revolutionizing customer service.',
    category: 'Technology',
    author: 'Bridge Byte Team',
    date: 'Jan 1, 2025',
    readTime: '9 min read',
    slug: 'ai-transforming-customer-support',
    tags: ['AI', 'Automation', 'Customer Support'],
    icon: Cpu
  },
];

export function InsightsContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-4 inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                <BookOpen className="w-3 h-3" />
                Insights & Articles
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Our Engineering <span className="text-cyan-500">Blog</span>
              </h1>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Deep dives into software architecture, engineering practices, 
                and the technologies we use to build scalable products.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-11 pr-4 py-4 bg-gray-900/50 border border-gray-800 rounded-full text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all backdrop-blur-sm"
                  placeholder="Search articles, topics, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Categories & Filter */}
      <section className="pb-12 border-b border-gray-800/50">
        <div className="container-custom">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => setActiveCategory(category.slug)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.slug
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                        : 'bg-gray-900/50 text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Filter className="w-4 h-4" />
                <span>Showing all articles</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container-custom">
          <FadeIn>
            <Link href={`/insights/${featuredPost.slug}`}>
              <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Placeholder with Icon */}
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    <div className="w-32 h-32 bg-cyan-500/10 rounded-full flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform duration-500">
                      <featuredPost.icon className="w-16 h-16 text-cyan-500" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                        Featured Story
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredPost.date}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-400 mb-8 text-lg leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-between gap-6 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                          BB
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{featuredPost.author}</div>
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                      </div>

                      <span className="flex items-center gap-2 text-cyan-500 font-medium text-sm group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding pt-0 mb-16 lg:mb-24">
        <div className="container-custom">
          <FadeIn>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <FadeIn key={index} delay={index * 50}>
                <Link href={`/insights/${post.slug}`} className="h-full block">
                  <article className="bg-gray-900/40 backdrop-blur rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 hover:bg-gray-800/40 transition-all duration-300 group h-full flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
                    {/* Image Placeholder with Icon */}
                    <div className="h-52 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden group-hover:brightness-110 transition-all">
                      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                      
                      <div className="w-20 h-20 bg-gray-800/50 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all">
                        <post.icon className="w-10 h-10 text-gray-500 group-hover:text-cyan-500 transition-colors" />
                      </div>
                      
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/50 backdrop-blur text-white border border-white/10">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs text-cyan-500 mb-3 font-medium uppercase tracking-wider">
                        <Tag className="w-3 h-3" />
                        {post.tags[0]}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-5 border-t border-gray-800/50 mt-auto">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Load More */}
          <FadeIn delay={300}>
            <div className="text-center mt-16">
              <button className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-full border border-gray-800 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 flex items-center gap-2 mx-auto">
                Load More Articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}