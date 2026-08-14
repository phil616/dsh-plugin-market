import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "vlln-dsh-loop",
  name: "dsh-loop",
  description: "定时循环：`/loop` 命令 + loop 工具 + 活动状态条。",
  longDescription: "定时循环：`/loop` 命令 + loop 工具 + 活动状态条。",
  author: { name: "vlln", url: "https://github.com/vlln" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/vlln/dsh-loop",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:vlln/dsh-loop",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/vlln/dsh-loop/" },
  ],
};

