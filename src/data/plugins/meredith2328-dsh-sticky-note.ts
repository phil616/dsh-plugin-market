import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "meredith2328-dsh-sticky-note",
  name: "dsh-sticky-note",
  description: "编辑框工具栏便签，随手记点子和 TODO，自动保存为 Markdown，一键发送到对话。",
  longDescription: "编辑框工具栏便签，随手记点子和 TODO，自动保存为 Markdown，一键发送到对话。",
  author: { name: "Meredith2328", url: "https://github.com/Meredith2328" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Meredith2328/dsh-sticky-note",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Meredith2328/dsh-sticky-note",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Meredith2328/dsh-sticky-note/" },
  ],
};

