import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  ShoppingCart,
  CreditCard,
  Package,
  BarChart3,
  Users,
  Shield,
  Truck,
  Globe2,
  Smartphone,
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';
import { TechIcon } from '@/components/ui/tech-icons';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce Website Development | Bridge Byte Tech',
  description: 'Custom E-Commerce solutions with payment integration, inventory management, and multi-vendor support. Build your online store with Bridge Byte Tech.',
  keywords: ['Ecommerce Website', 'Online Store Development', 'WooCommerce Expert', 'Shopify Development', 'Custom Ecommerce', 'Sylhet Ecommerce Developer'],
  openGraph: {
    title: 'Build Your Dream Online Store',
    description: 'Scalable E-Commerce solutions tailored for your business growth.',
    images: ['/images/services/ecommerce-og.png'],
  },
};

// JSON-LD Schema for Service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'E-Commerce Development',
  provider: {
    '@type': 'Organization',
    name: 'Bridge Byte Tech'
  },
  description: 'Full-stack e-commerce development including payment gateway, inventory, and mobile app.',
  areaServed: 'Worldwide'
};

// Return এর শুরুতে স্ক্রিপ্ট ট্যাগ যোগ করো
/*
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
*/

const features = [
  {
    icon: ShoppingCart,
    title: 'Product Catalog',
    description: 'Advanced product management with variants, categories, filters, and search functionality.',
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Multiple payment gateways including Stripe, PayPal, bKash, Nagad, and more.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Real-time stock tracking, low stock alerts, and automated inventory updates.',
  },
  {
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'Integration with shipping providers, tracking, and delivery management.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive sales reports, customer insights, and performance metrics.',
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Customer profiles, order history, wishlists, and loyalty programs.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'PCI DSS compliance, SSL encryption, and fraud detection systems.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Fully responsive design with optional native mobile app development.',
  },
];

const techStack = [
  'React', 'Next.js', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'
];

const packages = [
  {
    name: 'Starter',
    price: 'Contact Us',
    description: 'Perfect for small businesses',
    features: [
      'Up to 100 products',
      'Basic payment integration',
      'Mobile responsive',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Business',
    price: 'Contact Us',
    description: 'For growing businesses',
    features: [
      'Up to 1,000 products',
      'Multiple payment gateways',
      'Inventory management',
      'Advanced analytics',
      'Priority support',
      'Custom domain',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    description: 'For large-scale operations',
    features: [
      'Unlimited products',
      'Custom integrations',
      'Multi-vendor support',
      'API access',
      'Dedicated support',
      'Custom features',
    ],
  },
];

export default function ECommercePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
        
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <ShoppingCart className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-emerald-500 font-medium">E-Commerce Solutions</span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Build Your Online Store
                </h1>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Complete e-commerce solutions with payment integration, inventory management, 
                  analytics, and everything you need to sell online successfully.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/get-proposal" 
                    className="group px-8 py-4 bg-emerald-500 text-white font-medium rounded-full hover:bg-emerald-600 transition-all duration-300 hover:scale-105"
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

            <FadeIn delay={500}>
              <div className="relative">
                <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Conversion Rate', value: '+45%' },
                      { label: 'Page Load', value: '<2s' },
                      { label: 'Mobile Traffic', value: '70%+' },
                      { label: 'Uptime', value: '99.9%' },
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                        <div className="text-2xl font-bold text-emerald-500">{stat.value}</div>
                        <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
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
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-4 block">
                Features
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Everything You Need to Sell Online
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Our e-commerce solutions come with all the features you need to run a successful online store.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6 h-full hover:border-gray-700 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-500" />
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
              <p className="text-gray-400">Built with modern, scalable technologies</p>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <FadeIn key={tech} delay={i * 50}>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full border border-gray-800">
                  <TechIcon name={tech} className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm text-gray-300">{tech}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding bg-gray-950/50 border-y border-gray-800/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-4 block">
                Packages
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className={`relative bg-gray-900/50 backdrop-blur rounded-2xl border ${pkg.popular ? 'border-emerald-500/50' : 'border-gray-800'} p-8 h-full`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                  <div className="text-2xl font-bold text-emerald-500 mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/get-proposal" 
                    className={`block w-full py-3 text-center font-medium rounded-full transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                        : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                    }`}
                  >
                    Get Started
                  </Link>
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
                Ready to Launch Your Online Store?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let's build an e-commerce platform that drives sales and grows your business.
              </p>
              <Link 
                href="/get-proposal" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-medium rounded-full hover:bg-emerald-600 transition-all duration-300 hover:scale-105"
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