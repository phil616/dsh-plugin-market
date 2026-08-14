import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-gomoku",
  name: "dsh-gomoku",
  description: "与 AI 下五子棋，也可让 AI 对局比棋力。",
  longDescription: "与 AI 下五子棋，也可让 AI 对局比棋力。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/dsh-gomoku",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/dsh-gomoku",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/dsh-gomoku/" },
  ],
};

