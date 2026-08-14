import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "zimai233-dsh-wash-calendar",
  name: "dsh-wash-calendar",
  description: "基于纯日期数学的周期习惯排程：下次发生日、区间排程与逾期提醒。",
  longDescription: "基于纯日期数学的周期习惯排程：下次发生日、区间排程与逾期提醒。",
  author: { name: "zimai233", url: "https://github.com/zimai233" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/zimai233/dsh-wash-calendar",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:zimai233/dsh-wash-calendar",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/zimai233/dsh-wash-calendar/" },
  ],
};

