import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "penguin-oo-dsh-bookmarks",
  name: "dsh-bookmarks",
  description: "收藏 AI 回复（备注/标签），跨会话收藏中心（搜索/筛选/跳回会话），一键导出 Markdown。",
  longDescription: "收藏 AI 回复（备注/标签），跨会话收藏中心（搜索/筛选/跳回会话），一键导出 Markdown。",
  author: { name: "penguin-oo", url: "https://github.com/penguin-oo" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/penguin-oo/dsh-bookmarks",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:penguin-oo/dsh-bookmarks",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/penguin-oo/dsh-bookmarks/" },
  ],
};

