import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jolly-j-dsh-deepseek-billing",
  name: "dsh-deepseek-billing",
  description: "侧边栏底部 DeepSeek 账户余额显示与会话费用估算卡片。",
  longDescription: "侧边栏底部 DeepSeek 账户余额显示与会话费用估算卡片。",
  author: { name: "Jolly-J", url: "https://github.com/Jolly-J" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Jolly-J/dsh-deepseek-billing",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Jolly-J/dsh-deepseek-billing",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Jolly-J/dsh-deepseek-billing/" },
  ],
};

