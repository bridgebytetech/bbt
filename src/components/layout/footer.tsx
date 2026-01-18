import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  MapPin, 
  Phone,
  Github,
  Linkedin,
  Twitter,
  Globe2,
  Facebook,
  Instagram,
ArrowRight
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'E-Commerce', href: '/services/e-commerce' },
    { label: 'SaaS Development', href: '/services/saas' },
    { label: 'Web Applications', href: '/services/web-apps' },
    { label: 'Mobile Apps', href: '/services/mobile-apps' },
    { label: 'AI & Automation', href: '/services/ai-automation' },
    { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Products', href: '/products' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/insights' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Support', href: '/support' },
    { label: 'Status', href: '/status' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/bridgebytetech", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/company/bridgebytetech", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/bridgebytetech", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com/bridgebytetech", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/bridgebytetech", label: "Instagram" },
];
export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-24 pb-12 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          
          {/* Brand & Newsletter Column - Spans 2 cols on large screens */}
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                <Image
                    src="/images/logos/logo.png"
                    alt="Bridge Byte Tech"
                    fill
                    sizes="40px"
                    className="object-contain"
                />
                </div>
                <div>
                  <div className="text-lg font-bold text-white tracking-tight leading-none">Bridge Byte</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium mt-0.5">Tech</div>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering businesses with scalable digital solutions. 
              We build the future of technology, today.
            </p>

            {/* Newsletter Section */}
            <div className="max-w-sm mb-8">
              <label className="text-xs font-semibold text-white uppercase tracking-wider mb-3 block">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white p-2.5 rounded-lg transition-colors flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-12" />

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a href="mailto:support@bridgebytetech.com" className="group flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-gray-700 transition-all hover:bg-gray-900/50">
            <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:text-cyan-500 text-gray-400 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-white mb-1">Email Us</div>
              <div className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">support@bridgebytetech.com</div>
            </div>
          </a>

          <a href="https://wa.me/33749797394" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-gray-700 transition-all hover:bg-gray-900/50">
            <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-green-500/30 group-hover:text-green-500 text-gray-400 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-white mb-1">Call / WhatsApp</div>
              <div className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">+33 7 49 79 73 94 (FR)</div>
            </div>
          </a>

          <div className="group flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-gray-700 transition-all hover:bg-gray-900/50">
            <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-purple-500/30 group-hover:text-purple-500 text-gray-400 transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-white mb-1">Locations</div>
              <div className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors">Paris • Sylhet</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 order-2 md:order-1 font-medium">
            © {new Date().getFullYear()} Bridge Byte Tech. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 order-1 md:order-2">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}