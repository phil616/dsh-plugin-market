import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "sttrevens-dsh-cost-meter",
  name: "dsh-cost-meter",
  description: "Web UI 美元成本徽标：头部显示会话总成本、每条回复结尾显示该轮成本，悬停看分项。",
  longDescription: "Web UI 美元成本徽标：头部显示会话总成本、每条回复结尾显示该轮成本，悬停看分项。",
  author: { name: "Sttrevens", url: "https://github.com/Sttrevens" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Sttrevens/dsh-cost-meter",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add @steven-wu/dsh-cost-meter",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Sttrevens/dsh-cost-meter",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Sttrevens/dsh-cost-meter/" },
  ],
};

