import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "ccch1mneyyy-dsh-tui",
  name: "dsh-TUI",
  description: "Claude Code 风格全屏终端 UI：像素鲸鱼顶栏、实时工作状态行、思考流式展开。",
  longDescription: "Claude Code 风格全屏终端 UI：像素鲸鱼顶栏、实时工作状态行、思考流式展开。",
  author: { name: "ccch1mneyyy", url: "https://github.com/ccch1mneyyy" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/ccch1mneyyy/dsh-TUI",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ccch1mneyyy/dsh-TUI",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ccch1mneyyy/dsh-TUI/" },
  ],
};

