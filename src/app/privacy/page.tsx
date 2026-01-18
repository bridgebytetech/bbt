import { FadeIn } from '@/components/ui/animated';

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        
        <div className="container-custom relative">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy Policy
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
              
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you fill out a contact form, 
                request a proposal, or communicate with us via email.
              </p>
              <ul>
                <li>Name and email address</li>
                <li>Company name and role</li>
                <li>Project details and requirements</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and requests</li>
                <li>Provide you with information about our services</li>
                <li>Send you project proposals and estimates</li>
                <li>Communicate about ongoing projects</li>
                <li>Improve our website and services</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties. 
                We may share information with trusted service providers who assist us in operating our website 
                and conducting our business.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>5. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can choose to disable 
                cookies through your browser settings.
              </p>

              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:hello@bridgebytetech.com">hello@bridgebytetech.com</a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}