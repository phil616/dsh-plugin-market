import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lonelymoon87-dsh-specflow",
  name: "dsh-specflow",
  description: "增加规格工件、技能、命令、由 goal 驱动的实施流程和任务进度上下文。",
  longDescription: "增加规格工件、技能、命令、由 goal 驱动的实施流程和任务进度上下文。",
  author: { name: "lonelymoon87", url: "https://github.com/lonelymoon87" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/lonelymoon87/dsh-specflow",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:lonelymoon87/dsh-specflow",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/lonelymoon87/dsh-specflow/" },
  ],
};

