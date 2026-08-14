import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lonelymoon87-dsh-code-intel",
  name: "dsh-code-intel",
  description: "用 Tree-sitter 建立工作区符号索引，提供词法或可选 embedding 辅助的代码检索。",
  longDescription: "用 Tree-sitter 建立工作区符号索引，提供词法或可选 embedding 辅助的代码检索。",
  author: { name: "lonelymoon87", url: "https://github.com/lonelymoon87" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/lonelymoon87/dsh-code-intel",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:lonelymoon87/dsh-code-intel",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/lonelymoon87/dsh-code-intel/" },
  ],
};

