import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "nanki-nn-dsh-answer-pet",
  name: "dsh-answer-pet",
  description: "蓝鲸桌面宠物：按会话实时展示回答进度、模型动作与工具调用轨迹、token、输出速率与耗时，并支持多会话状态卡片展开和收起。",
  longDescription: "蓝鲸桌面宠物：按会话实时展示回答进度、模型动作与工具调用轨迹、token、输出速率与耗时，并支持多会话状态卡片展开和收起。",
  author: { name: "Nanki-nn", url: "https://github.com/Nanki-nn" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Nanki-nn/dsh-answer-pet",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Nanki-nn/dsh-answer-pet",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Nanki-nn/dsh-answer-pet/" },
  ],
};

