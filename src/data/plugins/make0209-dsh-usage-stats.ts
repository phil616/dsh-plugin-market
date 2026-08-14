import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "make0209-dsh-usage-stats",
  name: "dsh-usage-stats",
  description: "GitHub 风格用量热力图看板：按工作区统计使用次数与 Token 花费（含缓存命中率）、DeepSeek 账户余额查询、工作区别名管理。",
  longDescription: "GitHub 风格用量热力图看板：按工作区统计使用次数与 Token 花费（含缓存命中率）、DeepSeek 账户余额查询、工作区别名管理。",
  author: { name: "Make0209", url: "https://github.com/Make0209" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Make0209/dsh-usage-stats",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Make0209/dsh-usage-stats",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Make0209/dsh-usage-stats/" },
  ],
};

