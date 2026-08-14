import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-security-audit",
  name: "dsh-security-audit",
  description: "本机安全审计：配置/插件来源/会话/网络暴露面，只读脱敏风险报告。",
  longDescription: "本机安全审计：配置/插件来源/会话/网络暴露面，只读脱敏风险报告。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/dsh-security-audit",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/dsh-security-audit",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/dsh-security-audit/" },
  ],
};

