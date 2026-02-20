import Link from 'next/link';
import { 
  ArrowUpRight,
  ExternalLink,
  CheckCircle,
  Globe2,
  Smartphone,
  Package,
  Users,
  Heart,
  Utensils,
  Stethoscope,
  PawPrint,
  MapPin,
  Building,
  PlayCircle,
  Code2,
  Layers
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Our Products & Portfolio | Resezy, Doctoezy, SylhetPedia',
  description: 'Explore our flagship products: Resezy (Restaurant Management), Doctoezy (Healthcare), and SylhetPedia. See our successful client projects.',
  keywords: ['Resezy', 'Doctoezy', 'SylhetPedia', 'Restaurant Software', 'Doctor Management System', 'Pet Social Media'],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'SoftwareApplication',
      name: 'Resezy',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Android, iOS',
      description: 'Complete Restaurant Management System SaaS.'
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Doctoezy',
      applicationCategory: 'MedicalApplication',
      operatingSystem: 'Web',
      description: 'Smart Doctor & Clinic Management Platform.'
    },
    {
      '@type': 'MobileApplication',
      name: 'SylhetPedia',
      operatingSystem: 'Android',
      applicationCategory: 'TravelApplication',
      description: 'The Ultimate City Guide App for Sylhet.'
    }
  ]
};




// Our Own Products (SaaS)
const ownProducts = [
  {
    name: 'Resezy',
    tagline: 'Restaurant Management System',
    description: 'A complete SaaS solution for restaurant management. From order management to inventory tracking, billing, staff management, and analytics - everything a restaurant needs in one platform.',
    type: 'SaaS Product',
    status: 'Live',
    websiteUrl: 'https://resezy.com',
    features: [
      'Order Management System',
      'Table Reservations',
      'Inventory Tracking',
      'Staff Management',
      'POS Integration',
      'Analytics Dashboard',
      'Multi-branch Support',
      'Customer Loyalty Program'
    ],
    tech: ['Spring Boot', 'Java', 'React', 'MongoDB'],
    color: 'emerald',
    icon: Utensils,
    gradient: 'from-emerald-500/20 to-transparent'
  },
  {
    name: 'Doctoezy',
    tagline: 'Doctor & Clinic Management System',
    description: 'A comprehensive healthcare management platform for doctors and clinics. Manage patient appointments, medical records, prescriptions, billing, and more - all in one secure system.',
    type: 'SaaS Product',
    status: 'In Development',
    websiteUrl: 'https://doctoezy.com',
    features: [
      'Patient Appointment Booking',
      'Electronic Medical Records',
      'Prescription Management',
      'Patient Database',
      'Billing & Invoicing',
      'Telemedicine Support',
      'Lab Report Integration',
      'Multi-clinic Support'
    ],
    tech: ['Spring Boot', 'React', 'MySQL', 'AWS'],
    color: 'blue',
    icon: Stethoscope,
    gradient: 'from-blue-500/20 to-transparent'
  },
];

