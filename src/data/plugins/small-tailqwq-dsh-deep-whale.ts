import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "small-tailqwq-dsh-deep-whale",
  name: "dsh-deep-whale",
  description: "DSH Web 鲸鱼娘皮肤系列（深海女仆工坊 maid-atelier）。",
  longDescription: "DSH Web 鲸鱼娘皮肤系列（深海女仆工坊 maid-atelier）。",
  author: { name: "Small-tailqwq", url: "https://github.com/Small-tailqwq" },
  tags: ["Theme"],
  category: "tool",
  repository: "https://github.com/Small-tailqwq/dsh-deep-whale",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Small-tailqwq/dsh-deep-whale",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Small-tailqwq/dsh-deep-whale/" },
  ],
};

