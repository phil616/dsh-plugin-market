import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "vlln-dsh-navbar",
  name: "dsh-navbar",
  description: "对话节点导航条，右缘节点串快速跳转 user 消息。",
  longDescription: "对话节点导航条，右缘节点串快速跳转 user 消息。",
  author: { name: "vlln", url: "https://github.com/vlln" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/vlln/dsh-navbar",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:vlln/dsh-navbar",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/vlln/dsh-navbar/" },
  ],
};

