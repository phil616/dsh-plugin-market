import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "loserfox-distill",
  name: "distill",
  description: "自动对话蒸馏：后台 subagent 反省 + 技能 create/update。",
  longDescription: "自动对话蒸馏：后台 subagent 反省 + 技能 create/update。",
  author: { name: "LoserFox", url: "https://github.com/LoserFox" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/LoserFox/distill",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:LoserFox/distill",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/LoserFox/distill/" },
  ],
};

