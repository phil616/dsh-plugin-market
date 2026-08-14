import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "crtnt-dsh-plugin-suite-dsh-plugin-updater",
  name: "dsh-plugin-suite#dsh-plugin-updater",
  description: "已装插件更新管理：检查更新、备份与回滚。",
  longDescription: "已装插件更新管理：检查更新、备份与回滚。",
  author: { name: "crTnT", url: "https://github.com/crTnT" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/crTnT/dsh-plugin-suite/tree/main/dsh-plugin-updater",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:crTnT/dsh-plugin-suite#path:/dsh-plugin-updater",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/crTnT/dsh-plugin-suite--dsh-plugin-updater/" },
  ],
};

