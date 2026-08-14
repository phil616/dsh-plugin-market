import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "openma-ai-deepseek-harness-tui",
  name: "deepseek-harness-tui",
  description: "Rust/ratatui 终端客户端，直接使用 DSH SDK JSON-RPC 协议，支持独立运行或作为 profile bundle 加载。",
  longDescription: "Rust/ratatui 终端客户端，直接使用 DSH SDK JSON-RPC 协议，支持独立运行或作为 profile bundle 加载。",
  author: { name: "openma-ai", url: "https://github.com/openma-ai" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/openma-ai/deepseek-harness-tui",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:openma-ai/deepseek-harness-tui",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/openma-ai/deepseek-harness-tui/" },
  ],
};

