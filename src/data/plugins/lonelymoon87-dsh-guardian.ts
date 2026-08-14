import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lonelymoon87-dsh-guardian",
  name: "dsh-guardian",
  description: "增加危险操作策略检查、输出脱敏和安全审查工作流。",
  longDescription: "增加危险操作策略检查、输出脱敏和安全审查工作流。",
  author: { name: "lonelymoon87", url: "https://github.com/lonelymoon87" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/lonelymoon87/dsh-guardian",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:lonelymoon87/dsh-guardian",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/lonelymoon87/dsh-guardian/" },
  ],
};

