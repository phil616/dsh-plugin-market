import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "qjcnmd-dsh-reasoning-slider",
  name: "dsh-reasoning-slider",
  description: "Codex 风格推理等级滑块，内嵌于模型选择器，拖动切换推理档位。",
  longDescription: "Codex 风格推理等级滑块，内嵌于模型选择器，拖动切换推理档位。",
  author: { name: "qjcnmd", url: "https://github.com/qjcnmd" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/qjcnmd/dsh-reasoning-slider",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add reasoning-slider",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:qjcnmd/dsh-reasoning-slider",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/qjcnmd/dsh-reasoning-slider/" },
  ],
};

