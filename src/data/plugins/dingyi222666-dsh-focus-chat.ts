import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "dingyi222666-dsh-focus-chat",
  name: "dsh-focus-chat",
  description: "「聚焦会话」精简视图，只关注最终产出结果。",
  longDescription: "「聚焦会话」精简视图，只关注最终产出结果。",
  author: { name: "dingyi222666", url: "https://github.com/dingyi222666" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/dingyi222666/dsh-focus-chat",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:dingyi222666/dsh-focus-chat",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/dingyi222666/dsh-focus-chat/" },
  ],
};

