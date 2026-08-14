import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-notification",
  name: "dsh-notification",
  description: "回合完成桌面通知，按结果分控 + 关键词过滤。",
  longDescription: "回合完成桌面通知，按结果分控 + 关键词过滤。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/dsh-notification",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/dsh-notification",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/dsh-notification/" },
  ],
};

