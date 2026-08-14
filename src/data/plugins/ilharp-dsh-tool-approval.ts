import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "ilharp-dsh-tool-approval",
  name: "dsh-tool-approval",
  description: "手动审批模式（Manual/Ask Mode）。",
  longDescription: "手动审批模式（Manual/Ask Mode）。",
  author: { name: "ilharp", url: "https://github.com/ilharp" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/ilharp/dsh-tool-approval",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ilharp/dsh-tool-approval",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ilharp/dsh-tool-approval/" },
  ],
};

