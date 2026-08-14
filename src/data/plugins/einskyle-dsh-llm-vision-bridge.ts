import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "einskyle-dsh-llm-vision-bridge",
  name: "dsh-llm-vision-bridge",
  description: "DeepSeek 视觉桥接：注册原生 LLM provider，聊天内粘贴的图片自动由视觉模型（pi-ai/llama.cpp 上的 Qwen3-VL）转成文字描述后交给纯文本 DeepSeek 作答——图片准入、路由与会话压缩全部走 harness 原生机制，带 LRU 描述缓存与 503 重试。",
  longDescription: "DeepSeek 视觉桥接：注册原生 LLM provider，聊天内粘贴的图片自动由视觉模型（pi-ai/llama.cpp 上的 Qwen3-VL）转成文字描述后交给纯文本 DeepSeek 作答——图片准入、路由与会话压缩全部走 harness 原生机制，带 LRU 描述缓存与 503 重试。",
  author: { name: "Einskyle", url: "https://github.com/Einskyle" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/Einskyle/dsh-llm-vision-bridge",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-llm-vision-bridge",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Einskyle/dsh-llm-vision-bridge",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Einskyle/dsh-llm-vision-bridge/" },
  ],
};

