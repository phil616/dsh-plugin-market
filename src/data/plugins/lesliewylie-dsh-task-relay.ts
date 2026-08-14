import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lesliewylie-dsh-task-relay",
  name: "dsh-task-relay",
  description: "跨会话任务队列与交接摘要：会话与子 agent 在共享的文件队列上投递、认领、完成、取消任务，并留下交接摘要供后续会话查看。",
  longDescription: "跨会话任务队列与交接摘要：会话与子 agent 在共享的文件队列上投递、认领、完成、取消任务，并留下交接摘要供后续会话查看。",
  author: { name: "LeslieWylie", url: "https://github.com/LeslieWylie" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/LeslieWylie/dsh-task-relay",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:LeslieWylie/dsh-task-relay",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/LeslieWylie/dsh-task-relay/" },
  ],
};

