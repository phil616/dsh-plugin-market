import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "perrylink-dsh-doublecheck",
  name: "dsh-doublecheck",
  description: "工程纪律守门：动笔前审讯需求，红绿测试证据门，交付后对抗评审（grill-requirements 技能 + 工具策略门）。",
  longDescription: "工程纪律守门：动笔前审讯需求，红绿测试证据门，交付后对抗评审（grill-requirements 技能 + 工具策略门）。",
  author: { name: "PerryLink", url: "https://github.com/PerryLink" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/PerryLink/dsh-doublecheck",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:PerryLink/dsh-doublecheck",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/PerryLink/dsh-doublecheck/" },
  ],
};

