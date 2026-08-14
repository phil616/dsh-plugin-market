import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lesliewylie-dsh-session-search-pro",
  name: "dsh-session-search-pro",
  description: "通过 harness 自带的 `sessionQuery` 服务搜索、列出、读取历史与当前会话：部署启用了 SQLite FTS5 索引时走索引，未启用时回退到有上限的倒序扫描。",
  longDescription: "通过 harness 自带的 `sessionQuery` 服务搜索、列出、读取历史与当前会话：部署启用了 SQLite FTS5 索引时走索引，未启用时回退到有上限的倒序扫描。",
  author: { name: "LeslieWylie", url: "https://github.com/LeslieWylie" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/LeslieWylie/dsh-session-search-pro",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:LeslieWylie/dsh-session-search-pro",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/LeslieWylie/dsh-session-search-pro/" },
  ],
};

