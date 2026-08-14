import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jesse-njx-dsh-routines",
  name: "dsh-routines",
  description: "定时 Agent：按 cron 计划运行 prompt，把摘要送到你已有的地方，内置重叠/漏跑/超时安全策略。",
  longDescription: "定时 Agent：按 cron 计划运行 prompt，把摘要送到你已有的地方，内置重叠/漏跑/超时安全策略。",
  author: { name: "Jesse-njx", url: "https://github.com/Jesse-njx" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/Jesse-njx/dsh-routines",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Jesse-njx/dsh-routines",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Jesse-njx/dsh-routines/" },
  ],
};

