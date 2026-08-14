import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "leemancheung-dsh-token-usage",
  name: "dsh-token-usage",
  description: "持久化记录每个会话的 Token 用量，在设置页提供 provider/model 统计与最近 52 周活跃度热力图。",
  longDescription: "持久化记录每个会话的 Token 用量，在设置页提供 provider/model 统计与最近 52 周活跃度热力图。",
  author: { name: "LeemanCheung", url: "https://github.com/LeemanCheung" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/LeemanCheung/dsh-token-usage",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:LeemanCheung/dsh-token-usage",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/LeemanCheung/dsh-token-usage/" },
  ],
};

