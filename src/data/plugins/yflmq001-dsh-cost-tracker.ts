import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "yflmq001-dsh-cost-tracker",
  name: "dsh-cost-tracker",
  description: "按模型追踪 token 成本：可配置缓存命中/未命中、输出与高峰时段单价，实时会话花费条，并标记未配置价格的模型。",
  longDescription: "按模型追踪 token 成本：可配置缓存命中/未命中、输出与高峰时段单价，实时会话花费条，并标记未配置价格的模型。",
  author: { name: "yflmq001", url: "https://github.com/yflmq001" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/yflmq001/dsh-cost-tracker",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:yflmq001/dsh-cost-tracker",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/yflmq001/dsh-cost-tracker/" },
  ],
};

