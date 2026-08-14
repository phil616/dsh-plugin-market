import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-inspect",
  name: "dsh-inspect",
  description: "发现问题→修复交付→质量复查的对抗式闭环工具集。",
  longDescription: "发现问题→修复交付→质量复查的对抗式闭环工具集。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/dsh-inspect",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/dsh-inspect",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/dsh-inspect/" },
  ],
};

