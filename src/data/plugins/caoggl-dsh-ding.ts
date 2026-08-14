import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "caoggl-dsh-ding",
  name: "dsh-ding",
  description: "对话完成提醒：Agent 空闲（idle）时播放提示音并弹 Windows 原生通知，可配 ding.mp3、音量与防抖节流。",
  longDescription: "对话完成提醒：Agent 空闲（idle）时播放提示音并弹 Windows 原生通知，可配 ding.mp3、音量与防抖节流。",
  author: { name: "CAOGGL", url: "https://github.com/CAOGGL" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/CAOGGL/dsh-ding",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:CAOGGL/dsh-ding",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/CAOGGL/dsh-ding/" },
  ],
};

