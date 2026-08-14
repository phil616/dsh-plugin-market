import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "ldchaowin-dsh-plugin-notify-sound",
  name: "dsh-plugin-notify-sound",
  description: "按工作区定制的任务完成铃声，以及审批、提问、计划评审、目标受阻、任务失败等需要人介入事件的注意提示音，支持内置合成音、语音播报与自定义音频。",
  longDescription: "按工作区定制的任务完成铃声，以及审批、提问、计划评审、目标受阻、任务失败等需要人介入事件的注意提示音，支持内置合成音、语音播报与自定义音频。",
  author: { name: "ldchaowin", url: "https://github.com/ldchaowin" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/ldchaowin/dsh-plugin-notify-sound",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-plugin-notify-sound",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ldchaowin/dsh-plugin-notify-sound",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ldchaowin/dsh-plugin-notify-sound/" },
  ],
};

