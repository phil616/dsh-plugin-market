import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lhh010-dsh-minigames",
  name: "dsh-minigames",
  description: "右侧小游戏面板：18 款离线小游戏，等模型回复时的摸鱼神器。",
  longDescription: "右侧小游戏面板：18 款离线小游戏，等模型回复时的摸鱼神器。",
  author: { name: "lhh010", url: "https://github.com/lhh010" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/lhh010/dsh-minigames",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:lhh010/dsh-minigames",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/lhh010/dsh-minigames/" },
  ],
};

