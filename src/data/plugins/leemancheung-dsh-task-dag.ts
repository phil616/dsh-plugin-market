import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "leemancheung-dsh-task-dag",
  name: "dsh-task-dag",
  description: "将会话子代理与持久工作流运行展示为实时 DAG，支持状态展示、节点导航与重启后历史恢复。",
  longDescription: "将会话子代理与持久工作流运行展示为实时 DAG，支持状态展示、节点导航与重启后历史恢复。",
  author: { name: "LeemanCheung", url: "https://github.com/LeemanCheung" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/LeemanCheung/dsh-task-dag",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:LeemanCheung/dsh-task-dag",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/LeemanCheung/dsh-task-dag/" },
  ],
};

