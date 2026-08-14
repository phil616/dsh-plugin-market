import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "xplore-lab-dsh-plugin-asmemory",
  name: "dsh-plugin-asmemory",
  description: "动作-状态时序记忆：记录类型化的状态与动作，做趋势、异常与因果关联分析。",
  longDescription: "动作-状态时序记忆：记录类型化的状态与动作，做趋势、异常与因果关联分析。",
  author: { name: "Xplore-LAB", url: "https://github.com/Xplore-LAB" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/Xplore-LAB/dsh-plugin-asmemory",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Xplore-LAB/dsh-plugin-asmemory",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Xplore-LAB/dsh-plugin-asmemory/" },
  ],
};

