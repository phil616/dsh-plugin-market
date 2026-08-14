import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "whyihaveyou-dsh-suite-packages-plugins-plugin-manager",
  name: "dsh-suite#plugin-manager",
  description: "DSH Web UI 内置插件商店：浏览、搜索、一键安装、兼容性徽章。",
  longDescription: "DSH Web UI 内置插件商店：浏览、搜索、一键安装、兼容性徽章。",
  author: { name: "whyihaveyou", url: "https://github.com/whyihaveyou" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-manager",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:whyihaveyou/dsh-suite#path:/packages/plugins/plugin-manager",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/whyihaveyou/dsh-suite--packages-plugins-plugin-manager/" },
  ],
};

