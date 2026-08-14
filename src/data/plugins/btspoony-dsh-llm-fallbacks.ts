import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "btspoony-dsh-llm-fallbacks",
  name: "dsh-llm-fallbacks",
  description: "基于角色的模型重试与备用策略。",
  longDescription: "基于角色的模型重试与备用策略。",
  author: { name: "btspoony", url: "https://github.com/btspoony" },
  tags: ["Model"],
  category: "tool",
  repository: "https://github.com/btspoony/dsh-llm-fallbacks",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:btspoony/dsh-llm-fallbacks",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/btspoony/dsh-llm-fallbacks/" },
  ],
};

