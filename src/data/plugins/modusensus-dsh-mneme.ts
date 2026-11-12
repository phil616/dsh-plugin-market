import type { Plugin } from "@/types/plugin";

// Content maintained by the plugin author.
export const plugin: Plugin = {
  slug: "modusensus-dsh-mneme",
  name: "dsh-mneme",
  description: "你的 AI 助手会记得你。跨会话长期记忆存在本机，每条记忆都带着来历，空闲时自动整理、矛盾先冻结待你裁决。",
  longDescription: "你的 AI 助手会记得你。跨会话长期记忆存在本机，每条记忆都带着来历：从哪句话来的、什么时候改过、被谁动过。你不在的时候它自己整理——重复的合并，互相矛盾的先冻住等你裁决。它也记得某件事当时的情绪、记得一张图里有什么，别的插件可以通过 API 把记忆写进来。附 10 个工具、MCP 服务端、命令行和记忆面板。",
  author: { name: "modusensus", url: "https://github.com/modusensus" },
  tags: ["Memory", "MCP"],
  category: "tool",
  repository: "https://github.com/slow-stack/mneme/tree/main/dsh-mneme",
  homepage: "https://github.com/slow-stack/mneme",
  installMethods: [
    {
      name: "npm",
      description: "从 npm 安装最新发布版本。",
      command: "dsh plugin --profile web add @modusensus/dsh-mneme",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/modusensus/dsh-mneme/" },
  ],
};
