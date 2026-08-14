import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "bobcat848-dsh-calculator",
  name: "dsh-calculator",
  description: "右侧面板展示 DeepSeek API 费用（当前会话 + 全部会话累计）与账户余额，内置官方计价与峰谷计价支持。",
  longDescription: "右侧面板展示 DeepSeek API 费用（当前会话 + 全部会话累计）与账户余额，内置官方计价与峰谷计价支持。",
  author: { name: "bobcat848", url: "https://github.com/bobcat848" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/bobcat848/dsh-calculator",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:bobcat848/dsh-calculator",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/bobcat848/dsh-calculator/" },
  ],
};

