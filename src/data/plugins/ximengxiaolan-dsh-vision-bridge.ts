import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "ximengxiaolan-dsh-vision-bridge",
  name: "dsh-vision-bridge",
  description: "输入框贴图自动识别：由 OpenAI 兼容视觉模型转成文字描述后，再交给纯文本 DeepSeek 模型处理。",
  longDescription: "输入框贴图自动识别：由 OpenAI 兼容视觉模型转成文字描述后，再交给纯文本 DeepSeek 模型处理。",
  author: { name: "ximengxiaolan", url: "https://github.com/ximengxiaolan" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/ximengxiaolan/dsh-vision-bridge",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ximengxiaolan/dsh-vision-bridge",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ximengxiaolan/dsh-vision-bridge/" },
  ],
};

