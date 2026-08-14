import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "ghost011118-dsh-balance-meter",
  name: "dsh-balance-meter",
  description: "输入框 dock 显示 DeepSeek 账户余额与会话花费，自动拉取官方定价，支持高峰/低谷计价。",
  longDescription: "输入框 dock 显示 DeepSeek 账户余额与会话花费，自动拉取官方定价，支持高峰/低谷计价。",
  author: { name: "Ghost011118", url: "https://github.com/Ghost011118" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Ghost011118/dsh-balance-meter",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Ghost011118/dsh-balance-meter",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Ghost011118/dsh-balance-meter/" },
  ],
};

