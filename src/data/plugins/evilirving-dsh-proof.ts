import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "evilirving-dsh-proof",
  name: "dsh-proof",
  description: "独立只读验收层：顶层 turn 收尾前 spawn 只读 verifier，未通过时把缺口注回主 agent。",
  longDescription: "独立只读验收层：顶层 turn 收尾前 spawn 只读 verifier，未通过时把缺口注回主 agent。",
  author: { name: "EvilIrving", url: "https://github.com/EvilIrving" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/EvilIrving/dsh-proof",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:EvilIrving/dsh-proof",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/EvilIrving/dsh-proof/" },
  ],
};

