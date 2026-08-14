import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lzszq-dsh-scholar",
  name: "dsh-scholar",
  description: "学术助手插件。",
  longDescription: "学术助手插件。",
  author: { name: "lzszq", url: "https://github.com/lzszq" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/lzszq/dsh-scholar",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:lzszq/dsh-scholar",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/lzszq/dsh-scholar/" },
  ],
};

