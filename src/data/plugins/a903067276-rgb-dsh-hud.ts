import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "a903067276-rgb-dsh-hud",
  name: "dsh-hud",
  description: "HUD 状态面板：Git 状态、MCP 服务器、技能列表、模型与 token 用量，悬浮侧栏一览无余。",
  longDescription: "HUD 状态面板：Git 状态、MCP 服务器、技能列表、模型与 token 用量，悬浮侧栏一览无余。",
  author: { name: "a903067276-rgb", url: "https://github.com/a903067276-rgb" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/a903067276-rgb/dsh-hud",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:a903067276-rgb/dsh-hud",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/a903067276-rgb/dsh-hud/" },
  ],
};

