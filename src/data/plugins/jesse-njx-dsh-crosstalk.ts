import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jesse-njx-dsh-crosstalk",
  name: "dsh-crosstalk",
  description: "跨会话消息：本机任意会话都可像 Claude Code 一样列出并互发消息，基于本地心跳注册表与收件箱。",
  longDescription: "跨会话消息：本机任意会话都可像 Claude Code 一样列出并互发消息，基于本地心跳注册表与收件箱。",
  author: { name: "Jesse-njx", url: "https://github.com/Jesse-njx" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/Jesse-njx/dsh-crosstalk",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Jesse-njx/dsh-crosstalk",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Jesse-njx/dsh-crosstalk/" },
  ],
};

