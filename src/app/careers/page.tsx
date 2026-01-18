import Link from 'next/link';
import { ArrowRight, Briefcase, MapPin, Clock } from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';

const openings = [
  {
    title: 'Senior Backend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We\'re looking for an experienced backend developer proficient in Spring Boot and Kotlin.',
  },
  {
    title: 'Flutter Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our mobile team to build beautiful cross-platform applications with Flutter.',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us create stunning user experiences for web and mobile applications.',
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        
        <div className="container-custom relative">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-4 block">
                Careers
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-lg text-gray-400">
                We're always looking for talented individuals to join our growing team. 
                Check out our open positions below.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding pt-0 mb-16 lg:mb-24">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
          </FadeIn>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6 hover:border-gray-700 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-600 transition-all duration-300 whitespace-nowrap"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* No Matching Position */}
          <FadeIn delay={300}>
            <div className="mt-12 bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Don't see a matching position?</h3>
              <p className="text-gray-400 mb-6">
                We're always interested in hearing from talented people. Send us your resume!
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-medium rounded-full border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}