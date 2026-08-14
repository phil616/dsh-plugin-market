import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "alingalingling-ui-status-label",
  name: "ui-status-label",
  description: "把鲸鱼娘思考时的 \"deep diving\" 状态文案自定义成任意你想要的样子。",
  longDescription: "把鲸鱼娘思考时的 \"deep diving\" 状态文案自定义成任意你想要的样子。",
  author: { name: "alingalingling", url: "https://github.com/alingalingling" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/alingalingling/ui-status-label",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:alingalingling/ui-status-label",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/alingalingling/ui-status-label/" },
  ],
};

