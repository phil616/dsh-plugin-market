import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "small-tailqwq-dsh-tps",
  name: "dsh-tps",
  description: "TPS 指标插件。",
  longDescription: "TPS 指标插件。",
  author: { name: "Small-tailqwq", url: "https://github.com/Small-tailqwq" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/Small-tailqwq/dsh-tps",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Small-tailqwq/dsh-tps",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Small-tailqwq/dsh-tps/" },
  ],
};

