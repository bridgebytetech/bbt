import Link from "next/link";
import { Hero } from "@/components/legal/Hero";
import { Container } from "@/components/legal/Container";
import { Badge } from "@/components/legal/Badge";
import { Prose } from "@/components/legal/Prose";
import { site } from "@/lib/site";

export default function DeleteAccountPage() {
  return (
    <main>
      <Hero
        crumbs={
          <>
            <Link className="hover:text-white" href="/">Home</Link> <span className="text-slate-500">•</span>{" "}
            <strong className="text-slate-100">Delete Account</strong>
          </>
        }
        pill={<>Account Control</>}
        title={<>Delete Your {site.name} Account</>}
        subtitle={<>We believe in giving you full control over your data. Here’s how to permanently remove your account and personal information.</>}
        meta={
          <>
            <Badge>Guide: Account Deletion</Badge>
            <Badge>Support: {site.supportEmail}</Badge>
          </>
        }
      />

      <Container>
        <div className="py-10">
          <div className="mx-auto max-w-3xl space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
              <div className="text-sm font-semibold">Steps to Delete Your Account</div>
              <div className="mt-4 space-y-3 text-sm text-slate-200/90">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Open the <strong>{site.name}</strong> app.</li>
                  <li>Tap the hamburger menu (<strong>☰</strong>) in the top-left corner.</li>
                  <li>Scroll down and tap on <em>“Delete Account”</em> (just below “Logout”).</li>
                  <li>Confirm your choice when prompted.</li>
                </ol>

                <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-4 text-amber-100">
                  <strong>Important:</strong> Once you confirm, your account and all associated data will be permanently deleted and{" "}
                  <u>cannot</u> be recovered.
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="font-semibold">Need help?</div>
                  <div className="mt-1">
                    Email us at{" "}
                    <a className="text-blue-300 hover:underline" href={`mailto:${site.supportEmail}`}>
                      {site.supportEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Prose>
              <p className="text-sm text-slate-400">
                Tip: If you’re unable to access the app, contact support and include your registered email/username so we can guide you safely.
              </p>
            </Prose>
          </div>
        </div>
      </Container>
    </main>
  );
}