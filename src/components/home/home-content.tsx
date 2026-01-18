'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight,
  ShoppingCart,
  Globe2,
  Smartphone,
  Cpu,
  Server,
  Cloud,
  TestTube,
  Layers,
  Rocket,
  Activity,
  ShieldCheck,
  Package,
  Zap,
  Terminal,
  MapPin,
  Utensils,
  Stethoscope,
  PlayCircle,
  PawPrint,
  History
} from 'lucide-react';
import { FadeIn, CountUp } from '@/components/ui/animated';
import {
  MatrixRain,
  GlowingOrb,
  TerminalText,
} from '@/components/ui/tech-animations';
import { TechIcon } from '@/components/ui/tech-icons';

// Services Data
const services = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics',
    href: '/services/e-commerce',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    hoverBorder: 'group-hover:border-emerald-500/50',
    gradient: 'from-emerald-500/20 to-transparent'
  },
  {
    icon: Package,
    title: 'SaaS Products',
    description: 'Scalable software-as-a-service solutions with subscription management and multi-tenancy',
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
    description: 'Custom web apps with modern frameworks, responsive design, and optimal performance',
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
    description: 'Enterprise software solutions tailored to your business processes and workflows',
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
    description: 'Native and cross-platform mobile applications for iOS and Android devices',
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
    description: 'Intelligent automation solutions powered by machine learning and AI technologies',
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
    description: 'Robust backend systems, RESTful APIs, and microservices architecture',
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
    description: 'Cloud infrastructure, CI/CD pipelines, containerization, and deployment automation',
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
    description: 'Comprehensive testing services including automated testing, security audits, and QA',
    href: '/services/qa-testing',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    hoverBorder: 'group-hover:border-green-500/50',
    gradient: 'from-green-500/20 to-transparent'
  },
];

// Stats Data
const stats = [
  { value: 1, suffix: '+', label: 'Years in Market', icon: Rocket },
  { value: 7, suffix: '+', label: 'Projects Delivered', icon: Activity },
  { value: 2, suffix: '', label: 'SaaS Products', icon: Package },
  { value: 3, suffix: '+', label: 'Active Projects', icon: ShieldCheck },
];

// Tech Stack - Primary
const primaryTechStack = [
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Kotlin', category: 'Language' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'MySQL', category: 'Database' },
];

const secondaryTechStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'Cloud' },
];

// Featured Products
const featuredProducts = [
  {
    name: 'Resezy',
    description: 'Complete Restaurant Management System SaaS.',
    type: 'SaaS',
    status: 'Live',
    url: 'https://resezy.com',
    icon: Utensils,
    color: 'emerald',
    gradient: 'from-emerald-500/20 to-transparent'
  },
  {
    name: 'SylhetPedia',
    description: 'The Ultimate City Guide App for Sylhet.',
    type: 'App',
    status: 'Live',
    url: 'https://play.google.com/store/apps/details?id=com.abir.sylhetpedia',
    icon: MapPin,
    color: 'violet',
    isApp: true,
    gradient: 'from-violet-500/20 to-transparent'
  },
  {
    name: 'Doctoezy',
    description: 'Smart Doctor & Clinic Management Platform.',
    type: 'SaaS',
    status: 'Building',
    url: 'https://doctoezy.com',
    icon: Stethoscope,
    color: 'blue',
    gradient: 'from-blue-500/20 to-transparent'
  },
];

