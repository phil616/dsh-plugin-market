import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "dylan121322-llm-adaptive",
  name: "llm-adaptive",
  description: "自适应模型路由：请求级复杂度分类，按配置链自动选择后端 provider。",
  longDescription: "自适应模型路由：请求级复杂度分类，按配置链自动选择后端 provider。",
  author: { name: "dylan121322", url: "https://github.com/dylan121322" },
  tags: ["Model"],
  category: "tool",
  repository: "https://github.com/dylan121322/llm-adaptive",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:dylan121322/llm-adaptive",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/dylan121322/llm-adaptive/" },
  ],
};

