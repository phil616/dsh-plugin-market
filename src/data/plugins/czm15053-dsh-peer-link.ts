import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "czm15053-dsh-peer-link",
  name: "dsh-peer-link",
  description: "让 dsh 和 Claude Code 会话直接互发消息，附带可点击的会话列表卡片（搜索/刷新/弹窗发送）。",
  longDescription: "让 dsh 和 Claude Code 会话直接互发消息，附带可点击的会话列表卡片（搜索/刷新/弹窗发送）。",
  author: { name: "czm15053", url: "https://github.com/czm15053" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/czm15053/dsh-peer-link",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:czm15053/dsh-peer-link",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/czm15053/dsh-peer-link/" },
  ],
};

