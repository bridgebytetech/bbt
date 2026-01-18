'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Award,
  Target,
  Rocket,
  Heart,
  Lightbulb,
  CheckCircle,
  Users,
  Package,
  Smartphone,
  Globe2,
  Handshake,
  Cpu,
  ShieldCheck,
  Zap,
  Shield,
  Activity,
  MapPin,
  ShoppingCart
} from 'lucide-react';
import { FadeIn, CountUp } from '@/components/ui/animated';
import { TechIcon } from '@/components/ui/tech-icons';

const stats = [
  { value: 1, suffix: '+', label: 'Years of Excellence' },
  { value: 10, suffix: '+', label: 'Projects Delivered' },
  { value: 2, suffix: '', label: 'Flagship Products' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

const values = [
  {
    icon: Target,
    title: 'Precision & Quality',
    description: 'We believe in perfection. Every pixel, every line of code is crafted with meticulous attention to detail.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20'
  },
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We push boundaries. Leveraging cutting-edge technologies to build solutions that are ahead of their time.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your vision is our mission. We build lasting partnerships by prioritizing your success above all else.',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20'
  },
  {
    icon: ShieldCheck,
    title: 'Integrity & Trust',
    description: 'Transparency is key. We maintain open communication and honest practices in every interaction.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  },
];

const achievements = [
  {
    category: "Our Products",
    items: [
      { name: "Resezy", desc: "Restaurant Management SaaS", icon: Package, color: "text-orange-500" },
      { name: "Doctoezy", desc: "Healthcare Management Platform", icon: Activity, color: "text-blue-500" },
      { name: "Pussho", desc: "Pet Social Network", icon: Heart, color: "text-pink-500" },
      { name: "SylhetPedia", desc: "City Guide App", icon: MapPin, color: "text-green-500" },
    ]
  },
  {
    category: "Client Success",
    items: [
      { name: "Kakufy", desc: "Multi-vendor E-commerce", icon: ShoppingCart, color: "text-yellow-500" },
      { name: "InsaanBD", desc: "Donation Platform", icon: Users, color: "text-cyan-500" },
      { name: "Hadi Archive", desc: "Digital Memorial", icon: Globe2, color: "text-violet-500" },
      { name: "DF IT Centre", desc: "Security Services", icon: Shield, color: "text-red-500" },
    ]
  }
];

const techStack = [
  'Spring Boot', 'Kotlin', 'Flutter', 'MySQL',
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'PostgreSQL', 'MongoDB', 'Docker', 'AWS'
];

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">
                  Who We Are
                </span>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                Building the Future of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Digital Innovation</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
                Bridge Byte Tech is a forward-thinking technology partner. We combine engineering excellence with creative problem-solving to build software that matters.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-800/50 bg-gray-900/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="text-center relative group">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                  {/* Decorative line */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500/20 rounded-full group-hover:w-24 group-hover:bg-cyan-500/50 transition-all duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={100}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-cyan-500" />
                    Our Mission
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    To empower businesses and individuals with robust, scalable, and intuitive digital solutions. We strive to bridge the gap between complex technology and user-friendly experiences.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    Our Vision
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    To be a global leader in software innovation, known for delivering excellence and creating meaningful impact through technology.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="grid gap-6">
                {values.map((value, index) => (
                  <div key={index} className="group flex gap-6 p-6 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${value.bg} ${value.border} border`}>
                      <value.icon className={`w-6 h-6 ${value.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{value.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="section-padding bg-gray-950/50 border-y border-gray-800/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-4 block">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What We've Built
              </h2>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12">
            {achievements.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <FadeIn delay={idx * 200}>
                  <h3 className="text-2xl font-bold text-white mb-8 pl-4 border-l-4 border-cyan-500">
                    {category.category}
                  </h3>
                </FadeIn>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.items.map((item, i) => (
                    <FadeIn key={i} delay={idx * 200 + i * 100}>
                      <div className="group h-full p-6 bg-gray-900/40 backdrop-blur rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">{item.name}</h4>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20">
        <div className="container-custom">
          <FadeIn>
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl border border-blue-500/20 p-10 md:p-16 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-gray-900 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/10">
                  <Handshake className="w-10 h-10 text-blue-400" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">Strategic Partnership</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  We are proud to collaborate with <span className="text-white font-semibold">DF IT Centre</span> for advanced 
                  security solutions. Together, we provide a holistic digital shield for businesses.
                </p>
                
                <a 
                  href="https://dfitcentre.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium group transition-colors"
                >
                  Visit DF IT Centre
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-gray-950/50 border-y border-gray-800/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-4 block">
                Our Arsenal
              </span>
              <h2 className="text-4xl font-bold text-white">Technology Stack</h2>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, i) => (
              <FadeIn key={tech} delay={i * 30}>
                <div className="group flex items-center gap-3 px-5 py-3 bg-gray-900 rounded-full border border-gray-800 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 cursor-default">
                  <TechIcon name={tech} className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{tech}</span>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build Something Great
              </h2>
              <p className="text-lg text-gray-400 mb-10">
                Ready to bring your ideas to life? Our team is ready to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link 
                  href="/get-proposal" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gray-900 text-white font-medium rounded-full border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}