// Our Own Apps & Projects
const ownApps = [
  {
    name: 'SylhetPedia',
    tagline: 'Everything About Sylhet in One App',
    description: 'A comprehensive mobile application dedicated to Sylhet region. Find tutors, blood donors, tourist spots, hospitals, schools, emergency contacts, house rentals, and much more. Your complete guide to Sylhet.',
    type: 'Mobile App',
    status: 'Live',
    platform: 'Android',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.abir.sylhetpedia',
    features: [
      'Find Tutors',
      'Blood Donor Search',
      'Tourist Spots Guide',
      'Hospital & Emergency Numbers',
      'School & College Directory',
      'House Rental Listings',
      'Local Business Directory',
      'Event Updates'
    ],
    tech: ['Kotlin', 'Spring Boot', 'Java', 'MySQL'],
    color: 'violet',
    icon: MapPin,
    gradient: 'from-violet-500/20 to-transparent'
  },
  {
    name: 'Pussho',
    tagline: 'Social Media for Pets',
    description: 'A unique social platform designed for pet lovers. Create profiles for your pets, connect with other pet owners, share moments, find pet services, adoption centers, vets, and build a community around your furry friends.',
    type: 'App + Web',
    status: 'In Development',
    websiteUrl: 'https://pussho.com',
    features: [
      'Pet Profiles & Accounts',
      'Social Feed & Stories',
      'Pet Community Groups',
      'Vet & Clinic Finder',
      'Pet Adoption Platform',
      'Pet Care Tips',
      'Pet Product Marketplace',
      'Lost & Found Pets'
    ],
    tech: ['Flutter', 'Spring Boot', 'MySQL', 'Firebase', 'Kotlin'],
    color: 'pink',
    icon: PawPrint,
    gradient: 'from-pink-500/20 to-transparent'
  },
  {
    name: 'Hadi Archive',
    tagline: 'Preserving Legacy for Future Generations',
    description: 'A digital archive dedicated to Shaheed Osman Bin Hadi, preserving his life story, achievements, and legacy for future generations. A tribute project to ensure his memory lives on.',
    type: 'Web Archive',
    status: 'Live',
    websiteUrl: 'https://hadiarchive.com',
    features: [
      'Complete Biography',
      'Photo Gallery',
      'Timeline of Events',
      'Written Works Archive',
      'Video Collection',
      'Tribute Messages',
      'Educational Resources',
      'Memorial Section'
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Spring Boot'],
    color: 'amber',
    icon: Heart,
    gradient: 'from-amber-500/20 to-transparent'
  },
];

// Client Projects
const clientProjects = [
  {
    name: 'Kakufy',
    tagline: 'Multi-Vendor E-Commerce Platform',
    description: 'A full-featured multi-vendor marketplace built on WordPress/WooCommerce. Multiple sellers can register, list products, and manage their stores while customers enjoy a seamless shopping experience.',
    type: 'Client Project',
    status: 'Live',
    websiteUrl: 'https://kakufy.com',
    client: 'Kakufy',
    features: [
      'Multi-Vendor Marketplace',
      'Vendor Dashboard',
      'Product Management',
      'Order Processing',
      'Commission System',
      'Payment Integration',
      'Vendor Verification',
      'Customer Reviews'
    ],
    tech: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    color: 'cyan',
    icon: Building,
    gradient: 'from-cyan-500/20 to-transparent'
  },
  {
    name: 'DF IT Centre',
    tagline: 'Social Media Security Services',
    description: 'Professional website for DF IT Centre, a company specializing in social media security and digital protection services. They help individuals and businesses secure their online presence.',
    type: 'Client Project',
    status: 'Live',
    websiteUrl: 'https://dfitcentre.com',
    client: 'DF IT Centre',
    partnership: true,
    features: [
      'Social Media Security',
      'Account Recovery Services',
      'Digital Protection',
      'Security Consultation',
      'Online Identity Protection',
      'Cyber Security Training'
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'red',
    icon: Globe2,
    gradient: 'from-red-500/20 to-transparent'
  },
  {
    name: 'InsaanBD',
    tagline: 'Connecting Donors with Orphans',
    description: 'A humanitarian platform connecting verified donors with orphanages and underprivileged children in Bangladesh. Facilitating transparent donations and support for those in need.',
    type: 'Client Project',
    status: 'Live',
    websiteUrl: 'https://insaanbd.org',
    client: 'InsaanBD Organization',
    features: [
      'Donor Registration',
      'Orphan Profiles',
      'Verified Connections',
      'Donation Tracking',
      'Impact Reports',
      'Secure Payments',
      'NGO Partnerships',
      'Volunteer Programs'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Spring Boot', 'Java'],
    color: 'green',
    icon: Users,
    gradient: 'from-green-500/20 to-transparent'
  },
  {
    name: 'Dangerous Force',
    tagline: 'Fighting Against Online Harassment',
    description: 'A platform dedicated to combating social media abuse and online harassment. They work towards creating a safer digital environment by reporting and taking action against harmful content.',
    type: 'Client Project',
    status: 'Live',
    websiteUrl: 'https://dangerousforce.com',
    client: 'Dangerous Force',
    features: [
      'Report Abuse Platform',
      'Victim Support',
      'Awareness Campaigns',
      'Legal Resources',
      'Community Guidelines',
      'Educational Content'
    ],
    tech: ['React', 'Custom Development', 'Java', 'Spring Boot'],
    color: 'orange',
    icon: Globe2,
    gradient: 'from-orange-500/20 to-transparent'
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/50 border border-violet-500/20 mb-8 backdrop-blur-md shadow-lg shadow-violet-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-xs font-semibold text-violet-300 tracking-wider uppercase">
                  Our Portfolio
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                Crafting Digital <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">Masterpieces</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
                Discover our ecosystem of scalable SaaS products, mobile applications, 
                and transformative client solutions built with precision and passion.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our SaaS Products */}
      <section className="section-padding pt-0 relative z-10">
        <div className="container-custom">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <Package className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Our SaaS Products</h2>
                <p className="text-gray-400 text-sm mt-1">Enterprise-grade solutions built for scale</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {ownProducts.map((product, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className={`group relative h-full bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800 p-8 overflow-hidden transition-all duration-500 hover:border-${product.color}-500/30 hover:bg-gray-900/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50`}>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-5">
                        <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                          <div className={`absolute inset-0 rounded-2xl opacity-20 bg-${product.color}-500 blur-lg group-hover:opacity-40 transition-opacity duration-500`} />
                          <product.icon className={`w-8 h-8 text-${product.color}-500 relative z-10`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-${product.color}-400 transition-colors">{product.name}</h3>
                          <p className="text-gray-500 text-sm font-medium">{product.tagline}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-${product.color}-500/10 text-${product.color}-500 border border-${product.color}-500/20 backdrop-blur-md`}>
                        {product.type}
                      </span>
                    </div>

                    <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                      {product.features.slice(0, 6).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          <CheckCircle className={`w-4 h-4 text-${product.color}-500 flex-shrink-0`} />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {product.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-gray-950/50 text-gray-400 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-800 group-hover:border-gray-700/50 transition-colors mt-auto">
                      <span className={`flex items-center gap-2 text-xs font-medium ${product.status === 'Live' ? 'text-emerald-400' : 'text-amber-400'}`}>
                        <span className={`relative flex h-2 w-2`}>
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${product.status === 'Live' ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`}></span>
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${product.status === 'Live' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                        </span>
                        {product.status}
                      </span>
                      
                      {product.websiteUrl && (
                        <a 
                          href={product.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 text-sm font-medium text-${product.color}-500 hover:text-${product.color}-400 transition-colors group-hover:translate-x-1 duration-300`}
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Apps & Projects */}
      <section className="section-padding bg-gray-950/50 border-y border-gray-800/50 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shadow-lg shadow-violet-500/10">
                <Smartphone className="w-6 h-6 text-violet-500" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Apps & Projects</h2>
                <p className="text-gray-400 text-sm mt-1">Innovative mobile and web solutions</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ownApps.map((app, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className={`group relative h-full bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800 p-6 overflow-hidden transition-all duration-500 hover:border-${app.color}-500/30 hover:bg-gray-900/60 hover:-translate-y-2 hover:shadow-xl`}>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <div className={`absolute inset-0 rounded-xl opacity-20 bg-${app.color}-500 blur-md group-hover:opacity-40 transition-opacity duration-500`} />
                        <app.icon className={`w-6 h-6 text-${app.color}-500 relative z-10`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white truncate group-hover:text-${app.color}-400 transition-colors">{app.name}</h3>
                        <p className="text-xs text-gray-500 truncate">{app.tagline}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-2 py-1 text-[10px] font-semibold uppercase tracking-wide rounded-lg bg-${app.color}-500/10 text-${app.color}-500 border border-${app.color}-500/20`}>
                        {app.type}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {app.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {app.tech.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-1 text-[10px] font-medium bg-gray-950/50 text-gray-500 rounded border border-gray-800">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-800 flex justify-end group-hover:border-gray-700/50 transition-colors">
                      {app.playStoreUrl ? (
                        <a 
                          href={app.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-green-500 hover:text-green-400 transition-colors group-hover:translate-x-1 duration-300"
                        >
                          <PlayCircle className="w-4 h-4" />
                          Get on Play Store
                        </a>
                      ) : app.websiteUrl ? (
                        <a 
                          href={app.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 text-sm font-medium text-${app.color}-500 hover:text-${app.color}-400 transition-colors group-hover:translate-x-1 duration-300`}
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client Projects */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Client Success Stories</h2>
                <p className="text-gray-400 text-sm mt-1">Impactful projects delivered to our partners</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {clientProjects.map((project, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className={`group relative h-full bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800 p-8 overflow-hidden transition-all duration-500 hover:border-${project.color}-500/30 hover:bg-gray-900/60 hover:-translate-y-2 hover:shadow-xl`}>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 border border-gray-800 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                          <div className={`absolute inset-0 rounded-xl opacity-20 bg-${project.color}-500 blur-md group-hover:opacity-40 transition-opacity duration-500`} />
                          <project.icon className={`w-7 h-7 text-${project.color}-500 relative z-10`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-${project.color}-400 transition-colors">{project.name}</h3>
                          <p className="text-gray-500 text-sm">{project.tagline}</p>
                        </div>
                      </div>
                      {project.partnership && (
                        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 backdrop-blur-md">
                          Partner
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          <CheckCircle className={`w-4 h-4 text-${project.color}-500 flex-shrink-0`} />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-gray-950/50 text-gray-400 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-800 group-hover:border-gray-700/50 transition-colors mt-auto">
                      <span className="text-xs font-medium text-gray-500">Client: <span className="text-gray-300">{project.client}</span></span>
                      <a 
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-sm font-medium text-${project.color}-500 hover:text-${project.color}-400 transition-colors group-hover:translate-x-1 duration-300`}
                      >
                        Visit Site
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="section-padding mb-16 lg:mb-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gray-950/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="bg-gray-900/40 backdrop-blur-2xl border border-gray-800/50 rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-black/50 overflow-hidden relative group">
              
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Start Building
                </span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Turn Your Vision Into <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Reality</span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Whether it's a SaaS product, mobile app, or custom web solution — 
                  we bring enterprise-grade expertise to build your next big thing.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <Link 
                    href="/get-proposal" 
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Your Project
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/50 text-white font-medium rounded-full border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
