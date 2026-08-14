import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jinguanghai-deepseek-harness-forge-plugins-plugins-forge-memory",
  name: "deepseek-harness-forge-plugins#forge-memory",
  description: "基于 BM25 关键词检索的记忆召回。",
  longDescription: "基于 BM25 关键词检索的记忆召回。",
  author: { name: "jinguanghai", url: "https://github.com/jinguanghai" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/jinguanghai/deepseek-harness-forge-plugins/tree/main/plugins/forge-memory",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:jinguanghai/deepseek-harness-forge-plugins#path:/plugins/forge-memory",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/jinguanghai/deepseek-harness-forge-plugins--plugins-forge-memory/" },
  ],
};

