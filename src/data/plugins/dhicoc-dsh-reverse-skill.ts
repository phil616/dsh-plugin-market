import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "dhicoc-dsh-reverse-skill",
  name: "dsh-reverse-skill",
  description: "完整 reverse-skill（85 个 SKILL.md）的 DeepSeek Harness 插件：逆向工程、授权渗透测试与安全研究的技能路由包。",
  longDescription: "完整 reverse-skill（85 个 SKILL.md）的 DeepSeek Harness 插件：逆向工程、授权渗透测试与安全研究的技能路由包。",
  author: { name: "dhicoc", url: "https://github.com/dhicoc" },
  tags: ["Skill"],
  category: "tool",
  repository: "https://github.com/dhicoc/dsh-reverse-skill",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:dhicoc/dsh-reverse-skill",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/dhicoc/dsh-reverse-skill/" },
  ],
};

