import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "flymysql-dsh-memory",
  name: "dsh-memory",
  description: "跨会话记忆库：remember / recall / forget 工具、每轮提示注入与设置页条目浏览。",
  longDescription: "跨会话记忆库：remember / recall / forget 工具、每轮提示注入与设置页条目浏览。",
  author: { name: "flymysql", url: "https://github.com/flymysql" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/flymysql/dsh-memory",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:flymysql/dsh-memory",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/flymysql/dsh-memory/" },
  ],
};

