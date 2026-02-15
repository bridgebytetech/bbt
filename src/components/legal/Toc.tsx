import type { TocItem } from "@/lib/legal";

export function Toc({ items }: { items: TocItem[] }) {
  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-full max-w-[280px] self-start md:block">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-soft">
        <div className="mb-3 text-sm font-semibold text-slate-100">On this page</div>
        <ul className="space-y-2 text-sm text-slate-300">
          {items.map((it) => (
            <li key={it.id}>
              <a
                className="group flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-white/5 hover:text-white"
                href={`#${it.id}`}
              >
                <span className="h-5 w-[3px] rounded-full bg-white/10 group-hover:bg-blue-400" />
                <span>{it.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}