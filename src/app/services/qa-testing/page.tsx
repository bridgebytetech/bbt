import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  TestTube,
  Bug,
  Shield,
  Zap,
  CheckCircle,
  FileSearch,
  Smartphone,
  RefreshCw,
  Target,
  ClipboardCheck
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';

const features = [
  {
    icon: FileSearch,
    title: 'Manual Testing',
    description: 'Thorough manual testing for UI/UX, functionality, and edge cases.',
  },
  {
    icon: Zap,
    title: 'Automated Testing',
    description: 'Automated test suites for continuous integration and faster releases.',
  },
  {
    icon: Shield,
    title: 'Security Testing',
    description: 'Vulnerability assessments, penetration testing, and security audits.',
  },
  {
    icon: Target,
    title: 'Performance Testing',
    description: 'Load testing, stress testing, and performance optimization.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Testing',
    description: 'Testing across devices, OS versions, and screen sizes.',
  },
  {
    icon: RefreshCw,
    title: 'Regression Testing',
    description: 'Ensure new changes don\'t break existing functionality.',
  },
  {
    icon: Bug,
    title: 'Bug Tracking',
    description: 'Detailed bug reports with reproduction steps and prioritization.',
  },
  {
    icon: ClipboardCheck,
    title: 'UAT Support',
    description: 'User acceptance testing support and documentation.',
  },
];

const testTypes = [
  'Unit Testing',
  'Integration Testing',
  'End-to-End Testing',
  'API Testing',
  'Cross-Browser Testing',
  'Accessibility Testing',
  'Usability Testing',
  'Smoke Testing',
];

export default function QATestingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
        
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                  <TestTube className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500 font-medium">QA & Testing</span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Quality Assurance
                </h1>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Comprehensive testing services to ensure your software is bug-free, 
                  secure, and performs flawlessly under all conditions.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/get-proposal" 
                    className="group px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105"
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
              <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8">
                <h3 className="text-lg font-semibold text-white mb-6">Types of Testing</h3>
                <div className="grid grid-cols-2 gap-3">
                  {testTypes.map((type, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {type}
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
              <span className="text-xs font-bold uppercase tracking-wider text-green-500 mb-4 block">
                Services
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                QA Services We Offer
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6 h-full min-h-[200px] hover:border-gray-700 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
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
                Need Quality Assurance?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let's ensure your software is reliable, secure, and bug-free.
              </p>
              <Link 
                href="/get-proposal" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105"
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