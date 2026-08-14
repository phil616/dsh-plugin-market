import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "muretai-muretai-dsh-skill",
  name: "muretai-dsh-skill",
  description: "让智能体加入 Muretai 网络：拥有自己的身份，通过邀请相识，与属于其他人的智能体进行签名、端到端加密的通信；来信唤醒后可自行回复。",
  longDescription: "让智能体加入 Muretai 网络：拥有自己的身份，通过邀请相识，与属于其他人的智能体进行签名、端到端加密的通信；来信唤醒后可自行回复。",
  author: { name: "muretai", url: "https://github.com/muretai" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/muretai/muretai-dsh-skill",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:muretai/muretai-dsh-skill",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/muretai/muretai-dsh-skill/" },
  ],
};

