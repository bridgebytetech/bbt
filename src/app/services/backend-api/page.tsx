import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  Server,
  Database,
  Shield,
  Zap,
  GitBranch,
  Layers,
  Lock,
  RefreshCw,
  Globe2,
  FileJson
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';
import { TechIcon } from '@/components/ui/tech-icons';

const features = [
  {
    icon: FileJson,
    title: 'RESTful APIs',
    description: 'Well-designed REST APIs following best practices and standards.',
  },
  {
    icon: Globe2,
    title: 'GraphQL',
    description: 'Flexible GraphQL APIs for efficient data fetching.',
  },
  {
    icon: Layers,
    title: 'Microservices',
    description: 'Scalable microservices architecture for complex systems.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Optimized database schemas for performance and scalability.',
  },
  {
    icon: Lock,
    title: 'Authentication',
    description: 'OAuth, JWT, and secure authentication systems.',
  },
  {
    icon: Shield,
    title: 'API Security',
    description: 'Rate limiting, validation, and security best practices.',
  },
  {
    icon: RefreshCw,
    title: 'Real-Time APIs',
    description: 'WebSocket and Server-Sent Events for live updates.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized for speed with caching and efficient queries.',
  },
];

const techStack = [
  'Spring Boot', 'Kotlin', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'Docker'
];

export default function BackendAPIPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
        
        <div className="container-custom relative">
          <FadeIn>
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
          </FadeIn>

          <div className="max-w-4xl">
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <Server className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-orange-500 font-medium">Backend & APIs</span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Robust Backend Systems
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                Scalable backend solutions with RESTful and GraphQL APIs. 
                We build the foundation that powers your applications.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/get-proposal" 
                  className="group px-8 py-4 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gray-900 text-white font-medium rounded-full border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
                >
                  Schedule a Call
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-950/50 border-y border-gray-800/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-4 block">
                Capabilities
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                What We Build
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6 h-full min-h-[200px] hover:border-gray-700 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <FadeIn key={tech} delay={i * 50}>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full border border-gray-800 hover:border-orange-500/50 transition-colors">
                  <TechIcon name={tech} className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-gray-300">{tech}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding mb-16 lg:mb-24">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Powerful Backend?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let's build the API infrastructure your applications need.
              </p>
              <Link 
                href="/get-proposal" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}