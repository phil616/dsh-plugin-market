import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "vlln-dsh-task-status",
  name: "dsh-task-status",
  description: "后台任务状态条：对话页任务进度 + 实时输出 tail。",
  longDescription: "后台任务状态条：对话页任务进度 + 实时输出 tail。",
  author: { name: "vlln", url: "https://github.com/vlln" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/vlln/dsh-task-status",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:vlln/dsh-task-status",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/vlln/dsh-task-status/" },
  ],
};

