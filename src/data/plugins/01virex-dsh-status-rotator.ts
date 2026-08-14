import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "01virex-dsh-status-rotator",
  name: "dsh-status-rotator",
  description: "把回合状态那句 \"Deep diving...\" 替换成更有梗的自定义文案，按阶段轮换，支持打字机与流动渐变。",
  longDescription: "把回合状态那句 \"Deep diving...\" 替换成更有梗的自定义文案，按阶段轮换，支持打字机与流动渐变。",
  author: { name: "01Virex", url: "https://github.com/01Virex" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/01Virex/dsh-status-rotator",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:01Virex/dsh-status-rotator",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/01Virex/dsh-status-rotator/" },
  ],
};

