import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-deep-research",
  name: "dsh-deep-research",
  description: "自适应深度研究编排器（基于官方 workflow 引擎）。",
  longDescription: "自适应深度研究编排器（基于官方 workflow 引擎）。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/dsh-deep-research",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/dsh-deep-research",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/dsh-deep-research/" },
  ],
};

