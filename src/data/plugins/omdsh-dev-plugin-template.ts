import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-plugin-template",
  name: "plugin-template",
  description: "插件模板仓库（基于 turtle-ui 官方仓库）。",
  longDescription: "插件模板仓库（基于 turtle-ui 官方仓库）。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/plugin-template",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/plugin-template",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/plugin-template/" },
  ],
};

