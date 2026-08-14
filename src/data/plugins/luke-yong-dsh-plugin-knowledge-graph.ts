import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "luke-yong-dsh-plugin-knowledge-graph",
  name: "dsh-plugin-knowledge-graph",
  description: "基于代码库知识图谱的 read_graph 工具（CONTAINS / EXPORTS / IMPORTS / IMPORTS_SYMBOL 关系）。",
  longDescription: "基于代码库知识图谱的 read_graph 工具（CONTAINS / EXPORTS / IMPORTS / IMPORTS_SYMBOL 关系）。",
  author: { name: "Luke-Yong", url: "https://github.com/Luke-Yong" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/Luke-Yong/dsh-plugin-knowledge-graph",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Luke-Yong/dsh-plugin-knowledge-graph",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Luke-Yong/dsh-plugin-knowledge-graph/" },
  ],
};

