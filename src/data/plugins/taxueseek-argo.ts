import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "taxueseek-argo",
  name: "argo",
  description: "专为 agent 打造的搜索工具：多语言，覆盖中文/英文/学术/代码/购物/金融/新闻/百科。",
  longDescription: "专为 agent 打造的搜索工具：多语言，覆盖中文/英文/学术/代码/购物/金融/新闻/百科。",
  author: { name: "taxueseek", url: "https://github.com/taxueseek" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/taxueseek/argo",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add argo-search",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:taxueseek/argo",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/taxueseek/argo/" },
  ],
};

