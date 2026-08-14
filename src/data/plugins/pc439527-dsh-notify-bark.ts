import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "pc439527-dsh-notify-bark",
  name: "dsh-notify-bark",
  description: "Bark 推送通知到 iPhone：回合完成、等待回答、等待授权等事件由 Host 端发送。",
  longDescription: "Bark 推送通知到 iPhone：回合完成、等待回答、等待授权等事件由 Host 端发送。",
  author: { name: "pc439527", url: "https://github.com/pc439527" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/pc439527/dsh-notify-bark",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:pc439527/dsh-notify-bark",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/pc439527/dsh-notify-bark/" },
  ],
};

