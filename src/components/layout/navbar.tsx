'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ArrowRight, 
  ChevronDown,
  ShoppingCart,
  Package,
  Globe2,
  Smartphone,
  Cpu,
  Server,
  Cloud,
  Menu,
  X,
  Users,
  Zap,
  Layers,
  ShieldCheck,
  Layout,
  Code2
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Services Data
const services = [
  { 
    icon: ShoppingCart, 
    label: 'E-Commerce', 
    desc: 'Scalable online stores & payments',
    href: '/services/e-commerce', 
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  { 
    icon: Package, 
    label: 'SaaS Development', 
    desc: 'Multi-tenant cloud platforms',
    href: '/services/saas', 
    color: 'text-violet-500',
    bg: 'bg-violet-500/10'
  },
  { 
    icon: Globe2, 
    label: 'Web Applications', 
    desc: 'High-performance web apps',
    href: '/services/web-apps', 
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10'
  },
  { 
    icon: Smartphone, 
    label: 'Mobile Apps', 
    desc: 'iOS & Android native apps',
    href: '/services/mobile-apps', 
    color: 'text-pink-500',
    bg: 'bg-pink-500/10'
  },
  { 
    icon: Cpu, 
    label: 'AI & Automation', 
    desc: 'Intelligent business solutions',
    href: '/services/ai-automation', 
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  { 
    icon: Cloud, 
    label: 'Cloud & DevOps', 
    desc: 'Infrastructure & scaling',
    href: '/services/cloud-devops', 
    color: 'text-sky-500',
    bg: 'bg-sky-500/10'
  },
];

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { 
    label: 'Services', 
    href: '/services',
    hasDropdown: true,
  },
  { label: 'Products', href: '/products' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || isMobileMenuOpen
            ? 'bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50 shadow-lg shadow-black/10'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group relative z-50">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logos/logo.png"
                  alt="Bridge Byte Tech"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[16px] font-bold text-white leading-tight tracking-tight group-hover:text-cyan-400 transition-colors">
                  Bridge Byte
                </span>
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">
                  Tech
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-gray-900/40 backdrop-blur-md rounded-full border border-gray-800/50 px-1.5 py-1.5 shadow-sm">
                {navItems.map((item) => (
                  <div 
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                    onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'relative px-5 py-2 text-[13px] font-medium rounded-full transition-all duration-300 flex items-center gap-1.5',
                        pathname === item.href || (item.hasDropdown && pathname.startsWith('/services'))
                          ? 'text-white bg-gray-800 shadow-sm'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      )}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown className={cn(
                          'w-3 h-3 transition-transform duration-300 group-hover:text-cyan-400',
                          isServicesOpen && 'rotate-180'
                        )} />
                      )}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {item.hasDropdown && (
                      <div 
                        className={cn(
                          "absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px] transition-all duration-300 ease-out origin-top",
                          isServicesOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"
                        )}
                      >
                        <div className="bg-gray-950/95 backdrop-blur-2xl border border-gray-800 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden p-6 ring-1 ring-white/5">
                          <div className="grid grid-cols-2 gap-4">
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-900/80 transition-all duration-300 group/item border border-transparent hover:border-gray-800"
                              >
                                <div className={cn(
                                  'w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110 shadow-lg',
                                  service.bg
                                )}>
                                  <service.icon className={cn("w-5 h-5", service.color)} />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-white group-hover/item:text-cyan-400 transition-colors flex items-center gap-1">
                                    {service.label}
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                                  </div>
                                  <p className="text-xs text-gray-500 mt-0.5">{service.desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center bg-gray-900/30 -mx-6 -mb-6 px-6 py-4">
                            <span className="text-xs text-gray-500 font-medium">Explore all our capabilities</span>
                            <Link
                              href="/services"
                              className="flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                            >
                              View All Services
                              <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link 
                href="/get-proposal" 
                className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors active:scale-95"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 animate-in fade-in zoom-in duration-200" />
              ) : (
                <Menu className="w-6 h-6 animate-in fade-in zoom-in duration-200" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - FIXED FULL SCREEN */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-gray-950 transition-all duration-500 lg:hidden flex flex-col',
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible pointer-events-none'
        )}
        style={{ height: '100dvh' }} // Ensure it covers mobile browser height properly
      >
        {/* Background Gradients for Mobile Menu */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-gray-950 opacity-50 pointer-events-none" />
        
        <div className="relative flex-1 overflow-y-auto px-6 pb-10 pt-24 scrollbar-hide">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <div 
                key={item.href}
                style={{ 
                  transitionDelay: `${index * 50 + 100}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {item.hasDropdown ? (
                  <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800/50 mb-2">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-5 py-4 text-lg font-medium text-gray-200 hover:text-white transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <Layers className="w-5 h-5 text-cyan-500" />
                        {item.label}
                      </span>
                      <ChevronDown className={cn(
                        'w-5 h-5 text-gray-500 transition-transform duration-300',
                        mobileServicesOpen && 'rotate-180 text-cyan-500'
                      )} />
                    </button>
                    
                    <div className={cn(
                      'overflow-hidden transition-all duration-500 ease-in-out',
                      mobileServicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    )}>
                      <div className="px-3 pb-3 space-y-1">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all duration-200 group"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className={cn(
                              'w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform',
                              service.bg
                            )}>
                              <service.icon className={cn("w-4 h-4", service.color)} />
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-medium block text-gray-200 group-hover:text-white">{service.label}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-500" />
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="flex items-center justify-center gap-2 px-4 py-3 mt-2 rounded-xl text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-200 text-sm font-medium w-full"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-5 py-4 text-lg font-medium rounded-2xl transition-all duration-200 border border-transparent',
                      pathname === item.href
                        ? 'text-white bg-gray-800/80 border-gray-700/50 shadow-sm'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/30 hover:border-gray-800/30'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label === 'Home' && <Globe2 className="w-5 h-5 text-blue-500" />}
                    {item.label === 'About' && <Users className="w-5 h-5 text-purple-500" />}
                    {item.label === 'Products' && <Package className="w-5 h-5 text-emerald-500" />}
                    {item.label === 'Insights' && <Zap className="w-5 h-5 text-yellow-500" />}
                    {item.label === 'Contact' && <Smartphone className="w-5 h-5 text-pink-500" />}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div 
            className="mt-8 pt-8 border-t border-gray-800/50 space-y-4"
            style={{ 
              transitionDelay: '400ms',
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <Link 
              href="/get-proposal" 
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-cyan-500/20 active:scale-95 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="grid grid-cols-2 gap-3">
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gray-900 text-gray-300 font-medium rounded-xl border border-gray-800 active:scale-95 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="mailto:support@bridgebytetech.com" 
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gray-900 text-gray-300 font-medium rounded-xl border border-gray-800 active:scale-95 transition-all duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}