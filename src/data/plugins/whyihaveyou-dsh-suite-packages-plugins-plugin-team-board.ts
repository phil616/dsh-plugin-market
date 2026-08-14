import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "whyihaveyou-dsh-suite-packages-plugins-plugin-team-board",
  name: "dsh-suite#plugin-team-board",
  description: "多 agent 共享任务板：经 Cordis service key 创建/认领/流转/查询任务。",
  longDescription: "多 agent 共享任务板：经 Cordis service key 创建/认领/流转/查询任务。",
  author: { name: "whyihaveyou", url: "https://github.com/whyihaveyou" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-team-board",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:whyihaveyou/dsh-suite#path:/packages/plugins/plugin-team-board",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/whyihaveyou/dsh-suite--packages-plugins-plugin-team-board/" },
  ],
};

