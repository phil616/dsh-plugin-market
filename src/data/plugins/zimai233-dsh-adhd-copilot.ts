import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "zimai233-dsh-adhd-copilot",
  name: "dsh-adhd-copilot",
  description: "ADHD 行为辅导技能：任务拆解、事项过载管理、启动仪式与失败重启。",
  longDescription: "ADHD 行为辅导技能：任务拆解、事项过载管理、启动仪式与失败重启。",
  author: { name: "zimai233", url: "https://github.com/zimai233" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/zimai233/dsh-adhd-copilot",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:zimai233/dsh-adhd-copilot",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/zimai233/dsh-adhd-copilot/" },
  ],
};

