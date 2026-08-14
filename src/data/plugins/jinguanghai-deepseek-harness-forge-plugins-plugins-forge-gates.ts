import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jinguanghai-deepseek-harness-forge-plugins-plugins-forge-gates",
  name: "deepseek-harness-forge-plugins#forge-gates",
  description: "真实计算验证门：数学化简、逻辑证明、正则校验、E-prover 一阶逻辑、状态机检查与代码修复，由 Go 编译的二进制支撑（附 Windows 预编译产物）。",
  longDescription: "真实计算验证门：数学化简、逻辑证明、正则校验、E-prover 一阶逻辑、状态机检查与代码修复，由 Go 编译的二进制支撑（附 Windows 预编译产物）。",
  author: { name: "jinguanghai", url: "https://github.com/jinguanghai" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/jinguanghai/deepseek-harness-forge-plugins/tree/main/plugins/forge-gates",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:jinguanghai/deepseek-harness-forge-plugins#path:/plugins/forge-gates",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/jinguanghai/deepseek-harness-forge-plugins--plugins-forge-gates/" },
  ],
};

