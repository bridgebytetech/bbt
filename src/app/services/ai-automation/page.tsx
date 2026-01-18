import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  Cpu,
  Bot,
  Brain,
  Sparkles,
  MessageSquare,
  BarChart3,
  Workflow,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';
import { TechIcon } from '@/components/ui/tech-icons';

const features = [
  {
    icon: Bot,
    title: 'Chatbots & Assistants',
    description: 'AI-powered chatbots for customer support and engagement.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Custom ML models for predictions and recommendations.',
  },
  {
    icon: MessageSquare,
    title: 'NLP Solutions',
    description: 'Text analysis, sentiment detection, and language processing.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and business workflows.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Data-driven insights for better decision making.',
  },
  {
    icon: Target,
    title: 'Computer Vision',
    description: 'Image recognition, object detection, and visual AI.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    description: 'Content generation, image creation, and creative AI.',
  },
  {
    icon: TrendingUp,
    title: 'AI Integration',
    description: 'Integrate OpenAI, Claude, and other AI APIs into your apps.',
  },
];

const useCases = [
  'Customer Service Automation',
  'Document Processing',
  'Sales Lead Scoring',
  'Content Generation',
  'Fraud Detection',
  'Inventory Optimization',
  'Personalized Recommendations',
  'Quality Control',
];

const techStack = [
  'Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Node.js', 'FastAPI', 'PostgreSQL', 'AWS'
];

export default function AIAutomationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
        
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                  <Cpu className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-purple-500 font-medium">AI & Automation</span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Intelligent Automation
                </h1>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Transform your business with AI-powered solutions. From chatbots to 
                  predictive analytics, we help you leverage artificial intelligence effectively.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/get-proposal" 
                    className="group px-8 py-4 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-105"
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
                <h3 className="text-lg font-semibold text-white mb-6">Use Cases</h3>
                <div className="grid grid-cols-2 gap-3">
                  {useCases.map((useCase, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <Zap className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      {useCase}
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
              <span className="text-xs font-bold uppercase tracking-wider text-purple-500 mb-4 block">
                Capabilities
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                AI Solutions We Build
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6 h-full min-h-[200px] hover:border-gray-700 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-500" />
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
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full border border-gray-800 hover:border-purple-500/50 transition-colors">
                  <TechIcon name={tech} className="w-5 h-5 text-purple-500" />
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
                Ready to Automate?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let's explore how AI can transform your business operations.
              </p>
              <Link 
                href="/get-proposal" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-105"
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