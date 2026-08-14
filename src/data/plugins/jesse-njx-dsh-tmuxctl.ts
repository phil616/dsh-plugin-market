import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jesse-njx-dsh-tmuxctl",
  name: "dsh-tmuxctl",
  description: "掌控你的 tmux 面板：list/send-keys/capture、在面板中运行长任务并 watch，破坏性命令需审批。",
  longDescription: "掌控你的 tmux 面板：list/send-keys/capture、在面板中运行长任务并 watch，破坏性命令需审批。",
  author: { name: "Jesse-njx", url: "https://github.com/Jesse-njx" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/Jesse-njx/dsh-tmuxctl",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Jesse-njx/dsh-tmuxctl",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Jesse-njx/dsh-tmuxctl/" },
  ],
};

