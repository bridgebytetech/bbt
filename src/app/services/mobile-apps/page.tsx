import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  Smartphone,
  Apple,
  PlayCircle,
  Zap,
  Globe2,
  Shield,
  RefreshCw,
  Bell,
  MapPin,
  Camera,
  CheckCircle
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';
import { TechIcon } from '@/components/ui/tech-icons';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Company (iOS & Android) | Bridge Byte Tech',
  description: 'Top-rated mobile app developers for Flutter, React Native, and Native Android/iOS. We build high-performance mobile applications.',
  keywords: ['Mobile App Developer', 'Flutter Development', 'iOS App', 'Android App', 'Cross-platform App'],
  openGraph: {
    title: 'Custom Mobile App Development',
    description: 'Transform your idea into a stunning mobile app.',
    images: ['/images/services/mobile-og.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Mobile Application Development',
  provider: {
    '@type': 'Organization',
    name: 'Bridge Byte Tech'
  }
};

const features = [
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description: 'Single codebase for iOS and Android with Flutter for faster development.',
  },
  {
    icon: Zap,
    title: 'Native Performance',
    description: 'Smooth 60fps animations and native-like user experience.',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Engage users with targeted notifications and in-app messaging.',
  },
  {
    icon: Globe2,
    title: 'Offline Support',
    description: 'Works seamlessly offline with local data sync capabilities.',
  },
  {
    icon: MapPin,
    title: 'Location Services',
    description: 'GPS tracking, geofencing, and location-based features.',
  },
  {
    icon: Camera,
    title: 'Device Features',
    description: 'Camera, biometrics, sensors, and hardware integration.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Secure authentication, data encryption, and secure storage.',
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Sync',
    description: 'Live data synchronization across all user devices.',
  },
];

const techStack = [
  'Flutter', 'Dart', 'Kotlin', 'Swift', 'Firebase', 'Spring Boot', 'PostgreSQL', 'AWS'
];

const appTypes = [
  { name: 'E-Commerce Apps', description: 'Shopping, payments, order tracking' },
  { name: 'Social Apps', description: 'Messaging, feeds, user profiles' },
  { name: 'Business Apps', description: 'CRM, inventory, workforce management' },
  { name: 'Health & Fitness', description: 'Tracking, workouts, health data' },
  { name: 'On-Demand Services', description: 'Delivery, ride-sharing, bookings' },
  { name: 'Entertainment', description: 'Streaming, gaming, media apps' },
];

export default function MobileAppsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent" />
        
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                  <Smartphone className="w-4 h-4 text-pink-500" />
                  <span className="text-sm text-pink-500 font-medium">Mobile Development</span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Mobile Apps That Users Love
                </h1>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Native and cross-platform mobile applications for iOS and Android. 
                  We use Flutter for efficient development without compromising performance.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/get-proposal" 
                    className="group px-8 py-4 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105"
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

              {/* App Store Badges */}
              <FadeIn delay={500}>
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg border border-gray-800">
                    <Apple className="w-5 h-5 text-white" />
                    <span className="text-sm text-gray-300">iOS</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg border border-gray-800">
                    <PlayCircle className="w-5 h-5 text-white" />
                    <span className="text-sm text-gray-300">Android</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={500}>
              <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8">
                <h3 className="text-lg font-semibold text-white mb-6">Apps We Build</h3>
                <div className="space-y-4">
                  {appTypes.map((app, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-medium text-sm">{app.name}</div>
                        <div className="text-gray-500 text-xs">{app.description}</div>
                      </div>
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
              <span className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-4 block">
                Features
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Full-Featured Mobile Apps
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6 h-full min-h-[200px] hover:border-gray-700 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-pink-500" />
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
              <p className="text-gray-400">Modern tools for modern mobile apps</p>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <FadeIn key={tech} delay={i * 50}>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full border border-gray-800 hover:border-pink-500/50 transition-colors">
                  <TechIcon name={tech} className="w-5 h-5 text-pink-500" />
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
                Ready to Build Your App?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let's create a mobile app that your users will love and that drives your business forward.
              </p>
              <Link 
                href="/get-proposal" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105"
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