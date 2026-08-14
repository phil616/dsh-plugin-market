import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "wsxwj123-dsh-plugins-packages-theme-gallery",
  name: "dsh-plugins#theme-gallery",
  description: "15 个精选主题家族，浅深配色完整，跟随 DSH 原生浅色/深色/跟随系统模式。",
  longDescription: "15 个精选主题家族，浅深配色完整，跟随 DSH 原生浅色/深色/跟随系统模式。",
  author: { name: "wsxwj123", url: "https://github.com/wsxwj123" },
  tags: ["Theme"],
  category: "tool",
  repository: "https://github.com/wsxwj123/dsh-plugins/tree/main/packages/theme-gallery",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:wsxwj123/dsh-plugins#path:/packages/theme-gallery",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/wsxwj123/dsh-plugins--packages-theme-gallery/" },
  ],
};

