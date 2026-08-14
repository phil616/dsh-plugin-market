import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jiayan-xu-dsh-memoria",
  name: "dsh-memoria",
  description: "向量+图记忆后端：observe/remember/search/recall 四个工具对接本地 memoria 服务，HNSW 语义召回 + FTS5 关键词 + 知识图谱信号经 RRF 融合排序，回合结束自动写入，按 Agent 命名空间隔离。",
  longDescription: "向量+图记忆后端：observe/remember/search/recall 四个工具对接本地 memoria 服务，HNSW 语义召回 + FTS5 关键词 + 知识图谱信号经 RRF 融合排序，回合结束自动写入，按 Agent 命名空间隔离。",
  author: { name: "jiayan-xu", url: "https://github.com/jiayan-xu" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/jiayan-xu/dsh-memoria",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:jiayan-xu/dsh-memoria",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/jiayan-xu/dsh-memoria/" },
  ],
};

