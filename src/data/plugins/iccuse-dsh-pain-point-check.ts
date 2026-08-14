import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "iccuse-dsh-pain-point-check",
  name: "dsh-pain-point-check",
  description: "强制痛点检查：同一问题连续 2 个实验未收敛后注入三问、拦截非调查类工具调用直到答出、阻止同方向重试。",
  longDescription: "强制痛点检查：同一问题连续 2 个实验未收敛后注入三问、拦截非调查类工具调用直到答出、阻止同方向重试。",
  author: { name: "ICCuse", url: "https://github.com/ICCuse" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/ICCuse/dsh-pain-point-check",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ICCuse/dsh-pain-point-check",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ICCuse/dsh-pain-point-check/" },
  ],
};

