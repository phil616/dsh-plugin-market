import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "evilirving-dsh-context-proxy",
  name: "dsh-context-proxy",
  description: "按需取回薄层：context_query / context_slice / context_grep 三个工具读取已持久化的历史，引用可回放。",
  longDescription: "按需取回薄层：context_query / context_slice / context_grep 三个工具读取已持久化的历史，引用可回放。",
  author: { name: "EvilIrving", url: "https://github.com/EvilIrving" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/EvilIrving/dsh-context-proxy",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:EvilIrving/dsh-context-proxy",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/EvilIrving/dsh-context-proxy/" },
  ],
};

