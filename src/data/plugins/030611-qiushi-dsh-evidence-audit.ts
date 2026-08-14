import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "030611-qiushi-dsh-evidence-audit",
  name: "qiushi-dsh-evidence-audit",
  description: "把工具结果与会话事件的 receipt 写入本地哈希链 JSONL，不保存提示词、工具参数、结果正文或原始会话 ID。",
  longDescription: "把工具结果与会话事件的 receipt 写入本地哈希链 JSONL，不保存提示词、工具参数、结果正文或原始会话 ID。",
  author: { name: "030611", url: "https://github.com/030611" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/030611/qiushi-dsh-evidence-audit",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add qiushi-dsh-evidence-audit",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:030611/qiushi-dsh-evidence-audit",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/030611/qiushi-dsh-evidence-audit/" },
  ],
};

