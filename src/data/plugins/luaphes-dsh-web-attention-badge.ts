import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "luaphes-dsh-web-attention-badge",
  name: "dsh-web-attention-badge",
  description: "会话需要你时三处同时亮起：角标、标签页标题计数、按状态换色的鲸鱼 favicon。",
  longDescription: "会话需要你时三处同时亮起：角标、标签页标题计数、按状态换色的鲸鱼 favicon。",
  author: { name: "Luaphes", url: "https://github.com/Luaphes" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Luaphes/dsh-web-attention-badge",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-web-attention-badge",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Luaphes/dsh-web-attention-badge",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Luaphes/dsh-web-attention-badge/" },
  ],
};

