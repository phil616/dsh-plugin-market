import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "laoyuehanni-dsh-token-usage",
  name: "dsh-token-usage",
  description: "按请求持久化模型 token 用量，Web 设置「Token 用量」统计页：按日趋势图、按模型明细表、日期/模型筛选。",
  longDescription: "按请求持久化模型 token 用量，Web 设置「Token 用量」统计页：按日趋势图、按模型明细表、日期/模型筛选。",
  author: { name: "LaoYueHanNi", url: "https://github.com/LaoYueHanNi" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/LaoYueHanNi/dsh-token-usage",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:LaoYueHanNi/dsh-token-usage",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/LaoYueHanNi/dsh-token-usage/" },
  ],
};

