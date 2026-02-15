import type { ReactNode } from "react";
import { Container } from "./Container";

export function Hero({
  crumbs,
  pill,
  title,
  subtitle,
  meta,
}: {
  crumbs?: ReactNode;
  pill?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(59,130,246,.18),transparent_45%),radial-gradient(800px_circle_at_80%_10%,rgba(168,85,247,.14),transparent_40%)]" />
      <Container>
        <div className="relative py-12 sm:py-16">
          {crumbs && <div className="mb-6 text-sm text-slate-300">{crumbs}</div>}

          <div className="space-y-4">
            {pill && (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                {pill}
              </div>
            )}

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>

            {subtitle && <p className="max-w-2xl text-base text-slate-200/90 sm:text-lg">{subtitle}</p>}

            {meta && <div className="flex flex-wrap gap-2 pt-2">{meta}</div>}
          </div>
        </div>
      </Container>
    </header>
  );
}