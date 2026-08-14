import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "vibeinging-dsh-tool-search",
  name: "dsh-tool-search",
  description: "按 agent 的按需工具发现与渐进式 schema 披露。",
  longDescription: "按 agent 的按需工具发现与渐进式 schema 披露。",
  author: { name: "vibeinging", url: "https://github.com/vibeinging" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/vibeinging/dsh-tool-search",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:vibeinging/dsh-tool-search",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/vibeinging/dsh-tool-search/" },
  ],
};

