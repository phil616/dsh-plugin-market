import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "titanwings-dsh-plannotator",
  name: "dsh-plannotator",
  description: "计划批注：选中计划原文逐条批注，结构化反馈送回 Agent。",
  longDescription: "计划批注：选中计划原文逐条批注，结构化反馈送回 Agent。",
  author: { name: "titanwings", url: "https://github.com/titanwings" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/titanwings/dsh-plannotator",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:titanwings/dsh-plannotator",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/titanwings/dsh-plannotator/" },
  ],
};

