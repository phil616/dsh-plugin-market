import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lonelymoon87-dsh-gitflow",
  name: "dsh-gitflow",
  description: "增加需要审批的 Git 状态、diff、日志、提交、分支和可选检查点工具。",
  longDescription: "增加需要审批的 Git 状态、diff、日志、提交、分支和可选检查点工具。",
  author: { name: "lonelymoon87", url: "https://github.com/lonelymoon87" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/lonelymoon87/dsh-gitflow",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:lonelymoon87/dsh-gitflow",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/lonelymoon87/dsh-gitflow/" },
  ],
};

