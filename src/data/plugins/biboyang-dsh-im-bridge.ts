import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "biboyang-dsh-im-bridge",
  name: "dsh-im-bridge",
  description: "微信（iLink）双向桥：turn 完成/批准请求推送、聊天内批准与消息注入、持久去重与长回复收敛分段；通道层为多 IM 预留。",
  longDescription: "微信（iLink）双向桥：turn 完成/批准请求推送、聊天内批准与消息注入、持久去重与长回复收敛分段；通道层为多 IM 预留。",
  author: { name: "BiBoyang", url: "https://github.com/BiBoyang" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/BiBoyang/dsh-im-bridge",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:BiBoyang/dsh-im-bridge",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/BiBoyang/dsh-im-bridge/" },
  ],
};

