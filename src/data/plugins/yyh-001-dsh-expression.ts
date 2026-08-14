import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "yyh-001-dsh-expression",
  name: "dsh-expression",
  description: "陪 AI 斗图的搞笑插件：说个感觉，AI 帮你搜到、发出那张恰到好处的真实表情包。",
  longDescription: "陪 AI 斗图的搞笑插件：说个感觉，AI 帮你搜到、发出那张恰到好处的真实表情包。",
  author: { name: "yyh-001", url: "https://github.com/yyh-001" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/yyh-001/dsh-expression",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-expression",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:yyh-001/dsh-expression",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/yyh-001/dsh-expression/" },
  ],
};

