import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "furongjun-1999-dsh-memory",
  name: "dsh-memory",
  description: "多智能体时空记忆图：跨会话持久化与重要性门控召回。",
  longDescription: "多智能体时空记忆图：跨会话持久化与重要性门控召回。",
  author: { name: "FuRongJun-1999", url: "https://github.com/FuRongJun-1999" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/FuRongJun-1999/dsh-memory",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add @furongjun1999/dsh-memory",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:FuRongJun-1999/dsh-memory",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/FuRongJun-1999/dsh-memory/" },
  ],
};

