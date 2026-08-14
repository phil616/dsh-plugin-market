import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "hust-open-atom-club-oh-dsh",
  name: "oh-dsh",
  description: "社区发行版：TUI、桌面端与 Web UI 统一体验，分层安装、一步到位。",
  longDescription: "社区发行版：TUI、桌面端与 Web UI 统一体验，分层安装、一步到位。",
  author: { name: "hust-open-atom-club", url: "https://github.com/hust-open-atom-club" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/hust-open-atom-club/oh-dsh",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:hust-open-atom-club/oh-dsh",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/hust-open-atom-club/oh-dsh/" },
  ],
};

