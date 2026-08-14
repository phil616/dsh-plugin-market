import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "vibeinging-dsh-trace",
  name: "dsh-trace",
  description: "遥测后端：把 turns、model steps、tool calls 导出到 yiTrace。",
  longDescription: "遥测后端：把 turns、model steps、tool calls 导出到 yiTrace。",
  author: { name: "vibeinging", url: "https://github.com/vibeinging" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/vibeinging/dsh-trace",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:vibeinging/dsh-trace",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/vibeinging/dsh-trace/" },
  ],
};

