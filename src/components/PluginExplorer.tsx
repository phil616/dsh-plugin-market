import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowUpRight, Layers, SearchX, Sparkles } from "lucide-react";
import type { Plugin } from "@/types/plugin";
import { filterPlugins } from "@/utils/search";
import { placeholderHue, sortPlugins, tagLabel, type SortMode } from "@/utils/plugin";
import SearchBox from "./SearchBox";
import PluginFilter from "./PluginFilter";

interface Props {
  plugins: Plugin[];
  tags: string[];
}

/* ------------------------------------------------------------------ */
/* Card + icon (mirror of PluginCard.astro / PluginIcon.astro)         */
/* ------------------------------------------------------------------ */

function PluginIconView({ plugin, size }: { plugin: Plugin; size: number }) {
  if (plugin.icon) {
    return (
      <img
        src={plugin.icon}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        className="shrink-0 rounded-lg object-cover"
      />
    );
  }
  const hue = placeholderHue(plugin.slug);
  return (
    <span
      aria-hidden="true"
      className="placeholder-icon flex shrink-0 select-none items-center justify-center rounded-lg font-display font-semibold"
      style={
        {
          width: `${size}px`,
          height: `${size}px`,
          fontSize: `${Math.round(size * 0.44)}px`,
          "--hue": `${hue}`,
        } as CSSProperties
      }
    >
      {plugin.name.trim()[0]?.toUpperCase() ?? "?"}
    </span>
  );
}

function PluginCardView({ plugin }: { plugin: Plugin }) {
  const visibleTags = plugin.tags.slice(0, 3);
  const hiddenCount = plugin.tags.length - visibleTags.length;

  return (
    <a
      href={`/plugins/${plugin.slug}`}
      className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-md hover:shadow-black/[0.05]"
    >
      <div className="flex items-start justify-between gap-3">
        <PluginIconView plugin={plugin} size={44} />
        <div className="flex flex-wrap justify-end gap-1.5">
          {plugin.example && (
            <span className="rounded border border-accent/40 bg-accent-soft/70 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
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

      <h3 className="mt-4 font-display text-base font-semibold tracking-tight">{plugin.name}</h3>

      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {plugin.description}
      </p>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap items-center gap-1.5">
          {visibleTags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tagLabel(t)}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className="font-mono text-[11px] text-muted-foreground">+{hiddenCount}</span>
          )}
        </div>

        <div className="mt-3.5 flex items-center justify-between gap-2 border-t border-border pt-3.5">
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
    <div className="flex items-center gap-2">
      {icon}
      <h2 className="font-display text-lg font-semibold tracking-tight">{title}</h2>
      <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
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
    <section className="shell pb-20 pt-8 sm:pb-24" aria-label="浏览插件">
      {/* 搜索框 — 与 Hero 视觉衔接 */}
      <div className="mx-auto max-w-2xl">
        <SearchBox value={query} onChange={setQuery} autoFocus />
        <p className="mt-2 text-center font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          按名称、描述、标签或作者搜索
        </p>
      </div>

      {isFiltering ? (
        <div className="mt-12">
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
              className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-150 hover:border-accent/60 hover:text-foreground"
            >
              清除筛选
            </button>
          </div>

          {visible.length > 0 ? (
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <li key={p.slug} className="min-w-0">
                  <PluginCardView plugin={p} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-card/60 px-6 py-16 text-center">
              <SearchX className="mx-auto h-8 w-8 text-muted-foreground" aria-hidden="true" />
              <h3 className="mt-4 font-display text-base font-semibold">未找到插件。</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                换个关键词试试，或清除一些筛选条件。
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:border-accent/60"
              >
                重置筛选
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          {featured.length > 0 && (
            <div className="mt-14">
              <SectionHeading
                icon={<Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />}
                title="精选插件"
                count={featured.length}
              />
              <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((p) => (
                  <li key={p.slug} className="min-w-0">
                    <PluginCardView plugin={p} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-14">
            <SectionHeading
              icon={<Layers className="h-4 w-4 text-accent" aria-hidden="true" />}
              title="全部插件"
              count={plugins.length}
            />
            <div className="mt-5">
              <PluginFilter
                tags={tags}
                activeTag={tag}
                onTagChange={setTag}
                sort={sort}
                onSortChange={setSort}
              />
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
