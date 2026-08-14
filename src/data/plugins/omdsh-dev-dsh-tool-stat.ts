import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-tool-stat",
  name: "dsh-tool-stat",
  description: "描述统计/百分位数/频数分布/相关性。",
  longDescription: "描述统计/百分位数/频数分布/相关性。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/dsh-tool-stat",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/dsh-tool-stat",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/dsh-tool-stat/" },
  ],
};

