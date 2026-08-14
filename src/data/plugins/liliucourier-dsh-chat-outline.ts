import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "liliucourier-dsh-chat-outline",
  name: "dsh-chat-outline",
  description: "对话栏左侧常驻大纲：按轮次列出提问与最后回复，支持关键词过滤与一键跳转。",
  longDescription: "对话栏左侧常驻大纲：按轮次列出提问与最后回复，支持关键词过滤与一键跳转。",
  author: { name: "liliuCourier", url: "https://github.com/liliuCourier" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/liliuCourier/dsh-chat-outline",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-chat-outline",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:liliuCourier/dsh-chat-outline",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/liliuCourier/dsh-chat-outline/" },
  ],
};

