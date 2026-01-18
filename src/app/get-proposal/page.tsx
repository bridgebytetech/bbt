'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight,
  ArrowLeft,
  Send,
  CheckCircle,
  ShoppingCart,
  Package,
  Globe2,
  Smartphone,
  Cpu,
  Server,
  Cloud
} from 'lucide-react';
import { FadeIn } from '@/components/ui/animated';

const services = [
  { id: 'E-Commerce', label: 'E-Commerce', icon: ShoppingCart },
  { id: 'SaaS', label: 'SaaS Development', icon: Package },
  { id: 'Web App', label: 'Web Application', icon: Globe2 },
  { id: 'Mobile App', label: 'Mobile App', icon: Smartphone },
  { id: 'AI/Automation', label: 'AI & Automation', icon: Cpu },
  { id: 'Backend/API', label: 'Backend & APIs', icon: Server },
  { id: 'Cloud/DevOps', label: 'Cloud & DevOps', icon: Cloud },
];

const budgetRanges = [
  'Under 20,000 BDT',
  '20,000 - 40,000 BDT',
  '40,000 - 70,000 BDT',
  '70,000 - 100,000 BDT',
  '100,000 BDT+',
  'Not sure yet',
];

const timelines = [
  'ASAP',
  '1-2 months',
  '3-6 months',
  '6+ months',
  'Not sure yet',
];

export default function GetProposalPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    services: [] as string[],
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct email body
    const subject = `Project Proposal Request from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'N/A'}

Services Interested In:
${formData.services.join(', ')}

Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Project Description:
${formData.description}
    `;

    // Open mail client
    window.location.href = `mailto:hello@bridgebytetech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        
        <div className="container-custom relative">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get a Free Proposal
              </h1>
              <p className="text-lg text-gray-400">
                Tell us about your project and we'll prepare a detailed proposal. This will open your email client to send us the details directly.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding pt-8 mb-16 lg:mb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Progress */}
            <FadeIn>
              <div className="flex items-center justify-center gap-4 mb-12">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= s ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-500'
                    }`}>
                      {s}
                    </div>
                    {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-cyan-500' : 'bg-gray-800'}`} />}
                  </div>
                ))}
              </div>
            </FadeIn>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Services */}
              {step === 1 && (
                <FadeIn>
                  <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8">
                    <h2 className="text-2xl font-bold text-white mb-2">What do you need?</h2>
                    <p className="text-gray-400 mb-8">Select all services that apply to your project.</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 text-left ${
                            formData.services.includes(service.id)
                              ? 'bg-cyan-500/10 border-cyan-500/50 text-white'
                              : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:border-gray-700'
                          }`}
                        >
                          <service.icon className={`w-5 h-5 ${formData.services.includes(service.id) ? 'text-cyan-500' : ''}`} />
                          {service.label}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={formData.services.length === 0}
                      className="w-full px-6 py-4 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </FadeIn>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <FadeIn>
                  <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Project Details</h2>
                    <p className="text-gray-400 mb-8">Tell us more about your project requirements.</p>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {budgetRanges.map((budget) => (
                            <button
                              key={budget}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget })}
                              className={`px-4 py-3 rounded-xl border text-sm transition-all ${
                                formData.budget === budget
                                  ? 'bg-cyan-500/10 border-cyan-500/50 text-white'
                                  : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:border-gray-700'
                              }`}
                            >
                              {budget}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {timelines.map((timeline) => (
                            <button
                              key={timeline}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline })}
                              className={`px-4 py-3 rounded-xl border text-sm transition-all ${
                                formData.timeline === timeline
                                  ? 'bg-cyan-500/10 border-cyan-500/50 text-white'
                                  : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:border-gray-700'
                              }`}
                            >
                              {timeline}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          rows={4}
                          className="input resize-none"
                          placeholder="Describe your project, goals, and any specific requirements..."
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-4 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 px-6 py-4 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2"
                      >
                        Continue
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </FadeIn>
              )}

              {/* Step 3: Contact */}
              {step === 3 && (
                <FadeIn>
                  <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Your Information</h2>
                    <p className="text-gray-400 mb-8">How can we reach you?</p>
                    
                    <div className="space-y-6 mb-8">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="input"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="input"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Company (Optional)</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="input"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-4 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.name || !formData.email}
                        className="flex-1 px-6 py-4 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? 'Opening Mail...' : 'Send via Email'}
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </FadeIn>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}