import { ChevronDown } from "lucide-react";
import type { SortMode } from "@/utils/plugin";
import { tagLabel } from "@/utils/plugin";

interface Props {
  tags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
  sort: SortMode;
  onSortChange: (sort: SortMode) => void;
}

function pill(active: boolean): string {
  return `h-9 shrink-0 rounded-full border px-3.5 text-xs font-semibold transition-[color,background-color,border-color,box-shadow] duration-150 ${
    active
      ? "border-accent bg-accent text-accent-foreground shadow-sm"
      : "border-border bg-card text-muted-foreground hover:border-accent/50 hover:bg-accent-soft/45 hover:text-foreground"
  }`;
}

export default function PluginFilter({ tags, activeTag, onTagChange, sort, onSortChange }: Props) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
      <div
        role="group"
        aria-label="按标签筛选"
        className="scrollbar-none -mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0"
      >
        <button
          type="button"
          onClick={() => onTagChange(null)}
          aria-pressed={activeTag === null}
          className={pill(activeTag === null)}
        >
          全部
        </button>
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => onTagChange(activeTag === t ? null : t)}
            aria-pressed={activeTag === t}
            className={pill(activeTag === t)}
          >
            {tagLabel(t)}
          </button>
        ))}
      </div>

      <div className="relative w-full shrink-0 sm:w-auto">
        <label htmlFor="plugin-sort" className="sr-only">
          插件排序
        </label>
        <select
          id="plugin-sort"
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortMode)}
          className="h-10 w-full appearance-none rounded-xl border border-border bg-card pl-3.5 pr-10 text-sm font-medium text-foreground shadow-sm outline-none transition-[border-color,box-shadow] duration-150 hover:border-muted-foreground/40 focus:border-accent focus:ring-4 focus:ring-ring/15 sm:w-44"
        >
          <option value="featured">精选优先</option>
          <option value="name-asc">名称 A–Z</option>
          <option value="name-desc">名称 Z–A</option>
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
