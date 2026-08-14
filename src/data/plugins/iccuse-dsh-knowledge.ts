import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "iccuse-dsh-knowledge",
  name: "dsh-knowledge",
  description: "全局知识库桥：kb_add/kb_search/kb_show/kb_timeline 读写与 Codex 共享的 D:\\knowledge（格式逐字节兼容）。",
  longDescription: "全局知识库桥：kb_add/kb_search/kb_show/kb_timeline 读写与 Codex 共享的 D:\\knowledge（格式逐字节兼容）。",
  author: { name: "ICCuse", url: "https://github.com/ICCuse" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/ICCuse/dsh-knowledge",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ICCuse/dsh-knowledge",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ICCuse/dsh-knowledge/" },
  ],
};

