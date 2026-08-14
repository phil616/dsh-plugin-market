import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "thu-maic-dsh-openmaic",
  name: "dsh-openmaic",
  description: "OpenMAIC 教学：课堂、幻灯片、交互组件与苏格拉底式教学。",
  longDescription: "OpenMAIC 教学：课堂、幻灯片、交互组件与苏格拉底式教学。",
  author: { name: "THU-MAIC", url: "https://github.com/THU-MAIC" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/THU-MAIC/dsh-openmaic",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:THU-MAIC/dsh-openmaic",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/THU-MAIC/dsh-openmaic/" },
  ],
};

