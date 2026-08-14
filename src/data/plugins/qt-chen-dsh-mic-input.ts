import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "qt-chen-dsh-mic-input",
  name: "dsh-mic-input",
  description: "输入框麦克风语音输入：浏览器 Web Speech API 实时转写，自动去重/续听、智能标点，支持语言与自动发送设置。",
  longDescription: "输入框麦克风语音输入：浏览器 Web Speech API 实时转写，自动去重/续听、智能标点，支持语言与自动发送设置。",
  author: { name: "QT-Chen", url: "https://github.com/QT-Chen" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/QT-Chen/dsh-mic-input",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:QT-Chen/dsh-mic-input",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/QT-Chen/dsh-mic-input/" },
  ],
};

