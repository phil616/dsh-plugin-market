import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "moeblack-dsh-message-edit",
  name: "dsh-message-edit",
  description: "基于分支的消息编辑、reroll、重试与版本时间线。",
  longDescription: "基于分支的消息编辑、reroll、重试与版本时间线。",
  author: { name: "Moeblack", url: "https://github.com/Moeblack" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/Moeblack/dsh-message-edit",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Moeblack/dsh-message-edit",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Moeblack/dsh-message-edit/" },
  ],
};

