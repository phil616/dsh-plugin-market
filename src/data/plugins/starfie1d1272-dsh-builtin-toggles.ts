import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "starfie1d1272-dsh-builtin-toggles",
  name: "dsh-builtin-toggles",
  description: "为 DSH Web 添加官方内置插件目录、搜索与状态说明，并提供经过审核的安全 UI 插件开关。",
  longDescription: "为 DSH Web 添加官方内置插件目录、搜索与状态说明，并提供经过审核的安全 UI 插件开关。",
  author: { name: "Starfie1d1272", url: "https://github.com/Starfie1d1272" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Starfie1d1272/dsh-builtin-toggles",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-builtin-toggles",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Starfie1d1272/dsh-builtin-toggles",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Starfie1d1272/dsh-builtin-toggles/" },
  ],
};

