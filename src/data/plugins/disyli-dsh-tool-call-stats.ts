import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "disyli-dsh-tool-call-stats",
  name: "dsh-tool-call-stats",
  description: "进程内工具调用统计：提供 `tool_stats` 工具，按工具汇报调用次数、失败次数与平均耗时。",
  longDescription: "进程内工具调用统计：提供 `tool_stats` 工具，按工具汇报调用次数、失败次数与平均耗时。",
  author: { name: "disyli", url: "https://github.com/disyli" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/disyli/dsh-tool-call-stats",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:disyli/dsh-tool-call-stats",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/disyli/dsh-tool-call-stats/" },
  ],
};

