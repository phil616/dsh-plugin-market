import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "whyihaveyou-dsh-suite-packages-plugins-plugin-session-export",
  name: "dsh-suite#plugin-session-export",
  description: "把 append-only 会话日志导出为按轨迹来源分组的可读 Markdown 或 HTML。",
  longDescription: "把 append-only 会话日志导出为按轨迹来源分组的可读 Markdown 或 HTML。",
  author: { name: "whyihaveyou", url: "https://github.com/whyihaveyou" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-session-export",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:whyihaveyou/dsh-suite#path:/packages/plugins/plugin-session-export",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/whyihaveyou/dsh-suite--packages-plugins-plugin-session-export/" },
  ],
};

