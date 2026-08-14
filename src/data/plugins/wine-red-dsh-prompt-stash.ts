import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "wine-red-dsh-prompt-stash",
  name: "dsh-prompt-stash",
  description: "本地、按会话隔离的 LIFO 输入暂存：临时收起未完成的输入，之后安全恢复并继续编辑。",
  longDescription: "本地、按会话隔离的 LIFO 输入暂存：临时收起未完成的输入，之后安全恢复并继续编辑。",
  author: { name: "Wine-Red", url: "https://github.com/Wine-Red" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/Wine-Red/dsh-prompt-stash",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-prompt-stash",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Wine-Red/dsh-prompt-stash",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Wine-Red/dsh-prompt-stash/" },
  ],
};

