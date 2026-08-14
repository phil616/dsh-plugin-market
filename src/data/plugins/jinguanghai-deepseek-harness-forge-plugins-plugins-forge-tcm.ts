import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jinguanghai-deepseek-harness-forge-plugins-plugins-forge-tcm",
  name: "deepseek-harness-forge-plugins#forge-tcm",
  description: "中医工具集：八纲辨证与药对查询。",
  longDescription: "中医工具集：八纲辨证与药对查询。",
  author: { name: "jinguanghai", url: "https://github.com/jinguanghai" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/jinguanghai/deepseek-harness-forge-plugins/tree/main/plugins/forge-tcm",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:jinguanghai/deepseek-harness-forge-plugins#path:/plugins/forge-tcm",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/jinguanghai/deepseek-harness-forge-plugins--plugins-forge-tcm/" },
  ],
};

