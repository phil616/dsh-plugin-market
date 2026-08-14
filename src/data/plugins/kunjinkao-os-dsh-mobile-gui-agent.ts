import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "kunjinkao-os-dsh-mobile-gui-agent",
  name: "dsh-mobile-gui-agent",
  description: "Android GUI Agent：ADB 截图、压缩 UI hierarchy 定位、逐步动作验证、审批和 Mobile Web 视图。",
  longDescription: "Android GUI Agent：ADB 截图、压缩 UI hierarchy 定位、逐步动作验证、审批和 Mobile Web 视图。",
  author: { name: "kunjinkao-os", url: "https://github.com/kunjinkao-os" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/kunjinkao-os/dsh-mobile-gui-agent",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:kunjinkao-os/dsh-mobile-gui-agent",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/kunjinkao-os/dsh-mobile-gui-agent/" },
  ],
};

