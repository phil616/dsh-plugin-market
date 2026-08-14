import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "flyvhidbwo-dsh-vision-proxy",
  name: "dsh-vision-proxy",
  description: "DeepSeek 大脑 + 自动识图：GUI 附加的每张图片自动经 OpenAI 兼容 VLM 转译成文字，再交给纯文本的 DeepSeek 作答——有 key 自动走快速通道（默认 qwen3.7-flash，支持百炼/智谱/OpenRouter 等任意 OpenAI 兼容端点），无 key 自动探测本地 Ollama（零配置，图片不出本机）。",
  longDescription: "DeepSeek 大脑 + 自动识图：GUI 附加的每张图片自动经 OpenAI 兼容 VLM 转译成文字，再交给纯文本的 DeepSeek 作答——有 key 自动走快速通道（默认 qwen3.7-flash，支持百炼/智谱/OpenRouter 等任意 OpenAI 兼容端点），无 key 自动探测本地 Ollama（零配置，图片不出本机）。",
  author: { name: "Flyvhidbwo", url: "https://github.com/Flyvhidbwo" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/Flyvhidbwo/dsh-vision-proxy",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-vision-proxy",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Flyvhidbwo/dsh-vision-proxy",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Flyvhidbwo/dsh-vision-proxy/" },
  ],
};

