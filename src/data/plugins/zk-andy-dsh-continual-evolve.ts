import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "zk-andy-dsh-continual-evolve",
  name: "dsh-continual-evolve",
  description: "持续自进化：从会话轨迹沉淀版本化、可审计、可回滚的 harness 状态（提示词/记忆/技能/子代理规格），带审查门禁与技能热加载。",
  longDescription: "持续自进化：从会话轨迹沉淀版本化、可审计、可回滚的 harness 状态（提示词/记忆/技能/子代理规格），带审查门禁与技能热加载。",
  author: { name: "ZK-Andy", url: "https://github.com/ZK-Andy" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/ZK-Andy/dsh-continual-evolve",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ZK-Andy/dsh-continual-evolve",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ZK-Andy/dsh-continual-evolve/" },
  ],
};

