'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  MapPin, 
  Phone,
  Send,
  MessageSquare,
  Clock,
  ArrowRight,
  Globe,
  Sparkles
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);

    window.location.href = `mailto:support@bridgebytetech.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-gray-950 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Contact Us
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                Let's Build Something <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Extraordinary</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                Have a vision in mind? Whether it's a complex enterprise platform or a cutting-edge mobile app, we're here to engineer your success.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-24 z-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn delay={100}>
                <div className="grid gap-6">
                  {/* Email Card */}
                  <a href="mailto:support@bridgebytetech.com" className="group block p-6 bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Chat to us</h3>
                        <p className="text-gray-400 text-sm mb-2">Our friendly team is here to help.</p>
                        <span className="text-cyan-400 font-medium group-hover:underline">support@bridgebytetech.com</span>
                      </div>
                    </div>
                  </a>

                  {/* Phone Card */}
                  <a href="https://wa.me/33749797394" target="_blank" rel="noopener noreferrer" className="group block p-6 bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Phone / WhatsApp</h3>
                        <p className="text-gray-400 text-sm mb-2">Mon-Fri from 9am to 6pm.</p>
                        <span className="text-green-400 font-medium group-hover:underline">+33 7 49 79 73 94</span>
                      </div>
                    </div>
                  </a>

                  {/* Location Card */}
                  <div className="p-6 bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Office Locations</h3>
                        <p className="text-gray-400 text-sm mb-3">Come say hello at our office HQ.</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Globe className="w-4 h-4 text-purple-500" />
                            Paris, France
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <MapPin className="w-4 h-4 text-purple-500" />
                            Sylhet, Bangladesh
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Status Box */}
              <FadeIn delay={200}>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                    </div>
                    <span className="text-green-400 font-medium text-sm">Operational Status</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Our team is currently active and accepting new projects. Typical response time: <span className="text-white font-medium">Within 24 Hours</span>.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Premium Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={200}>
                <div className="bg-gray-900/60 backdrop-blur-2xl rounded-3xl border border-gray-800 p-8 md:p-10 shadow-2xl shadow-black/50 relative overflow-hidden">
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

                  <h2 className="text-2xl font-bold text-white mb-2 relative z-10">Send us a Message</h2>
                  <p className="text-gray-400 mb-8 relative z-10">Fill out the form below and we'll get back to you shortly.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Your Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
                        placeholder="I need help with..."
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project goals and timeline..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden relative"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? 'Opening Mail Client...' : 'Send Message'}
                        {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="pb-24 relative z-10">
        <div className="container-custom">
          <FadeIn>
            <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Prefer a detailed proposal?</h3>
                  <p className="text-gray-400">Get a comprehensive breakdown of costs and timeline.</p>
                </div>
              </div>
              <Link 
                href="/get-proposal" 
                className="whitespace-nowrap px-8 py-3 bg-gray-800 text-white font-medium rounded-full border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center gap-2"
              >
                Get a Free Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}