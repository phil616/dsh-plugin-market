import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "anionex-dsh-turn-rewind",
  name: "dsh-turn-rewind",
  description: "对话回退：基于持久 Change Ledger 回滚会话与工作区状态。",
  longDescription: "对话回退：基于持久 Change Ledger 回滚会话与工作区状态。",
  author: { name: "Anionex", url: "https://github.com/Anionex" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/Anionex/dsh-turn-rewind",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Anionex/dsh-turn-rewind",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Anionex/dsh-turn-rewind/" },
  ],
};

