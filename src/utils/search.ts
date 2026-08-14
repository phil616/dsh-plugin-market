import Fuse, { type IFuseOptions } from "fuse.js";
import type { Plugin } from "@/types/plugin";
import { tagLabel } from "@/utils/plugin";

export interface SearchOptions {
  query: string;
  tag?: string | null;
}

const fuseOptions: IFuseOptions<Plugin> = {
  keys: [
    { name: "name", weight: 0.4 },
    { name: "description", weight: 0.3 },
    { name: "tags", weight: 0.2 },
    { name: "author.name", weight: 0.1 },
  ],
  threshold: 0.38,
  ignoreLocation: true,
  ignoreFieldNorm: true,
  isCaseSensitive: false,
  shouldSort: true,
  includeScore: false,
};

/** 把每个 tag 的中文显示名也加入索引，支持用中文标签搜索。 */
function withSearchableTags(plugins: Plugin[]): Plugin[] {
  return plugins.map((p) => ({
    ...p,
    tags: [...new Set([...p.tags, ...p.tags.map(tagLabel)])],
  }));
}

/** Full-text search over name / description / tags / author.name. */
export function searchPlugins(plugins: Plugin[], query: string): Plugin[] {
  const q = query.trim();
  if (!q) return [...plugins];
  const fuse = new Fuse(withSearchableTags(plugins), fuseOptions);
  return fuse.search(q).map((r) => r.item);
}

/** Search + optional tag filter in one pass (empty query → tag filter only). */
export function filterPlugins(plugins: Plugin[], { query, tag }: SearchOptions): Plugin[] {
  let result = searchPlugins(plugins, query);
  if (tag) {
    const t = tag.toLowerCase();
    result = result.filter((p) => p.tags.some((x) => x.toLowerCase() === t));
  }
  return result;
}
