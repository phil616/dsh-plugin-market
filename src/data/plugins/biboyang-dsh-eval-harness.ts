import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "biboyang-dsh-eval-harness",
  name: "dsh-eval-harness",
  description: "DSH 插件评测框架：YAML 用例驱动真实 headless agent，断言工具调用/参数/返回与 token 用量，baseline 门禁做 CI 回归。",
  longDescription: "DSH 插件评测框架：YAML 用例驱动真实 headless agent，断言工具调用/参数/返回与 token 用量，baseline 门禁做 CI 回归。",
  author: { name: "BiBoyang", url: "https://github.com/BiBoyang" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/BiBoyang/dsh-eval-harness",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:BiBoyang/dsh-eval-harness",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/BiBoyang/dsh-eval-harness/" },
  ],
};

