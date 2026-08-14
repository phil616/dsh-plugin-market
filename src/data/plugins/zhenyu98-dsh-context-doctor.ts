import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "zhenyu98-dsh-context-doctor",
  name: "dsh-context-doctor",
  description: "上下文注入审计：统计指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突。",
  longDescription: "上下文注入审计：统计指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突。",
  author: { name: "Zhenyu98", url: "https://github.com/Zhenyu98" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/Zhenyu98/dsh-context-doctor",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Zhenyu98/dsh-context-doctor",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Zhenyu98/dsh-context-doctor/" },
  ],
};

