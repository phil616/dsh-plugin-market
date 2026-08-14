import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "phant0meow-dsh-memory-meow",
  name: "dsh-memory-meow",
  description: "项目级跨会话记忆：PROJECT.md 快照注入首条用户消息（缓存友好）+ memory_remember 工具 + ReAct 任务结束自动反思；各项目独立记忆文件，互不互通。",
  longDescription: "项目级跨会话记忆：PROJECT.md 快照注入首条用户消息（缓存友好）+ memory_remember 工具 + ReAct 任务结束自动反思；各项目独立记忆文件，互不互通。",
  author: { name: "Phant0Meow", url: "https://github.com/Phant0Meow" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/Phant0Meow/dsh-memory-meow",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Phant0Meow/dsh-memory-meow",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Phant0Meow/dsh-memory-meow/" },
  ],
};

