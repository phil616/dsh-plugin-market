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
  return `h-8 rounded-full border px-3 text-xs font-medium transition-colors duration-150 ${
    active
      ? "border-accent bg-accent text-white dark:text-black"
      : "border-border bg-card text-muted-foreground hover:border-accent/60 hover:text-foreground"
  }`;
}

export default function PluginFilter({ tags, activeTag, onTagChange, sort, onSortChange }: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div role="group" aria-label="按标签筛选" className="flex flex-wrap items-center gap-1.5">
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

      <div className="relative w-full sm:w-auto">
        <label htmlFor="plugin-sort" className="sr-only">
          插件排序
        </label>
        <select
          id="plugin-sort"
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortMode)}
          className="h-9 w-full appearance-none rounded-lg border border-border bg-card pl-3 pr-9 text-sm text-foreground outline-none transition-colors duration-150 hover:border-accent/60 focus:border-accent/60 focus:ring-2 focus:ring-ring/40 sm:w-44"
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
