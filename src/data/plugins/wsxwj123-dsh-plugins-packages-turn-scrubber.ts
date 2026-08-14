import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "wsxwj123-dsh-plugins-packages-turn-scrubber",
  name: "dsh-plugins#turn-scrubber",
  description: "右侧紧凑回合刻度条，悬停显示回合摘要，点击跳转到对应用户回合。",
  longDescription: "右侧紧凑回合刻度条，悬停显示回合摘要，点击跳转到对应用户回合。",
  author: { name: "wsxwj123", url: "https://github.com/wsxwj123" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/wsxwj123/dsh-plugins/tree/main/packages/turn-scrubber",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:wsxwj123/dsh-plugins#path:/packages/turn-scrubber",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/wsxwj123/dsh-plugins--packages-turn-scrubber/" },
  ],
};

