import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "asukasec-dsh-message-preview",
  name: "dsh-message-preview",
  description: "右侧用户消息导航条，根据消息数量与可用高度自适应排布导航块，并支持悬停预览、键盘操作与点击跳转。",
  longDescription: "右侧用户消息导航条，根据消息数量与可用高度自适应排布导航块，并支持悬停预览、键盘操作与点击跳转。",
  author: { name: "asukasec", url: "https://github.com/asukasec" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/asukasec/dsh-message-preview",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:asukasec/dsh-message-preview",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/asukasec/dsh-message-preview/" },
  ],
};

