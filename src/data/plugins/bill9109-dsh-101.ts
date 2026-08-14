import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "bill9109-dsh-101",
  name: "dsh-101",
  description: "DSH 文档阅读模式。",
  longDescription: "DSH 文档阅读模式。",
  author: { name: "bill9109", url: "https://github.com/bill9109" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/bill9109/dsh-101",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:bill9109/dsh-101",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/bill9109/dsh-101/" },
  ],
};

