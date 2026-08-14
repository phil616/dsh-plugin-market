import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "huiliyi37-dsh-tianshu-tui",
  name: "dsh-tianshu-tui",
  description: "DeepSeek Harness 的终端 UI（TUI）。",
  longDescription: "DeepSeek Harness 的终端 UI（TUI）。",
  author: { name: "huiliyi37", url: "https://github.com/huiliyi37" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/huiliyi37/dsh-tianshu-tui",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:huiliyi37/dsh-tianshu-tui",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/huiliyi37/dsh-tianshu-tui/" },
  ],
};

