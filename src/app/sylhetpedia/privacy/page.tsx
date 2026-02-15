import Link from "next/link";
import { Hero } from "@/components/legal/Hero";
import { Container } from "@/components/legal/Container";
import { Badge } from "@/components/legal/Badge";
import { Toc } from "@/components/legal/Toc";
import { PolicySection } from "@/components/legal/PolicySection";
import { Prose } from "@/components/legal/Prose";
import { site } from "@/lib/site";
import { privacyToc } from "@/lib/legal";

export default function PrivacyPage() {
  return (
    <main>
      <Hero
        crumbs={
          <>
            <Link className="hover:text-white" href="/">Home</Link> <span className="text-slate-500">•</span>{" "}
            <strong className="text-slate-100">Privacy Policy</strong>
          </>
        }
        pill={<>Privacy</>}
        title={<>Privacy Policy</>}
        subtitle={<>How {site.name} collects, uses, stores, and protects your data. Please review carefully.</>}
        meta={
          <>
            <Badge>Effective: {site.effectiveDate}</Badge>
            <Badge>Document: Privacy Policy</Badge>
            <Badge>App: {site.name}</Badge>
          </>
        }
      />

      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-[280px_1fr]">
          <Toc items={privacyToc} />

          <article className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
              <div className="text-sm font-semibold">Sylhetpedia Privacy Policy</div>
              <div className="text-xs text-slate-400">Effective: {site.effectiveDate}</div>
            </div>

            <Prose>
              <div className="space-y-5">
                <PolicySection id="collect" title="1. Information We Collect">
                  <ul>
                    <li><strong>Personal Information:</strong> email, username, login credentials.</li>
                    <li><strong>User Content:</strong> posts related to blood donation, lost & found, rentals, tuitions.</li>
                    <li><strong>App Usage Data:</strong> chatbot queries, usage logs, activity interactions.</li>
                    <li><strong>Device Info:</strong> device model, OS, IP, app version, crash reports.</li>
                    <li><em>Note: Blood donation posts are user generated and informational. Sensitive health data is not processed by Sylhetpedia.</em></li>
                  </ul>
                </PolicySection>

                <PolicySection id="use" title="2. How We Use Data">
                  <ul>
                    <li>Manage user accounts (login, reset, delete).</li>
                    <li>Moderate and display approved posts.</li>
                    <li>Provide chatbot responses and features.</li>
                    <li>Send notifications & alerts.</li>
                    <li>Maintain, improve, and secure the App.</li>
                  </ul>
                </PolicySection>

                <PolicySection id="storage" title="3. Data Storage & Security">
                  <p>
                    Data is securely stored with restricted database access. Retention lasts while your account is
                    active or as legally required. Encryption & safeguards prevent unauthorized access.
                  </p>
                </PolicySection>

                <PolicySection id="sharing" title="4. Data Sharing">
                  <p>We do not sell your data. Sharing occurs only with:</p>
                  <ul>
                    <li>Service providers (e.g., Google Firebase for analytics, crash reporting, push notifications).</li>
                    <li>Ad networks (e.g., Google AdMob) that may collect identifiers for personalized ads.</li>
                  </ul>
                </PolicySection>

                <PolicySection id="cookies" title="5. Cookies & Tracking">
                  <p>
                    The App or partners may use cookies or similar tools for analytics and ads. By using the App, you
                    consent to these practices.
                  </p>
                </PolicySection>

                <PolicySection id="rights" title="6. Your Rights & Consent">
                  <p>
                    You may access, correct, or delete your data at any time, or remove your account through the App.
                    Requests can also be made by email.
                  </p>
                  <p>
                    By creating an account or using {site.name}, you accept this Privacy Policy and also our{" "}
                    <Link href="/terms">Terms & Conditions</Link>.
                  </p>
                </PolicySection>

                <PolicySection id="children" title="7. Children’s Privacy">
                  <p>{site.name} is not intended for children under 13, and no data is knowingly collected from them.</p>
                </PolicySection>

                <PolicySection id="changes" title="8. Changes">
                  <p>
                    This Privacy Policy may be updated. The latest version will always be available in-app and in the
                    Play Store listing. Continued use means agreement.
                  </p>
                </PolicySection>

                <PolicySection id="contact" title="9. Contact Us">
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