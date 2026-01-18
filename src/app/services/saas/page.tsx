import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  Package,
  Users,
  CreditCard,
  BarChart3,
  Shield,
  Zap,
  Globe2,
  RefreshCw,
  Database,
  Lock,
  CheckCircle
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';
import { TechIcon } from '@/components/ui/tech-icons';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SaaS Product Development Agency | Bridge Byte Tech',
  description: 'Expert SaaS development services. We build scalable, multi-tenant cloud applications using Next.js, Spring Boot, and AWS.',
  keywords: ['SaaS Development', 'Cloud Application', 'Multi-tenant Architecture', 'Enterprise Software', 'SaaS MVP'],
  openGraph: {
    title: 'Enterprise SaaS Development Services',
    description: 'Launch your SaaS product with our expert engineering team.',
    images: ['/images/services/saas-og.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'SaaS Development',
  provider: {
    '@type': 'Organization',
    name: 'Bridge Byte Tech'
  },
  offers: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Custom SaaS Solution'
    }
  }
};

const features = [
  {
    icon: Users,
    title: 'Multi-Tenancy',
    description: 'Isolated data and customizable experiences for each customer organization.',
  },
  {
    icon: CreditCard,
    title: 'Subscription Billing',
    description: 'Flexible pricing plans, usage-based billing, and payment gateway integration.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time metrics, user behavior insights, and business intelligence.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliance, encryption, SSO, and role-based access control.',
  },
  {
    icon: Zap,
    title: 'API-First Design',
    description: 'RESTful and GraphQL APIs for seamless third-party integrations.',
  },
  {
    icon: RefreshCw,
    title: 'Auto Scaling',
    description: 'Cloud-native architecture that scales automatically with demand.',
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Robust data handling with backups, migrations, and compliance.',
  },
  {
    icon: Globe2,
    title: 'White-Label Ready',
    description: 'Customizable branding for resellers and enterprise clients.',
  },
];

const techStack = [
  'Spring Boot', 'Kotlin', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Stripe'
];

const process = [
  { step: '01', title: 'Discovery', description: 'Understanding your product vision and market needs' },
  { step: '02', title: 'Architecture', description: 'Designing scalable, multi-tenant architecture' },
  { step: '03', title: 'Development', description: 'Agile development with continuous delivery' },
  { step: '04', title: 'Launch', description: 'Deployment, monitoring, and ongoing support' },
];

export default function SaaSPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent" />
        
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                  <Package className="w-4 h-4 text-violet-500" />
                  <span className="text-sm text-violet-500 font-medium">SaaS Development</span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Build Your SaaS Product
                </h1>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  From MVP to enterprise-grade SaaS platforms. We build scalable, 
                  multi-tenant applications with subscription billing and advanced analytics.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/get-proposal" 
                    className="group px-8 py-4 bg-violet-500 text-white font-medium rounded-full hover:bg-violet-600 transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link 
                    href="/products" 
                    className="px-8 py-4 bg-gray-900 text-white font-medium rounded-full border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
                  >
                    View Our SaaS Products
                  </Link>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={500}>
              <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-violet-500 mb-2">2</div>
                  <div className="text-gray-400">SaaS Products Built</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Users Served', value: '1K+' },
                    { label: 'Uptime', value: '99.9%' },
                    { label: 'API Calls/Day', value: '10K+' },
                    { label: 'Response Time', value: '<100ms' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
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
              <span className="text-xs font-bold uppercase tracking-wider text-violet-500 mb-4 block">
                Features
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Enterprise-Grade SaaS Features
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything you need to build and scale a successful SaaS product.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6 h-full min-h-[200px] hover:border-gray-700 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-violet-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-500 mb-4 block">
                Our Process
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                From Idea to Launch
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
                  )}
                  <div className="text-5xl font-bold text-gray-800 mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-gray-950/50 border-y border-gray-800/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-gray-400">Built with modern, scalable technologies</p>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <FadeIn key={tech} delay={i * 50}>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full border border-gray-800 hover:border-violet-500/50 transition-colors">
                  <TechIcon name={tech} className="w-5 h-5 text-violet-500" />
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
                Ready to Build Your SaaS?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let's create a SaaS product that generates recurring revenue and scales with your business.
              </p>
              <Link 
                href="/get-proposal" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-violet-500 text-white font-medium rounded-full hover:bg-violet-600 transition-all duration-300 hover:scale-105"
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