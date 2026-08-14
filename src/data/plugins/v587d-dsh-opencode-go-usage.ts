import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "v587d-dsh-opencode-go-usage",
  name: "dsh-opencode-go-usage",
  description: "在输入框上方 dock 显示 OpenCode Go 订阅用量（5h 滚动/每周/每月窗口与重置倒计时），内置凭据编辑器。",
  longDescription: "在输入框上方 dock 显示 OpenCode Go 订阅用量（5h 滚动/每周/每月窗口与重置倒计时），内置凭据编辑器。",
  author: { name: "v587d", url: "https://github.com/v587d" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/v587d/dsh-opencode-go-usage",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:v587d/dsh-opencode-go-usage",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/v587d/dsh-opencode-go-usage/" },
  ],
};

