import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lehhair-dsh-diff-viewer",
  name: "dsh-diff-viewer",
  description: "PiUI 风格 diff 查看器，替换 write/edit 工具调用的默认 DiffBlock。",
  longDescription: "PiUI 风格 diff 查看器，替换 write/edit 工具调用的默认 DiffBlock。",
  author: { name: "lehhair", url: "https://github.com/lehhair" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/lehhair/dsh-diff-viewer",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:lehhair/dsh-diff-viewer",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/lehhair/dsh-diff-viewer/" },
  ],
};

