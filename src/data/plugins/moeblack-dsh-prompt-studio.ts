import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "moeblack-dsh-prompt-studio",
  name: "dsh-prompt-studio",
  description: "带实时预览的用户/内置 system prompt 分节编辑器。",
  longDescription: "带实时预览的用户/内置 system prompt 分节编辑器。",
  author: { name: "Moeblack", url: "https://github.com/Moeblack" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/Moeblack/dsh-prompt-studio",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Moeblack/dsh-prompt-studio",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Moeblack/dsh-prompt-studio/" },
  ],
};

