import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "anionex-dsh-computer-use",
  name: "dsh-computer-use",
  description: "macOS 电脑控制：Accessibility 观测、过期状态拒绝、作用域权限与安全输入。",
  longDescription: "macOS 电脑控制：Accessibility 观测、过期状态拒绝、作用域权限与安全输入。",
  author: { name: "Anionex", url: "https://github.com/Anionex" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/Anionex/dsh-computer-use",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Anionex/dsh-computer-use",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Anionex/dsh-computer-use/" },
  ],
};

