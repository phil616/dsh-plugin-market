import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "han-1413141-dsh-cost-meter",
  name: "dsh-cost-meter",
  description: "会话与当日 API 费用统计、预算图框（已用%）、官方余额、历史看板，支持峰谷计价与官方价格一键同步。",
  longDescription: "会话与当日 API 费用统计、预算图框（已用%）、官方余额、历史看板，支持峰谷计价与官方价格一键同步。",
  author: { name: "Han-1413141", url: "https://github.com/Han-1413141" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Han-1413141/dsh-cost-meter",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Han-1413141/dsh-cost-meter",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Han-1413141/dsh-cost-meter/" },
  ],
};

