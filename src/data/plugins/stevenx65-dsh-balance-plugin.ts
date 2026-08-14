import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "stevenx65-dsh-balance-plugin",
  name: "dsh-balance-plugin",
  description: "dsh 网页侧边栏的 DeepSeek 余额与 token 用量监控：今日/累计切换，并按 provider 过滤其他厂商。",
  longDescription: "dsh 网页侧边栏的 DeepSeek 余额与 token 用量监控：今日/累计切换，并按 provider 过滤其他厂商。",
  author: { name: "stevenx65", url: "https://github.com/stevenx65" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/stevenx65/dsh-balance-plugin",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:stevenx65/dsh-balance-plugin",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/stevenx65/dsh-balance-plugin/" },
  ],
};

