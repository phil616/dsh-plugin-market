import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "letter2025-dsh-approval-llm",
  name: "dsh-approval-llm",
  description: "基于模型的权限审批：由独立审查模型自动应答 approval 权限请求。",
  longDescription: "基于模型的权限审批：由独立审查模型自动应答 approval 权限请求。",
  author: { name: "Letter2025", url: "https://github.com/Letter2025" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/Letter2025/dsh-approval-llm",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-approval-llm",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Letter2025/dsh-approval-llm",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Letter2025/dsh-approval-llm/" },
  ],
};

