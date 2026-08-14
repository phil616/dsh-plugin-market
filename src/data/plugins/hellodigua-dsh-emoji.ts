import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "hellodigua-dsh-emoji",
  name: "dsh-emoji",
  description: "为 AI 回复自动添加表情。",
  longDescription: "为 AI 回复自动添加表情。",
  author: { name: "hellodigua", url: "https://github.com/hellodigua" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/hellodigua/dsh-emoji",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:hellodigua/dsh-emoji",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/hellodigua/dsh-emoji/" },
  ],
};

