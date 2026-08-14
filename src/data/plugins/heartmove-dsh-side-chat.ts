import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "heartmove-dsh-side-chat",
  name: "dsh-side-chat",
  description: "选中对话片段，在右侧面板的侧边聊天中提问（按会话隔离）；AI 回复可原文或摘要后带回主会话。",
  longDescription: "选中对话片段，在右侧面板的侧边聊天中提问（按会话隔离）；AI 回复可原文或摘要后带回主会话。",
  author: { name: "heartmove", url: "https://github.com/heartmove" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/heartmove/dsh-side-chat",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:heartmove/dsh-side-chat",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/heartmove/dsh-side-chat/" },
  ],
};

