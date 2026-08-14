import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "huanlinoto-dsh-plugin-mineru",
  name: "dsh-plugin-mineru",
  description: "向模型暴露 MineRU 文档解析工具。",
  longDescription: "向模型暴露 MineRU 文档解析工具。",
  author: { name: "HuanLinOTO", url: "https://github.com/HuanLinOTO" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/HuanLinOTO/dsh-plugin-mineru",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:HuanLinOTO/dsh-plugin-mineru",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/HuanLinOTO/dsh-plugin-mineru/" },
  ],
};