export function HomeContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Advanced Background Effects */}
        <MatrixRain />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
        <GlowingOrb color="primary" top="30%" left="20%" delay={0} size={300} />
        <GlowingOrb color="accent" top="60%" left="80%" delay={2} size={400} />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated Badge */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10 hover:border-cyan-500/40 transition-colors duration-300 cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">
                  Engineering the Future
                </span>
              </div>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                <span className="text-white drop-shadow-2xl">We Build</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x bg-[length:200%_auto]">
                  Digital Excellence
                </span>
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={200}>
              <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                Transforming ambitious ideas into powerful digital solutions. From 
                <span className="text-gray-200 font-medium"> Scalable SaaS</span> to 
                <span className="text-gray-200 font-medium"> Enterprise Systems</span>, 
                we deliver engineering precision.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
                <Link 
                  href="/get-proposal" 
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                
                <Link 
                  href="/products" 
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900/50 backdrop-blur-md text-white font-medium rounded-full border border-gray-700 hover:border-gray-500 hover:bg-gray-800/80 transition-all duration-300"
                >
                  <Package className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  <span>View Our Products</span>
                </Link>
              </div>
            </FadeIn>

            {/* Terminal Mockup */}
            <FadeIn delay={400}>
              <div className="inline-block relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gray-950/90 backdrop-blur-xl rounded-xl border border-gray-800 p-6 text-left shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="ml-4 text-xs text-gray-600 font-mono">bridge-byte-tech — bash — 80x24</div>
                  </div>
                  <div className="font-mono text-sm md:text-base">
                    <TerminalText text="npx create-future --with-bridge-byte" className="text-green-400" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="relative py-24 border-y border-gray-800/30 bg-gray-950/50 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className={`relative flex flex-col items-center justify-center p-6 lg:p-8 text-center group ${index !== stats.length - 1 ? 'lg:border-r lg:border-gray-800/50' : ''}`}>
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20">
                      <stat.icon className="w-7 h-7 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-widest group-hover:text-gray-400 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Solutions for Every Scale
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                From startups to enterprises, we architect digital solutions that are 
                secure, scalable, and built for the future.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 50}>
                <Link href={service.href} className="block h-full group">
                  <div className={`relative h-full bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800 p-8 overflow-hidden transition-all duration-500 hover:border-gray-700 hover:bg-gray-900/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 ${service.hoverBorder}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <div className={`absolute inset-0 rounded-2xl opacity-20 ${service.bg} blur-lg group-hover:opacity-40 transition-opacity duration-500`} />
                      <service.icon className={`w-8 h-8 ${service.color} relative z-10`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 relative z-10">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                      {service.description}
                    </p>
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

      {/* Featured Products Section */}
      <section className="section-padding bg-gray-950/50 border-y border-gray-800/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-4 block">
                Our Products
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built by Us, For You
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We build scalable SaaS products and mobile applications that solve real-world problems.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {featuredProducts.map((product, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="group relative bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800 p-8 hover:border-gray-700 transition-all duration-500 h-full flex flex-col hover:shadow-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-${product.color}-500/10 border border-${product.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <product.icon className={`w-6 h-6 text-${product.color}-500`} />
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full ${
                        product.status === 'Live' 
                          ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                          : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>
                    
                    {product.url && (
                      <a 
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium text-${product.color}-500 hover:text-${product.color}-400 transition-colors mt-auto group-hover:translate-x-1 duration-300`}
                      >
                        {product.isApp ? (
                          <>
                            <PlayCircle className="w-4 h-4" />
                            Get on Play Store
                          </>
                        ) : (
                          <>
                            <Globe2 className="w-4 h-4" />
                            Visit Website
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="text-center">
              <Link 
                href="/products" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-medium rounded-full border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 group"
              >
                View All Products
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-4 block">
                Technology Stack
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Technologies
              </h2>
            </div>
          </FadeIn>

          {/* Primary Stack */}
          <div className="mb-12">
            <FadeIn>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8 text-center">
                Primary Stack
              </h3>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-6">
              {primaryTechStack.map((tech, i) => (
                <FadeIn key={tech.name} delay={i * 50}>
                  <div className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="w-20 h-20 rounded-2xl bg-gray-900 border-2 border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500 group-hover:bg-gray-900 transition-all duration-300 hover:scale-110 shadow-lg shadow-black/20">
                      <TechIcon name={tech.name} className="w-10 h-10 text-cyan-500" />
                    </div>
                    <div className="text-center">
                      <span className="text-sm text-white font-medium block mt-2 group-hover:text-cyan-400 transition-colors">
                        {tech.name}
                      </span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1 block">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Secondary Stack */}
          <div className="bg-gray-900/30 backdrop-blur rounded-3xl border border-gray-800 p-10">
            <FadeIn>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8 text-center">
                Also Proficient In
              </h3>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {secondaryTechStack.map((tech, i) => (
                <FadeIn key={tech.name} delay={i * 30}>
                  <div className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center group-hover:border-gray-600 group-hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                      <TechIcon name={tech.name} className="w-7 h-7 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors text-center font-medium">
                      {tech.name}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="section-padding bg-gray-950/50 border-y border-gray-800/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-4 block">
                What We're Building
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Current Projects
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pussho */}
            <FadeIn delay={100}>
              <div className="group bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800 p-8 hover:border-pink-500/30 transition-all duration-500 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <PawPrint className="w-7 h-7 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Pussho</h3>
                    <span className="text-xs text-yellow-500 font-medium flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                      In Development
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  A unique social media platform and community designed specifically for pet lovers. 
                  Features include pet profiles, adoption services, vet finder, and community groups.
                </p>
                <div className="flex gap-2 mt-auto pt-6 border-t border-gray-800 group-hover:border-gray-700/50 transition-colors">
                  <span className="px-3 py-1 bg-gray-950 text-gray-400 text-xs font-medium rounded-lg border border-gray-800">Flutter</span>
                  <span className="px-3 py-1 bg-gray-950 text-gray-400 text-xs font-medium rounded-lg border border-gray-800">Spring Boot</span>
                  <span className="px-3 py-1 bg-gray-950 text-gray-400 text-xs font-medium rounded-lg border border-gray-800">PostgreSQL</span>
                </div>
              </div>
            </FadeIn>

            {/* Doctoezy */}
            <FadeIn delay={200}>
              <div className="group bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800 p-8 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Stethoscope className="w-7 h-7 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Doctoezy</h3>
                    <span className="text-xs text-yellow-500 font-medium flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                      In Development
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  A comprehensive healthcare management platform for doctors and clinics. 
                  Streamlines patient appointments, medical records, billing, and telemedicine services.
                </p>
                <div className="flex gap-2 mt-auto pt-6 border-t border-gray-800 group-hover:border-gray-700/50 transition-colors">
                  <span className="px-3 py-1 bg-gray-950 text-gray-400 text-xs font-medium rounded-lg border border-gray-800">React</span>
                  <span className="px-3 py-1 bg-gray-950 text-gray-400 text-xs font-medium rounded-lg border border-gray-800">Spring Boot</span>
                  <span className="px-3 py-1 bg-gray-950 text-gray-400 text-xs font-medium rounded-lg border border-gray-800">MySQL</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ultimate CTA Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-gray-950">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/20 rounded-full blur-[150px] opacity-50 animate-pulse-slow" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        </div>

        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold uppercase tracking-widest mb-8 shadow-lg shadow-cyan-500/10">
                Let's Build The Future
              </span>

              {/* Headline */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                Ready to Turn Your Vision <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Into Reality?
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                Join forward-thinking businesses who trust us with their digital transformation. 
                From concept to launch, we are your dedicated engineering partner.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/get-proposal" 
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-cyan-500 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <Zap className="w-5 h-5 group-hover:fill-current transition-colors" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
                </Link>
                
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-gray-900/80 backdrop-blur-md text-white text-lg font-medium rounded-full border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    Talk to an Expert
                  </span>
                </Link>
              </div>

              {/* Trust Text */}
              <p className="mt-10 text-sm text-gray-500 font-medium tracking-wide uppercase">
                No commitment required • Free consultation
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}