import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "iccuse-dsh-file-memory",
  name: "dsh-file-memory",
  description: "文件型工作记忆：memorize/recall 把关键前提逐字保存在会话笔记文件，无损挺过上下文压缩。",
  longDescription: "文件型工作记忆：memorize/recall 把关键前提逐字保存在会话笔记文件，无损挺过上下文压缩。",
  author: { name: "ICCuse", url: "https://github.com/ICCuse" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/ICCuse/dsh-file-memory",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ICCuse/dsh-file-memory",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ICCuse/dsh-file-memory/" },
  ],
};

