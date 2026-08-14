import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "whyihaveyou-dsh-suite-packages-plugins-plugin-notify",
  name: "dsh-suite#plugin-notify",
  description: "回合完成、错误或待审批时推送 IM webhook（飞书/企微/钉钉/Slack/Discord/自定义）与本地通知。",
  longDescription: "回合完成、错误或待审批时推送 IM webhook（飞书/企微/钉钉/Slack/Discord/自定义）与本地通知。",
  author: { name: "whyihaveyou", url: "https://github.com/whyihaveyou" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-notify",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:whyihaveyou/dsh-suite#path:/packages/plugins/plugin-notify",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/whyihaveyou/dsh-suite--packages-plugins-plugin-notify/" },
  ],
};

