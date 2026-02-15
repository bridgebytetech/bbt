import type { ReactNode } from "react";

export function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-soft"
    >
      <h3 className="mb-2 text-lg font-semibold text-slate-50">{title}</h3>
      <div className="text-sm leading-7 text-slate-200/90">{children}</div>
    </section>
  );
}