import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "loserfox-telegram",
  name: "telegram",
  description: "Telegram Bot API 桥接：长轮询、per-chat 会话、HTML 格式化。",
  longDescription: "Telegram Bot API 桥接：长轮询、per-chat 会话、HTML 格式化。",
  author: { name: "LoserFox", url: "https://github.com/LoserFox" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/LoserFox/telegram",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:LoserFox/telegram",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/LoserFox/telegram/" },
  ],
};

