import { useMemo, useState, type ReactNode } from "react";
import { ArrowUpRight, Layers, SearchX, Sparkles } from "lucide-react";
import type { Plugin } from "@/types/plugin";
import { filterPlugins } from "@/utils/search";
import { sortPlugins, tagLabel, type SortMode } from "@/utils/plugin";
import SearchBox from "./SearchBox";
import PluginFilter from "./PluginFilter";

interface Props {
  plugins: Plugin[];
  tags: string[];
}

function PluginCardView({ plugin }: { plugin: Plugin }) {
  const visibleTags = plugin.tags.slice(0, 3);
  const hiddenCount = plugin.tags.length - visibleTags.length;

  return (
    <a
      href={`/plugins/${plugin.slug}`}
      className="group surface-card relative flex h-full min-h-56 flex-col overflow-hidden p-5 transition-[transform,border-color,box-shadow] duration-200 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-200 hover:-translate-y-1 hover:border-accent/45 hover:shadow-lg hover:shadow-black/[0.06] hover:before:scale-x-100"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent">
          {plugin.name}
        </h3>
        <div className="flex flex-wrap justify-end gap-1.5">
          {plugin.example && (
            <span className="rounded-md border border-accent/35 bg-accent-soft/70 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-accent">
              示例
            </span>
          )}
          {plugin.deprecated && (
            <span className="rounded border border-red-400/50 bg-red-500/10 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-red-500 dark:text-red-400">
              已弃用
            </span>
          )}
        </div>
      </div>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
        {plugin.description}
      </p>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap items-center gap-1.5">
          {visibleTags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tagLabel(t)}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className="font-mono text-[11px] text-muted-foreground">+{hiddenCount}</span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-border pt-4">
          <p className="min-w-0 truncate text-xs text-muted-foreground">
            作者 <span className="font-medium text-foreground">{plugin.author.name}</span>
          </p>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Explorer                                                            */
/* ------------------------------------------------------------------ */

function SectionHeading({ icon, title, count }: { icon: ReactNode; title: string; count: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-soft text-accent">
        {icon}
      </span>
      <h2 className="font-display text-xl font-semibold tracking-[-0.025em]">{title}</h2>
      <span className="rounded-full border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
        {count}
      </span>
    </div>
  );
}

export default function PluginExplorer({ plugins, tags }: Props) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [sort, setSort] = useState<SortMode>("featured");

  const isFiltering = query.trim().length > 0 || tag !== null;

  const visible = useMemo(() => {
    return sortPlugins(filterPlugins(plugins, { query, tag }), sort);
  }, [plugins, query, tag, sort]);

  const featured = useMemo(() => plugins.filter((p) => p.featured), [plugins]);

  const clearAll = () => {
    setQuery("");
    setTag(null);
  };

  return (
    <section className="shell pb-20 sm:pb-24" aria-label="浏览插件">
      {/* 搜索框 — 与 Hero 视觉衔接 */}
      <div className="relative z-10 mx-auto -mt-7 max-w-3xl">
        <div className="surface-card p-2 sm:p-3">
          <SearchBox value={query} onChange={setQuery} />
        </div>
        <p className="mt-2.5 text-center text-xs text-muted-foreground">
          按名称、描述、标签或作者搜索
        </p>
      </div>

      {isFiltering ? (
        <div className="mt-10 sm:mt-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {tag ? `标签：${tagLabel(tag)}` : `搜索词：“${query.trim()}”`}
              </p>
              <p className="mt-1 font-display text-lg font-semibold tracking-tight">
                {visible.length} 个结果
              </p>
            </div>
            <button
              type="button"
              onClick={clearAll}
              className="rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-semibold text-muted-foreground shadow-sm transition-colors duration-150 hover:border-accent/50 hover:bg-accent-soft/40 hover:text-foreground"
            >
              清除筛选
            </button>
          </div>

          {visible.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {visible.map((p) => (
                <li key={p.slug} className="min-w-0">
                  <PluginCardView plugin={p} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="surface-card border-dashed px-6 py-16 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <SearchX className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">未找到插件。</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                换个关键词试试，或清除一些筛选条件。
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-5 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity duration-150 hover:opacity-90"
              >
                重置筛选
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          {featured.length > 0 && (
            <div className="mt-10 sm:mt-12">
              <SectionHeading
                icon={<Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />}
                title="精选插件"
                count={featured.length}
              />
              <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {featured.map((p) => (
                  <li key={p.slug} className="min-w-0">
                    <PluginCardView plugin={p} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 sm:mt-14">
            <SectionHeading
              icon={<Layers className="h-4 w-4 text-accent" aria-hidden="true" />}
              title="全部插件"
              count={plugins.length}
            />
            <div className="surface-card mt-5 p-3 sm:p-4">
              <PluginFilter
                tags={tags}
                activeTag={tag}
                onTagChange={setTag}
                sort={sort}
                onSortChange={setSort}
              />
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {visible.map((p) => (
                <li key={p.slug} className="min-w-0">
                  <PluginCardView plugin={p} />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
