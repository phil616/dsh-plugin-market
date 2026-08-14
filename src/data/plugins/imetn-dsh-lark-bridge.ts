import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "imetn-dsh-lark-bridge",
  name: "dsh-lark-bridge",
  description: "DeepSeek Harness 的飞书/Lark 双向控制器，支持 Project 与 Session 路由、交互卡片、审批、附件和任务控制。",
  longDescription: "DeepSeek Harness 的飞书/Lark 双向控制器，支持 Project 与 Session 路由、交互卡片、审批、附件和任务控制。",
  author: { name: "imetn", url: "https://github.com/imetn" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/imetn/dsh-lark-bridge",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:imetn/dsh-lark-bridge",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/imetn/dsh-lark-bridge/" },
  ],
};

