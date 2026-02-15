import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline prose-li:marker:text-slate-500">
      {children}
    </div>
  );
}