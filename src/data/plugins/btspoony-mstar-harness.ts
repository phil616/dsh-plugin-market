import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "btspoony-mstar-harness",
  name: "mstar-harness",
  description: "技能驱动的 harness/loop 工程化工作流插件。",
  longDescription: "技能驱动的 harness/loop 工程化工作流插件。",
  author: { name: "btspoony", url: "https://github.com/btspoony" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/btspoony/mstar-harness",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:btspoony/mstar-harness",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/btspoony/mstar-harness/" },
  ],
};

