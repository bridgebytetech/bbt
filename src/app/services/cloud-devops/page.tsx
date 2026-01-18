import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  Cloud,
  Container,
  GitBranch,
  RefreshCw,
  Shield,
  Activity,
  Server,
  Zap,
  Settings,
  Lock
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';
import { TechIcon } from '@/components/ui/tech-icons';

const features = [
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Design and implement scalable cloud infrastructure on AWS, GCP, or Azure.',
  },
  {
    icon: Container,
    title: 'Containerization',
    description: 'Docker containers and Kubernetes orchestration for consistent deployments.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    description: 'Automated build, test, and deployment pipelines for faster releases.',
  },
  {
    icon: Activity,
    title: 'Monitoring',
    description: 'Real-time monitoring, alerting, and observability solutions.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Infrastructure security, compliance, and vulnerability management.',
  },
  {
    icon: RefreshCw,
    title: 'Auto Scaling',
    description: 'Automatic scaling based on demand to optimize costs and performance.',
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Terraform and CloudFormation for reproducible infrastructure.',
  },
  {
    icon: Lock,
    title: 'Disaster Recovery',
    description: 'Backup strategies and disaster recovery planning.',
  },
];

const techStack = [
  'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'Nginx'
];

export default function CloudDevOpsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent" />
        
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
                <Cloud className="w-4 h-4 text-sky-500" />
                <span className="text-sm text-sky-500 font-medium">Cloud & DevOps</span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cloud Infrastructure & DevOps
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                Modern cloud solutions with automated deployments. 
                We set up infrastructure that scales, stays secure, and runs smoothly.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/get-proposal" 
                  className="group px-8 py-4 bg-sky-500 text-white font-medium rounded-full hover:bg-sky-600 transition-all duration-300 hover:scale-105"
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
              <span className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-4 block">
                Services
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                What We Offer
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6 h-full min-h-[200px] hover:border-gray-700 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-sky-500" />
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
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full border border-gray-800 hover:border-sky-500/50 transition-colors">
                  <TechIcon name={tech} className="w-5 h-5 text-sky-500" />
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
                Ready to Scale?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let's build cloud infrastructure that grows with your business.
              </p>
              <Link 
                href="/get-proposal" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 text-white font-medium rounded-full hover:bg-sky-600 transition-all duration-300 hover:scale-105"
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