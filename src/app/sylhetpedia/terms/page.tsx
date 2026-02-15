import Link from "next/link";
import { Hero } from "@/components/legal/Hero";
import { Container } from "@/components/legal/Container";
import { Badge } from "@/components/legal/Badge";
import { Toc } from "@/components/legal/Toc";
import { PolicySection } from "@/components/legal/PolicySection";
import { Prose } from "@/components/legal/Prose";
import { site } from "@/lib/site";
import { termsToc } from "@/lib/legal";

export default function TermsPage() {
  return (
    <main>
      <Hero
        crumbs={
          <>
            <Link className="hover:text-white" href="/">Home</Link> <span className="text-slate-500">•</span>{" "}
            <span className="text-slate-400">Legal</span> <span className="text-slate-500">•</span>{" "}
            <strong className="text-slate-100">Terms & Conditions</strong>
          </>
        }
        pill={<>Legal Terms</>}
        title={<>Terms & Conditions for {site.name}</>}
        subtitle={
          <>By using {site.name}, you agree to these Terms & Conditions. Please read carefully before using the App.</>
        }
        meta={
          <>
            <Badge>Effective: {site.effectiveDate}</Badge>
            <Badge>Document: Terms & Conditions</Badge>
            <Badge>App: {site.name}</Badge>
          </>
        }
      />

      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-[280px_1fr]">
          <Toc items={termsToc} />

          <article className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
              <div>
                <div className="text-sm text-slate-300">Sylhetpedia Terms & Conditions</div>
                <div className="text-xs text-slate-400">Effective: {site.effectiveDate}</div>
              </div>
              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
              >
                Get Support
              </a>
            </div>

            <Prose>
              <div className="space-y-5">
                <PolicySection id="account" title="1. Account Creation & Responsibilities">
                  <p>
                    Users must provide accurate and valid information. You are responsible for safeguarding your login
                    credentials. Any activity that occurs under your account remains your responsibility.
                  </p>
                </PolicySection>

                <PolicySection id="user-content" title="2. User Content">
                  <ul>
                    <li>Allowed: blood donation, lost & found items, rentals, tuition posts, and approved categories.</li>
                    <li>All content is reviewed by admins before being shown.</li>
                    <li>Do not post illegal, offensive, harmful, or copyright-infringing material.</li>
                    <li>We reserve the right to edit, reject, or remove violating content.</li>
                  </ul>
                </PolicySection>

                <PolicySection id="privacy" title="3. Privacy & Data Usage">
                  <p>
                    Use of the App is governed by our <Link href="/privacy">Privacy Policy</Link>. By using the App, you
                    consent to data collection and processing as described there.
                  </p>
                </PolicySection>

                <PolicySection id="ads" title="4. Advertising & Third-Party Services">
                  <p>
                    The App may display ads. Third-party ad networks (e.g., Google AdMob) may collect data and
                    identifiers for personalized advertising.
                  </p>
                </PolicySection>

                <PolicySection id="termination" title="5. Account Termination">
                  <p>
                    You may delete your account at any time. We may suspend or terminate accounts that violate these
                    Terms or engage in harmful/illegal activity.
                  </p>
                </PolicySection>

                <PolicySection id="children" title="6. Children’s Use">
                  <p>
                    {site.name} is not intended for children under the age of 13. We do not knowingly collect data from
                    minors under 13.
                  </p>
                </PolicySection>

                <PolicySection id="service" title="7. Service Availability & Disclaimer">
                  <p>
                    The App is provided “as is” and “as available.” We do not guarantee uninterrupted access,
                    reliability, or error-free use. Content such as blood donation information is for informational
                    purposes only, not medical or legal advice.
                  </p>
                </PolicySection>

                <PolicySection id="liability" title="8. Limitation of Liability">
                  <p>
                    We are not liable for indirect, incidental, or consequential damages. {site.name} is not responsible
                    for user-posted content or third-party actions.
                  </p>
                </PolicySection>

                <PolicySection id="law" title="9. Governing Law">
                  <p>These Terms are governed by the laws of Bangladesh. Disputes will be resolved exclusively in courts located in Sylhet.</p>
                </PolicySection>

                <PolicySection id="future" title="10. Future Services & Payments">
                  <p>
                    {site.name} is currently free. Some premium features may require fees or subscriptions in the
                    future, with prior notice provided to users.
                  </p>
                </PolicySection>

                <PolicySection id="changes" title="11. Changes to Terms">
                  <p>
                    We may update these Terms occasionally. The latest version will always be accessible through the
                    App and Play Store listing. Continued use means you accept the new Terms.
                  </p>
                </PolicySection>

                <PolicySection id="contact" title="12. Contact Us">
                  <ul>
                    <li>
                      <strong>Email:</strong>{" "}
                      <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
                    </li>
                    <li>
                      <strong>Website:</strong>{" "}
                      <a href={site.website} target="_blank" rel="noopener noreferrer">
                        {site.website}
                      </a>
                    </li>
                  </ul>
                </PolicySection>
              </div>
            </Prose>
          </article>
        </div>
      </Container>
    </main>
  );
}