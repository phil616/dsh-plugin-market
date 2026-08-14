import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "william-jin-cmu-dsh-evolve",
  name: "dsh-evolve",
  description: "自进化：agent 在会话内给自己热挂载/卸载持久化插件。",
  longDescription: "自进化：agent 在会话内给自己热挂载/卸载持久化插件。",
  author: { name: "william-jin-cmu", url: "https://github.com/william-jin-cmu" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/william-jin-cmu/dsh-evolve",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:william-jin-cmu/dsh-evolve",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/william-jin-cmu/dsh-evolve/" },
  ],
};

