import { FadeIn } from '@/components/ui/animated';

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        
        <div className="container-custom relative">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-gray-400">
                Last updated: January 1, 2025
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto prose prose-invert prose-lg
              prose-headings:text-white prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-gray-400 prose-p:leading-relaxed
              prose-li:text-gray-400
              prose-strong:text-white">
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Bridge Byte Tech's website and services, you agree to be bound by 
                these Terms of Service and all applicable laws and regulations.
              </p>

              <h2>2. Services</h2>
              <p>
                Bridge Byte Tech provides software development services including but not limited to 
                web development, mobile app development, SaaS development, and related consulting services.
              </p>

              <h2>3. Project Agreements</h2>
              <p>
                All projects will be governed by separate project agreements that outline scope, timeline, 
                deliverables, and payment terms. These Terms of Service apply in addition to any project-specific agreements.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                Upon full payment, clients receive ownership of the deliverables as specified in the project agreement. 
                Bridge Byte Tech retains the right to use generic, non-confidential elements for portfolio purposes.
              </p>

              <h2>5. Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding client information and project details. 
                We will not disclose confidential information to third parties without prior consent.
              </p>

              <h2>6. Payment Terms</h2>
              <p>
                Payment terms are specified in individual project agreements. Generally, we require an 
                upfront deposit before starting work, with remaining payments tied to project milestones.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                Bridge Byte Tech shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services.
              </p>

              <h2>8. Termination</h2>
              <p>
                Either party may terminate a project agreement as specified in the project contract. 
                Termination terms and refund policies are outlined in individual agreements.
              </p>

              <h2>9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services 
                after changes constitutes acceptance of the new terms.
              </p>

              <h2>10. Contact</h2>
              <p>
                For questions about these Terms of Service, contact us at{' '}
                <a href="mailto:hello@bridgebytetech.com">hello@bridgebytetech.com</a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}