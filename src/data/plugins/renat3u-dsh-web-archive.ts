import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "renat3u-dsh-web-archive",
  name: "dsh-web-archive",
  description: "折叠对话中的 Think、Bash 等「无用消息」。",
  longDescription: "折叠对话中的 Think、Bash 等「无用消息」。",
  author: { name: "renat3u", url: "https://github.com/renat3u" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/renat3u/dsh-web-archive",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:renat3u/dsh-web-archive",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/renat3u/dsh-web-archive/" },
  ],
};

