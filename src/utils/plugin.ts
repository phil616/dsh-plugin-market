import type { Plugin } from "@/types/plugin";

export type SortMode = "featured" | "name-asc" | "name-desc";

/**
 * Tag 的中文显示标签。tag 的原始值（英文）保持不变，用于 URL
 * （/tags/search）与筛选匹配；界面显示统一走 tagLabel()。
 */
const TAG_LABELS: Record<string, string> = {
  Search: "搜索",
  Web: "网络",
  Tool: "工具",
  Git: "Git",
  Developer: "开发者",
  Automation: "自动化",
  Memory: "记忆",
  AI: "AI",
  Browser: "浏览器",
  Files: "文件",
  Database: "数据库",
  HTTP: "HTTP",
  MCP: "MCP",
  Integrations: "集成",
  Docker: "Docker",
  Design: "设计",
  UI: "界面",
  Skill: "技能",
  Persona: "人设",
  Theme: "主题与外观",
  Session: "会话与消息",
  Notification: "通知与集成",
  Model: "模型与账号接入",
  Development: "开发与运行时",
  Fun: "娱乐",
};

/** 返回 tag 的中文显示名；未收录的 tag 原样返回。 */
export function tagLabel(tag: string): string {
  return TAG_LABELS[tag] ?? tag;
}

/** Default order: featured first, then name A→Z. */
export function sortPlugins(plugins: Plugin[], mode: SortMode = "featured"): Plugin[] {
  const list = [...plugins];
  const byName = (a: Plugin, b: Plugin) => a.name.localeCompare(b.name, "zh-Hans-CN");
  switch (mode) {
    case "name-asc":
      return list.sort(byName);
    case "name-desc":
      return list.sort((a, b) => byName(b, a));
    case "featured":
    default:
      return list.sort((a, b) => {
        const af = a.featured ? 1 : 0;
        const bf = b.featured ? 1 : 0;
        if (af !== bf) return bf - af;
        return byName(a, b);
      });
  }
}

/** Every tag used by the plugin set, sorted alphabetically. */
export function getAllTags(plugins: Plugin[]): string[] {
  const set = new Set<string>();
  for (const p of plugins) {
    for (const t of p.tags) set.add(t);
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}

/** Plugins that carry the given tag. */
export function getPluginsByTag(plugins: Plugin[], tag: string): Plugin[] {
  return plugins.filter((p) => p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
}

/** 帮助类条目（文档 / 资源 / 软件等辅助内容），用于 /help 页面。 */
export function getHelpPlugins(plugins: Plugin[]): Plugin[] {
  return sortPlugins(plugins).filter((p) => p.category === "help");
}

export function getFeaturedPlugins(plugins: Plugin[]): Plugin[] {
  return sortPlugins(plugins).filter((p) => p.featured);
}
