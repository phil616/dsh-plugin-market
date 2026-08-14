import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "fishxcode-dsh-plugin-deepseek-balance",
  name: "dsh-plugin-deepseek-balance",
  description: "在 DSH Web 设置中展示 DeepSeek API 余额、余额趋势与每日用量图表。",
  longDescription: "在 DSH Web 设置中展示 DeepSeek API 余额、余额趋势与每日用量图表。",
  author: { name: "fishxcode", url: "https://github.com/fishxcode" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/fishxcode/dsh-plugin-deepseek-balance",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:fishxcode/dsh-plugin-deepseek-balance",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/fishxcode/dsh-plugin-deepseek-balance/" },
  ],
};

