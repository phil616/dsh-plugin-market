import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lesliewylie-dsh-fleet-audit",
  name: "dsh-fleet-audit",
  description: "只读的 agent 机群凭据卫生审计：检查凭据文件权限、git remote 内嵌凭据（输出脱敏）与 provider token 字面量计数；零依赖、确定性。",
  longDescription: "只读的 agent 机群凭据卫生审计：检查凭据文件权限、git remote 内嵌凭据（输出脱敏）与 provider token 字面量计数；零依赖、确定性。",
  author: { name: "LeslieWylie", url: "https://github.com/LeslieWylie" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/LeslieWylie/dsh-fleet-audit",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:LeslieWylie/dsh-fleet-audit",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/LeslieWylie/dsh-fleet-audit/" },
  ],
};

