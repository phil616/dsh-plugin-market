import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "0xsline-dsh-spotlight",
  name: "dsh-spotlight",
  description: "键盘优先的命令面板（command palette）。",
  longDescription: "键盘优先的命令面板（command palette）。",
  author: { name: "0xsline", url: "https://github.com/0xsline" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/0xsline/dsh-spotlight",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:0xsline/dsh-spotlight",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/0xsline/dsh-spotlight/" },
  ],
};

