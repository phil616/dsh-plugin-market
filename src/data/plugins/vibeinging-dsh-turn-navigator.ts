import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "vibeinging-dsh-turn-navigator",
  name: "dsh-turn-navigator",
  description: "对话轮次导航。",
  longDescription: "对话轮次导航。",
  author: { name: "vibeinging", url: "https://github.com/vibeinging" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/vibeinging/dsh-turn-navigator",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:vibeinging/dsh-turn-navigator",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/vibeinging/dsh-turn-navigator/" },
  ],
};

