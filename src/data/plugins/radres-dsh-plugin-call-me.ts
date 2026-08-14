import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "radres-dsh-plugin-call-me",
  name: "dsh-plugin-call-me",
  description: "通过 CallKit 打电话到你的手机：`call_me` 与 `text_me` 工具，并可在回合结束或等待审批时来电，语音回答转写后送回会话。",
  longDescription: "通过 CallKit 打电话到你的手机：`call_me` 与 `text_me` 工具，并可在回合结束或等待审批时来电，语音回答转写后送回会话。",
  author: { name: "radres", url: "https://github.com/radres" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/radres/dsh-plugin-call-me",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:radres/dsh-plugin-call-me",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/radres/dsh-plugin-call-me/" },
  ],
};

