import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "titanwings-dsh-automation",
  name: "dsh-automation",
  description: "定时任务：让 Coding 任务按计划在全新 Agent Session 中运行，保留可审计历史。",
  longDescription: "定时任务：让 Coding 任务按计划在全新 Agent Session 中运行，保留可审计历史。",
  author: { name: "titanwings", url: "https://github.com/titanwings" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/titanwings/dsh-automation",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:titanwings/dsh-automation",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/titanwings/dsh-automation/" },
  ],
};

