import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "sev7een-ds-api-usage",
  name: "ds-api-usage",
  description: "在设置页展示 DeepSeek API 余额与最近 24 小时用量，包括估算消费、Token、请求次数和按小时时间线。",
  longDescription: "在设置页展示 DeepSeek API 余额与最近 24 小时用量，包括估算消费、Token、请求次数和按小时时间线。",
  author: { name: "Sev7een", url: "https://github.com/Sev7een" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Sev7een/ds-api-usage",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Sev7een/ds-api-usage",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Sev7een/ds-api-usage/" },
  ],
};

