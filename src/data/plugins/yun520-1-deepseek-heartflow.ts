import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "yun520-1-deepseek-heartflow",
  name: "deepseek-heartflow",
  description: "心虫（AGI 第1层辨别门禁）作为 DSH 插件：47 维纯规则文本判别（heartflow_check 工具）+ 工具调用后自动输出监督（fail-closed，引擎缺失时拒绝放行）。",
  longDescription: "心虫（AGI 第1层辨别门禁）作为 DSH 插件：47 维纯规则文本判别（heartflow_check 工具）+ 工具调用后自动输出监督（fail-closed，引擎缺失时拒绝放行）。",
  author: { name: "yun520-1", url: "https://github.com/yun520-1" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/yun520-1/deepseek-heartflow",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add @yun520-1/deepseek-heartflow",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:yun520-1/deepseek-heartflow",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/yun520-1/deepseek-heartflow/" },
  ],
};

