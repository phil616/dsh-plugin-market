import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "xiaoyuyu6420-dsh-backup",
  name: "dsh-backup",
  description: "一键备份 DSH 用户数据：/backup 命令、定时自动备份、sha256 校验与自动轮换。",
  longDescription: "一键备份 DSH 用户数据：/backup 命令、定时自动备份、sha256 校验与自动轮换。",
  author: { name: "xiaoyuyu6420", url: "https://github.com/xiaoyuyu6420" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/xiaoyuyu6420/dsh-backup",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:xiaoyuyu6420/dsh-backup",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/xiaoyuyu6420/dsh-backup/" },
  ],
};

