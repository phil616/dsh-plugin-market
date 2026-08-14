import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "git121995-dsh-memory-gate",
  name: "dsh-memory-gate",
  description: "有界本地记忆 + CBDC 权威门控：SQLite + FTS5 claims，作用域召回并给出可解释的采用/核验/忽略决策与完整审计轨迹，/memory 命令，每次注入 ≤3 条/1200 字符，不增加额外模型调用。",
  longDescription: "有界本地记忆 + CBDC 权威门控：SQLite + FTS5 claims，作用域召回并给出可解释的采用/核验/忽略决策与完整审计轨迹，/memory 命令，每次注入 ≤3 条/1200 字符，不增加额外模型调用。",
  author: { name: "GIT121995", url: "https://github.com/GIT121995" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/GIT121995/dsh-memory-gate",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-memory-gate",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:GIT121995/dsh-memory-gate",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/GIT121995/dsh-memory-gate/" },
  ],
};

