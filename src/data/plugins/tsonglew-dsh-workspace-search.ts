import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "tsonglew-dsh-workspace-search",
  name: "dsh-workspace-search",
  description: "VS Code 式工作区关键词搜索 Tab（better-sidebar 扩展）：同时匹配文件名与文件内容，结果按文件分组带行号，点击在侧栏编辑器打开。",
  longDescription: "VS Code 式工作区关键词搜索 Tab（better-sidebar 扩展）：同时匹配文件名与文件内容，结果按文件分组带行号，点击在侧栏编辑器打开。",
  author: { name: "tsonglew", url: "https://github.com/tsonglew" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/tsonglew/dsh-workspace-search",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:tsonglew/dsh-workspace-search",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/tsonglew/dsh-workspace-search/" },
  ],
};

