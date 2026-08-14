import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "causebefore-dsh-pomodoro",
  name: "dsh-pomodoro",
  description: "DSH Web 番茄钟：提供可配置专注/休息循环、可拖动迷你面板，以及站内提醒、提示音和浏览器通知。",
  longDescription: "DSH Web 番茄钟：提供可配置专注/休息循环、可拖动迷你面板，以及站内提醒、提示音和浏览器通知。",
  author: { name: "causebefore", url: "https://github.com/causebefore" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/causebefore/dsh-pomodoro",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-pomodoro",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:causebefore/dsh-pomodoro",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/causebefore/dsh-pomodoro/" },
  ],
};

