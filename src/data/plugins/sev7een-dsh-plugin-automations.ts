import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "sev7een-dsh-plugin-automations",
  name: "dsh-plugin-automations",
  description: "设置页定时任务：支持准点或 DeepSeek 谷时段执行、单次/每日重复，并持久化任务状态。",
  longDescription: "设置页定时任务：支持准点或 DeepSeek 谷时段执行、单次/每日重复，并持久化任务状态。",
  author: { name: "Sev7een", url: "https://github.com/Sev7een" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/Sev7een/dsh-plugin-automations",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Sev7een/dsh-plugin-automations",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Sev7een/dsh-plugin-automations/" },
  ],
};

