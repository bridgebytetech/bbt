import Link from 'next/link';
import { 
  ArrowRight, 
  ShoppingCart,
  Package,
  Globe2,
  Layers,
  Smartphone,
  Cpu,
  Server,
  Cloud,
  TestTube
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our services: E-Commerce, SaaS, Mobile Apps, AI & Automation, Cloud DevOps, and more.',
};

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development',
    provider: {
      '@type': 'Organization',
      name: 'Bridge Byte Tech'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-Commerce Solutions'
          }
        }
      ]
    }
  };

const services = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Scalable online stores with seamless payment integration, inventory management, and data-driven analytics.',
    href: '/services/e-commerce',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    hoverBorder: 'group-hover:border-emerald-500/50',
    gradient: 'from-emerald-500/20 to-transparent'
  },
  {
    icon: Package,
    title: 'SaaS Development',
    description: 'Multi-tenant SaaS platforms with subscription billing, role-based access, and enterprise-grade security.',
    href: '/services/saas',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    hoverBorder: 'group-hover:border-violet-500/50',
    gradient: 'from-violet-500/20 to-transparent'
  },
  {
    icon: Globe2,
    title: 'Web Applications',
    description: 'High-performance web apps built with modern frameworks like React & Next.js, optimized for speed and SEO.',
    href: '/services/web-apps',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    hoverBorder: 'group-hover:border-cyan-500/50',
    gradient: 'from-cyan-500/20 to-transparent'
  },
  {
    icon: Layers,
    title: 'Software Development',
    description: 'Custom enterprise software tailored to streamline your business processes and enhance operational efficiency.',
    href: '/services/software',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hoverBorder: 'group-hover:border-blue-500/50',
    gradient: 'from-blue-500/20 to-transparent'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android, delivering exceptional user experiences.',
    href: '/services/mobile-apps',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    hoverBorder: 'group-hover:border-pink-500/50',
    gradient: 'from-pink-500/20 to-transparent'
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions powered by machine learning algorithms to optimize workflows and decision-making.',
    href: '/services/ai-automation',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    hoverBorder: 'group-hover:border-purple-500/50',
    gradient: 'from-purple-500/20 to-transparent'
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Robust backend architectures and RESTful/GraphQL APIs designed for high availability and scalability.',
    href: '/services/backend-api',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    hoverBorder: 'group-hover:border-orange-500/50',
    gradient: 'from-orange-500/20 to-transparent'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure setup, CI/CD pipelines, and container orchestration for reliable software delivery.',
    href: '/services/cloud-devops',
    color: 'text-sky-500',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    hoverBorder: 'group-hover:border-sky-500/50',
    gradient: 'from-sky-500/20 to-transparent'
  },
  {
    icon: TestTube,
    title: 'QA & Testing',
    description: 'Comprehensive quality assurance including automated testing, security audits, and performance tuning.',
    href: '/services/qa-testing',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    hoverBorder: 'group-hover:border-green-500/50',
    gradient: 'from-green-500/20 to-transparent'
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Premium Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">
                  Our Expertise
                </span>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                Comprehensive <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Digital Solutions</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
                We deliver end-to-end engineering excellence. From concept to deployment, 
                we build scalable, secure, and future-proof software.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0 relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 50}>
                <Link href={service.href} className="block h-full group">
                  <div className={`relative h-full bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800 p-8 overflow-hidden transition-all duration-500 ${service.hoverBorder} hover:bg-gray-900/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50`}>
                    
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                    
                    {/* Icon */}
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <div className={`absolute inset-0 rounded-2xl opacity-20 ${service.bg} blur-lg group-hover:opacity-40 transition-opacity duration-500`} />
                      <service.icon className={`w-8 h-8 ${service.color} relative z-10`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 relative z-10">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-cyan-400 transition-colors duration-300 mt-auto relative z-10">
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="section-padding mb-16 lg:mb-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gray-950/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="bg-gray-900/40 backdrop-blur-2xl border border-gray-800/50 rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-black/50 overflow-hidden relative group">
              
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Not Sure Which Service <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">You Need?</span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Let's discuss your project goals. We'll help you identify the perfect 
                  technology stack and solution for your business needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <Link 
                    href="/contact" 
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Schedule a Free Call
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}