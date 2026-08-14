import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "openma-ai-deepseek-harness-acp",
  name: "deepseek-harness-acp",
  description: "ACP profile 插件与独立 stdio server，可从 Zed 等 ACP 客户端使用完整 DSH agent，并共享 DSH 凭据与会话。",
  longDescription: "ACP profile 插件与独立 stdio server，可从 Zed 等 ACP 客户端使用完整 DSH agent，并共享 DSH 凭据与会话。",
  author: { name: "openma-ai", url: "https://github.com/openma-ai" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/openma-ai/deepseek-harness-acp",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add @openma/deepseek-harness-acp",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:openma-ai/deepseek-harness-acp",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/openma-ai/deepseek-harness-acp/" },
  ],
};

